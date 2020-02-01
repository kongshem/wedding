import React from 'react';

class PracticalInfo extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="content2 practicalInfo">
                <h2>Reisevei</h2>
                <p>Søk opp "Lognvik Gård og Fjellstue" på google maps, evt sett nåla på Fjellvegen 2, 3864 Rauland. Fra
                    Oslo kjører man til Drammen, gjennom Kongsberg til Notodden og videre mot Nutheim. Ved Nutheim tar
                    man til høyre mot Rauland. Med normal trafikk tar kjøreturen ca 3 timer. Kommer du fra Tønsberg er
                    det raskest å kjøre via Hvittingfoss til Notodden.</p>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2014.5090180738378!2d8.17945031605962!3d59.67445798178096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x463f4a2614879f69%3A0xfbd766c376cd557d!2sLognvik%20G%C3%A5rd%20og%20Fjellstue%20v%2FTorstein%20Didrik%20Kongshem!5e0!3m2!1sen!2sno!4v1578219132341!5m2!1sen!2sno"
                    width="100%" height="auto" frameBorder="0" allowFullScreen=""/>
                <h3>Ankomst fredag</h3>
                <p>Når du ankommer Lognvik kan du dra til Fjellstua for å motta nøkkel og informasjon om hvor du skal
                    bo. Når du har installert deg er det grilling ved Fjellstua. Ta med det du vil grille og drikke, vi
                    stiller med grill og tilbehør. Vi starter grillingen kl 18. Dersom været ikke er på vår side vil
                    grillingen foregå inne på fjellstua.</p>
                <h3>Ankomst lørdag</h3>
                <p>Dere som kommer på lørdag kan henvende dere ved fjellstua innen kl 12:00 eller etter vielsen for å
                    motta nøkkel og informasjon om hvor dere skal bo</p>
                <h3>Toastmaster</h3>
                <p>Joachim Kompalla er vår eminente toastmaster for helgen. Dersom du ønsker å si noen ord på den store
                    dagen kan dere ta kontakt med han.</p>
                <i>911 81 008</i><br></br>
                <i>joachim.kompalla@gmail.com</i>
                <h3>Antrekk</h3>
                <p>Antrekk fredag er sommerpent, men kle dere etter været.</p>
                <p>Antrekk lørdag er smoking/mørk dress. Vi synes bunad er veldig pent og håper at noen ønsker å bruke bunaden sin i kirken.</p>
                <h3>Boforhold</h3>
                <p>Vi har gleden av å tilby alle våre gjester et sted å bo på gården, eller i umiddelbar nærhet. Det er
                    7 hytter på tunet, Lognvik Fjellstue, hytta "Utsikten", hytta "Vidsyn", hytta i svingen og en hytte
                    på nabogården til Torbjørn Berge. For å gjøre det enkelt har vi satt en pris på 200kr per person for
                    hele oppholdet. Dette kan vippses til Kathrine eller Magnus. Husk å oppgi om dere ønsker dette når
                    dere svarer på invitasjonen.</p>
                <p>
                    Det blir servert enkel felles frokost lørdag morgen fra kl 09:00 og søndag morgen fra kl 09:00 på
                    Fjellstua. Dersom du har spesielle behov må du ta med dette selv. Det er kjøkken på alle hyttene, så
                    dersom dere ønsker å spise frokost der må dere ordne dette selv.
                </p>
                <h3>Pakkeliste</h3>
                <ul>
                    <li>Sengetøy</li>
                    <li>Håndkle</li>
                    <li>Mat og drikke til grilling fredag</li>
                </ul>
            </div>
        )
    }
}

export default PracticalInfo;
