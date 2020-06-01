import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'bulma'
import './styles/main.scss'
// import Notifications, { notify } from 'react-notify-toast'

import NavBar from './components/common/NavBar'
import Home from './components/common/Home'
import Site from './components/sites/Site'

require('dotenv').config()

const App = () => (
  <BrowserRouter>
    <>
      {/* <Notifications /> */}
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/sites/:id" component={Site} />
      </Switch>
    </>
  </BrowserRouter>
)

export default App