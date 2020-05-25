import React, { useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'
// import { notify } from 'react-notify-toast'
import Auth from '../common/Auth'

const NavBar = () => {
  const [ navOpen, setNavOpen ] = useState(false)
  const [ scrollY, setScrollY ] = useState(0)

  const toggleNavbar = () => {
    setNavOpen(true)
  }

  const handleLogout = () => {
    Auth.logout()
    // notify.show('Come back soon!', 'custom', 3000, { background: '#FFFFF0' })
    this.props.history.push('/')
  }

  // const userID = Auth.getPayload().sub

  useEffect(() => {
    window.addEventListener('scroll', () => setScrollY(window.scrollY))
    return () => window.removeEventListener('scroll', () => setScrollY(window.scrollY))
  }, []);

  return (
    <>
      <nav className={scrollY < 45 ? 'navbar is-dark is-size-5 contacts-nav' : 'closed'}>
        <div className="container">
          <div className={`navbar-menu ${navOpen ? 'is-active' : ''}`}>
            <div className="navbar-brand">
              <a href="mailto:georgeanthony33@gmail.com">
                <div class="contact-links">
                  <i class="fas fa-envelope"></i>
                  <p>sales@questenfrance.com</p>
                </div>
              </a>
              <div class="contact-links">
                <i class="fas fa-phone"></i>
                <p>01204 415425 or 07985 093397</p>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <nav className="navbar is-dark is-size-5 is-fixed-top">
        <div className="container">
          <div className="navbar-brand">
            <Link className="navbar-item" to="/"><div className={scrollY < 45 ? 'logo' : 'logo small'}></div></Link>
            <Link className="navbar-item" to="/sites/france">Sites France</Link>
            <Link className="navbar-item" to="/sites/portugal">Sites Portugal</Link>
            <a 
              className={`navbar-burger ${navOpen ? 'is-active' : ''}`}
              onClick={toggleNavbar}
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div className={`navbar-menu ${navOpen ? 'is-active' : ''}`}>
            <div className="navbar-end">
              <Link className="navbar-item" to={`/profile`}>Bookings</Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
 
export default withRouter(NavBar)