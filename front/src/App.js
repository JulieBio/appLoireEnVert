import React, { Component } from "react";
import "./App.css";
//import { BrowserRouter, Route, Link } from 'react-router-dom';
import EventList from "./containers/EventList";
//import Result from './containers/Result';
//import { Provider } from 'react-redux';
//import { createStore, applyMiddleware } from 'redux';
//import thunk from 'redux-thunk'
//import reducers from './reducers';
import Head from "./components/head";

class App extends Component {
  render() {
    return (
      <div>
        <Head />
        <EventList />
      </div>
    );
  }
}

export default App;
