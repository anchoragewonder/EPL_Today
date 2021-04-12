import React from 'react';
import { NavItem, NavLink } from 'react-bootstrap';
import './nav_list.css';

export class NavList extends React.Component {
    constructor(props) {
        super(props);
        this.refOfChild = React.createRef();
        this.clickMe = this.clickMe.bind(this);
    }

    clickMe() {
        this.props.forwardRef.current.componentDidUpdate();
    }

    render() {

        return (
            <div className="nav-scroll">
                {this.props.idMatcher.map((teamName, index) => (
                    <NavItem key={index} style={{ margin: "15px 20px 5px" }} onClick={() => { this.props.action(teamName.id); this.clickMe() }}>
                        <img id="nav-logo" src={"/assets/logos/" + teamName.id + ".png"}></img>
                        <p>{teamName.name}</p>
                    </NavItem>
                ))}
            </div>
        );
    }
}
