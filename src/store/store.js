import {combineReducers,createStore} from 'redux'
import counterReducer from './reducers/counterReducer'
import todoReducer from './reducers/todoReducer'

const reducer = new combineReducers({c:counterReducer,td:todoReducer})
const store = createStore(reducer)

export default store