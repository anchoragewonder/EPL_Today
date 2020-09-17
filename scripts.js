var eplMatchlist;
var dict;
var footballClub;
var curId;
var score_card_prefab;

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
    score_card_prefab = document.getElementById('score_start').cloneNode(true);

    $('a').click(function () {

        var curId = $(this).attr('id');

        var parent = document.getElementById('score_table');
        parent.innerHTML = '';

        //going through the list of elements by id
        for (let i = 0; i < dict[curId].length; i++) {

            //cloning the prefab element
            let score_card = score_card_prefab.cloneNode(true);
            let homeNameText = dict[curId][i].team1;
            let awayNameText = dict[curId][i].team2;

            //getting home logo child element of newly cloned object
            let homeLogo = $(score_card).find('#homeLogo');
            //home name
            $(score_card).find('#homeName').text(homeNameText);
            //away logo
            let awayLogo = $(score_card).find('#awayLogo');
            //away name
            $(score_card).find('#awayName').text(awayNameText);

            parent.appendChild(score_card);
        }
    })
})





