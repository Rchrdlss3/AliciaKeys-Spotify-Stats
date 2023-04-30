import csstype.ClassName
import kotlinx.coroutines.launch
import react.FC
import react.Props
import react.StateSetter
import react.dom.html.ReactHTML
import react.dom.html.ReactHTML.img

external interface SpotifyStatsProps: Props {
    var albumStateChild: ReturnedData
    var setAlbumStateChild : StateSetter<ReturnedData>
}
val SpotifyStats = FC<SpotifyStatsProps> {props ->
    ReactHTML.div {
        className = ClassName("albumButton-wrapper")
        for (a in AlbumEnumClass.values()) {
            img {
                onClick = {
                    mainScope.launch {
                        props.setAlbumStateChild(fetchAlbum(a.albumId))
                        console.log(props.albumStateChild)
                    }
                }
                className = ClassName("albumButton")
                src = a.albumImagePath
            }
        }
    }
    }