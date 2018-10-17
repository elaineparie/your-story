import { combineReducers } from 'redux';
import postReducer from './postReducer.js';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer.js';

const rootReducer = combineReducers({
  posts: postReducer,
  // form: formReducer,
  // auth: authReducer
})

export default rootReducer;
