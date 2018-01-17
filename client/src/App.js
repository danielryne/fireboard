import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Firefighters from "./pages/Firefighters";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import Login from "./pages/login";
import Working from "./pages/Working"
import Scheduler from "./pages/Scheduler";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

const App = () =>
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/working" component={Working} />
        <Route exact path="/scheduler" component={Scheduler} />
        <Route exact path="/firefighters" component={Firefighters} />
        <Route exact path="/firefighters/:id" component={Detail} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>;

export default App;
