import * as React from "react";
import "./App.css";
import AboutComponent from "./Components/About/About";
import NavBar from "./Components/NavBar/NavBar";
import Dashboard from "./Components/Dashboard/Dashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FooterComponent from "./Components/Footer/Footer";
import PrecautionsComponent from "./Components/Precautions/Precautions";
import NotFound from "./Components/Errors/NotFound";
import Feedback from "./Components/Feedback/Feedback";

const history = require("history").createBrowserHistory;
function App(props) {
  return (
    <Router history={history}>
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route path="/" exact>
            <Dashboard />
          </Route>
          <Route path="/dashboard" exact>
            <Dashboard />
          </Route>
          <Route path="/about" exact>
            <AboutComponent />
          </Route>
          <Route path="/precautions" exact>
            <PrecautionsComponent />
          </Route>
          <Route path="/feedback" exact>
            <Feedback />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <FooterComponent />
      </React.Fragment>
    </Router>
  );
}

export default App;
