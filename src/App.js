import React, { useState } from "react";

import LogIn from "./components/LogIn";
import Profile from "./components/Profile";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";

function App() {
  const [user, setUser] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    middleInitial: "",
    age: "",
    rank: "",
    gender: "",
    mos: "",
    uic: "",
    unitName: "",
    profile: "",
  });

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <LogIn user={user} setUser={setUser} />
          </Route>
          <Route path="/profile">
            <Profile user={user} setUser={setUser} />
          </Route>
          <Route path="/dashboard">
            <Dashboard user={user} setUser={setUser} />
          </Route>
          <LogIn />
        </Switch>
      </Router>
    </>
  );
}

export default App;
