enum class AlbumEnumClass(val album: String, val albumId:String,val albumImagePath:String) {
    SONGS_IN_A_MINOR("Songs in a Minor", "5qUlPoDmNxCSzqVx81RDLJ","images/siam.png"),
    DIARY_OF_ALICIA_KEYS("The Diary of Alicia Keys" , "6TqRKHLjDu5QZuC8u5Woij","images/diary.png"),
    AS_I_AM("As I Am","6KlxyxhXEDo1LdheFulN7h","images/aia.png"),
    THE_ELEMENT_OF_FREEDOM("The Element of Freedom", "0Rxab8t0y7GlaTJTHX2wEN","images/teof.png"),
    GIRL_ON_FIRE("Girl on Fire","3qqhNVbjLFNdLviBFrFwCa","images/gof.png"),
    HERE("Here","66RQAPD5x5nQgQzOa0X3sz","images/here.png"),
    ALICIA("ALICIA","1168pCxg0HeTRqyutFf4o1","images/alicia.png"),
    KEYS("KEYS","76vpmS3ZCGm4hN8QtbnedX","images/keys.png")
}

enum class NavigationLinks(val linkName: String, val linkTo: String) {
    HOME("Home",""),
    SPOTIFY_STATISTICS("Spotify Statistics",""),
    CLUB_KEYS("Club Keys",""),
    JOIN_US("Join Us","")

}