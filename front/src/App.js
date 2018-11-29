import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import EventList from "./containers/EventList";
import EventDetails from "./components/EventDetails";
//import Result from './containers/Result';
//import { Provider } from 'react-redux';
//import { createStore, applyMiddleware } from 'redux';
//import thunk from 'redux-thunk'
//import reducers from './reducers';
import Head from "./components/head";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Head />

          <Switch>
            <Route exact path="/" component={EventList} />
            <Route path="/event/:id" component={EventDetails} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
