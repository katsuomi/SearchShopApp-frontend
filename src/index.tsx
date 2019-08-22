import React from 'react';
import ReactDOM from 'react-dom';
import { createStore,applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import './index.css';
import reducer from './reducers'
import App from "./presentationalComponents/App";
import ShopPageComponent from "./presentationalComponents/ShopPageComponent";
import * as serviceWorker from './serviceWorker';
import {BrowserRouter,Route,Switch} from "react-router-dom";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension"

const enhancer = process.env.NODE_ENV === "development" ? composeWithDevTools(applyMiddleware(thunk)) : applyMiddleware(thunk)
const store = createStore(reducer,enhancer)
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} /> 
        <Route exact path="/shops/:id" component={ShopPageComponent} /> 
      </Switch>
    </BrowserRouter>
  </Provider>, 
  document.getElementById('root')
);
serviceWorker.unregister();


