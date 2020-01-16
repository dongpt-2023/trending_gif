import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menus from './components/Menus';
import routes from './routes';
import configureStore from './configureStore';

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

export default () => {
  return (
    <Provider store={store}>
      <Router>
        <Menus />
        {/* content */}
        <div>
          <Switch>
            {listComponentRouter(routes)}
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}
