import kotlinx.coroutines.*
import kotlinx.browser.window
import kotlinx.serialization.Serializable
import kotlinx.serialization.json.Json
import kotlinx.serialization.decodeFromString
import npm.product


/*
https://open.spotify.com/get_access_token
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
//val userAgent = window.navigator
//
//fun getOperatingSystem(): String{
//    return when (true) {
//        (userAgent.appVersion.indexOf("Win")!=-1) -> "windows"
//        (userAgent.appVersion.indexOf("Mac")!=-1) -> "macos"
//        (userAgent.appVersion.indexOf("X11")!=-1) -> "unix"
//        (userAgent.appVersion.indexOf("Linux")!=-1) -> "linux"
//        else -> "Unknown"
//    }
//}
//@Serializable
//data class SpotifyAccessToken(
//    val clientId: String,
//    val accessToken: String,
//    val accessTokenExpirationTimestampMs: Int,
//    val isAnonymous: Boolean
//)
//
//
//val client_version = "1.2.18.979.g04f30a1c"
//
//@Serializable
//data class JsSDKData(
//    val deviceBrand: String = "",
//    val os: String = getOperatingSystem(),
//    val osVersion: String? = product.version,
//    val deviceID: String = "",
//    val deviceType: String = ""
//)
//
//@Serializable
//data class ClientData(
//    val clientVersion:String = client_version,
//    val clientID: String = "",
//    val jsSDKData: JsSDKData = JsSDKData()
//)
//suspend fun obtainSpotifyToken():  String{
//    val response = window
//        .fetch("https://clienttoken.spotify.com/v1/clienttoken")
//        .await()
//        .text()
//        .await()
//    return Json.decodeFromString(response)
//}
//
//class SpotifyToken {
//
//}