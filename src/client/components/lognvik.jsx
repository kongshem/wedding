import React from 'react';
import Lognvik2 from "../img/lognvikgard_2.jpg";

export default class Lognvik extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="content2 lognvik">
                <div className="paragraf">
                    <img src={Lognvik2} id={"lognvik2"} align={"center"}/>
                    <div className="text">
                        <h2>Lognvik Søndre</h2>
                        <p>Lognvik Søndre Gård er familien til Magnus sin gård i Rauland i Telemark fra 16- og 17-hundretallet. Gården ble opprinnelig kjøpt av Magnus sin oldefar i år 1933. Etter dette var det Magnus sin farfar som overtok etter sin far. I dag er det faren til Magnus som eier og driver gården.
                        </p>
                        <p>
                            Lognvik betyr "den lugne viken" og har i hele Magnus sitt liv vært hans ferie-paradis. Så fort annledningen har bydd seg har Magnus hatt et ønske om å tilbringe tid på denne fantastiske plassen. Det har vært veldig viktig for Magnus å dele denne plassen med sine nærmeste, så hver sommer de siste 10 årene har det vært en årlig vennetur til Lognvik.
                        </p>
                        <p>
                            Kathrine ble tidlig introdusert for Lognvik og tilbragte sin første påskeferie sammen med Magnus på Lognvik. Med årene har vi brukt mye av ferien vår her oppe, da det tilbyr veldig fine turmuligheter både med og uten ski for oss sammen med Nico.
                        </p>
                        <p>
                            Lognvik Søndre er en landbrukseiendom bestående av omtrent 6600 dekar landområde fordelt på dyrket
                            og udyrket mark, skog og fjell, samt 25 bygninger – inkludert en fjellstue, (Lognvik Fjellstue). De
                            fleste bygninger leies ut på åremål eller i ferieperioder. Tunet på gården (12 bygninger) er fredet av Riksantikvaren. Veien mellom Øyfjell og Rauland deler tunet i to, der 10 av bygningene står på sørsiden og 2 på nordsiden.
                        </p>
                        <p>
                            Den største bygningen på tunet heter storstua og var opprinnelig bygget med kun 1 etasje. Andre etasje ble påbygget i ettertid og var i sin tid den første "yvistoge" i Rauland. Yvistoge er utsmykket i fantastiske rosemalinger av Olav Torgjusson, en kunstner fra Uppigard Groven i Åmotsdal. I sin tid sov folkefortelleren Jørgen Moe i en av himmelsengene i yvistoge på Storstua.
                        </p>

                    </div>
                </div>
            </div>
        )
    }
}
