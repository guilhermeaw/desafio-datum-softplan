import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Countries from '../pages/Countries';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Countries} />
    </Switch>
  );
}

export default Routes;