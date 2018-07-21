import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk'
import { Router, Route, Switch } from 'react-router-dom';
import App from './components/app';
import reducers from './reducers';
import Signin from './components/auth/Signin'
import Signup from './components/auth/Signup'
import HeaderWrapper from './components/HeaderWrapper'
import HeaderBar from './components/headerBar'
import history from './history'
import Dashboard from './components/Dashboard'
import requireAuth from './components/requireAuth'

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(compose((window.devToolsExtension ? window.devToolsExtension() : f=>f)(createStore)));

// import 'bootstrap/dist/css/bootstrap.css';
import './style/main.scss';


function main() {
  ReactDOM.render(
      <Provider store={createStoreWithMiddleware(reducers)}>
        <div id="application">
          <HeaderWrapper></HeaderWrapper>
          <HeaderBar/>
          <Router history={history}>
            <Switch>
              <Route path='/' exact component={Signin}/>
              <Route path='/signup' component={Signup}/>
              <Route path='/signin' component={Signin}/>

              <Route path='/dashboard' component={requireAuth(Dashboard)}/>
            </Switch>
          </Router>
        </div>
      </Provider>
    , document.querySelector('.app-wrapper'));
}

document.addEventListener('DOMContentLoaded', main);
