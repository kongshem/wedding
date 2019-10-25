import React from 'react';
import Lognvik from './components/lognvik.jsx';
import SaveTheDate from './components/savethedate.jsx';
import Rsvp from './components/rsvp/rsvp.jsx';
import Main from "./components/main.jsx";
import ExpandMore from "@material-ui/icons/ExpandMore";
import './css/app.less';
import KM from "./img/km.png";
import PracticalInfo from "./components/practicalinfo.jsx";
import Agenda from "./components/agenda.jsx";

 class App extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {

    return (
        <div>
          <Rsvp onSubmit={this.handleSubmit} />
          <PracticalInfo />
          <Agenda />
        </div>
    )
  }
}
export default App;
