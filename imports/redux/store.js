import { applyMiddleware, createStore } from 'redux';
//import { composeWithDevTools } from 'redux-devtools-extension';
//import logger from 'redux-logger';
//import { routerMiddleware } from 'react-router-redux';

import Reducers from './combine-reducers';

export default createStore(
   Reducers
   //composeWithDevTools()
);
