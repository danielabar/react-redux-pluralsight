// for ES2015 features that babel is unable to transpile, need a polyfill (eg: Object.assign)
import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import configureStore from './store/configureStore';
// Provider is higher order component that attaches store to react container components
import {Provider} from 'react-redux';
// browserHistory assumes modern browsers only that have support for HTML5 push state (i.e. NOT hash based urls)
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import {loadCourses} from './actions/courseActions';
//Webpack can import CSS files too!
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();
store.dispatch(loadCourses());

// setup router, wrapped in provider
render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
