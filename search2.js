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

//yet another method

var myArray = [{'id':'73','fool':'bars','silly':'rabbit'},{'id':'45','foo':'bar'}];


function findById(source, id) {
    return source.filter(function( obj ) {
        // coerce both obj.id and id to numbers 
        // for val & type comparison
        return +obj.id === +id;
    })[ 0 ];
}

var result = findById( myArray, 73 );

document.write(result.silly);



