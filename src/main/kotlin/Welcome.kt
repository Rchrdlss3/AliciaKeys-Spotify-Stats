import csstype.ClassName
import react.FC
import react.Props
import react.useState
import react.useEffectOnce
import react.dom.html.ReactHTML.div
import react.dom.html.ReactHTML.button
import react.dom.html.ReactHTML.h1
import react.dom.html.ReactHTML.h2
import react.dom.html.ReactHTML.li
import kotlinx.browser.window
import kotlinx.coroutines.*
import kotlinx.serialization.decodeFromString
import kotlinx.serialization.json.*

// Alicia Keys Spotify ID 3DiDSECUqqY1AuBP8qtaIa

val mainScope = MainScope()
suspend fun fetchAlbum(albumId: String): ReturnedData {
    val response = window
        .fetch("http://localhost:8081/albumPlayCount?albumid=$albumId")
        .await()
        .text()
        .await()
    return Json.decodeFromString(response)
}
val Welcome = FC<Props> {
    div {
        className = ClassName("webpage-wrapper")
        val (albumState,setAlbumState) = useState(ReturnedData())
        Navigation {}
        SpotifyStats {
            albumStateChild = albumState
            setAlbumStateChild = setAlbumState
        }

        useEffectOnce {
            mainScope.launch {
                setAlbumState(fetchAlbum("76vpmS3ZCGm4hN8QtbnedX"))
            }
        }
div {
    className = ClassName("album-statistics-wrapper")
    div {
        h1 {
            albumState.data?.let{
                +it.name
            }
        }
    }
    div {
        albumState.data?.let{
            var albumTotalStreams = 0
            for (track in it.discs[0].tracks) {
                albumTotalStreams = albumTotalStreams + track.playcount
                h2{
                    +track.name
                }
                li {
                    + """Playcount: ${track.playcount}  
                         Popularity: ${track.popularity}"""
                }
            }
            h2 {
                +"Total Streams: $albumTotalStreams"
            }
        }
    }
}

    }
}