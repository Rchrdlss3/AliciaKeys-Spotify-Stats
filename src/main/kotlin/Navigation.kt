import components.ThemeSwitchComponent
import react.FC
import react.Props
import web.cssom.ClassName
import mui.material.Box
import mui.material.styles.TypographyVariant
import mui.material.Typography
import react.router.Outlet
import react.router.dom.NavLink
import react.StateSetter
external interface NavigationLayoutProps : Props {
    var theme: String
    var setTheme: StateSetter<String>
}

val NavigationLayout = FC<NavigationLayoutProps> {
    Box {
        className = ClassName("navigation-links")
        for (link in NavigationLinks.entries) {
            NavLink {
                to = link.linkTo
                classNameFn = {
                    when(it.isActive) {
                        true -> "active"
                        false -> ""
                    }
                }
                Typography {
                    variant = TypographyVariant.button
                    +link.linkName
                }
            }
        }
        ThemeSwitchComponent {

        }
    }
    Outlet{}
}