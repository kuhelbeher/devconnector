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
import EditProfile from './components/EditProfile/EditProfile';
import AddExperience from './components/AddCredentials/AddExperience';
import AddEducation from './components/AddCredentials/AddEducation';
import Profiles from './components/Profiles/Profiles';
import Profile from './components/Profile/Profile';
import NotFound from './components/NotFound/NotFound';

const App = () => (
  <div className="App">
    <NavBar />
    <Route exact path="/" component={Landing} />
    <div className="container">
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/profiles" component={Profiles} />
        <Route exact path="/profile/:handle" component={Profile} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/create-profile" component={CreateProfile} />
        <PrivateRoute exact path="/edit-profile" component={EditProfile} />
        <PrivateRoute exact path="/add-experience" component={AddExperience} />
        <PrivateRoute exact path="/add-education" component={AddEducation} />
        <Route exact path="/not-found" component={NotFound} />
      </Switch>
    </div>
    <Footer />
  </div>
);

export default App;
