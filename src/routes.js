import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import PokeInfo from './pages/PokeInfo';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/pokemon/:id" component={PokeInfo} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
