import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import EventDetails from "./components/EventDetails";
import Head from "./components/head";
import EventFilterWhere from "./components/EventFilterWhere.jsx";
import EventFilterWho from "./components/EventFilterWho.jsx";
import EventList from "./containers/EventList";
import NavBar from "./components/NavBar";
import Menu from "./components/menu";
import QuiSommesNous from "./components/quiSommesNous";
import Partenaires from "./components/partenaires";
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Head />
          <Switch>
          <Route exact path="/" component={EventFilterWhere} />
            <Route path="/events" component={EventList} />
            <Route path="/event/:id" component={EventDetails} />
            <Route path="/who" component={EventFilterWho} />
            <Route path="/menu" component={Menu} />
            <Route path="/quiSommesNous" component={QuiSommesNous} />
            <Route path="/partenaires" component={Partenaires} />
          </Switch>
          <NavBar />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
