import React from 'react';
import { NavItem, NavLink } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Link from 'react-scroll';

export class NavList extends React.Component {

    /*changeBackground(e) {
        e.target.style.background = 'grey';
    } find different hover event handlers this is a permanent change to the state not a temporary one*/

    render() {

        return (
            <div style={{ display: "flex", flexDirection: "row", overflowX: "scroll", backgroundColor: "white" }}>
                {this.props.idMatcher.map((teamName, index) => (
                    <NavItem key={index} style={{ margin: "15px 20px 5px" }} onClick={() => this.props.action(teamName.id)}>
                        <Link to="score_table" smooth={true}>
                            <img src={"/assets/logos/" + teamName.id + ".png"} style={{ width: "70px", height: '70px' }}></img>
                            <p>{teamName.name}</p>
                        </Link>
                    </NavItem>
                ))}
            </div>
        );
    }
}
