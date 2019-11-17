import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
class Header extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="header">
                <div className="left">
                </div>
                <div className="center">
                    <Link to="/praktisk">PRAKTISK INFO</Link>
                    <Link to="/rsvp">RSVP</Link>
                    <Link to="/agenda">AGENDA</Link>
                    <Link to="/lognvik">OM LOGNVIK</Link>
                </div>
                <div className="right">
                </div>
            </div>
        )
    }
}

export default Header;
