fun ObtainTotalStreams(inputTrackItems: Array<TrackItem>) :String{
    var totalPlayCount = 0
    for (track in inputTrackItems) {
        totalPlayCount += track.track.playcount.toInt()
    }
    return totalPlayCount.toString()
}