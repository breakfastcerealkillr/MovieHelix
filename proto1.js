//DATASET HERE
var movies =
  [
    { "title" : "a", "actor" : "Keanu Reeves", "releasedate":"1999", "budget":"40 Million USD"  },
    { "title" : "b", "actor" : "Edward Norton", "releasedate":"2001", "budget":"40 Million USD" },
    { "title" : "c", "actor" : "Ralph Fiennes", "releasedate":"1997", "budget":"60 Million USD"}
  ];

var titleInput1  = document.getElementById("title1");
var titleInput2  = document.getElementById("title2");
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

  // compare our matches
  var set1 = indexMovie(movie1);
  var set2 = indexMovie(movie2);
}

function indexMovie(movie) {
  var set = [];
  for(var key in movie) {
    if (key != "title") {
      set.push(movie[key]);
    }
  }
  document.write (set);
}

/*compare movie 1 first value to all values of movie 2
for (var i = 0; i < set.length; i++)
  {
    if (set[i] == movies.budget.value)
    {
      document.write("yes")
     break;
    }
    
    
work above this point*/

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
