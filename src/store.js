import { createStore, applyMiddleware, compose } from 'redux'
import rootreducer from './reducer/rootreducer';

import thunk from 'redux-thunk'

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      
    }) : compose;

const middleware = [thunk];
const enhancer = composeEnhancers(
    applyMiddleware(...middleware),
    
    );

const store = createStore(rootreducer,enhancer);

export default store;