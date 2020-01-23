import React from "react";

import ReactDOM from "react-dom";
import "./assets/scss/main.scss";
import App from "./App";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducer from "../src/reducers/reducer";
import createSagaMiddleware from "redux-saga";
import { rootsaga } from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootsaga);

const app = (
	<Provider store={store}>
		<App />
	</Provider>
);

ReactDOM.render(app, document.getElementById("root"));
