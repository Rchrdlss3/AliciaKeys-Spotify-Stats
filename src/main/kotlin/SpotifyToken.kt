import kotlinx.coroutines.*
import kotlinx.browser.window
import kotlinx.serialization.Serializable
import kotlinx.serialization.json.Json
import kotlinx.serialization.decodeFromString


/*
* {
"client_data": {
"client_version": "1.2.18.979.g04f30a1c",
"client_id": "d8a5ed958d274c2e8ee717e6a4b0971d",
"js_sdk_data": {
"device_brand": "Apple",
"device_model": "unknown",
"os": "macos",
"os_version": "10.15.7",
"device_id": "28fb5b7fcf150185c670e8ca7ae62ca6",
"device_type": "computer"
}
}
}
* */
val userAgent = window.navigator

fun getOperatingSystem(): String{
//    var returnedString = ""
    return when (true) {
        (userAgent.appVersion.indexOf("Win")!=-1) -> "windows"
        (userAgent.appVersion.indexOf("Mac")!=-1) -> "macos"
        (userAgent.appVersion.indexOf("X11")!=-1) -> "unix"
        (userAgent.appVersion.indexOf("Linux")!=-1) -> "linux"
        else -> "Unknown"
    }
//        if (userAgent.appVersion.indexOf("Win")!= -1) {
//            returnedString = "Windows"
//         }
//        if (userAgent.appVersion.indexOf("Mac")!= -1) {
//                 returnedString = "MacOS"
//         }
//        if (userAgent.appVersion.indexOf("X11")!=-1){
//            returnedString = "UNIX"
//        }
//        if (userAgent.appVersion.indexOf("Linux")!=-1) {
//            returnedString = "Linux"
//        }
//    return returnedString
}
@Serializable
data class JsSDKData(
    val deviceBrand: String? = null,
    val os: String = getOperatingSystem(),
    val osVersion: String? = null,
    val deviceID: String? = null,
    val deviceType: String? = null
)
@Serializable
data class SpotifyAccessToken(
    val clientId: String,
    val accessToken: String,
    val accessTokenExpirationTimestampMs: Int,
    val isAnonymous: Boolean
)
suspend fun getSpotifyAccessToken():SpotifyAccessToken{
    val response = window
        .fetch("https://open.spotify.com/get_access_token")
        .await()
        .text()
        .await()
        return Json.decodeFromString(response)
}

val client_version = "1.2.18.979.g04f30a1c"

@Serializable
data class ClientData(
    val clientVersion:String = client_version,
    val clientID: String = "",
    val jsSDKData: JsSDKData = JsSDKData()
)
suspend fun obtainSpotifyToken():  String{
    val response = window
        .fetch("https://clienttoken.spotify.com/v1/clienttoken")
        .await()
        .text()
        .await()
    return Json.decodeFromString(response)
}

class SpotifyToken {

}