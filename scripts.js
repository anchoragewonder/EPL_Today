var eplMatchlist;

// return JSON data from any file path (asynchronous)
function getJSON(path) {
    return fetch(path).then(response => response.json());
}

// load JSON data; then proceed
getJSON('https://raw.githubusercontent.com/openfootball/football.json/master/2015-16/en.1.json').then(data => {
    eplMatchlist = data;
    }
);

// access the json arrays to get home and away teams also date
for(let i = 0, l = eplMatchlist.rounds.length; i < l; i++) {
   let matchday = eplMatchlist.rounds[i];
   for (let j = 0, k= matchday.length; j < k; j++){
        let games = matchday.matches[j]
        let day= matchday.name
        for (let m = 0, p = games.length; m < p; m++){
            let homeTeam = games.team1[m]
            let awayTeam = games.team2[m]
            let gameday = games.date[m]
        }
    }
}
