import * as React from "react";
import "./App.css";
import AboutComponent from "./Components/About/About";
import NavBar from "./Components/NavBar/NavBar";
import Dashboard from "./Components/Dashboard/Dashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FooterComponent from "./Components/Footer/Footer";
import PrecautionsComponent from "./Components/Precautions/Precautions";

const history = require("history").createBrowserHistory;
function App(props) {
  return (
    <Router history={history}>
      <Switch>
        <React.Fragment>
          <NavBar />
          <Route path="/" exact>
            <Dashboard />
          </Route>
          <Route path="/about">
            <AboutComponent />
          </Route>
          <Route path="/precautions">
            <PrecautionsComponent />
          </Route>
          <FooterComponent />
        </React.Fragment>
      </Switch>
    </Router>
  );
}

export default App;
