import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';
import Profile from './components/Profile';
import Navigation from './components/Navigation';

class App extends React.Component {
  render() {
    let loggedIn = !!localStorage.jwt
    // debugger
    return (
      <div>
        <BrowserRouter>
          <Route component={Navigation} />
          <Switch>
            <Route exact path="/" component={SignupForm} />
            <Route exact path="/login" component={LoginForm} />
            <Route exact path="/profile" render={(props) => (
              true ? <Profile {...props} /> : <Redirect to="/login"/>
            )} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
