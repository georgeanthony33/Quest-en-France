import React from 'react'
import { Link, withRouter } from 'react-router-dom'
// import { notify } from 'react-notify-toast'
import Auth from '../common/Auth'

class NavBar extends React.Component {
  state = { navOpen: false }

  toggleNavbar = () => {
    this.setState({ navOpen: !this.state.navOpen })
  }
 
  handleLogout = () => {
    Auth.logout()
    // notify.show('Come back soon!', 'custom', 3000, { background: '#FFFFF0' })
    this.props.history.push('/')
  }
 
  // componentDidUpdate(prevProps) {
  //   if (this.props.location.pathname !== prevProps.location.pathname) {
  //     this.setState({ navOpen: false })
  //   } 
  // }
 
  render() {
    const userID = Auth.getPayload().sub
    return (
      <nav className="navbar is-dark is-size-5">
        <div className="container">
          <div className="navbar-brand">
            <Link className="navbar-item" to="/"><div className="quest-logo"></div></Link>
            <Link className="navbar-item" to="/sites/france">Sites France</Link>
            <Link className="navbar-item" to="/sites/portugal">Sites Portugal</Link>
            <a 
              className={`navbar-burger ${this.state.navOpen ? 'is-active' : ''}`}
              onClick={this.toggleNavbar}
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div className={`navbar-menu ${this.state.navOpen ? 'is-active' : ''}`}>
            <div className="navbar-end">
              <Link className="navbar-item" to={`/profile`}>👤 Bookings</Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }
 }
 
 export default withRouter(NavBar)