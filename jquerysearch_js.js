$(".dropdown-menu").on('click', 'li a', function () {
    $(".btn:first-child").text($(this).text());
});

$(document).ready(function () {
    var data = [{
        title: "Mrs. Doubtfire",
        actor: "Robin Williams",
        director: "John Smith"
    }, {
        title: "Liar, Liar",
        actor: "Jim Carrey",
        director: "Penny Marshall"
    }, {
        title: "MASH",
        actor: "Some Dude",
       director: "Some Other Dude"
    }, {
        title: "Clerks",
        actor: "Jeff Anderson",
        director: "Kevin Smith"
    }, {
        title: "Men In Black",
        actor: "Will Smith",
        director: "Barry Sonnenfield"
    }, {
        title: "The Naked Gun",
        actor: "Leslie Nielsen",
        director: "David Zucker"
    }];

    function result(message) {
        $("<div>").text(message).prependTo("#result");
        $("#result").scrollTop(0);
    }

    $("#index-search").submit(function (e) {
        e.preventDefault();
        var filterBy = $(".dropdown-toggle").text().toLowerCase();
        var val = data.filter(function(e){
            return e[filterBy].toLowerCase() == $("#appendedPrependedDropdownButtons").val().toLowerCase();
            
        });
        console.log(val);
        result(val.length ?
                   "Results: " + val[0].title + " featuring " + val[0].actor:
          "Nothing selected, input was " + $("#appendedPrependedDropdownButtons").val() );
    });
});

