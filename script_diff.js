
var array1 = [1, 2, 3, 4, 5, 6];
var array2 = [1, 2, 3, 4, 5, 6, "cab", 8, 9];

var foo = [];
var i = 0;
jQuery.grep(array2, function(el) {

    if (jQuery.inArray(el, array1) == -1) foo.push(el);


    i++;

});


document.write(" the difference is " + foo);




