import kotlinx.serialization.Serializable

@Serializable
data class PopularDate(
    val year: Int
)
@Serializable
data class CoverArtItem (
    val url: String,
    val width: Int,
    val height: Int
)
@Serializable
data class MoreAlbumsCoverArt(
    val sources: Array<CoverArtItem>
)
@Serializable
data class MoreAlbumsPlayability(
    val playable: Boolean,
    val reason: String
)
@Serializable
data class PopularItemSharingInfo(
    val shareId: String,
    val shareUrl: String,
)
@Serializable
data class popularItem(
    val id: String,
    val uri: String,
    val name: String,
    val date: PopularDate,
    val coverArt: MoreAlbumsCoverArt,
    val playability: MoreAlbumsPlayability,
    val sharingInfo: PopularItemSharingInfo,
    val type: String
)
@Serializable
data class PopularReleasesAlbums(
    val items: Array<popularItem>
)
@Serializable
data class Discography(
    val popularReleasesAlbums: PopularReleasesAlbums
)
@Serializable
data class MoreAlbumsByArtistItem(
    val discography: Discography
)
@Serializable
data class MoreAlbumsByArtist(
    val items: Array<MoreAlbumsByArtistItem>
)