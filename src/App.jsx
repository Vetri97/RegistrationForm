import React from "react";
import { Router } from "react-router-dom";
import history from "./routes/History";
import Routes from "./routes";
import "./App.scss";
import { connect } from "react-redux";

const App = () => {
  return (
    <div>
      <Router history={history}>{<Routes />}</Router>
    </div>
  );
};

export default connect()(App);
