import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import PokeInfo from './pages/PokeInfo';
import Generation from './pages/Generation';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/pokemon/:id" component={PokeInfo} />
      <Route path="/generation/:id" component={Generation} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
