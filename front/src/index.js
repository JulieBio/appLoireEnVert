import React from "react";
import ReactDOM from "react-dom";
import thunk from "redux-thunk";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import allReducers from "./reducers";
import App from "./App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

// importer leaflet
import 'leaflet/dist/leaflet.css';


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
