import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "bulma";

import NavBar from "./containers/NavBar/NavBar";
import HomePage from "./containers/LandingPage/LandingPage";
import SearchPage from "./containers/SearchPage/SearchPage.js";
import SitePage from "./containers/SitePage/SitePage";
import Homes from "./containers/Homes/Homes";
import FAQs from "./containers/FAQs/FAQs";
import AllSitesPage from "./containers/AllSitesPage/AllSitesPage";
import BookHome from "./containers/BookHome/BookHome";

const App = () => (
  <BrowserRouter>
    <>
      <NavBar />
      <div className="navbar-adjuster">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/search" component={SearchPage} />
          <Route exact path="/sites" component={AllSitesPage} />
          <Route exact path="/sites/:slug" component={SitePage} />
          <Route exact path="/homes" component={Homes} />
          <Route exact path="/faqs" component={FAQs} />
          <Route
            exact
            path="/bookHome/:siteSlug/:plotSlug"
            component={BookHome}
          />
        </Switch>
      </div>
    </>
  </BrowserRouter>
);

export default App;
