import csstype.ClassName
import react.FC
import react.Props
import react.useState
import react.dom.html.ReactHTML.div
import react.dom.html.ReactHTML.h1
import react.dom.html.ReactHTML.h2
import react.dom.html.ReactHTML.li
import kotlinx.browser.window
import kotlinx.coroutines.*
import kotlinx.serialization.decodeFromString
import kotlinx.serialization.json.*
import npm.parse
import npm.DeviceDetector
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
    val deviceDetector = DeviceDetector()
    console.log(deviceDetector,parse(window.navigator.userAgent))
    // WHATEVER USESTATE IS USING,DELCARE IT WITH A VARIABLE FIRST INSTEAD OF RETURNED DATA val songsInAMinor = fetchAlbum ()
    fun fillSite() {
        console.log("Function called")
    }
    div {
        className = ClassName("webpage-wrapper")
        val (albumState, setAlbumState) = useState(ReturnedData())
        
        fillSite()

        Navigation {}
        SpotifyStats {
            albumStateChild = albumState
            setAlbumStateChild = setAlbumState
        }


        div {
            className = ClassName("album-statistics-wrapper")
            div {
                className = ClassName("album-statistics-title")
                    albumState.data?.let {
                        h1{
                            +it.name
                        }
                    }
            }
            div {
                className = ClassName("album-statistics-info")
                albumState.data?.let {
                    var albumTotalStreams = 0
                    for (track in it.discs[0].tracks) {
                        albumTotalStreams += track.playcount
                        div {
                            className = ClassName("album-statistics-row")
                            h2 {
                                +track.name
                            }
                            li {
                                +"""Playcount: ${track.playcount}  
                         Popularity: ${track.popularity}"""
                            }
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