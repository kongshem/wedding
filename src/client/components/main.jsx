import React from 'react';
import ForlovelseBilde from '../img/forlovese.jpg';

export default class Main extends React.Component{

  render(){
    return(
      <div className="content welcome">
        <img src={ForlovelseBilde} />
      </div>
    )
  }
}
