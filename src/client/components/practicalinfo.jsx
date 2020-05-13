import React from 'react';
import Bilde from "../img/kysse.jpg";
import Bilde2 from "../img/forlovelse.jpg";
class PracticalInfo extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="content2 practicalInfo">
              <div className="bilder">
                <img src={Bilde} id={"infoBilde"} align={"center"} />
                <img src={Bilde2} id={"infoBilde2"} align={"center"} />
              </div>
              <div className={"info"}>
                <h2>Ankomst fredag</h2>
                <p>Når du ankommer Lognvik, kjør rett til gårdstunet. Det vil være skiltet. Dersom du skal bo på Lognvik,
                    får du nøkkel og informasjon om hvor du skal bo. Når du har installert deg, er du velkommen til grilling ved
                    Fjellstua. Ta med det du ønsker å drikke, vi stiller med grillmat og tilbehør. Vi starter grillingen
                    kl.18.00. Vi er veldig avhengige av været denne kvelden, så dersom vær-gudene ikke er på vår side er
                    det ikke gjennomførbart mtp smittevern. Vi kommer med mer informasjon om denne dagen når vi har værmeldingen
                    for hånd.
                </p>
                <h2>Ankomst lørdag</h2>
                <p>Du som kommer på lørdag formiddag kan henvende deg ved Fjellstua frem til kl 12:00 for å motta
                    nøkkel og informasjon om hvor du skal bo. Møter du rett i kirken, ordner vi innkvartering på Lognvik mellom
                    vielsen og middagen. </p>
                <h2>Toastmaster</h2>
                <p>Joachim Kompalla er vår eminente toastmaster for helgen. Det er hyggelig med taler og andre innslag ved en
                    slik anledning. Dersom du ønsker å si noen ord på den store dagen, kan du ta kontakt med han. Frist 1. mai.</p>
                <p>Telefon: <i>911 81 008</i></p>
                <p>Epost: <i>joachim.kompalla@gmail.com</i></p>
                <h2>Antrekk</h2>
                <p>Antrekk fredag er sommerpent, men kle deg etter været. Stilettsko anbefales ikke da vi skal ha litt leker utendørs.</p>
                <p>Antrekk lørdag er smoking/mørk dress. Vi synes bunad er veldig pent og håper at noen ønsker å bruke bunaden sin i kirken.</p>
                <h2>Overnatting</h2>
                <p>Vi har gleden av å tilby alle våre gjester et sted å bo på gården, eller i umiddelbar nærhet. Det er
                    7 hytter på tunet, Lognvik Fjellstue, hytta "Utsikten", hytta "Vidsyn", hytta i svingen og en hytte
                    på nabogården til Torbjørn Berge. For å gjøre det enkelt, har vi satt en pris på 200kr per person for
                    hele oppholdet. Dette kan vippses til Kathrine (482 22 795) eller Magnus (415 65 906). Husk å oppgi om du ønsker overnatting hos oss når
                    du svarer på invitasjonen.</p>
                  <p>Vi har plassert personer i samme husstand på de ulike hyttene, dere vil få beskjed om hvor dere skal bo før bryllupshelgen så dere
                    blant annet kan pakke riktig sengetøy. Lurer du på hvem du er blitt plassert på hytte sammen, ta kontakt med Magnus eller Kathrine. Det vil                    bli plassert ut antibac på alle hyttene, bruk dette flittig.</p>
                <p>
                    Det er kjøkken på alle hyttene, så det vil være enkelt for dere å lage dere frokost der både lørdag og søndag. På grunn av smittevern vil vi                   ikke servere noe felles frokost.
                </p>
                  <p>
                      Det er ikke dusj på alle hyttene, men en egen hytte med dusj som de hyttene disponerer. Det vil bli
                      hengt opp en liste hvor man kan skrive seg opp, samt plassert ut antibac for desinfisering før og etter bruk.
                  </p>

                  <h2>Smittevern i kirken og middagen</h2>
                    <p>Dere vil komme til å møte mange nye og kjente fjes denne helgen, så vi har kommet på noen forslag
                        som dere kan bruke når dere hilser! Et skikkelig kongelig bukk eller herskapelig nei, kanskje en
                        1 meters air-five?!</p>
                    <p>Det er viktig at alle husstander holder 1 meters avstand i kirken. Vi har vært i dialog med presten og
                        de har egne regler som må overholdes under vielser. Dette innebærer blant annet ingen bruk av 2.etg
                        i kirken og der vil bli vist hvor dere skal sitte. Plassering blir etter husstander. Presten har
                        lov til å ta på brudeparet under vielsen, men dessverre kan ikke gjester gjøre det samme. Når vi står
                        utenfor kirken er det hyggelig med gratulasjoner på 1 meters avstand.</p>
                    <p>Ved mottagelsen på fjellstua vil det bli servert aperitif og porsjonspakket fingermat. Antibac vil også
                        være tilgjengelig.</p>
                    <p>Under middagen har vi sørget for at alle husstander vil sitte minst 1 meter fra hverandre på bordene, samt mellom
                        bordene. Det vil være antibac tilgjengelig ved alle bord. Servitørene og kokkene har gode rutiner på
                        smittevern. Det vil ikke være mulig å hente drikke fra baren, men servitørene vil sørge for at glassene
                        aldri står tomme.</p>
                    <p>Det vil være tilgjengelige toaletter på fjellstua under middagen og festen, men dersom du ønsker å bruke
                        toalettet på hytta du bor på er det selvfølgelig mulig. Vi kommer til å sette frem antibac på alle toaletter
                        for før og etter bruk. I tillegg vil vi sørge for det vil være enkelt å stå i do-kø.</p>
                    <p>Kake og drikke under festen vil bli servert av servitørene. Vi gjør også oppmerksom på at man må overholde
                        1 meters avstand på dansegulvet ut i de sene nattestimene.</p>
                    <p>Selv om dagen kommer til å bli litt annerledes enn vi hadde planlagt, så håper vi at vi kommer til å få en
                        vel så bra feiring med mye kjærlighet, trygge rammer, god musikk og en skikkelig fest til langt ut i de sene nattestimene!
                    </p>
                  <h2>Reisevei</h2>
                  <p>Fra Oslo kjører man til Drammen, gjennom Kongsberg til Notodden og videre mot Nutheim. Ved Nutheim tar
                      man til høyre mot Rauland. Med normal trafikk tar kjøreturen ca 3 timer. Kommer du fra Tønsberg er
                      det raskest å kjøre via Hvittingfoss til Notodden. Du kan også søke opp "Lognvik Gård og Fjellstue" på google maps, evt sett nåla på Fjellvegen 2, 3864 Rauland.</p>
                  <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2014.5090180738378!2d8.17945031605962!3d59.67445798178096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x463f4a2614879f69%3A0xfbd766c376cd557d!2sLognvik%20G%C3%A5rd%20og%20Fjellstue%20v%2FTorstein%20Didrik%20Kongshem!5e0!3m2!1sen!2sno!4v1578219132341!5m2!1sen!2sno"
                      width="100%" height="auto" frameBorder="0" allowFullScreen=""/>
                <h2>Pakkeliste</h2>
                  <p>Vi vil gi dere individuell informasjon om hvor dere skal bo og hva slags sengetøy dere skal ha med.</p>
                <ul>
                    <li><p>Sengetøy</p></li>
                    <li><p>Håndkle</p></li>
                    <li><p>Drikke til grilling <b>fredag</b></p></li>
                    <li><p>Frokost lørdag og søndag</p></li>
                    <li><p>Klær etter været</p></li>
                </ul>
              </div>
            </div>
        )
    }
}

export default PracticalInfo;
