
class ScoreGrid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            teamName="",
            matches=[],
        };
    }

    // move  this method into parent class and  pass state as props into  score grid
    team_click(selected_team) {
        this.setState({ teamName: selected_team }), () => {
            fetch("https://why92kpyh9.execute-api.us-east-1.amazonaws.com/Prod/teams/" + this.state.teamName)
                .then(response => response.json())
                .then(data => {
                    this.setState({ matches: data })
                })
        }
    }

    render() {
        // this.matches.map(games index)
        //      score card 
        //          homeTeam = games.hometeam
        //          ect.....
    }

}

