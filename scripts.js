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
        var score_card_prefab = $(document).getElementById('score_start');
        var parent = $(document).getElementById('score_table');

        //need to clear parent element

        //going through the list of elements by id
        for (let i = 0; i < dict[curId].length; i++) {

            //cloning the prefab element
            let score_card = score_card_prefab.clone();

            //getting home logo child element of newly cloned object
            let homeLogo = score_card.querySelector('#homeLogo');

            //home name
            let homeName = score_card.querySelector('#homeName');

            //away logo

            //away name


            homeName.text = dict[curId][i].team1;

            //set parent of score card to the parent element above
        }
        $('#homeLogo1').attr('src', 'assets/logos/arsenal.png');
        $('#homeName1').text(dict[curId][0].team1);
        $('#awayLogo1').attr('src', 'assets/logos/whufc.png');
        $('#awayName1').text(dict[curId][0].team2);
    })
})





