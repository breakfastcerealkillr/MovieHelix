//data set here
var movies =
    [
    ];


var titleInput1 = document.getElementById("title1");
var titleInput2 = document.getElementById("title2");
var log = document.getElementById("log");

function lookupMovies () {
    clearLog();
    var movie1 = false;
    var movie2 = false;
// EXPERIMENTAL :: Loop through the movies and one or both are not in data set display error message
    
	//END EXPERIMENTAL
	var movie1_check = false;
	var movie2_check = false;
	clearLog();
// Loop through the movies and initialize our comparison targets

    for (i = 0; i < movies.length; i++)
		
    {
        		
		if ( typeof movies[i].Title != 'undefined' && typeof titleInput1.value != 'undefined' && movies[i].Title.toUpperCase() == titleInput1.value.toUpperCase() && !movie1_check && titleInput1.value)
        {
			
            
			appendLog("Movie title 1 found: " + movies[i].Title + ", starring " + movies[i].Actors);
            movie1 = movies[i];
			movie1_check = true;
        } 
        if ( typeof movies[i].Title != 'undefined' && typeof titleInput2.value != 'undefined' && movies[i].Title.toUpperCase() == titleInput2.value.toUpperCase() && !movie2_check && titleInput2.value)
        {
            appendLog("Movie title 2 found: " + movies[i].Title + ", starring " + movies[i].Actors);
            movie2 = movies[i];
			movie2_check = true;
        } 
        if (movie1_check && movie2_check) break;
    }
	if (!movie1_check && titleInput1.value)
	{
		appendLog("Movie title 1 : '" + titleInput1.value + "' not found ");
	}
	if (!movie2_check && titleInput2.value)
	{
		appendLog("Movie title 2 : '" + titleInput2.value + "' not found ");
	}
    // compare our matches
    var set1 = indexMovie(movie1);
    var set2 = indexMovie(movie2);
	
    compare(movie1, movie2);
}

function compare(movie1, movie2) {
    for (var key in movie1){
        if (movie1[key] == movie2[key]) {
            appendLog(movie1[key] + " - " + movie1.Title + ", " + key + " + " + movie2[key] + " - " + movie2.Title + ", " + key);
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
