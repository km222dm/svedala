/**
 * Main js for svedala kommun
 */
window.Main = (function(){        // function som ska skriva sandboxen
    'use strict'; // koden ska exekveras i strictmode, med strict mode kan man exemplevis inte använda en icke-deklarerad variabel

    var searchAlt = {

        "searchResults": [

            "lediga jobb",
            "förskola",
            "äldreomsorg",
            "skolwebben",
            "e-tjänster",
            "äldreomsorg"
        ],

        "returnSearchResult": function() {
            for (var i = 0; i < searchAlt.searchResults.length; i++) {
                document.getElementById('mostSearchedLink').appendChild(searchAlt.searchResults[i]);
            }
        }


    };

    return searchAlt;
})();