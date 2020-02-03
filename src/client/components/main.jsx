import React from 'react';
import ForsideBilde from '../img/bryllup2_resized.jpg';
import {Link} from "react-router-dom";

export default class Main extends React.Component{

  render(){

    return(
      <div className="welcome">
          <img src={ForsideBilde} id={"mainBilde"} align={"center"} />
          <div className="info">
            <h3 className="title">Vi gifter oss!</h3>
            <p>Vi gifter oss lørdag 27. juni 2020 og vi vil gjerne dele
              helgen 26-28. juni med deg!
            </p>
              <p>Vi ønsker å samle familie og gode venner til en bryllupshelg på Lognvik. Vi ser for oss en
                  uformell fest fredag ettermiddag og kveld, en fin vielse i Rauland kirke med påfølgende
                  bryllupsmiddag og -fest på Lognvik lørdag. Søndag runder vi av med en rolig frokost.
              </p>
              <p>Vi håper du har holdt av helgen. Gå til <Link className="inline-link" to="/rsvp"><i>kommer du</i></Link> for å svare.
                  Vi vil veldig gjerne høre fra deg innen 1. April.</p>
              <p>For mer informasjon om dagen, se <Link className="inline-link" to="/praktisk"><i>praktisk informasjon.</i></Link></p>
          </div>
      </div>
    )
  }
}
