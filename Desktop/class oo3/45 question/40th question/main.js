function make_album(artist_name, album_tittle, tracks) {
    var album = {
        artist: artist_name,
        title: album_tittle,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// calling 3 function  and cdreating 3 variables with duffrent values 
var album1 = make_album("Awais", "fast bowler");
//print value   of our object  created  my function
console.log(album1);
