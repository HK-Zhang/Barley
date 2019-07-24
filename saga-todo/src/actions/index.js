import { actionTypes } from '../common/actionTypes'

export function addItem(value) {
  return {
    type: actionTypes.ADD_ITEM,
    value
  }
}

export function removeItem(index) {
  return {
    type: actionTypes.REMOVE_ITEM,
    index
  }
}

export function toggleItem(index) {
  return {
    type: actionTypes.TOGGLE_ITEM,
    index
  }
}

export function modifyItem(value, index) {
  return {
    type: actionTypes.MODIFY_ITEM,
    value,
    index
  }
}