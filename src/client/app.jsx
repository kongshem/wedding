import React from 'react';
import Lognvik from './components/lognvik.jsx';
import SaveTheDate from './components/savethedate.jsx';
import Rsvp from './components/rsvp/rsvp.jsx';
import Main from "./components/main.jsx";
import ExpandMore from "@material-ui/icons/ExpandMore";
import './css/app.less';
import KM from "./img/km.png";

 class App extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {

    return (
        <div>
          <SaveTheDate />
          <Rsvp onSubmit={this.handleSubmit} />
        </div>
    )
  }
}
export default App;
