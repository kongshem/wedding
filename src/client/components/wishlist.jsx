import React from 'react';
import Bilde from "../img/oia.jpg";

class WishList extends React.Component {

  constructor(props) {
      super(props)
  }

  render() {
      return (
          <div className="whishlist">
              <img src={Bilde} id={"mainBilde"} align={"center"} />
              <div className="info">
                  <p>Fra gammelt av ble det gjerne gitt gaver til brudeparet for å kunne etablere et hjem. Vi er så
                      heldig at vi har det meste av det vi trenger, og det aller viktigste for oss er at du vil feire denne
                      store begivenheten sammen med oss!
                  </p>
                  <p>Skulle du likevel ønske å gi oss en gave på den store dagen ønsker vi
                      oss i hovedsak bidrag til vår bryllupsreise som går til Santorini. Du kan gjerne øremerket en aktivitet eller en spesiell opplevelse!
                  </p>

                  <p>Vi har opprettet en egen bryllupsreise-konto med kontonummer: <i>9801.54.79760</i></p>

                  <p>Vi har også opprettet ønskeliste hos <a href="https://bryllupsliste.cg.no/weddinglist/view/index/id/JfvM7wRSeRDRvHLZfRMYNexIHeeijcTb/"><i>Christiania Glassmagasin</i></a> og <a href="https://jernia.no/wishlist/e052d955-6537-464d-9f8b-784170be18e5"><i>Jernia</i></a></p>
              </div>
          </div>
      )
  }
}

export default WishList;
