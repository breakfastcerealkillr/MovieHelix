myArray = [
{'id':'100','Title':'Solaris','Actor':'Clooney','ReleaseDate':'2002','Rating':'PG-13','Genre':'Drama','Imdb':'6.2','Budget':'47M'},

{'id':'101','Title':'OceansEleven','Actor':'Clooney','ReleaseDate':'2001','Rating':'PG-13','Genre':'Crime','Imdb':'7.8','Budget':'85M'}

];

myArray.filter(function(a){ return a.Title == 'Solaris' })[0]


//here is another method to try

var lookup = {};
for (var i = 0, len = array.length; i < len; i++) {
    lookup[array[i].id] = array[i];

  
}

