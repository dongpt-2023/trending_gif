import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import Home from './components/home';
import './App.css';

import reducer from './reducers/index';

const middlewares = [thunk];

const store = createStore(reducer, applyMiddleware(...middlewares));

function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
