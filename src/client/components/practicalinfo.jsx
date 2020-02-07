import React from 'react';
import Bilde from "../img/kysse.jpg";
import Bilde2 from "../img/forlovelse.jpg";
import Bilde3 from "../img/osspalognvik.jpg";
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
                <h2>Reisevei</h2>
                <p>Fra Oslo kjører man til Drammen, gjennom Kongsberg til Notodden og videre mot Nutheim. Ved Nutheim tar
                    man til høyre mot Rauland. Med normal trafikk tar kjøreturen ca 3 timer. Kommer du fra Tønsberg er
                    det raskest å kjøre via Hvittingfoss til Notodden. Du kan også søke opp "Lognvik Gård og Fjellstue" på google maps, evt sett nåla på Fjellvegen 2, 3864 Rauland.</p>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2014.5090180738378!2d8.17945031605962!3d59.67445798178096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x463f4a2614879f69%3A0xfbd766c376cd557d!2sLognvik%20G%C3%A5rd%20og%20Fjellstue%20v%2FTorstein%20Didrik%20Kongshem!5e0!3m2!1sen!2sno!4v1578219132341!5m2!1sen!2sno"
                    width="100%" height="auto" frameBorder="0" allowFullScreen=""/>
                <h2>Ankomst fredag</h2>
                <p>Når du ankommer Lognvik, finner du oss på Fjellstua, så kjør gjerne rett dit. Dersom du skal bo på Lognvik,
                    får du nøkkel og informasjon om hvor du skal bo. Når du har installert deg, er du velkommen til grilling ved
                    Fjellstua. Ta med det du ønsker å legge på grillen, samt drikke. Vi har all verdens tilbehør. Vi starter grillingen
                    kl.18.00. Dersom været ikke er på vår side, holder vi oss innendørs på Fjellstua.</p>
                <h2>Ankomst lørdag</h2>
                <p>Du som kommer på lørdag formiddag kan henvende deg ved Fjellstua frem til kl 12:00 for å motta
                    nøkkel og informasjon om hvor du skal bo. Møter du rett i kirken, ordner vi innkvartering på Lognvik mellom
                    vielsen og middagen.</p>
                <h2>Toastmaster</h2>
                <p>Joachim Kompalla er vår eminente toastmaster for helgen. Det er hyggelig med taler og andre innslag ved en
                    slik anledning. Dersom du ønsker å si noen ord på den store dagen, kan du ta kontakt med han. Frist 1. mai.</p>
                <p>Telefon: <i>911 81 008</i></p>
                <p>Epost: <i>joachim.kompalla@gmail.com</i></p>
                <h2>Antrekk</h2>
                <p>Antrekk fredag er sommerpent, men kle deg etter været.</p>
                <p>Antrekk lørdag er smoking/mørk dress. Vi synes bunad er veldig pent og håper at noen ønsker å bruke bunaden sin i kirken.</p>
                <h2>Overnatting</h2>
                <p>Vi har gleden av å tilby alle våre gjester et sted å bo på gården, eller i umiddelbar nærhet. Det er
                    7 hytter på tunet, Lognvik Fjellstue, hytta "Utsikten", hytta "Vidsyn", hytta i svingen og en hytte
                    på nabogården til Torbjørn Berge. For å gjøre det enkelt, har vi satt en pris på 200kr per person for
                    hele oppholdet. Dette kan vippses til Kathrine eller Magnus. Husk å oppgi om du ønsker overnatting hos oss når
                    du svarer på invitasjonen.</p>
                <p>
                    Det serveres enkel felles frokost på Fjellstua lørdag og søndag morgen fra kl 09:00. Dersom du har spesielle preferanser i matveien, er det fint om du tar med dette selv. Det er kjøkken på alle hyttene, så
                    dersom du ønsker å spise frokost der, er det mulig.
                </p>
                <h2>Pakkeliste</h2>
                <ul>
                    <li><p>Sengetøy</p></li>
                    <li><p>Håndkle</p></li>
                    <li><p>Mat og drikke til grilling <b>fredag</b></p></li>
                </ul>
              </div>
            </div>
        )
    }
}

export default PracticalInfo;
