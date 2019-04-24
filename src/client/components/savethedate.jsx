import React from 'react';
import Favorite from "@material-ui/icons/Favorite";
import LognvikEmblem from '../img/favicon.jpg';

export default class SaveTheDate extends React.Component{

  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="content saveTheDate">
          <div className="ramme">
              <div className="left">
              </div>
              <div className="right">
                  <div className="overskrift">
                    Hold av datoen
                  </div>
                  <div className="innhold first">
                      Vi gifter oss helgen 26-28 juni 2020
                  </div>
                  <div className="innhold">
                      Invitasjon vil komme senere
                  </div>
                  <div className="innhold underskrift">
                      Kathrine & Magnus
                  </div>
              </div>

          </div>
          <div className="kalender">
              <a target="_blank" href="https://calendar.google.com/event?action=TEMPLATE&amp;tmeid=MzdjZmxyYWJkOGpyZXVqaXBmaGN0ZGhpY3Iga29uZ3NoZW0uZW50ZXJ0YWlubWVudEBt&amp;tmsrc=kongshem.entertainment%40gmail.com">
                  Hold av datoen i Google kalender</a>
              <Favorite />
          </div>
      </div>
    )
  }
}
