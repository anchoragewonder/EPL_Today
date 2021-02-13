import React from 'react';
import { NavItem, NavLink } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container';

export class NavList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                'Arsenal', 'Aston Villa', 'Burnley', 'Chelsea', 'Crystal Palace',
                'Everton', 'Fulham', 'Leicester City', 'Leeds United', 'Liverpool',
                'Manchester City', 'Manchester United', 'Newcastle United', 'Southampton',
                'Sheffield United', 'Tottenham Hotspur', 'West Bromwich Albion', 'West Ham United',
                'Wolverhampton Wanderers',
            ],
            selected: false,
        };
    }

    /*changeBackground(e) {
        e.target.style.background = 'grey';
    } find different hover event handlers this is a permanent change to the state not a temporary one*/

    render() {

        return (
            <div style={{ display: "flex", flexDirection: "row", overflowX: "scroll" }}>
                {this.state.list.map((teamName, index) => (
                    <NavItem key={index} style={{ margin: "10px 10px 5px" }} onClick={() => this.props.action(teamName)}>
                        <img src={"/assets/logos/" + teamName.replace(/\s/g, '') + ".png"}></img>
                        <p>{teamName}</p>
                    </NavItem>
                ))}
            </div>
        );
    }
}
