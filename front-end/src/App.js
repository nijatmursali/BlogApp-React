import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Category from './screens/Category';
import Single from './screens/Single';
import ErrorPage from './screens/ErrorPage';
import Home from './components/Home';

function App() {
  return (
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
  );
}

export default App;
