import components.HomeComponent
import components.PageErrorComponent
import js.core.jso
import react.router.RouterProvider
import react.router.dom.createBrowserRouter
import react.FC
import react.Props


val AppRoutes = FC<Props> {
    RouterProvider {
        router = browserRoutes
    }
}

private val browserRoutes = createBrowserRouter(
    routes = arrayOf(
        jso{
            path = "/"
            Component = HomeComponent
        },
        jso {
            path = "/Spotify-Stats"
            Component = SpotifyStatsApp
        },
        jso {
            path = "*"
            Component = PageErrorComponent
        }
    )
)