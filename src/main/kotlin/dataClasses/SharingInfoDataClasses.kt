import kotlinx.serialization.Serializable

@Serializable
data class SharingInfo(
    val shareUrl: String,
    val shareId: String
)