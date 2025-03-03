package scala.meta.internal.pc

import java.{util as ju}

import scala.util.control.NonFatal

import scala.meta.internal.jdk.CollectionConverters.*
import scala.meta.internal.mtags.MtagsEnrichments.*
import scala.meta.internal.pc.printer.MetalsPrinter
import scala.meta.pc.OffsetParams
import scala.meta.pc.ParentSymbols
import scala.meta.pc.SymbolDocumentation
import scala.meta.pc.SymbolSearch

import dotty.tools.dotc.ast.tpd.*
import dotty.tools.dotc.core.Contexts.*
import dotty.tools.dotc.core.Flags.*
import dotty.tools.dotc.core.NameKinds.*
import dotty.tools.dotc.core.NameOps.*
import dotty.tools.dotc.core.Names.*
import dotty.tools.dotc.core.SymDenotations.*
import dotty.tools.dotc.core.Symbols.*
import dotty.tools.dotc.core.Types.*
import dotty.tools.dotc.interactive.Interactive
import dotty.tools.dotc.interactive.InteractiveDriver
import dotty.tools.dotc.interactive.SourceTree
import dotty.tools.dotc.util.ParsedComment
import dotty.tools.dotc.util.SourcePosition
import org.eclipse.lsp4j.Hover

object HoverProvider:

  def hover(
      params: OffsetParams,
      driver: InteractiveDriver,
      search: SymbolSearch
  ): ju.Optional[Hover] =
    val uri = params.uri
    val sourceFile = CompilerInterfaces.toSource(params.uri, params.text)
    driver.run(uri, sourceFile)

    given ctx: Context = driver.currentCtx
    val pos = driver.sourcePosition(params)
    val trees = driver.openedTrees(uri)
    val source = driver.openedFiles.get(uri)
    val indexedContext = IndexedContext(ctx)

    def typeFromPath(path: List[Tree]) =
      if path.isEmpty then NoType else path.head.tpe

    val path = Interactive.pathTo(trees, pos)
    val tp = typeFromPath(path)
    val tpw = tp.widenTermRefExpr
    // For expression we need to find all enclosing applies to get the exact generic type
    val enclosing = expandRangeToEnclosingApply(path, pos)

    if tp.isError || tpw == NoType || tpw.isError || path.isEmpty
    then ju.Optional.empty()
    else
      val skipCheckOnName =
        !pos.isPoint // don't check isHoveringOnName for RangeHover
      MetalsInteractive.enclosingSymbolsWithExpressionType(
        enclosing,
        pos,
        indexedContext,
        skipCheckOnName
      ) match
        case Nil =>
          ju.Optional.empty()
        case symbolTpes @ ((symbol, tpe) :: _) =>
          val exprTpw = tpe.widenTermRefExpr
          val printerContext =
            driver.compilationUnits.get(uri) match
              case Some(unit) =>
                val newctx =
                  ctx.fresh.setCompilationUnit(unit)
                MetalsInteractive.contextOfPath(enclosing)(using newctx)
              case None => ctx
          val printer = MetalsPrinter.standard(IndexedContext(printerContext))

          val hoverString =
            tpw match
              // https://github.com/lampepfl/dotty/issues/8891
              case tpw: ImportType =>
                printer.hoverSymbol(symbol, symbol.paramRef)
              case _ =>
                val (tpe, sym) =
                  if symbol.isType then (symbol.typeRef, symbol)
                  else seenFrom(enclosing.head, symbol)

                val finalTpe =
                  if tpe != NoType then tpe
                  else tpw

                printer.hoverSymbol(sym, finalTpe)
            end match
          end hoverString

          val docString = symbolTpes
            .flatMap(symTpe => symbolDocumentation(symTpe._1, search))
            .map(_.docstring)
            .mkString("\n")
          printer.expressionType(exprTpw) match
            case Some(expressionType) =>
              val forceExpressionType =
                !pos.span.isZeroExtent || (
                  !hoverString.endsWith(expressionType) &&
                    !symbol.isType &&
                    !symbol.is(Module) &&
                    !symbol.flags.isAllOf(EnumCase)
                )
              val content = HoverMarkup(
                expressionType,
                hoverString,
                docString,
                forceExpressionType
              )
              ju.Optional.of(new Hover(content.toMarkupContent))
            case _ =>
              ju.Optional.empty
          end match
      end match
    end if
  end hover

  extension (pos: SourcePosition)
    private def isPoint: Boolean = pos.start == pos.end

  private def qual(tree: Tree): Tree =
    tree match
      case Apply(q, _) => qual(q)
      case TypeApply(q, _) => qual(q)
      case AppliedTypeTree(q, _) => qual(q)
      case Select(q, _) => q
      case _ => tree

  private def seenFrom(tree: Tree, sym: Symbol)(using Context): (Type, Symbol) =
    try
      val pre = qual(tree)
      val denot = sym.denot.asSeenFrom(pre.tpe.widenTermRefExpr)
      (denot.info, sym.withUpdatedTpe(denot.info))
    catch case NonFatal(e) => (sym.info, sym)

  private def expandRangeToEnclosingApply(
      path: List[Tree],
      pos: SourcePosition
  )(using Context): List[Tree] =
    def tryTail(enclosing: List[Tree]): Option[List[Tree]] =
      enclosing match
        case Nil => None
        case head :: tail =>
          head match
            case t: GenericApply
                if t.fun.srcPos.span.contains(pos.span) && !t.tpe.isErroneous =>
              tryTail(tail).orElse(Some(enclosing))
            case New(_) =>
              tail match
                case Nil => None
                case Select(_, _) :: next =>
                  tryTail(next)
                case _ =>
                  None
            case _ =>
              None
    path match
      case head :: tail =>
        tryTail(tail).getOrElse(path)
      case _ =>
        List(EmptyTree)
  end expandRangeToEnclosingApply

  private def symbolDocumentation(symbol: Symbol, search: SymbolSearch)(using
      Context
  ): Option[SymbolDocumentation] =
    def toSemanticdbSymbol(symbol: Symbol) =
      SemanticdbSymbols.symbolName(
        if !symbol.is(JavaDefined) && symbol.isPrimaryConstructor then
          symbol.owner
        else symbol
      )
    val sym = toSemanticdbSymbol(symbol)
    // symbol.allOverriddenSymbols
    val documentation = search.documentation(
      sym,
      new ParentSymbols:
        def parents(): java.util.List[String] =
          symbol.allOverriddenSymbols.map(toSemanticdbSymbol).toList.asJava
    )
    if documentation.isPresent then Some(documentation.get())
    else None
  end symbolDocumentation
end HoverProvider
