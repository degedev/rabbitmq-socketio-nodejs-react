import React from "react";
import { Switch, Route } from "react-router-dom";

import Login from "./pages/login";
import Order from "./pages/order";
import Store from "./pages/store";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/order/:id/:buyId" component={Order} />
      <Route path="/store/:id" component={Store} />
    </Switch>
  );
};

export default Routes;
