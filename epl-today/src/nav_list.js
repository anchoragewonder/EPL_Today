import React from 'react';
import { NavItem, NavLink } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container';

export class NavList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: ['Arsenal', 'Aston Villa', 'Brighton & Hove Albion', 'Burnley', 'Chelsea',
                'Crystal Palace', 'Everton', 'Fulham', 'Leicster', 'Leeds United',
                'Liverpool', 'Manchester City', 'Manchester United', 'Newcastle United', 'Southhampton',
                'Sheffield United', 'Tottenham Hotspur', 'West Bromwich Albion', 'West Ham United',
                'Wolverhampton Wanderers'],
            selected: false,
        };
    }

    clickedTeam(id) {
        this.props.getTeam(id);
        this.setState({ selected: true });
    }

    render() {
        const team = this.state.list

        return (
            <Navbar expand="sm" variant="dark" bg="dark">
                <Nav className="mr-auto" style={{ display: "flex", flexDirection: "row" }}>

                    <NavItem >
                        <img src={"/assets/logos/" + team[0].replace(/\s/g, '') + ".png"}></img>
                        <p>{team[0]}</p>
                    </NavItem>
                    <NavItem >
                        <img src={"/assets/logos/" + team[1].replace(/\s/g, '') + ".png"}></img>
                        <p>{team[1]}</p>
                    </NavItem>
                    <NavItem >
                        <img src={"/assets/logos/" + team[3].replace(/\s/g, '') + ".png"}></img>
                        <p>{team[3]}</p>
                    </NavItem>
                    <NavItem >
                        <img src={"/assets/logos/" + team[4].replace(/\s/g, '') + ".png"}></img>
                        <p>{team[4]}</p>
                    </NavItem>
                    <NavItem >
                        <img src={"/assets/logos/" + team[5].replace(/\s/g, '') + ".png"}></img>
                        <p>{team[5]}</p>
                    </NavItem>
                    <NavItem >
                        <img src={"/assets/logos/" + team[6].replace(/\s/g, '') + ".png"}></img>
                        <p>{team[6]}</p>
                    </NavItem>

                </Nav>
            </Navbar>
        );
    }
}

//{this.state.list.map((team) => {
    //<NavItem>
        //<NavLink id={team} onClick={() => this.clickedTeam(this.id.replace(/\s/g, ''))}>
            //<div className="row m-0 justify-content-center">
                //<img className='logo' src={"../assets/logos/" + team.replace(/\s/g, '') + '.png'}></img>
                //<p>{team}</p>
            //</div>
        //</NavLink>
    //</NavItem> <img src={"/assets/logos/" + this.state.list[index].replace(/\s/g, '') + ".png"}></img>
//})}