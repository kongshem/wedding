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
                        <p>Lognvik Søndre Gård er familien til Magnus sin gård i Rauland i Telemark fra 16- og 17-hundretallet. Gården ble opprinnelig kjøpt av Magnus sin oldefar i år 1933. I dag er det foreldrene til Magnus som eier og driver gården.
                        </p>
                        <p>
                            Lognvik betyr "den lugne viken" og er et ferie-paradis for oss hele året. Vi tilbringer mye tid sammen her opp til å gå fine fjellturer, lange skiturer, jakt og fiske. Når man har en så fantastisk plass som dette i familien så er det også veldig hyggelig å dele den sammen med sine nærmeste, så det blir mange årlige venneturer opp til Lognvik. Vi tror Nico også trives enormt mye her opp med all den plassen han kan boltre seg i, noe vi synes er veldig koselig.
                        </p>
                        <p>
                            Lognvik Søndre er en landbrukseiendom bestående av omtrent 6600 dekar landområde fordelt på dyrket
                            og udyrket mark, skog og fjell, samt 25 bygninger – inkludert en fjellstue, (Lognvik Fjellstue). De
                            fleste bygninger leies ut på åremål eller i ferieperioder. Tunet på gården (12 bygninger) er fredet av Riksantikvaren. Veien mellom Øyfjell og Rauland deler tunet i to, der 10 av bygningene står på sørsiden og 2 på nordsiden.
                        </p>
                        <p>
                            Den største bygningen på tunet heter Storstua og var opprinnelig bygget med kun 1 etasje. Andre etasje ble påbygget i ettertid og var i sin tid den første "yvistoge" i Rauland. Yvistoge er utsmykket i fantastiske rosemalinger av Olav Torgjusson, en kunstner fra Uppigard Groven i Åmotsdal. I sin tid sov folkefortelleren Jørgen Moe i en av himmelsengene i yvistoge på Storstua.
                        </p>

                    </div>
                </div>
            </div>
        )
    }
}
