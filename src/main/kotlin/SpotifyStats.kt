import components.SpotifyStatsHeader
import components.SpotifyTableComponent
import kotlinx.coroutines.launch
import react.dom.html.ReactHTML.img
import mui.material.Box
import mui.material.Typography
import mui.material.styles.TypographyVariant
import react.*
import web.cssom.ClassName

external interface SpotifyStatsProps: Props {
    var albumImagesChild: ReturnedAlbumImagesData
    var setAlbumImagesChild: StateSetter<ReturnedAlbumImagesData>
    var albumStateChild: ReturnedData
    var setAlbumStateChild : StateSetter<ReturnedData>
}
val SpotifyStats = FC<SpotifyStatsProps> { props ->
    val (totalStreams,setTotalStreams) = useState("")
    useEffectOnce {
        mainScope.launch{
            props.setAlbumImagesChild(getAlbumImages())
        }
    }
    Box {
        className = ClassName("albumCard-wrapper")
        for (a in AlbumEnumClass.entries) {
            Box {
                    Box {
                        className = ClassName("albumCard")
                        img {
                            onClick = {
                                mainScope.launch {
                                    props.setAlbumStateChild(fetchAlbum(a.albumId))
                                }
                            }
                            props.albumImagesChild.data?.let {
                                src = it[a.ordinal].album
                            }
                        }
                    }
            }
        }
    }
    Box {
        className = ClassName("album-statistics-wrapper")
        Box {
            className = ClassName("album-statistics-info")
            props.albumStateChild.data?.let {
                SpotifyStatsHeader {
                    albumTracks = it.data.albumUnion.tracks.items
                    albumName = it.data.albumUnion.name
                    this.totalStreams = ObtainTotalStreams(it.data.albumUnion.tracks.items)
                }
                SpotifyTableComponent {
                    songTracks = it.data.albumUnion.tracks.items
                }
            }
        }
    }
}