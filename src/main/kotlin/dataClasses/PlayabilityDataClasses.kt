import kotlinx.serialization.Serializable

@Serializable
data class Playability(
    val playable: Boolean,
    val reason: String
)