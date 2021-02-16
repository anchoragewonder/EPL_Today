import React from 'react';
import './App.css';
import { NavList } from './nav_list';
import { ScoreGrid } from './score_grid';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.getTeam = this.getTeam.bind(this);
    this.refScore = React.createRef();

    this.state = {
      matches: [],
      startingTeam: "",
      list: [
        { id: 'Arsenal', name: 'Arsenal' },
        { id: 'AstonVilla', name: 'Aston Villa' },
        { id: 'Burnley', name: 'Burnley' },
        { id: 'BrightonandHoveAlbion', name: 'Brighton & Hove Albion' },
        { id: 'Chelsea', name: 'Chelsea' },
        { id: 'CrystalPalace', name: 'Crystal Palace' },
        { id: 'Everton', name: 'Everton' },
        { id: 'Fulham', name: 'Fulham' },
        { id: 'LeicesterCity', name: 'Leicester City' },
        { id: 'LeedsUnited', name: 'Leeds United' },
        { id: 'Liverpool', name: 'Liverpool' },
        { id: 'ManchesterCity', name: 'Manchester City' },
        { id: 'ManchesterUnited', name: 'Manchester United' },
        { id: 'NewcastleUnited', name: 'Newcastle United' },
        { id: 'Southampton', name: 'Southampton' },
        { id: 'SheffieldUnited', name: 'Sheffield United' },
        { id: 'TottenhamHotspur', name: 'Tottenham Hotspur' },
        { id: 'WestBromwichAlbion', name: 'West Bromwich Albion' },
        { id: 'WestHamUnited', name: 'West Ham United' },
        { id: 'WolverhamptonWanderers', name: 'Wolverhampton Wanderers' },
      ],
    };

    this.setStartingTeam();
  }

  getTeam(team) {
    localStorage.setItem('team', team);
    this.state.startingTeam = team;

    fetch(`https://why92kpyh9.execute-api.us-east-1.amazonaws.com/Prod/teams/${team.replace(/\s/g, '')}`)
      .then(response => response.json())
      .then(data => {
        this.setState({ matches: data })
      })
  }

  setStartingTeam() {
    let storage_team = localStorage.getItem('team')
    if (storage_team && !this.state.startingTeam) {
      this.setState({ startingTeam: storage_team });
      this.getTeam(storage_team);
    }
    return storage_team;
  }

  render() {
    return (
      <div className="App">
        <NavList forwardRef={this.refScore} action={this.getTeam} idMatcher={this.state.list} />
        <header className="App-header">
          <h1 className="text-header">THIS IS EPL TODAY</h1>
          <h2 className="text-intro">Click on a team above to view thier upcoming match schedule.</h2>
        </header>
        <ScoreGrid ref={this.refScore} teamMatches={this.state.matches} idMatcher={this.state.list} />
      </div>
    );
  }
}

export default App;



