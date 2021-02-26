import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Countries from '../pages/Countries';
import CountryDetails from '../pages/CountryDetails';
import CountryEdit from '../pages/CountryEdit';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Countries} />
      <Route path="/countries/:id" exact component={CountryDetails} />
      <Route path="/countries/:id/edit" component={CountryEdit} />
    </Switch>
  );
}

export default Routes;