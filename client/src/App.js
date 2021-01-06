import React from "react";
import "./App.css";
import Layout from './layout/Layout';
import Landing from "./views/Landing/Landing";
import Register from "./views/Register/Register";
import { Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/landing" component={Landing} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/" component={Layout} />
      </Switch>
    </div>
  );
};

export default App;
