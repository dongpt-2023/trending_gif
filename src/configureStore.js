import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducer from './reducers/index';
import rootSaga from './sagas';

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = sagaMiddleware;
  const store = createStore(reducer, applyMiddleware(middlewares));
  sagaMiddleware.run(rootSaga);
  return store;
};

export default configureStore;
