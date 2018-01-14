import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Staff from "./pages/Staff";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

const App = () =>
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Staff} />
        <Route exact path="/staff" component={Staff} />
        <Route exact path="/staff/:id" component={Detail} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>;

export default App;

/// add one for staff and firestation//
