import React, { Component } from "react";
import "./App.css";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import EventList from "./components/EventList";
import EventDetails from "./components/EventDetails";

//import Result from './containers/Result';
//import { Provider } from 'react-redux';
//import { createStore, applyMiddleware } from 'redux';
//import thunk from 'redux-thunk'
//import reducers from './reducers';
import Head from "./components/head";

class App extends Component {
  constructor() {
    super();
    this.state = {
      type: null,
      nom: null,
      quand: null,
      image: null
    };
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={EventList} />
            <Route path="/event/:id" component={EventDetails} />
          </Switch>

          <div>
            <Head />
            <EventList />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
