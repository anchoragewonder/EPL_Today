import React, { useRef } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
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
            <Container fluid>
                <Row>
                    <Col md={3} style={{ textAlign: "center", paddingLeft: "1em", background: "#282c34" }}>
                        <div style={{ background: "red", height: "80vh" }}>
                            <h3>TEAM NAME</h3>
                        </div>

                    </Col>
                    <Col md={9} style={{ background: "#282c34" }}>
                        <div ref={this.tableRef} id="score_table" style={{ margin: "auto", }}>
                            {this.props.teamMatches.map((match, index) => (
                                <Container key={index} className="match-container">

                                    <Row className="home-away-team">
                                        <Col id="homeLogo" className="logo_score_style">
                                            <img className="score-logo" src={"./assets/logos/" + match.homeTeam + ".png"}></img>
                                        </Col>
                                        <Col id="homeName">
                                            <p className="team-text">{this.getFullName(match.homeTeam)}</p>
                                        </Col>
                                        <Col>
                                            <GetScoreWithColor score={match.homeScore} match={match} />
                                        </Col>
                                    </Row>

                                    <Row id="date" >{match.date}</Row>

                                    <Row className="home-away-team">
                                        <Col id="awayLogo" className="logo_score_style" >
                                            <img className="score-logo" src={"./assets/logos/" + match.awayTeam + ".png"}></img>
                                        </Col>
                                        <Col id="awayName">
                                            <p className="team-text">{this.getFullName(match.awayTeam)}</p>
                                        </Col>
                                        <Col>
                                            <GetScoreWithColor score={match.awayScore} match={match} />
                                        </Col>
                                    </Row>

                                </Container>
                            ))
                            }
                        </div>
                    </Col>
                </Row>
            </Container>

        );
    }
}
