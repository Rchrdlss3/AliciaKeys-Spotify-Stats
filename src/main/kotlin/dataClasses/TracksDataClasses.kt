import kotlinx.serialization.Serializable

@Serializable
data class Profile(
    val name: String
)

@Serializable
data class ArtistItem(
    val uri: String,
    val profile: Profile
)
@Serializable
data class TrackArtists(
    val items: Array<ArtistItem>
)
@Serializable
data class TrackPlayability(
    val playable: Boolean
)
@Serializable
data class Duration (
    val totalMilliseconds: Int
)
@Serializable
data class ContentRating(
    val label: String
)

@Serializable
data class Track (
    val saved: Boolean,
    val uri: String,
    val name: String,
    val playcount: String,
    val discNumber: Int,
    val trackNumber: Int,
    val contentRating: ContentRating,
    val relinkingInformation: String?,
    val duration: Duration,
    val playability: TrackPlayability,
    val artists: TrackArtists
)
@Serializable
data class TrackItem(
    val uid: String,
    val track: Track
)

@Serializable
data class Tracks(
    val totalCount: Int,
    val items: Array<TrackItem>
)