import React from 'react';
import {render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './stores/dataStore'
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './App';
import './index.css';
import Search from './components/search/';


render((
<Provider store={store}>
  <Router history={browserHistory}>
    <Route path="/" component={App} >
    	<IndexRoute component={Search}/>
    </Route>
  </Router>
</Provider>
), document.getElementById('root'))
