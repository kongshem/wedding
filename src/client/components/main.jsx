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
            <p>Vi har skrevet ned litt <Link className="inline-link" to="/praktisk"><i>praktisk informasjon</i></Link> om helgen. Ta en titt på det før du svarer på om du kommer eller ikke.</p>
              <p>Gå til <Link className="inline-link" to="/rsvp"><i>kommer du</i></Link> for å svare på om du kommer eller ikke.
              Vi vil veldig gjerne ha svar fra deg om du kommer innen 1. April</p>
          </div>
      </div>
    )
  }
}
