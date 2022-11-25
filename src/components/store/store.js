import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import booksReducer from './books/reducer';
import { applyMiddleware, combineReducers, createStore } from 'redux';

const reducers = combineReducers({
  booksReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
export default store;
