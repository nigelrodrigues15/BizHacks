import React from "react";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import Landing from "./landing/landing";
import NavbarContainer from "./navbar/navbar_container";
import CompanyContainer from "./company/company_container";
import ResearchContainer from "./research/research_container";

const App = () => (
  <div>
    <NavbarContainer />
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/company/:companyTik" component={CompanyContainer} />
      <Route exact path="/research/:companyTik" component={ResearchContainer} />
    </Switch>
  </div>
);

export default App;
