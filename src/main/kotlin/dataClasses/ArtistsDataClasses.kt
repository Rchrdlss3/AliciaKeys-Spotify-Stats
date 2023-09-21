import kotlinx.serialization.Serializable

@Serializable
data class ArtistProfile(
    val name: String
)
@Serializable
data class ArtistsImageSources(
    val url: String,
    val width: Int,
    val height: Int
)
@Serializable
data class AvatarImage(
    val sources: Array<ArtistsImageSources>
)
@Serializable
data class ArtistVisuals(
    val avatarImage: AvatarImage
)

@Serializable
data class ArtistSharingInfo(
    val shareUrl: String?
)
@Serializable
data class ArtistItems(
    val id: String,
    val uri: String,
    val profile: ArtistProfile,
    val visuals: ArtistVisuals,
    val sharingInfo: ArtistSharingInfo,
)
@Serializable
data class Artists(
    val totalCount: Int,
    val items: Array<ArtistItems>
)