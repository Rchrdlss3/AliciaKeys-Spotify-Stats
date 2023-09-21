import kotlinx.serialization.Serializable

@Serializable
data class DiscTrack (
    val totalCount: Int
)
@Serializable
data class DiscItem(
    val number: Int,
    val tracks: DiscTrack
)

@Serializable
data class Discs (
    val totalCount: Int,
    val items: Array<DiscItem>
)