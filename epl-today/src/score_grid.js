import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import "./score_grid.css";


export class ScoreGrid extends React.Component {

    render() {
        return (
            <div id="score_table">
                {this.props.teamMatches.map((games) => (
                    <Container>
                        <Row>
                            <div className="home-away-team">
                                <div className="justify-content-start">
                                    <img id="homeLogo" src="./assets/logos/Arsenal.png"></img>
                                </div>
                                <div id="homeName" className="m-auto">
                                    <p>{games.homeTeam}</p>
                                </div>
                            </div>
                            <div id="homeScore">{games.homeScore}</div>
                            <div id="date">{games.date}</div>
                            <div id="awayScore">{games.awayScore}</div>
                            <div className="home-away-team">
                                <div className="justify-content-start">
                                    <img id="awayLogo" className="score_logo" src="./assets/logos/Chelsea.png"></img>
                                </div>
                                <div id="awayName" className="m-auto">
                                    <p>{games.awayTeam}</p>
                                </div>
                            </div>
                        </Row>
                    </Container>
                ))}
            </div>
        );
    }

}

