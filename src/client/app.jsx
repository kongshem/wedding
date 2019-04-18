import React from 'react';
import Lognvik from './components/lognvik.jsx';
import SaveTheDate from './components/savethedate.jsx';
import PracticalInfo from './components/practicalinfo.jsx';
import ReactPageScroller from 'react-page-scroller';
import Main from "./components/main.jsx";
import ExpandMore from "@material-ui/icons/ExpandMore";
import './app.less';

export default class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {currentPage: 1};
    this._pageScroller = null;
    this.pageOnChange = this.pageOnChange.bind(this);
    this.goToPage = this.goToPage.bind(this);
  }
  goToPage(eventKey) {
    this._pageScroller.goToPage(eventKey);
  };

  pageOnChange(number) {
    console.log('pageOnChange');
    console.log(number);
    this.setState({currentPage: number});
  };

  render() {

    return <React.Fragment>
      <div className="header sticky">
        <button onClick={() => this.goToPage(0)} className="test">HJEM</button>
        <button onClick={() => this.goToPage(1)}>SAVE THE DATE</button>
        <button onClick={() => this.goToPage(2)}>OM LOGNVIK</button>
        <button onClick={() => this.goToPage(3)}>PRAKTISK INFO</button>
      </div>

      {/*<Header goToFunc={this.goToPage}/>*/}
      {this.state.currentPage < 4 &&
        <div className="arrow bounce">
          <ExpandMore onClick={() => this.goToPage(this.state.currentPage)} color={"primary"} fontSize={"large"}/>
        </div>
      }
      <ReactPageScroller ref={c => this._pageScroller = c} pageOnChange={this.pageOnChange}>
        <Main />
        <SaveTheDate />
        <Lognvik />
        <PracticalInfo />
      </ReactPageScroller>
    </React.Fragment>
  }
}
