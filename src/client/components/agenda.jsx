import React from 'react';

class Agenda extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="content agenda">

                <h1>3 dager til ende</h1>
                <h3>Fredag</h3>
                <ul>
                    <li>18:00 - ut kvelden: Grilling og hygge ved Fjellstua</li>
                </ul>
                <h3>Lørdag</h3>
                <ul>
                    <li>13:00 Vielse i Rauland kirke</li>
                    <li>15:00 Appretiff og fingermat ved Lognvik Fjellstue</li>
                    <li>17:00 Middag på Lognvik Fjellstue</li>
                </ul>
                <h3>Søndag</h3>
                <ul>
                    <li>Frokost</li>
                    <li>Avreise</li>
                </ul>
            </div>
        )
    }
}

export default Agenda;
