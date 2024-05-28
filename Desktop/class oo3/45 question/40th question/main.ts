//Define the make album function
function make_album(artist_name: string ,  album_tittle : string, tracks?: number){
    let album :{artist: string ,title: string, tracks?:number}={
        artist: artist_name,
        title:album_tittle, 
    }

    if (tracks !== undefined){
album.tracks = tracks
    }

    return album;

    
}

// calling 3 function  and cdreating 3 variables with duffrent values 
let album1 = make_album("Awais","fast bowler");

//print value   of our object  created  my function
console.log(album1);
