// for ES2015 features that babel is unable to transpile, need a polyfill (eg: Object.assign)
import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
// browserHistory assumes modern browsers only that have support for HTML5 push state (i.e. NOT hash based urls)
import {Router, browserHistory} from 'react-router';
import routes from './routes';
//Webpack can import CSS files too!
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// setup router
render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('app')
);
