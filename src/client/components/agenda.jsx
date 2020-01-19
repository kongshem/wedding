import React from 'react';
import Bilde from "../img/agenda.jpg";

class Agenda extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="content2 agenda">
                <img src={Bilde} id={"img"} align={"center"} />
                <div className="info">
                    <h3>Fredag 26. juni</h3>
                        <p>18:00 - ut kvelden: Grilling og hygge ved Fjellstua</p>
                    <h3>Lørdag 27. juni</h3>
                        <p>09:00 Frokost på Fjellstua</p>
                        <p>13:00 Vielse i Rauland kirke</p>
                        <p>15:00 Appretiff og fingermat ved Lognvik Fjellstue</p>
                        <p>17:00 Middag på Lognvik Fjellstue</p>
                    <h3>Søndag 28. juni</h3>
                        <p>Frokost</p>
                        <p>Avreise</p>
                </div>
            </div>
        )
    }
}

export default Agenda;
