import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import numbers from './numberStore'

export default combineReducers({
  routing: routerReducer,
  numbers
})
