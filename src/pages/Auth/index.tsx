import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {} from 'components';
import { SignInForm, SignUpForm } from 'containers';

export const Auth = () => {
  return (
    <Switch>
      <Route exact path="/signin" component={SignInForm} />
      <Route exact path="/signup" component={SignUpForm} />
    </Switch>
  );
};
