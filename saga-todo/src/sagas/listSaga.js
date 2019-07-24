import { put, call, select, take } from "redux-saga/effects";
import { actionTypes } from "../common/actionTypes";

export const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export function* removeItem() {
  try {
    return yield call(delay, 500);
  } catch (err) {
    yield put({ type: actionTypes.ERROR });
  }
}

export function* removeItemFlow() {
  while (true) {
    let request = yield take(actionTypes.REMOVE_ITEM);
    let response = yield call(removeItem, request.index);
    let tempList = yield select(state => state.getTodoList.list);
    let list = [];
    list = list.concat(tempList);
    list.splice(request.index, 1);
    yield put({
      type: actionTypes.UPDATE_DATA,
      data: list
    });
  }
}

export function* toggleItem(value) {
  try {
    return yield call(delay, 1000);
  } catch (err) {
    yield put({ type: actionTypes.ERROR });
  }
}

export function* toggleItemFlow() {
  while (true) {
    let request = yield take(actionTypes.TOGGLE_ITEM);
    let response = yield call(toggleItem, request.index);
    let tempList = yield select(state => state.getTodoList.list);
    let list = [];
    list = list.concat(tempList);
    let obj = list[request.index];
    obj.finished = !obj.finished;
    yield put({
      type: actionTypes.UPDATE_DATA,
      data: list
    });
  }
}

export function* modifyItem(value) {
  try {
    return yield call(delay, 500);
  } catch (err) {
    yield put({ type: actionTypes.ERROR });
  }
}

export function* modifyItemFlow() {
  while (true) {
    let request = yield take(actionTypes.MODIFY_ITEM);
    let response = yield call(modifyItem, request.index);
    let tempList = yield select(state => state.getTodoList.list);
    let list = [];
    list = list.concat(tempList);
    let obj = list[request.index];
    obj.title = request.value;
    yield put({
      type: actionTypes.UPDATE_DATA,
      data: list
    });
  }
}
