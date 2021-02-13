import React from 'react';
import './App.css';
import { NavList } from './nav_list';
import { ScoreGrid } from './score_grid';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.getTeam = this.getTeam.bind(this);

    this.state = {
      matches: [],
    };
  }

  getTeam(team) {
    console.log(team);
    fetch(`https://why92kpyh9.execute-api.us-east-1.amazonaws.com/Prod/teams/${team.replace(/\s/g, '')}`)
      .then(response => response.json())
      .then(data => {
        this.setState({ matches: data })
      })
  }


  render() {
    return (
      <div className="App">
        <NavList action={this.getTeam} />
        <header className="App-header">
          <h1 className="text-header">THIS IS EPL TODAY</h1>
          <h2 className="text-intro">Click on a team above to view thier upcoming match schedule.</h2>
        </header>
        <ScoreGrid teamMatches={this.state.matches} />
      </div>
    );
  }
}

export default App;



