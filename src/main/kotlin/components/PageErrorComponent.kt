package components

import mui.material.Box
import react.FC
import react.Props
import react.dom.html.ReactHTML.img
import mui.material.Typography
import mui.material.styles.TypographyVariant
import web.cssom.ClassName

val PageErrorComponent = FC<Props> {
    Box {
        className = ClassName("error-page-wrapper")
        Typography {
            variant = TypographyVariant.h1
            +"Sorry to Burst Your Bubble!"
        }
        Typography {
            variant = TypographyVariant.h2
            +"This page either doesn't exist or is WIP."
        }
        img {
            src ="https://rchrdlss3.github.io/AliciaKeysAPI/AliciaKeysImages/bubbleError.png"
        }
    }
}