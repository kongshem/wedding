import React from 'react';
import Lognvik2 from "../img/lognvikgard_2.jpg";
import Bilde from "../img/osspalognvik.jpg";

export default class Lognvik extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {

        return (
            <div className="content2 lognvik">
                <div className={"bilder"}>
                  <img src={Lognvik2} id={"lognvikBilde"} align={"center"}/>
                  <img src={Bilde} id={"lognvikBilde2"} align={"center"}/>
                </div>
                <div className={"info"}>
                    <h3>Lognvik Søndre</h3>
                    <p>Gården Lognvik Søndre er fra 16- og 1700 tallet. Gården ble opprinnelig kjøpt av Magnus’ oldefar i 1933. I
                        dag er det foreldrene til Magnus som eier og driver gården.
                    </p>
                    <p>
                        Lognvik betyr "den lugne viken" og er et paradis hele året, men også en turistvirksomhet basert på natur og
                        kultur. Der tilbringer vi mye tid sammen, går fine fjellturer på beina, lange ski-, jakt- og fisketurer.
                        Når man har en så fantastisk plass som dette i
                        familien, er det også veldig hyggelig å dele den sammen med sine nærmeste. Derfor blir det mange årlige
                        venneturer til Lognvik. Vi tror Nico også trives enormt godt her oppe, med all den plassen han kan boltre seg
                        på. Det synes vi er veldig koselig!
                    </p>
                    <p>
                        Lognvik Søndre er en landbrukseiendom bestående av omtrent 6600 dekar landområde fordelt på dyrket
                        mark, skog og fjell. Vi har 25 bygninger – inkludert en fjellstue, (Lognvik Fjellstue). De fleste bygningene er
                        bygget om til hytter og leies ut på åremål eller i ferieperioder. Tunet på gården (12 bygninger) er fredet av
                        Riksantikvaren. Veien mellom Øyfjell og Rauland deler tunet i to, der 10 av bygningene står på sørsiden og 2
                        på nordsiden.
                    </p>
                    <p>
                        Den største bygningen på tunet heter Storstua og var opprinnelig bygget med en etasje. Andre etasje ble
                        påbygget i ettertid og var i sin tid den første "yvistoge" i Rauland. Yvistoga er smykket med fantastiske
                        rosemalte vegger, tak og innredning. Maleren heter Olav Torgjusson, en kunstner fra Uppigard Groven i
                        Åmotsdal. I sin tid sov folkefortelleren Jørgen Moe i en av himmelsengene i Yvistoga på Storstua. I dag heter
                        den Mo-senga :)
                    </p>
                    <p>Dersom du ønsker å lese mer om Lognvik, se <a href="https://no.wikipedia.org/wiki/Lognvik_g%C3%A5rd">her</a>.</p>
                </div>
            </div>
        )
    }
}
