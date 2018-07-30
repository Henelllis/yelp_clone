import React, { Component } from 'react';
import {browserHistory, Router, Route} from 'react-router';
import ReactDOM from 'react-dom';

import App from './containers/App/App';
import makeRoutes from './routes';
import './app.css';

const routes = makeRoutes();
 

const mountNode = document.querySelector('#root');
ReactDOM.render(
        <App 
            history={browserHistory}
            routes={routes} />
    , mountNode);

export default App;