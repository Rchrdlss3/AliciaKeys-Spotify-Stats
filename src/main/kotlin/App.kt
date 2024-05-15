import components.HomeComponent
import components.PageErrorComponent
import js.objects.jso
import react.FC
import react.Props
import react.create
import react.router.*
import react.router.dom.createBrowserRouter
import react.useState
private val browserRoutes = createBrowserRouter(
    routes = arrayOf(
        jso{
            path = "/"
            element = NavigationLayout.create()
            children =
                arrayOf (
                jso {
                    path = "*"
                    element = PageErrorComponent.create()
                },
                    jso {
                        path = "/Spotify-Stats"
                    element = SpotifyStatsPage.create()
                    },
                    jso {
                        path = "/home"
                        Component = HomeComponent
                    }
            )
        }
    )
)
val App = FC<Props> {
    val (themeParent,setThemeParent) = useState("")
    RouterProvider {
        router = createBrowserRouter(
            routes = arrayOf(
                jso{
                    path = "/"
                    element = NavigationLayout.create{
                        theme = themeParent
                        setTheme = setThemeParent
                    }
                    children =
                        arrayOf (
                            jso {
                                path = "*"
                                element = PageErrorComponent.create()
                            },
                            jso {
                                path = "/Spotify-Stats"
                                element = SpotifyStatsPage.create()
                            },
                            jso {
                                path = "/home"
                                Component = HomeComponent
                            }
                        )
                }
            )
        )
    }
}
