import kotlinx.browser.window
import kotlinx.serialization.decodeFromString
import kotlinx.serialization.json.*
import kotlinx.coroutines.*

val ignoreUnknown = Json{
    ignoreUnknownKeys = true
    isLenient = true
}

suspend fun getAlbumImages():ReturnedAlbumImagesData{
    val response = window
        .fetch("https://rchrdlss3.github.io/AliciaKeysAPI/album_images.json")
        .await()
        .text()
        .await()
    return Json.decodeFromString(response)
}

//suspend fun getSpotifyAccessToken():SpotifyAccessToken{
//    val response = window
//        .fetch("https://open.spotify.com/get_access_token")
//        .await()
//        .text()
//        .await()
//    return ignoreUnknown.decodeFromString(response)
//}

suspend fun fetchAlbum(albumId:String): ReturnedData {
    console.log(ReturnedData())
    val response = window
        .fetch("https://api.t4ils.dev/getAlbum?id=$albumId")
        .await()
        .text()
        .await()
    return ignoreUnknown.decodeFromString(response)
}