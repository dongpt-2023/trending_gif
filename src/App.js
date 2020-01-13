import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router, Route, Switch, NavLink,
} from 'react-router-dom';
import { ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Menus from './components/Menus';
import routes from './routes';
import configureStore from './configureStore';
import Login from './components/Login';

const store = configureStore();

function listComponentRouter(routes) {
  return (
    routes.map((item, index) => (
      <Route
        key={index}
        path={item.path}
        exact={item.exact}
        component={item.main}
      />
    ))
  );
}

function App() {
  const isLogin = localStorage.getItem('check_login');
  return (
    <Provider store={store}>
      <ToastContainer autoClose={8000} closeButton={false} transition={Slide} />
      <Router>
        <div className="App">
          {isLogin !== null ? <Menus />
            : <NavLink to="/login" exact> Login </NavLink>}
        </div>
        {/* content */}
        <div>
          <Switch>
            {isLogin !== null ? listComponentRouter(routes)
              : <Login />}
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
