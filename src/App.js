import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Home/Dashboard";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import NewBillingEntry from "./pages/NewBillingEntry/NewBillingEntry";
import Profile from "./pages/Profile/Profile";
import Reset from "./pages/ResetPassword/Reset";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/reset" component={Reset} />
          <Route path="/new-billing-entry" component={NewBillingEntry} />
          <Route path="/profile" component={Profile} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
