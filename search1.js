var json = {
    "movie": [{
            "title": "Rising Sun",
            "actor": "Sean Connery",
            "minutes": 160},
        {
            "title": "Entrapment",
            "actor": "Sean Connery",
            "minutes": 130},
        {
            "title": "The Matrix",
            "actor": "Keanu Reeves",
            "minutes": 130}]

};

var movies = json["movie"];
for(var i=0; i < movies.length; ++i) {
    var movies_i = movies[i];
    if(movies_i["title"] == "Rising Sun") {
        
        document.write(movies_i.title + "<br>");
        //break;
        }
        else {
        document.write('0 Results'+"<br>");
        //break;
       }
        
    
}

//another search method

movies =
  [
    {"movie" : { "title" : "The Matrix Reloaded", "actor" : "Keanu Reeves" }},
    {"movie" : { "title" : "Fight Club",        "actor" : "Edward Norton","releasedate":"2001", "budget":"40 Million USD" }},
    {"movie" : { "title" : "Strange Days",  "actor" : "Ralph Fiennes" }}
  ];
 
for(var i = 0; i < movies.length; i++)
{
  if(movies[i].movie.title == 'The Matrix Reloaded')
  {
    document.write(movies[i].movie.title +"<br/>")
    document.write(movies[i].movie.actor+"<br/>")
    document.write(movies[i].movie.releasedate+"<br/>")
    document.write(movies[i].movie.budget+"<br/>")
    
  }
}


