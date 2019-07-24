import {combineReducers} from 'redux'
import getTodoCount from './header'
import getTodoList from './list'

const reducer = combineReducers({
  getTodoCount,
  getTodoList
})

export default reducer