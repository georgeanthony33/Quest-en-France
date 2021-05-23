import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "bulma";
import "notyf/notyf.min.css";

import NavBar from "./containers/NavBar/NavBar";
import HomePage from "./containers/LandingPage/LandingPage";
import SearchPage from "./containers/SearchPage/SearchPage.js";
import SitePage from "./containers/SitePage/SitePage";
import Homes from "./containers/Homes/Homes";
import FAQs from "./containers/FAQs/FAQs";
import AllSitesPage from "./containers/AllSitesPage/AllSitesPage";
import BookHome from "./containers/BookHome/BookHome";
import LoginRegister from "./containers/LoginRegister/LoginRegister";
import ProfilePage from "./containers/ProfilePage/ProfilePage";
import BookingStatus from "./containers/BookingStatus/BookingStatus";

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
          <Route exact path="/login" component={LoginRegister} />
          <Route exact path="/register" component={LoginRegister} />
          <Route exact path="/myprofile" component={ProfilePage} />
          <Route exact path="/faqs" component={FAQs} />
          <Route
            exact
            path="/bookHome/:siteSlug/:plotSlug"
            component={BookHome}
          />
          <Route
            exact
            path="/mybooking/:bookingSlug"
            component={BookingStatus}
          />
        </Switch>
      </div>
    </>
  </BrowserRouter>
);

export default App;
