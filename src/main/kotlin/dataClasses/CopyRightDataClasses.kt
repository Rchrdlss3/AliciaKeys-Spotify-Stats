import kotlinx.serialization.Serializable

@Serializable
data class CopyRightItem(
    val type: String,
    val text: String
)
@Serializable
data class CopyRight (
    val totalCount: Int,
    val items: Array<CopyRightItem>
)