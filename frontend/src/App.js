import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'bulma'
// import './styles/main.scss'
// import Notifications, { notify } from 'react-notify-toast'

import NavBar from './components/NavBar/NavBar'
import HomePage from './components/HomePage/HomePage'
import SitePage from './components/SitePage/SitePage'
import Homes from './components/Homes/Homes'

// require('dotenv').config()

const App = () => (
  <BrowserRouter>
    <>
      {/* <Notifications /> */}
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/sites/:id" component={SitePage} />
        <Route exact path="/homes" component={Homes} />
      </Switch>
    </>
  </BrowserRouter>
)

export default App