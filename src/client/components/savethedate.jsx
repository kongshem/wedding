import React from 'react';
import ForlovelseBilde from "../img/forlovese.jpg";

export default class SaveTheDate extends React.Component{

  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="content saveTheDate">
          <div className="ramme">
              <div className="left">
                  {/*<img src={ForlovelseBilde} />*/}
              </div>
              <div className="right">
                  <div className="overskrift">
                    Hold av datoen
                  </div>
                  <div className="innhold first">
                      Vi gifter oss helgen 26-28 juni 2020.
                  </div>
                  <div className="innhold">
                      Invitasjon vil komme senere
                  </div>
                  <div className="innhold underskrift">
                      Kathrine & Magnus
                  </div>
              </div>

          </div>
      </div>
    )
  }
}
