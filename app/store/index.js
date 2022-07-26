import {legacy_createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import themeReducer from './themeReducer';

const store = legacy_createStore(themeReducer, applyMiddleware(thunk));

export default store;
