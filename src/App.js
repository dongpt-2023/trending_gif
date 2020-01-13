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

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Menus />
        </div>
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

export default App;
