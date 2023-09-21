package components

import js.intl.NumberFormat
import react.FC
import react.Props
import mui.material.TableRow
import mui.material.TableCell
import mui.system.sx
import web.cssom.rgb
import kotlin.js.Date

external interface SpotifyTableRowProps: Props {
    var rowName: String
    var rowPlayCount: String
    var rowTrackNumber: Int
    var rowURI: String
}
val date = Date()

val SpotifyTableRowComponent = FC<SpotifyTableRowProps> {props ->
    TableRow {
        sx{
            nthOfType("even"){
                backgroundColor = rgb(0,0,0,0.05)
            }
        }
        TableCell {
            +props.rowName
        }
        TableCell {
            +NumberFormat().format(props.rowPlayCount.toInt())
//            +date.toLocaleString(emptyArray(), dateLocaleOptions { formatMatcher = props.rowPlayCount })
        }
        TableCell {
            +"${props.rowTrackNumber}"
        }
        TableCell {
            +props.rowURI
        }
    }
}