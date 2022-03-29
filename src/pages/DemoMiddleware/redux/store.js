
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk';
import { createPromiseMiddleware } from '../middleware/redux-promise';
import reducers from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers, 
  {},
  composeEnhancers(applyMiddleware(createPromiseMiddleware() ,thunk))
)

export default store;

