movies =
  [
    {"movie" : { "title" : "The Matrix Reloaded", "actor" : "Keanu Reeves" }},
    {"movie" : { "title" : "Fight Club","actor" : "Edward Norton","releasedate":"2001", "budget":"40 Million USD" }},
    {"movie" : { "title" : "Strange Days","actor" : "Ralph Fiennes" }}
  ];
 
for(var i = 0; i < movies.length; i++)
{
  if(movies[i].movie.title == 'Fight Club')
  {
    document.write(movies[i].movie.title +"<br/>")
    document.write(movies[i].movie.actor+"<br/>")
    document.write(movies[i].movie.releasedate+"<br/>")
    document.write(movies[i].movie.budget+"<br/>")
    
  }
}
