import { booksAPI } from "../../api/api";

import { takeEvery, put, call, all } from "redux-saga/effects";

import {
  LOAD_ALL_BOOKS,
  setBooks,
  showResults,
  setStartIndex,
  setRequestInProgress,
} from "./books/actions.js";

//Loading array of books
function* workerLoadBooks(action) {
  if (action.payload.showResult) {
    yield put(setRequestInProgress(true));
  }
  const books = yield call(booksAPI.search, {
    ...action.payload,
  });

  yield put(setBooks(books));
  yield put(setStartIndex(action.payload.startIndex));
  if (action.payload.showResult) {
    yield put(showResults());
    yield put(setRequestInProgress(false));
  }
}
export function* watchLoadBooks() {
  yield takeEvery(LOAD_ALL_BOOKS, workerLoadBooks);
}

export default function* rootSaga() {
  yield all([watchLoadBooks()]);
}
