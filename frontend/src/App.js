import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'bulma'
// import './styles/main.scss'
// import Notifications, { notify } from 'react-notify-toast'

import NavBar from './components/NavBar/NavBar'
import HomePage from './components/HomePage/HomePage'
import SitePage from './components/SitePage/SitePage'
import Homes from './components/Homes/Homes'
import FAQs from './components/FAQs/FAQs'

// require('dotenv').config()

const App = () => (
  <>
  {/* <script type="text/javascript" src="http://free-website-translation.com/scripts/fwt.js"></script> */}
  <BrowserRouter>
    <>
      {/* <Notifications /> */}
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/sites/:id" component={SitePage} />
        <Route exact path="/homes" component={Homes} />
        <Route exact path="/faqs" component={FAQs} />
      </Switch>
      {/* <a href="http://free-website-translation.com/" id="ftwtranslation_button" hreflang="en" title=""><img src="http://free-website-translation.com/img/fwt_button_en.gif" id="ftwtranslation_image" alt="website translator plugin"/></a> */}
    </>
  </BrowserRouter>
  </>
)

export default App