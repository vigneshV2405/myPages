import {combineReducers,createStore} from 'redux'
import counterReducer from './reducers/counterReducer'
import todoReducer from './reducers/todoReducer'
import CountriesReducer from './reducers/countriesReducer'

const reducer = new combineReducers({c:counterReducer,td:todoReducer,cr:CountriesReducer})
const store = createStore(reducer)

export default store