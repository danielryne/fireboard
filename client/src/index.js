import React from "react";
import ReactDOM from "react-dom";
import 'semantic-ui-css/semantic.min.css';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';
import { HttpLink } from 'apollo-link-http';

import 'antd/dist/antd.css';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Working from "./pages/Working"
import Scheduler from "./pages/Scheduler";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Register from "./pages/Login/Register";

const client = new ApolloClient({
  link: new HttpLink(),

  cache: new InMemoryCache(),
});

const App = () => (
  <ApolloProvider client={client}>
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/working" component={Working} />
          <Route exact path="/scheduler" component={Scheduler} />
          <Route exact path="/firefighters/:id" component={Detail} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  </ApolloProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));
