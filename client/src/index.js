import React from "react";
import ReactDOM from "react-dom";
import createSagaMiddleware from 'redux-saga';
import "./index.css";
import App from "./app/App";
import { Provider } from "react-redux";
import {createStore,  applyMiddleware } from 'redux';
import * as serviceWorker from "./serviceWorker";
import reducer from "./app/reducers";
import { logger } from "redux-logger";
import rootSaga from './app/sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware, logger));
 sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
