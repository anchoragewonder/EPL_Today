var eplMatchlist;
var dict;
var footballClub;
var curId;

// return JSON data from any file path (asynchronous)
async function getJSON(path) {
    let json = await fetch(path).then(response => response.json());
    createJSObject(json);
}

function createJSObject(json) {

    dict = new Object();

    for (let i = 0; i < json.rounds.length; i++) {
        let matches = json.rounds[i].matches;


        for (let j = 0; j < matches.length; j++) {
            let curMatch = matches[j];
            let homeTeam = curMatch.team1;
            let awayTeam = curMatch.team2;


            if (!(homeTeam in dict)) {
                dict[homeTeam] = [];
            }

            if (!(awayTeam in dict)) {
                dict[awayTeam] = [];
            }

            dict[homeTeam].push(curMatch);
            dict[awayTeam].push(curMatch);
        }
    }
    console.log(dict);
}

// load JSON data; then proceed
getJSON('https://raw.githubusercontent.com/openfootball/football.json/master/2015-16/en.1.json').then(data => {
    eplMatchlist = data;
})

$(document).ready(function () {
    $('a').click(function () {

        var curId = $(this).attr('id');
        var score_card_prefab = $('#score_start');
        var parent = $('#score_table');

        //need to clear parent element
        //$(this).closest('#score_table').remove();

        //going through the list of elements by id
        for (let i = 0; i < dict[curId].length; i++) {
            
            //cloning the prefab element
            let score_card = score_card_prefab.clone();

            //getting home logo child element of newly cloned object
            let homeLogo = score_card.find('#homeLogo');
            //home name
            let homeName = score_card.find('#homeName');
            //away logo
            let awayLogo = score_card.find('#awayLogo');
            //away name
            let awayName = score_card.find('#awayName');

            let homeNameText = dict[curId][i].team1;
            let awayNameText = dict[curId][i].team2;

           //set parent of score card to the parent element above
            score_card.parent() == parent;
            
            /* attempt at iterating though every instance of homename
            $(homeName).each(function(i) {
              return $(homeName).text(homeNameText);  
            });*/

            // check to see if the var holds home name values
            console.log(homeNameText);

            /* populates the first instance of id homename with corrext team
            $('#homeName').children('p').text(homeNameText);
            */
        }
    })
})





