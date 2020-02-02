import React from 'react';
import Bilde from "../img/kysse.jpg";

class WishList extends React.Component {

  constructor(props) {
      super(props)
  }

  render() {
      return (
          <div className="whishlist">
              <img src={Bilde} id={"mainBilde"} align={"center"} />
              <div className="info">
                  <p>Fra gammelt av ble det jo gitt gaver til brudeparet for å kunne etablere et hjem. Vi er så heldig at vi har det meste vi trenger,
                      og det aller viktisgte er at dere vil feire sammen med oss! Skulle du likevel ønske å gi oss en gave på den store dagen ønsker vi
                      oss i hovedsak bidrag til vår bryllupsreise som går til Santorini. Gjerne øremerket en aktivitet eller en spesiell opplevelse vi
                      kan ha der!
                  </p>

                  <p>Vi har opprettet en egen bryllupsreise-konto med kontonummer: <i>9801.54.79760</i></p>

                  <p>Vi har også opprettet ønskeliste hos <a href="https://bryllupsliste.cg.no/weddinglist/view/index/id/JfvM7wRSeRDRvHLZfRMYNexIHeeijcTb/"><i>Christiania Glassmagasin</i></a></p>
              </div>
          </div>
      )
  }
}

export default WishList;
