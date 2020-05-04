import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'bulma'
// import Notifications, { notify } from 'react-notify-toast'

import Home from './components/common/Home'

const App = () => (
  <BrowserRouter>
    <>
      {/* <Notifications /> */}
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </>
  </BrowserRouter>
)

export default App