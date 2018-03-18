import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import numbers from './numbers'

export default combineReducers({
  routing: routerReducer,
  numbers
})
