import kotlinx.serialization.Serializable

@Serializable
data class ColorRaw (
    val hex: String
)

@Serializable
data class ColorLight (
    val hex: String
)

@Serializable
data class ColorDark (
    val hex: String
)

@Serializable
data class ExtractedColors(
    val colorRaw: ColorRaw,
    val colorLight: ColorLight,
    val colorDark: ColorDark
)

@Serializable
data class Sources(
    val url: String,
    val width: Int,
    val height: Int
)
@Serializable
data class CoverArt(
    val extractedColors: ExtractedColors,
    val sources: Array<Sources>
)