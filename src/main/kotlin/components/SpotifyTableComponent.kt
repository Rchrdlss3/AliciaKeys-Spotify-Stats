package components

import TrackItem
import react.FC
import react.Props
import mui.material.Box
import mui.material.Table
import mui.material.TableHead
import mui.material.TableBody
import mui.material.TableRow
import mui.material.TableCell
import mui.system.sx
import web.cssom.pct

external interface SpotifyTableProps:Props {
    var songTracks: Array<TrackItem>
}
val SpotifyTableComponent = FC<SpotifyTableProps> { props ->
    Table {
        TableHead {
            TableRow {
                for (header in SpotifyTableHeaders.entries) {
                    TableCell {
                        +header.headerName
                    }
                }
            }
        }
        TableBody {
            for (song in props.songTracks) {
                SpotifyTableRowComponent {
                    rowName = song.track.name
                    rowPlayCount = song.track.playcount
                    rowURI = song.track.uri
                    rowTrackNumber = song.track.trackNumber
                }
            }
        }
    }
}