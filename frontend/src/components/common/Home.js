import React from 'react'
// import { Link, withRouter } from 'react-router-dom'

class Home extends React.Component {
  state = {}

  render() {
    return (
      <div className="homepage-outer-container">

        <div className="color-overlay"></div>
        
        <div className="homepage-inner-container">
          <div className="title-outer-container">
            <div className="title-inner-container">
              <h1 className="home-title">Hello</h1>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home