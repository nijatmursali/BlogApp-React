import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Category from './screens/Category';
import Single from './screens/Single';
import ErrorPage from './screens/ErrorPage';
import Home from './components/Home';

import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/category">
            <Category />
          </Route>
          <Route path="/single">
            <Single />
          </Route>
          <Route path="*">
            <ErrorPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
