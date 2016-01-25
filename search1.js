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
