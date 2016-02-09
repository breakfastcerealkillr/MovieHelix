//data set here
var movies =
  [
    { "title" : "The Matrix", "actor" : "Keanu Reeves", "releasedate":"1999", "budget":"40 Million USD"  },
    { "title" : "Fight Club", "actor" : "Edward Norton", "releasedate":"2001", "budget":"40 Million USD" },
    { "title" : "Strange Days", "actor" : "Ralph Fiennes", "releasedate":"1999", "budget":"60 Million USD"}
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
        if ( movies[i].title == titleInput1.value )
        {
            appendLog("Matched Movie 1: " + movies[i].title + ", starring " + movies[i].actor)
            movie1 = movies[i];
        }
        if ( movies[i].title == titleInput2.value )
        {
            appendLog("Matched Movie 2: " + movies[i].title + ", starring " + movies[i].actor)
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
            appendLog(movie1[key] + " - " + movie1.title + ", " + key + " + " + movie2.title + ", " + key);
        }
    }
}

function indexMovie(movie) {
    var set = [];
    for(var key in movie) {
        if (key != "title") {
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
