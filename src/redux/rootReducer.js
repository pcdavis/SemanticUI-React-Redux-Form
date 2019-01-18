import { combineReducers } from 'redux';
import { reducer as ReduxReducer } from 'redux-form'
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  routing: routerReducer,
  form: ReduxReducer
});

export default rootReducer;