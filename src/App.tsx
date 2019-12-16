import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Login from './containers/login';
import Dashboard from './containers/dashboard';
import NotFound from './containers/notFound';
// import CustomizedSnackbars from './components/Notification';

const App: React.FC = () => {
  return (
    <>
    {/* <CustomizedSnackbars 
        message={'state.notification.message'} 
        variant={'success'} 
        handleClose={() => console.log('dispatch(closeNotification()')} 
        open={true} /> */}
        <Switch>
      <Route path='/' component={Login} exact={true} />
      <Route path='/dashboard' component={Dashboard} exact={true} />
      <Route component={NotFound} />
    </Switch>
    </>
    
  );
}

export default App;
