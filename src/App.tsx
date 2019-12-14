import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Login from './containers/login';
import Dashboard from './containers/dashboard';
import NotFound from './containers/notFound';

const App: React.FC = () => {
  return (
    <Switch>
      <Route path='/' component={Login} exact={true} />
      <Route path='/dashboard' component={Dashboard} exact={true} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default App;
