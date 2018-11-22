import React, { Component } from "react";
import "./App.css";
import EventList from "./components/EventList";

//import Result from './containers/Result';
//import { Provider } from 'react-redux';
//import { createStore, applyMiddleware } from 'redux';
//import thunk from 'redux-thunk'
//import reducers from './reducers';

class App extends Component {
  render() {
    return (
      <div className="App">
        <EventList />
      </div>
    );
  }
}

export default App;