import kotlinx.serialization.Serializable

@Serializable
data class AlbumDate (
    val isoString: String,
    val precision: String
)