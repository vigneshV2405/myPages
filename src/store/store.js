import {combineReducers , createStore } from 'redux';
import counterReducer from './reducers/counterReducer';
import Todoreducer from './reducers/todoReducer';

const reducers = new combineReducers({ct:counterReducer,tds:Todoreducer})
const store = createStore(reducers)
export default store;