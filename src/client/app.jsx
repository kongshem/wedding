import React from 'react';
import Lognvik from './components/lognvik.jsx';
import WishList from './components/wishlist.jsx';
import SaveTheDate from './components/savethedate.jsx';
import Rsvp from './components/rsvp/rsvp.jsx';
import Main from "./components/main.jsx";
import ExpandMore from "@material-ui/icons/ExpandMore";
import './css/app.less';
import KM from "./img/km.png";
import Header from "./components/header/header.jsx";
import PracticalInfo from "./components/practicalinfo.jsx";
import Agenda from "./components/agenda.jsx";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

 class App extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {

    return (
        <div>
            <Router>
                <Header />
                <Switch>
                    <Route path="/praktisk">
                        <PracticalInfo />
                    </Route>
                    <Route path="/agenda">
                        <Agenda />
                    </Route>
                    <Route path="/rsvp">
                        <Rsvp onSubmit={this.handleSubmit} />
                    </Route>
                    <Route path="/lognvik">
                        <Lognvik />
                    </Route>
                    <Route path="/wishlist">
                        <WishList />
                    </Route>
                    <Route path="/">
                        <Main />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
  }
}
export default App;
