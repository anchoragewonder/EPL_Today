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
    $('a').click(function(){

            var curId = $(this).attr('id');
            $('#homeLogo1').attr('src','assets/logos/arsenal.png');
            $('#homeName1').text(dict[curId][0].team1);
            $('#awayLogo1').attr('src','assets/logos/whufc.png');
            $('#awayName1').text(dict[curId][0].team2);
    })
})



    

