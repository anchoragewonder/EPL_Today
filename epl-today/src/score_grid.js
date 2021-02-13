import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

export class ScoreGrid extends React.Component {

    render() {
        return (
            <Container id="score_table">
                {this.props.teamMatches.map((games, index) => (
                    <Card
                        key={index}
                        bg="light"
                        text="dark"
                        style={{ width: '75%' }}
                        className="mb-3 rounded_pill">
                        <Card.Body>
                            <div>
                                <div className="home-away-team d-flex flex-row">
                                    <Col className="justify-content-start">
                                        <img id="homeLogo" src="assets/logos/"></img>
                                    </Col>
                                    <Col id="homeName" className="m-auto center-text">
                                        <p>{games.homeTeam}</p>
                                    </Col>
                                </div>
                                <div id="homeScore">{games.homeScore}</div>
                                <div id="date"></div>
                                <div id="awayScore">{games.awayScore}</div>
                                <div className="home-away-team d-flex flex-row">
                                    <Col className="justify-content-start">
                                        <img id="awayLogo" src="assets/logos/"></img>
                                    </Col>
                                    <Col id="awayName" className="m-auto center-text">
                                        <p>{games.awayTeam}</p>
                                    </Col>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                ))}
            </Container>
        );
    }

}

