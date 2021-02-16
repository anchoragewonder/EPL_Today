import React from 'react';
import { NavItem, NavLink } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Link from 'react-scroll';

export class NavList extends React.Component {
    constructor(props) {
        super(props);
        this.refOfChild = React.createRef();
        this.clickMe = this.clickMe.bind(this);
    }

    clickMe() {
        this.props.forwardRef.current.scrollToScore();
    }

    render() {

        return (
            <div style={{ display: "flex", flexDirection: "row", overflowX: "scroll", backgroundColor: "white" }}>
                {this.props.idMatcher.map((teamName, index) => (
                    <NavItem key={index} style={{ margin: "15px 20px 5px" }} onClick={() => { this.props.action(teamName.id); this.clickMe() }}>
                        <img src={"/assets/logos/" + teamName.id + ".png"} style={{ width: "70px", height: '70px' }}></img>
                        <p>{teamName.name}</p>
                    </NavItem>
                ))}
            </div>
        );
    }
}
