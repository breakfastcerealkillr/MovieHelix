var movies =
  [
{"Title":"The Matrix","Year":"1999","Rated":"R",
"Released":"31 Mar 1999","Runtime":"136 min","Genre":"Action, Sci-Fi","Director":"Andy Wachowski, Lana Wachowski","Writer":"Andy Wachowski, Lana Wachowski","Actors":["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss", "Hugo Weaving"],"Plot":"A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.","Language":"English","Country":"USA, Australia","Awards":"Won 4 Oscars. Another 33 wins & 42 nominations.","Poster":"http://ia.media-imdb.com/images/M/MV5BMTkxNDYxOTA4M15BMl5BanBnXkFtZTgwNTk0NzQxMTE@._V1_SX300.jpg","Metascore":"73","imdbRating":"8.7","imdbVotes":"1,148,739","imdbID":"tt0133093"},

{"Title":"Fight Club","Year":"1999","Rated":"R","Released":"15 Oct 1999","Runtime":"139 min","Genre":"Drama","Director":"David Fincher","Writer":"Chuck Palahniuk (novel), Jim Uhls (screenplay)","Actors":["Edward Norton", "Brad Pitt", "Helena Bonham Carter", "Meat Loaf"],"Plot":"An insomniac office worker, looking for a way to change his life, crosses paths with a devil-may-care soap maker, forming an underground fight club that evolves into something much, much more...","Language":"English","Country":"USA, Germany","Awards":"Nominated for 1 Oscar. Another 8 wins & 27 nominations.","Poster":"http://ia.media-imdb.com/images/M/MV5BMjIwNTYzMzE1M15BMl5BanBnXkFtZTcwOTE5Mzg3OA@@._V1_SX300.jpg","Metascore":"66","imdbRating":"8.9","imdbVotes":"1,271,608","imdbID":"tt0137523"},

{"Title":"c","Year":"1995","Rated":"R","Released":"13 Oct 1995","Runtime":"145 min","Genre":"Action, Crime, Drama","Director":"Kathryn Bigelow","Writer":"James Cameron (story), James Cameron (screenplay), Jay Cocks (screenplay)","Actors":["Ralph Fiennes", "Angela Bassett", "Juliette Lewis", "Tom Sizemore"],"Plot":"A former cop turned street-hustler accidentally uncovers a police conspiracy in 1999 Los Angeles.","Language":"English","Country":"USA","Awards":"2 wins & 3 nominations.","Poster":"http://ia.media-imdb.com/images/M/MV5BMTQxMzk0NTQ4Ml5BMl5BanBnXkFtZTgwNjY0MDQ1MDE@._V1_SX300.jpg","Metascore":"N/A","imdbRating":"7.2","imdbVotes":"52,474","imdbID":"tt0114558"},

{"Title":"d","Year":"1999","Rated":"R","Released":"05 Feb 1999","Runtime":"100 min","Genre":"Action, Crime, Drama","Director":"Brian Helgeland","Writer":"Donald E. Westlake (novel), Brian Helgeland (screenplay), Terry Hayes (screenplay)","Actors":["Mel Gibson", "Gregg Henry", "Maria Bello", "David Paymer"],"Plot":"Porter is shot by his wife and best friend and is left to die. When he survives he plots revenge.","Language":"English","Country":"USA","Awards":"2 wins & 2 nominations.","Poster":"http://ia.media-imdb.com/images/M/MV5BMjEzNTcxNzU0Ml5BMl5BanBnXkFtZTgwNjIwODQxMTE@._V1_SX300.jpg","Metascore":"46","imdbRating":"7.1","imdbVotes":"108,149","imdbID":"tt0120784"}

];

var titleInput1 = document.getElementById("title1");
var titleInput2 = document.getElementById("title2");
var log = document.getElementById("log");

function lookupMovies ( ) {
    clearLog();
    var movie1 = false;
    var movie2 = false;

// Loop through the movies and initialize our comparison targets
    for (var i = 0; i < movies.length; i++)
    {
        if ( movies[i].Title.toUpperCase() == titleInput1.value.toUpperCase().replace(/  +/g, ' ') )
        {
            appendLog("Matched Movie 1: " + movies[i].Title + ", starring " + movies[i].Actors[0])
            movie1 = movies[i];
        }
        if ( movies[i].Title.toUpperCase() == titleInput2.value.toUpperCase().replace(/  +/g, ' ') )
        {
            appendLog("Matched Movie 2: " + movies[i].Title + ", starring " + movies[i].Actors[0])
            movie2 = movies[i];
        }
        if (movie1 && movie2) break;
    }
    // compare our matches for common values
    var set1 = indexMovie(movie1);
    var set2 = indexMovie(movie2);
    compare(movie1, movie2);
}

function compare(movie1, movie2) {
    for (var key in movie1){
        if (movie1[key] == movie2[key]) {
            appendLog(movie1[key] + " - " + movie1.Title + ", " + key + " + " + movie2.Title + ", " + key);
        }
    }
}

function indexMovie(movie) {
    var set = [];
    for(var key in movie) {
        if (key != "Title") {
            set.push(movie[key]);
        }
    }
    return set;
}

//compare movie 1 values in array to all values of movie 2


function clearLog () {
    while( log.firstChild ){
        log.removeChild( log.firstChild );
    }
}

function appendLog (text) {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(text));
    log.appendChild(li);
}
