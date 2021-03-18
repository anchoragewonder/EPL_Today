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

    getTeamColor(name) {
        for (let colors of this.props.idMatcher) {
            if (colors.id == name) {
                return colors.color;
            }
        }
        return "white";
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
        const teamColor = this.getTeamColor(this.props.teamName);

        const divStyle = {
            height: "45vh",
            background: teamColor,
            color: "white"
        };

        return (
            <Container fluid>
                <Row>
                    <Col md={3} id="sidebar">
                        <div style={divStyle}>
                            <h3 id="side-team-header">{this.getFullName(this.props.teamName)}</h3>
                            <img id="side-team-logo" src={'./assets/logos-big/' + this.props.teamName + '.png'}></img>
                        </div>

                    </Col>
                    <Col id="col-style" md={9} >
                        <a class='anchor' ref={this.tableRef}></a>
                        <div id="score_table" style={{ margin: "auto", }}>
                            <h2 id="score-header">RESULTS</h2>
                            {this.props.teamMatches.map((match, index) => (
                                <Container key={index} className="match-container">
                                    <div id="match-data">
                                        <Row id="top-row" className="home-away-team">
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

                                    </div>
                                    <div id="date"> {match.date} </div>
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
