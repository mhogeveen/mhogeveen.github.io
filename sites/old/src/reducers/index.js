import { combineReducers } from 'redux'
import menuReducer from './menuReducer'
import positionsReducer from './positionsReducer'

export default combineReducers({
   menu: menuReducer,
   positions: positionsReducer,
})
