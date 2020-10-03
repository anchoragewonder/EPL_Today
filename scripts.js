var eplMatchlist;
var dict;
var curId;
var score_card_prefab;
var parent;
var matchNum = 28;

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
    }
    console.log(dict);
}

function colorChange(home, away) {
    let Color = document.getElementsByClassName('points');

    if (home < away) {
        Color[0].background - color; green;
        Color[1].background - color; red;
    }
    else if (away > home) {
        Color[0].background - color; red;
        Color[1].background - color; green;
    }
    else if (away == home) {
        Color[0].background - color; grey;
        Color[1].background - color; grey;
    }


}

// load JSON data; then proceed
getJSON('https://raw.githubusercontent.com/openfootball/football.json/master/2020-21/en.1.json').then(data => {
    eplMatchlist = data;
})

$(document).ready(function () {
    score_card_prefab = document.getElementById('card_start').cloneNode(true);

    var parent = document.getElementById('score_table');
    parent.innerHTML = '';

    $('a').click(function () {

        var curId = $(this).attr('id');
        parent.innerHTML = '';

        //going through the list of elements by id
        for (let i = 0; i < matchNum; i++) {

            //cloning the prefab element
            let score_card = score_card_prefab.cloneNode(true);

            // getting names of home and away teams along with match date
            let homeNameText = dict[curId][i].team1;
            let awayNameText = dict[curId][i].team2;
            let gameDate = dict[curId][i].date;

            // removing whitepace from home and away teams to match img id
            let trimHome = homeNameText.replace(/\s/g, '');
            let trimAway = awayNameText.replace(/\s/g, '');

            //getting home logo child element of newly cloned object
            $(score_card).find('#homeLogo').attr('src', 'assets/logos/' + trimHome + '.png');

            //home name
            $(score_card).find('#homeName').text(homeNameText);

            //away logo
            $(score_card).find('#awayLogo').attr('src', 'assets/logos/' + trimAway + '.png');

            //away name
            $(score_card).find('#awayName').text(awayNameText);

            //game date
            $(score_card).find('#date').text(gameDate);

            if (dict[curId][i].score) {
                let homeScore = dict[curId][i].score.ft[0];
                let awayScore = dict[curId][i].score.ft[1];

                $(score_card).find('#homeScore').text(homeScore);
                $(score_card).find('#awayScore').text(awayScore);

                colorChange(homeScore, awayScore);
            }
            parent.appendChild(score_card);
        }
    })
})