import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Countries from '../pages/Countries';
import CountryDetails from '../pages/CountryDetails';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Countries} />
      <Route path="/countries:id" component={CountryDetails} />
    </Switch>
  );
}

export default Routes;