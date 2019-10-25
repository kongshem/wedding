import React from 'react';

class PracticalInfo extends React.Component{

  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="content practicalInfo">
        <h2>Reisevei</h2>
        <p>Søk opp "Lognvik Gård og Fjellstue" på google maps, evt sett nåla på Fjellvegen 2, 3864 Rauland. Fra Oslo kjører man til Drammen, gjennom Kongsberg til Notodden og videre mot Nutheim. Ved Nutheim tar man til høyre mot Rauland. Med normal trafikk tar kjøreturen ca 3 timer. Kommer du fra Tønsberg er det raskest å kjøre via Hvittingfoss til Notodden.</p>
        <p>Når du ankommer Lognvik kan du dra til Fjellstua for å motta nøkkel og informasjon om hvor du skal bo. Når du har installert deg er det grilling ved Fjellstua. Ta med det du vil grille, vi stiller med grill og tilbehør. </p>

        <h3>Pakkeliste</h3>
        <ul>
          <li>Sengetøy</li>
          <li>Håndkle</li>
          <li>Mat og drikke til grilling fredag</li>
          <li>Frokost lørdag og søndag</li>
        </ul>
      </div>
    )
  }
}

export default PracticalInfo;
