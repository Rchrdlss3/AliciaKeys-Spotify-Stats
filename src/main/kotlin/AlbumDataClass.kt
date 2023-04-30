import kotlinx.serialization.Serializable

@Serializable
data class AlbumCover (
    var uri : String
)
@Serializable
data class Image (
    var uri: String
)
@Serializable
data class DiscArtists (
    var name: String,
    var uri: String,
    var image: Image
)
@Serializable
data class Artists (
    var name: String,
    var uri: String
)
@Serializable
data class Tracks (
    var uri: String,
    var playcount: Int,
    var name: String,
    var popularity: Int,
    var number: Int,
    var duration: Int,
    var explicit: Boolean,
    var playable: Boolean,
    var artists: Array<DiscArtists>
)
@Serializable
data class Discs (
    var number: Int,
    var name: String,
    var tracks: Array<Tracks>
)

@Serializable
data class Releases (
    var uri : String,
    var name: String,
    var cover: AlbumCover,
    var year: Int,
    var track_count: Int,
    var month: Int,
    var day: Int
)
@Serializable
data class Related(
    var releases: Array<Releases>
)
@Serializable
data class AlbumData (
    var uri: String,
    var name: String,
    var cover: AlbumCover,
    var year: Int,
    var track_count: Int,
    var discs: Array<Discs>,
    var copyrights: Array<String>,
    var artists: Array<Artists>,
    var related: Related,
    var month: Int,
    var day: Int,
    var type: String,
    var label: String
)

@Serializable
data class ReturnedData (
    var success: Boolean? = null,
    var data: AlbumData? = null
)