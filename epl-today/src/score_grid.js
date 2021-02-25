import React, { useRef } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import "./score_grid.css";
import { GetScoreWithColor } from './GetScoreWithColor';


export class ScoreGrid extends React.Component {
    constructor(props) {
        super(props)
        this.tableRef = React.createRef();
    }



    getFullName(name) {
        return this.props.idMatcher.map((i) => {
            if (i.id.toLowerCase() == name.toLowerCase()) {
                return i.name;
            }
        });
    }

    componentDidUpdate() {
        const element = this.tableRef.current;
        element.scrollIntoView({ behavior: 'smooth' })
    }

    render() {
        return (
            <div ref={this.tableRef} id="score_table" style={{ margin: "auto", }}>
                {this.props.teamMatches.map((match, index) => (
                    <Card key={index} className="card_style">
                        <div id="score_start" style={{ flexFlow: "row", display: "flex", width: '1100px' }}>
                            <div className="home-away-team">
                                <Col id="homeLogo" className="logo_score_style">
                                    <img className="score-logo" src={"./assets/logos/" + match.homeTeam + ".png"}></img>
                                </Col>
                                <Col id="homeName" style={{ margin: "auto", justifyContent: "start", paddingLeft: "10px" }}>
                                    <p className="team-text">{this.getFullName(match.homeTeam)}</p>
                                </Col>
                            </div>
                            <GetScoreWithColor score={match.homeScore} match={match} />
                            <div id="date" >{match.date}</div>
                            <GetScoreWithColor score={match.awayScore} match={match} />
                            <div className="home-away-team">
                                <Col id="awayLogo" className="logo_score_style" >
                                    <img className="score-logo" src={"./assets/logos/" + match.awayTeam + ".png"}></img>
                                </Col>
                                <Col id="awayName" className="name_style">
                                    <p className="team-text">{this.getFullName(match.awayTeam)}</p>
                                </Col>
                            </div>
                        </div>
                    </Card>
                ))
                }
            </div>
        );
    }
}
