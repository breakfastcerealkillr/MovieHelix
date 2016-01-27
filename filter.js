movies =
  [
    {"movie" : { "title" : "The Matrix Reloaded", "actor" : "Keanu Reeves" }},
    {"movie" : { "title" : "Fight Club",        "actor" : "Edward Norton" }},
    {"movie" : { "title" : "Strange Days",  "actor" : "Ralph Fiennes" }}
  ];
 
for(var i = 0; i < movies.length; i++)
{
  if(movies[i].movie.actor == 'Edward Norton')
  {
    document.write(movies[i].movie.title)
  }
}
