import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import './index.css';
import  App  from './components/App.js';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { applyMiddleware } from 'redux';


const store = createStore(reducers, applyMiddleware(thunk, logger));



ReactDOM.render(
<Provider store={store}>
<App />
</ Provider>, 
document.getElementById('root'));

