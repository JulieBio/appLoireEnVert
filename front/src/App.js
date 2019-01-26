import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";
import MovieList from "./containers/MovieList";

import "./App.css";
import NavBar from "./components/NavBar";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={MovieList} />
            <Route path="/movie/:id" component={MovieDetails} />
          </Switch>
            <NavBar/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
