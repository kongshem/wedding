import React from 'react';
import ForsideBilde from '../img/forside.jpg';

export default class Main extends React.Component{

  render(){

    return(
      <div className="welcome">
        <img src={ForsideBilde} id={"mainBilde"} align={"center"} />
      </div>
    )
  }
}
