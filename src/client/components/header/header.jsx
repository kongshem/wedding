import React from 'react';
import { slide as Menu } from 'react-burger-menu'
import {
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
                    <Link to="/rsvp">Kommer du?</Link>
                    <Link to="/praktisk">Praktisk info</Link>
                    <Link to="/agenda">Bryllupet</Link>
                    <Link to="/wishlist">Ønskeliste</Link>
                    <Link to="/lognvik">Om Lognvik</Link>
                </div>
                <div className="mobile" >
                    <Menu right>
                      <Link to="/rsvp">Kommer du?</Link>
                      <Link to="/praktisk">Praktisk info</Link>
                      <Link to="/agenda">Bryllupet</Link>
                      <Link to="/wishlist">Ønskeliste</Link>
                      <Link to="/lognvik">Om Lognvik</Link>
                    </Menu>
                </div>
            </div>
        )
    }
}

export default Header;
