import React from "react";
import ReactDOM from "react-dom";
import 'semantic-ui-css/semantic.min.css';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import 'antd/dist/antd.css';

import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Working from "./pages/Working"
import Scheduler from "./pages/Scheduler";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import CreateUser from './pages/CreateUser'

class App extends React.Component {

  render () {
    const isLoggedIn = this._isLoggedIn();

    if (this.props.loggedInUserQuery.loading) {
      return (<div>Loading</div>)
    } else {
      return (
        <Router >
          <div>
            <Nav isLoggedIn={isLoggedIn} logout={this._logout} />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route path='/signup' component={CreateUser} />
              <PrivateRoute isLoggedIn={isLoggedIn} exact path="/working" component={Working} />
              <PrivateRoute isLoggedIn={isLoggedIn} exact path="/scheduler" component={Scheduler} />
              <Route exact path="/firefighters/:id" component={Detail} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
      )
    }
  }

  _logout = () => {
    // remove token from local storage and reload page to reset apollo client
    localStorage.removeItem('graphcoolToken')
    window.location.reload()
  }

  _showLogin = () => {
    this.props.history.replace('/login')
  }

  _showSignup = () => {
    this.props.history.replace('/signup')
  }

  _isLoggedIn = () => {
    return this.props.loggedInUserQuery.loggedInUser && this.props.loggedInUserQuery.loggedInUser.id !== null
  }

};

const PrivateRoute = ({ component: Component, isLoggedIn, ...rest }) => (
  <Route {...rest} render={props => (
    isLoggedIn ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
)

const LOGGED_IN_USER_QUERY = gql`
  query LoggedInUserQuery {
    loggedInUser {
      id
    }
  }
`

const WrappedApp = graphql(LOGGED_IN_USER_QUERY, {
  name: 'loggedInUserQuery',
  options: {fetchPolicy: 'network-only'}
})(App);

export default WrappedApp;
