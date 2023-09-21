import kotlinx.serialization.Serializable

@Serializable
data class AlbumUnion (
    val __typename: String,
    val uri: String,
    val name: String,
    val artists: Artists,
    val coverArt: CoverArt,
    val discs: Discs,
    val releases: Releases,
    val type: String,
    val date: AlbumDate,
    val playability: Playability,
    val label: String,
    val copyright: CopyRight,
    val courtesyLine: String,
    val saved: Boolean,
    val sharingInfo: SharingInfo,
    val tracks: Tracks,
    val moreAlbumsByArtist: MoreAlbumsByArtist
)
//@Serializable
//data class Extensions(
//    val items: String?
//)
@Serializable
data class AlbumUnionData(
    val albumUnion: AlbumUnion
)
@Serializable
data class AlbumData (
    val data: AlbumUnionData,
//    val extensions: dynamic
)

@Serializable
data class ReturnedData (
    var success: Boolean? = null,
    var data: AlbumData? = null
)
