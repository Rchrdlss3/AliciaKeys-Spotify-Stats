package components
import mui.material.Switch
import react.Props
import react.FC

external interface ThemeSwitchComponentProps: Props {

}
val ThemeSwitchComponent = FC<ThemeSwitchComponentProps> {
    Switch {
        onChange = {_,change ->
            console.log(change)
        }
    }
}