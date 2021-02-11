'use strict';

class NavList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list =['Arsenal', 'AstonVilla', 'BrightonandHoveAlbion', 'Burnley', 'Chelsea'
                , 'CrystalPalace', 'Everton', 'Fulham', 'Leicster', 'LeedsUnited',
                'Liverpool', 'ManchesterCity', 'ManchesterUnited', 'Newcastle', 'Southhampton',
                'SheffieldUntied', 'TottenhamHotspur', 'WestBromwichAlbion', 'WestHamUnited',
                'WolverhamptonWanderers']
        };
    }

    render() {

        return (
            <ul>
                {this.state.list.map(team => (
                    <li>
                        <a>
                            <div>
                                <img></img>
                                <p></p>
                            </div>
                        </a>
                    </li>
                ))}
            </ul>

        );
    }
}

let domContainer = document.querySelector('#like_button_container');
ReactDOM.render(<LikeButton />, domContainer);