
import './App.css';
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
      <div className="App">
        <header className="App-header">
          <NavList {...this.props, getTeam = this.getTeam} />
          <h1 class="text-header">THIS IS EPL TODAY</h1>
          <h2 class="text-intro">Click on a team above to view thier upcoming match schedule.</h2>
        </header>
        <main>
          <ScoreGrid teamMatches={this.state.matches} />
        </main>
      </div>
    );
  }
}
