import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './components/app';
import reducers from './reducers';
import Signin from './components/auth/Signin'
import Signup from './components/auth/Signup'
import HeaderWrapper from './components/HeaderWrapper'
import HeaderBar from './components/headerBar'

const createStoreWithMiddleware = applyMiddleware()(compose((window.devToolsExtension ? window.devToolsExtension() : f=>f)(createStore)));

// import 'bootstrap/dist/css/bootstrap.css';
import './style/main.scss';


function main() {
  ReactDOM.render(
      <Provider store={createStoreWithMiddleware(reducers)}>
        <div id="application">
          <HeaderWrapper></HeaderWrapper>
          <HeaderBar/>
          <BrowserRouter>
            <Switch>
              <Route path='/' exact component={Signin}/>
              <Route path='/signup' component={Signup}/>
              <Route path='/signin' component={Signin}/>
            </Switch>
          </BrowserRouter>
        </div>
      </Provider>
    , document.querySelector('.app-wrapper'));
}

document.addEventListener('DOMContentLoaded', main);
