import React from 'react';
import { NavItem, NavLink } from 'react-bootstrap';
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

        return (
            <Nav id="teamList">
                {this.state.list.map((team) => {
                    <NavItem>
                        <NavLink id={team} onClick={() => this.clickedTeam(this.id.replace(/\s/g, ''))}>
                            <div className="row m-0 justify-content-center">
                                <img className='logo' src={"./assets/logos/" + team.replace(/\s/g, '') + '.png'}></img>
                                <p>{team}</p>
                            </div>
                        </NavLink>
                    </NavItem>
                })}
            </Nav>
        );
    }
}
