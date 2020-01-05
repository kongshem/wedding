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
                    <Link to="/">Kathrine & Magnus</Link>
                </div>
                <div className="center">

                </div>
                <div className="right">
                    <Link to="/praktisk">Praktisk info</Link>
                    <Link to="/rsvp">Rsvp</Link>
                    <Link to="/agenda">Agenda</Link>
                    <Link to="/lognvik">Om Lognvik</Link>
                </div>
            </div>
        )
    }
}

export default Header;
