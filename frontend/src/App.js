import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'bulma'
import './styles/main.scss'
import 'bulma-carousel'
// import Notifications, { notify } from 'react-notify-toast'

import NavBar from './components/common/NavBar'
import Home from './components/common/Home'

const App = () => (
  <BrowserRouter>
    <>
      {/* <Notifications /> */}
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </>
  </BrowserRouter>
)

export default App