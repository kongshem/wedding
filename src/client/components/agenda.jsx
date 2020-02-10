import React from 'react';
import Bilde from "../img/bryllupsbilde_resized.jpg";

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
                        <p>Kl 18:00 - ut kvelden: Grilling og hygge ved Fjellstua</p>
                        <p><i>Antrekk: Sommerpent</i></p>
                    <h3>Lørdag 27. juni</h3>
                        <p>Kl 13:00: Vielse i Rauland kirke</p>
                        <p><i>Antrekk: Bunad/Smoking/mørk dress</i></p>
                        <p>Kl 15:00: Aperitiff og fingermat ved Lognvik Fjellstue</p>
                        <p><i>Antrekk: Smoking/mørk dress</i></p>
                        <p>Kl 17:00: Middag og fest ved Lognvik Fjellstue</p>
                    <h3>Søndag 28. juni</h3>
                        <p>Kl 09:00-12:00: Frokost på Lognvik Fjellstue</p>
                </div>
            </div>
        )
    }
}

export default Agenda;
