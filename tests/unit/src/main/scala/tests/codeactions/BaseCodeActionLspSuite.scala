package tests.codeactions

import scala.concurrent.Future

import scala.meta.internal.metals.MetalsEnrichments._
import scala.meta.internal.metals.{BuildInfo => V}

import munit.Location
import munit.TestOptions
import tests.BaseLspSuite

abstract class BaseCodeActionLspSuite(suiteName: String)
    extends BaseLspSuite(suiteName) {

  protected val scalaVersion: String = V.scala213

  def checkNoAction(
      name: TestOptions,
      input: String,
      scalafixConf: String = "",
      scalacOptions: List[String] = Nil
  )(implicit loc: Location): Unit = {
    val fileContent = input.replace("<<", "").replace(">>", "")
    check(
      name,
      input,
      "",
      fileContent,
      scalafixConf = scalafixConf,
      scalacOptions = scalacOptions
    )
  }

  def check(
      name: TestOptions,
      input: String,
      expectedActions: String,
      expectedCode: String,
      selectedActionIndex: Int = 0,
      expectNoDiagnostics: Boolean = true,
      kind: List[String] = Nil,
      scalafixConf: String = "",
      scalacOptions: List[String] = Nil,
      configuration: => Option[String] = None,
      scalaVersion: String = scalaVersion,
      renamePath: Option[String] = None,
      extraOperations: => Unit = (),
      fileName: String = "A.scala",
      changeFile: String => String = identity,
      expectError: Boolean = false
  )(implicit loc: Location): Unit = {
    val scalacOptionsJson =
      if (scalacOptions.nonEmpty)
        s""""scalacOptions": ["${scalacOptions.mkString("\",\"")}"],"""
      else ""
    val path = s"a/src/main/scala/a/$fileName"
    val newPath = renamePath.getOrElse(path)
    val fileContent = input.replace("<<", "").replace(">>", "")
    val actualExpectedCode =
      if (renamePath.nonEmpty) fileContent else expectedCode

    test(name) {
      cleanWorkspace()
      for {
        _ <- initialize(
          s"""/metals.json
             |{"a":{$scalacOptionsJson "scalaVersion" : "$scalaVersion"}}
             |$scalafixConf
             |/$path
             |$fileContent""".stripMargin
        )
        _ <- server.didOpen(path)
        _ <- {
          configuration match {
            case Some(conf) => server.didChangeConfiguration(conf)
            case None => Future {}
          }
        }
        _ <- server.didChange(path)(txt => changeFile(txt))
        codeActions <-
          server
            .assertCodeAction(
              path,
              changeFile(input),
              expectedActions,
              kind
            )
            .recover {
              case _: Throwable if expectError => Nil
            }
        _ <- client.applyCodeAction(selectedActionIndex, codeActions, server)
        _ <- server.didSave(newPath) { _ =>
          if (newPath != path)
            server.toPath(newPath).readText
          else
            server.bufferContents(newPath)
        }
        _ = assertNoDiff(server.bufferContents(newPath), actualExpectedCode)
        _ = if (expectNoDiagnostics) assertNoDiagnostics() else ()
        _ = extraOperations
      } yield ()
    }
  }

}
