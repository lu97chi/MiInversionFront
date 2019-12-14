import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createBrowserHistory } from "history";
import { Router } from 'react-router-dom';
import createSagaMiddleware from 'redux-saga'

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import rootSagas from './joinSagas';
import { reducers } from './joinReducers';

const customHistory = createBrowserHistory();
const rootReducer = combineReducers(reducers)
const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSagas);

ReactDOM.render(
    <Provider store={store}>
        <Router history={customHistory}>
            <App />
        </Router>
    </Provider>
    , document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
