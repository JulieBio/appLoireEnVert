import React, { Component } from "react";
import { HashRouter, Route, Switch, NavLink } from "react-router-dom";
import EventDetails from "./components/EventDetails";
import EventFilterWhere from "./components/EventFilterWhere.jsx";
import EventFilterWho from "./components/EventFilterWho.jsx";
import EventList from "./containers/EventList";
import NavBar from "./components/NavBar";
import Menu from "./components/menu";
import QuiSommesNous from "./components/quiSommesNous";
import Partenaires from "./components/partenaires";
import "./App.css";
import MapPage from "./containers/MapPage";
import "./components/EventDetails.css";
import "./components/buttonToTop.css";
import ScrollToTop from "./components/ScrollToTop";
import { Navbar, NavItem, Nav } from "reactstrap";
import { Link } from "react-router-dom";
import list from "./assets/list.png";
import funnel from "./assets/funnel.png";
import map from "./assets/map.png";
import menu from "./assets/menu.png";

//Monica: ScrollToTop pour mettre à jour le scroll
class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <div className="containerGeneral">
            <Navbar className="notreNavbar navbar-default navbar-fixed-bottom">
              {/* Julie : Link permet de ne pas recharger la page et de garder en mémoire les choix du filtre */}
              <Nav>
                <NavItem className="icon">
                  <NavLink to="/events" activeClassName="activeNB">
                    <img src={list} alt="list" />
                  </NavLink>
                </NavItem>

                <NavItem className="icon">
                  <NavLink exact to="/" activeClassName="activeNB">
                    <img src={funnel} alt="entonnoir" />
                  </NavLink>
                </NavItem>

                <NavItem className="icon">
                  <NavLink to="/map" activeClassName="activeNB">
                    <img src={map} alt="map" />
                  </NavLink>
                </NavItem>

                <NavItem className="icon">
                  <NavLink to="/menu" activeClassName="activeNB">
                    <img src={menu} alt="menu" />
                  </NavLink>
                </NavItem>
              </Nav>
            </Navbar>
            <Switch>
              <ScrollToTop>
                <Route exact path="/" component={EventFilterWhere} />
                <Route path="/events" component={EventList} />
                <Route path="/event/:id" component={EventDetails} />
                <Route path="/who" component={EventFilterWho} />
                <Route path="/menu" component={Menu} />
                <Route path="/quiSommesNous" component={QuiSommesNous} />
                <Route path="/partenaires" component={Partenaires} />
                <Route path="/map" component={MapPage} />
              </ScrollToTop>
            </Switch>
          </div>
          {/*      <NavBar /> */}
        </HashRouter>
      </div>
    );
  }
}

export default App;
