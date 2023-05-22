import React, { Suspense } from "react";
import { Router, Switch } from "react-router-dom";
import history from "./History";
import * as LazyComponent from "../utils/LazyLoaded";

import Loader from "../components/loader/Loader";

const Routes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Router history={history}>
        <Switch>
          <LazyComponent.Landing path="/" exact />
        </Switch>
      </Router>
    </Suspense>
  );
};

export default Routes;
