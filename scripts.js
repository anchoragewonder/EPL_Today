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

    for (let i = 0; i < json.matches.length; i++) {

        let games = json.matches[i];

        
        let homeTeam = games.team1;
        let awayTeam = games.team2;

        if (!(homeTeam in dict)) {
            dict[homeTeam] = [];
        }

        if (!(awayTeam in dict)) {
            dict[awayTeam] = [];
        }

        dict[homeTeam].push(games);
        dict[awayTeam].push(games);
        //for (let j = 0; j < matches.length; j++) {
    
    }
    console.log(dict);
}

// load JSON data; then proceed
getJSON('https://raw.githubusercontent.com/openfootball/football.json/master/2020-21/en.1.json').then(data => {
    eplMatchlist = data;
})

$(document).ready(function () {
    score_card_prefab = document.getElementById('score_start').cloneNode(true);

    $('a').click(function () {

        var curId = $(this).attr('id');

        var parent = document.getElementById('score_table');
        parent.innerHTML = '';

        //going through the list of elements by id
        for (let i = 0; i < 10; i++) {

            //cloning the prefab element
            let score_card = score_card_prefab.cloneNode(true);
            let homeNameText = dict[curId][i].team1;
            let awayNameText = dict[curId][i].team2;

            var trimHome = homeNameText.replace(/\s/g, '');
            var trimAway = awayNameText.replace(/\s/g, '');
           
            //getting home logo child element of newly cloned object
            $(score_card).find('#homeLogo').attr('src', 'assets/logos/' + trimHome + '.png');

            //home name
            $(score_card).find('#homeName').text(homeNameText);

            //away logo
            $(score_card).find('#awayLogo').attr('src', 'assets/logos/' + trimAway + '.png');

            //away name
            $(score_card).find('#awayName').text(awayNameText);

            parent.appendChild(score_card);

            console.log(trimHome);
        }
    })
})





