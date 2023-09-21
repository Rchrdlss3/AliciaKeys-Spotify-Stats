package components

import ObtainTotalStreams
import TrackItem
import js.intl.NumberFormat
import react.FC
import react.Props
import mui.material.Box
import mui.material.Typography
import mui.material.styles.TypographyVariant
import react.useState
import web.cssom.ClassName

external interface SpotifyStatsHeaderProps: Props {
    var albumTracks: Array<TrackItem>
    var albumName: String
    var totalStreams: String
}
val SpotifyStatsHeader = FC<SpotifyStatsHeaderProps> {props ->
    Box {
        className = ClassName("album-statistics-title")
        Typography {
            variant = TypographyVariant.h4
            +props.albumName
        }
        Typography {
            variant = TypographyVariant.h5
            +NumberFormat().format(props.totalStreams.toInt())
        }
//        props.albumStateChild.data?.let {
//            Typography {
//                variant = TypographyVariant.h4
//                +it.data.albumUnion.name
//            }
//            +totalStreams.toString()
//        }
    }
}