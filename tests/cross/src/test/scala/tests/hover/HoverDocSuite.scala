package tests.hover

import tests.pc.BaseHoverSuite

class HoverDocSuite extends BaseHoverSuite {
  override def requiresJdkSources: Boolean = true

  override protected def requiresScalaLibrarySources: Boolean = true

  check(
    "doc",
    """object a {
      |  <<java.util.Collections.empty@@List[Int]>>
      |}
      |""".stripMargin,
    // Assert that the docstring is extracted.
    """|**Expression type**:
       |```scala
       |java.util.List[Int]
       |```
       |**Symbol signature**:
       |```scala
       |final def emptyList[T](): java.util.List[T]
       |```
       |Returns an empty list (immutable).  This list is serializable.
       |
       |This example illustrates the type-safe way to obtain an empty list:
       |
       |```
       |List<String> s = Collections.emptyList();
       |```
       |""".stripMargin,
    compat = Map(
      "2.13" ->
        """|**Expression type**:
           |```scala
           |java.util.List[Int]
           |```
           |**Symbol signature**:
           |```scala
           |final def emptyList[T <: Object](): java.util.List[T]
           |```
           |Returns an empty list (immutable).  This list is serializable.
           |
           |This example illustrates the type-safe way to obtain an empty list:
           |
           |```
           |List<String> s = Collections.emptyList();
           |```
           |""".stripMargin,
      "3" ->
        """|**Expression type**:
           |```scala
           |java.util.List[Int]
           |```
           |**Symbol signature**:
           |```scala
           |def emptyList[T]: java.util.List[T]
           |```
           |Returns an empty list (immutable).  This list is serializable.
           |
           |This example illustrates the type-safe way to obtain an empty list:
           |
           |```
           |List<String> s = Collections.emptyList();
           |```
           |""".stripMargin
    )
  )

  check(
    "doc-parent",
    """object a {
      |  <<List(12).hea@@dOption>>
      |}
      |""".stripMargin,
    // Assert that the docstring is extracted.
    """|```scala
       |def headOption: Option[Int]
       |```
       |Optionally selects the first element.
       | $orderDependent
       |
       |**Returns:** the first element of this traversable collection if it is nonempty,
       |          `None` if it is empty.
       |""".stripMargin,
    compat = Map(
      "2.13" ->
        """|```scala
           |override def headOption: Option[Int]
           |```
           |Optionally selects the first element.
           | Note: might return different results for different runs, unless the underlying collection type is ordered.
           |
           |**Returns:** the first element of this iterable collection if it is nonempty,
           |          `None` if it is empty.
           |""".stripMargin,
      "3" ->
        """|```scala
           |def headOption: Option[Int]
           |```
           |Optionally selects the first element.
           | Note: might return different results for different runs, unless the underlying collection type is ordered.
           |
           |**Returns:** the first element of this iterable collection if it is nonempty,
           |          `None` if it is empty.
           |""".stripMargin
    )
  )

}
