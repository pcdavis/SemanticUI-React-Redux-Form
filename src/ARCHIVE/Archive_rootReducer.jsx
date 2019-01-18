import { combineReducers } from 'redux';
import { reducer as ReduxReducer } from 'redux-form'

const rootReducer = combineReducers({
    form: ReduxReducer
})

export default rootReducer;