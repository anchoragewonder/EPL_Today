import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import "./score_grid.css";
import { GetScoreWithColor } from './GetScoreWithColor';


export class ScoreGrid extends React.Component {

    getFullName(name) {
        return this.props.idMatcher.map((i) => {
            if (i.id.toLowerCase() == name.toLowerCase()) {
                return i.name;
            }
        });
    }

    render() {
        return (
            <div id="score_table" style={{ margin: "auto", }}>
                {this.props.teamMatches.map((match, index) => (
                    <Card key={index} style={{ margin: "0 auto", marginBottom: "1rem", maxWidth: "1200px", bg: "light", backgroundColor: "white", minHeight: "10vh", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "3rem" }}>
                        <div id="score_start" style={{ flexFlow: "row", display: "flex", width: '1100px' }}>
                            <div className="home-away-team" style={{ display: "flex", flex: "row", alignItems: 'center' }}>
                                <Col style={{ justifyContent: "start" }}>
                                    <img id="homeLogo" className="score_logo" src={"./assets/logos/" + match.homeTeam + ".png"}></img>
                                </Col>
                                <Col id="homeName" style={{ margin: "auto", justifyContent: "start", paddingLeft: "10px" }}>
                                    <p>{this.getFullName(match.homeTeam)}</p>
                                </Col>
                            </div>
                            <GetScoreWithColor score={match.homeScore} match={match} />
                            <div id="date" style={{ display: "flex", flexFlow: "column", margin: "auto", flexShrink: "0" }}>{match.date}</div>
                            <GetScoreWithColor score={match.awayScore} match={match} />
                            <div className="home-away-team" style={{ display: "flex", flex: "row", alignItems: 'center' }}>
                                <Col style={{ justifyContent: "start" }}>
                                    <img id="awayLogo" className="score_logo" src={"./assets/logos/" + match.awayTeam + ".png"}></img>
                                </Col>
                                <Col id="awayName" style={{ margin: "auto", justifyContent: "start", paddingLeft: "10px" }}>
                                    <p>{this.getFullName(match.awayTeam)}</p>
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
