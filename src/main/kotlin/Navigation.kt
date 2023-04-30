import react.FC
import react.Props
import react.dom.html.ReactHTML.li
import react.dom.html.ReactHTML.ul
import react.dom.html.ReactHTML.div
import csstype.ClassName

val Navigation = FC<Props> {
    div {
        className = ClassName("navigation-links")
        ul {
            for (link in NavigationLinks.values()) {
                li {
                    +link.linkName
                }
            }
        }
    }
}