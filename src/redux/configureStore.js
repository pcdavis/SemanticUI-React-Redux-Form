import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension' // npm install -save-dev redux-devtools-extension
import rootReducer from './rootReducer';

export const configureStore = (preloadedState) => {
  
  const middlewares = [ ];

  const middlewareEnhancer = applyMiddleware(...middlewares);
  const storeEnhancers = [middlewareEnhancer];
  const composedEnhancer  = composeWithDevTools(...storeEnhancers);

  const store = createStore(
    rootReducer,
    preloadedState,
    composedEnhancer
  )

  console.log('%c configureStore-getState(): ','color: blue',store.getState())
  return store;

}


