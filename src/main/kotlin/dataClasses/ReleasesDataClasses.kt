import kotlinx.serialization.Serializable


@Serializable
data class Items (
    val uri: String,
    val name: String
)
@Serializable
data class Releases(
    val totalCount: Int,
    val items: Array<Items>
)