import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "../components/Header/Header";
import About from "../pages/About";
import Home from "../pages/Home";
import NonFound404 from "../pages/NonFound404";

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route path="/" component={NonFound404} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
