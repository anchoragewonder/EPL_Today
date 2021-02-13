import React from 'react';
import { NavItem, NavLink } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

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
            <Navbar expand="lg" variant="light" bg="light" id="nav_start">
                <Nav.Link>
                    <img src={"/assets/logos/" + team[0] + ".png"}></img>
                    <p>{team[0]}</p>
                </Nav.Link>
                <NavItem>
                    <img src={"/assets/logos/" + team[1].replace(/\s/g, '') + ".png"}></img>
                    <p>{team[1]}</p>
                </NavItem>
                <NavItem>
                    <img src="/assets/logos/Arsenal.png"></img>
                    <p>{team[2]}</p>
                </NavItem>
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
    //</NavItem>
//})}