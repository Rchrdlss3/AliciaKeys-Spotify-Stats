package dataClasses.styles

data class Font(
    val primary: String = "",
    val secondary: String = "",
    val link: String = "",
    val deactiveLink: String = "",
    val activeLink: String = ""
)
data class StylesClass (
    val primary: String = "",
    val secondary: String = "",
    val font: Font = Font()
)

val lightTheme = StylesClass()
val darkTheme = StylesClass()