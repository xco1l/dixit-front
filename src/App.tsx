import React from 'react';
import 'scss/App.scss';
import { Main, Auth } from 'pages';
import { Route, Redirect, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path={'/'} render={() => <Main />} />
        <Route exact path={['/signin', '/signup']} render={() => <Auth />} />
      </Switch>
    </div>
  );
}

export default App;
