'use strict';
import { NavList } from './nav_list';
import { ScoreGrid } from './score_grid';

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            teamName: "",
            matches: [],
        };
    }

    getTeam = (navData) => {
        this.setState({ teamName: navData })
    }


    teamFetchMatch() {
        fetch("https://why92kpyh9.execute-api.us-east-1.amazonaws.com/Prod/teams/" + this.state.teamName)
            .then(response => response.json())
            .then(data => {
                this.setState({ matches: data })
            })
    }

    render() {

        return (
            <div>
                <NavList {...this.props, getTeam = this.getTeam} />
                <ScoreGrid teamMatches={this.state.matches} />
            </div>

        );
    }
}
