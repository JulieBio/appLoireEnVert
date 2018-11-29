import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import allReducers from './reducers';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(allReducers);

ReactDOM.render(
// Julie : le store de Redux
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();

