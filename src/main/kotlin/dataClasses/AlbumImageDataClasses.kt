import kotlinx.serialization.Serializable


@Serializable
data class AlbumImageData(
    val id: Int,
    val img_path: String,
    val album: String,
    val hex: String = "#FFFFFF"
)
@Serializable
data class ReturnedAlbumImagesData(
    val data: Array<AlbumImageData>? = null
)