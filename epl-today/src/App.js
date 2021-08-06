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
      teamSelected: false,
      list: [
        { id: 'Arsenal', name: 'Arsenal', color: "#cc0000" },
        { id: 'AstonVilla', name: 'Aston Villa', color: "#911a34" },
        { id: 'Burnley', name: 'Burnley', color: "#911a34" },
        { id: 'BrightonandHoveAlbion', name: 'Brighton', color: "#3572c2" },
        { id: 'Chelsea', name: 'Chelsea', color: "#0a2c6e" },
        { id: 'CrystalPalace', name: 'Crystal Palace', color: "#de1118" },
        { id: 'Everton', name: 'Everton', color: "#0a2c6e" },
        { id: 'Fulham', name: 'Fulham', color: "#de1118" },
        { id: 'LeicesterCity', name: 'Leicester City', color: "#3572c2" },
        { id: 'LeedsUnited', name: 'Leeds United', color: "#f1cf03" },
        { id: 'Liverpool', name: 'Liverpool', color: "#de1118" },
        { id: 'ManchesterCity', name: 'Manchester City', color: "#3572c2" },
        { id: 'ManchesterUnited', name: 'Manchester United', color: "#de1118" },
        { id: 'NewcastleUnited', name: 'Newcastle United', color: "#1E1E1E" },
        { id: 'Southampton', name: 'Southampton', color: "#de1118" },
        { id: 'SheffieldUnited', name: 'Sheffield United', color: "#de1118" },
        { id: 'TottenhamHotspur', name: 'Tottenham', color: "#0a2c6e" },
        { id: 'WestBromwichAlbion', name: 'West Brom', color: "#0a2c6e" },
        { id: 'WestHamUnited', name: 'West Ham', color: "#911a34" },
        { id: 'WolverhamptonWanderers', name: 'Wolves', color: "#ff9900" },
      ],
    };

    this.setStartingTeam();
  }

  getTeam(team) {
    localStorage.setItem('team', team);
    this.state.startingTeam = team;
    this.setState({ teamSelected: true });

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
      this.setState({ teamSelected: true });
      this.getTeam(storage_team);
    }
    return storage_team;
  }

  render() {
    return (
      <div className="App">
        <NavList forwardRef={this.refScore} action={this.getTeam} idMatcher={this.state.list} />
        <header className="App-header">
        </header>
        <ScoreGrid ref={this.refScore} teamMatches={this.state.matches} idMatcher={this.state.list} teamName={this.state.startingTeam} isSelected={this.state.teamSelected} />
      </div>
    );
  }
}

export default App;



