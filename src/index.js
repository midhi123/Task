import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap.js';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import * as serviceWorker from './serviceWorker';
ReactDOM.render(
        <App />
    , document.getElementById('root'));

serviceWorker.unregister();