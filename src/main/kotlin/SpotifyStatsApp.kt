import react.FC
import react.Props
import react.useState
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import web.cssom.ClassName
import mui.material.Box
import react.useEffectOnce


// Alicia Keys Spotify ID 3DiDSECUqqY1AuBP8qtaIa

val mainScope = CoroutineScope(Dispatchers.Main)

val SpotifyStatsApp = FC<Props> {
    Navigation {}
    Box {
        className = ClassName("webpage-wrapper")
        val (albumImages, setAlbumImages) = useState(ReturnedAlbumImagesData())
        val (albumState, setAlbumState) = useState(ReturnedData())
        useEffectOnce {
            mainScope.launch {
                setAlbumImages(getAlbumImages())
            }
        }
        SpotifyStats{
            albumImagesChild = albumImages
            setAlbumImagesChild = setAlbumImages
            albumStateChild = albumState
            setAlbumStateChild = setAlbumState
        }
        }
    }