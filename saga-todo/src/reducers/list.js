import {actionTypes} from '../common/actionTypes'

const initialState = {
  list: []
}

function getTodoList(state = initialState, action) {
  switch (action.type) {
    case actionTypes.UPDATE_DATA:
      return {
        ...state,
        list: action.data
      }
    default:
      return state
  }
}

export default getTodoList