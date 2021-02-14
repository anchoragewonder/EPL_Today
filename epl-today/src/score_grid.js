import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import "./score_grid.css";


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
                {this.props.teamMatches.map((games, index) => (
                    <Card key={index} style={{ margin: "0 auto", marginBottom: "1rem", maxWidth: "1200px", bg: "light", backgroundColor: "white", minHeight: "10vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <div id="score_start" style={{ flexFlow: "row", display: "flex", width: '1100px' }}>
                            <div className="home-away-team" style={{ display: "flex", flex: "row", alignItems: 'center' }}>
                                <Col style={{ justifyContent: "start" }}>
                                    <img id="homeLogo" className="score_logo" src={"./assets/logos/" + games.homeTeam + ".png"}></img>
                                </Col>
                                <Col id="homeName" style={{ margin: "auto", justifyContent: "start", paddingLeft: "10px" }}>
                                    <p>{this.getFullName(games.homeTeam)}</p>
                                </Col>
                            </div>
                            <div id="homeScore" style={{ display: "flex", flexFlow: "column", margin: "auto", flexShrink: "0" }}>{games.homeScore}</div>
                            <div id="date" style={{ display: "flex", flexFlow: "column", margin: "auto", flexShrink: "0" }}>{games.date}</div>
                            <div id="awayScore" style={{ display: "flex", flexFlow: "column", margin: "auto", flexShrink: "0" }}>{games.awayScore}</div>
                            <div className="home-away-team" style={{ display: "flex", flex: "row", alignItems: 'center' }}>
                                <Col style={{ justifyContent: "start" }}>
                                    <img id="awayLogo" className="score_logo" src={"./assets/logos/" + games.awayTeam + ".png"}></img>
                                </Col>
                                <Col id="awayName" style={{ margin: "auto", justifyContent: "start", paddingLeft: "10px" }}>
                                    <p>{this.getFullName(games.awayTeam)}</p>
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
