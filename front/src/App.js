import React, { Component } from 'react';
import './App.css';
<<<<<<< HEAD
import { BrowserRouter, Route, Link } from 'react-router-dom';
=======
import EventList from './containers/EventList';
>>>>>>> 6cce52c6ec1ee911112e1dd0afb400596cbf8890
//import Result from './containers/Result';
//import { Provider } from 'react-redux';
//import { createStore, applyMiddleware } from 'redux';
//import thunk from 'redux-thunk'
//import reducers from './reducers';
import Head from './components/head';
import EventList from './components/EventList';

class App extends Component {
  render() {
    return (
        <div>
          <Head/>
<<<<<<< HEAD
          <EventList/>
=======
          <EventList />
>>>>>>> 6cce52c6ec1ee911112e1dd0afb400596cbf8890
        </div>
    );
  }
}

export default App;
