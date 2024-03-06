import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import createSagaMiddleware from 'redux-saga';


// Import the base styles and any additional styles you need.
import "tailwindcss/base.css";
import "tailwindcss/components.css";
import "tailwindcss/utilities.css";
import { BrowserRouter} from "react-router-dom";
import { applyMiddleware, createStore } from "redux";
import rootSaga from "./Redux/Saga/rootSaga";
import { Provider } from "react-redux";
import rootReducer from "./Redux/Reducers/rootReducer";

const sagaMiddleWare= createSagaMiddleware()
const store = createStore(rootReducer,applyMiddleware(sagaMiddleWare))
sagaMiddleWare.run(rootSaga)


ReactDOM.render(
  <BrowserRouter>
        <Provider store={store}>

      <App />
    ,
    </Provider>

  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
