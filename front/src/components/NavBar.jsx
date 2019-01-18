import React from "react";
import { Navbar, NavLink, NavItem } from "reactstrap";
import { Link } from "react-router-dom";
import "../App.css";
import list from "../assets/list.png";
import funnel from "../assets/funnel.png";
import map from "../assets/map.png";
import menu from "../assets/menu.png";

// Julie : NavBar fixe footer

export default class NavBar extends React.Component {
  render() {
    return (
      <div>
        <Navbar className="navbar navbar-default navbar-fixed-bottom">
          {/* Julie : Link permet de ne pas recharger la page et de garder en mémoire les choix du filtre */}
          <NavLink to="/events">
            <NavItem className="icon">
              <img src={list} width="45" height="45" alt="list" />
            </NavItem>
          </NavLink>

          <NavItem className="icon">
            <a href="/">
              <img src={funnel} width="42" height="42" alt="entonnoir" />
            </a>
          </NavItem>

          <Link to="/map">
            <NavItem className="icon">
              <img src={map} width="45" height="45" alt="map" />
            </NavItem>
          </Link>

          <Link to="/menu">
            <NavItem className="icon">
              <img src={menu} width="45" height="45" alt="menu" />
            </NavItem>
          </Link>
        </Navbar>
      </div>
    );
  }
}
