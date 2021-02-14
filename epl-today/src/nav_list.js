import React from 'react';
import { NavItem, NavLink } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container';

export class NavList extends React.Component {

    /*changeBackground(e) {
        e.target.style.background = 'grey';
    } find different hover event handlers this is a permanent change to the state not a temporary one*/

    render() {

        return (
            <div style={{ display: "flex", flexDirection: "row", overflowX: "scroll" }}>
                {this.props.idMatcher.map((teamName, index) => (
                    <NavItem key={index} style={{ margin: "10px 10px 5px" }} onClick={() => this.props.action(teamName.id)}>
                        <img src={"/assets/logos/" + teamName.id + ".png"}></img>
                        <p>{teamName.name}</p>
                    </NavItem>
                ))}
            </div>
        );
    }
}
