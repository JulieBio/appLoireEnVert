import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import allReducers from "./reducers";

// importer leaflet
import 'leaflet/dist/leaflet.css';


import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";



const store = createStore(allReducers, applyMiddleware(thunk));

ReactDOM.render(
  // Julie : le store de Redux
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
//ReactDOM.render(<App />, document.getElementById('root'));
