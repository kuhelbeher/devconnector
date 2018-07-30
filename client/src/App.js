import React from 'react';
import { Route, Switch } from 'react-router-dom';

import PrivateRoute from './components/common/PrivateRoute';
import './App.css';
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Dashboard from './components/dashboard/Dashboard';
import CreateProfile from './components/create-profile/CreateProfile';

const App = () => (
  <div className="App">
    <NavBar />
    <Route exact path="/" component={Landing} />
    <div className="container">
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      <Switch>
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/create-profile" component={CreateProfile} />
      </Switch>
    </div>
    <Footer />
  </div>
);

export default App;
