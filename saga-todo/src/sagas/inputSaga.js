import { put, call, take, select } from "redux-saga/effects";
import { actionTypes } from "../common/actionTypes";

export const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export function* addItem(value) {
  try {
    return yield call(delay, 500);
  } catch (err) {
    yield put({ type: actionTypes.ERROR });
  }
}

export function* addItemFlow() {
  while (true) {
    let request = yield take(actionTypes.ADD_ITEM);
    let response = yield call(addItem, request.value);
    let tempList = yield select(state => state.getTodoList.list);
    let list = [];
    list = list.concat(tempList);
    const tempObj = {};
    tempObj.title = request.value;
    tempObj.id = list.length;
    tempObj.finished = false;
    list.push(tempObj);
    yield put({
      type: actionTypes.UPDATE_DATA,
      data: list
    });
  }
}
