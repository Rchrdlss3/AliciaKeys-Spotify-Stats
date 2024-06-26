package components

import helper.ConstantLinks
import mui.material.Box
import mui.material.styles.TypographyVariant
import react.FC
import react.Props
import react.dom.html.ReactHTML.h1
import react.dom.html.ReactHTML.h2
import react.dom.html.ReactHTML.img
import web.cssom.ClassName
import mui.material.Typography
import mui.system.sx
import react.dom.html.ReactHTML.a
import web.cssom.rgb
import web.window.WindowTarget

val HomeComponent = FC<Props> {
        Box {
            className = ClassName("home-image-wrapper")
            Box {
                className = ClassName("home-message")
                h1 {
                    +"Welcome to LellowHub"
                }
            }
            Box {
                className = ClassName("right-home-wrapper")
                h2 {
                    +"Join Our Community"
                }
                Typography {
                    sx {
                        color = rgb(255,0,0)
                    }
                    variant = TypographyVariant.body2
                    +"Error message"
                }
                Box {
                    className = ClassName("right-home-links")
                    a {
                        href = ConstantLinks.CLUB_KEYS_LINK.link
                        target = WindowTarget._blank
                        img {
                            src = "https://rchrdlss3.github.io/AliciaKeysAPI/HomeLinks/stationhead.png"
                        }
                    }
                    a {
                        href = ConstantLinks.X_LINK.link
                        target = WindowTarget._blank
                        img {
                            src = "https://rchrdlss3.github.io/AliciaKeysAPI/HomeLinks/x.png"
                        }
                    }

                }
            }
            img {
                src = "https://rchrdlss3.github.io/AliciaKeysAPI/AliciaKeysImages/aliciamain.png"
            }
        }
}