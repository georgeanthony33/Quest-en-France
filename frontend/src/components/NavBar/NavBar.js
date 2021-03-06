import React, { useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'
// import { notify } from 'react-notify-toast'
import Auth from '../Common/Auth'
import './navbar.scss'

const NavBar = () => {
  const [ navOpen, setNavOpen ] = useState(false)
  const [ scrollY, setScrollY ] = useState(0)

  const toggleNavbar = () => {
    setNavOpen(!navOpen)
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
  }, [])

  return (
    <>
      <nav className={scrollY < 45 ? 'navbar is-size-5 contacts-nav is-transparent' : 'closed'}>
        <div className="container">
          <div className={`navbar-menu ${navOpen ? 'is-active' : ''}`}>
            <div className="navbar-brand">
              <a href="mailto:georgeanthony33@gmail.com">
                <div className="contact-links">
                  <i className="fas fa-envelope"></i>
                  <p>sales@questenfrance.com</p>
                </div>
              </a>
              <div className="contact-links">
                <i className="fas fa-phone"></i>
                <p>01204 415425 or 07985 093397</p>
              </div>
              <div className="contact-links">
                <i className="fas fa-phone"></i>
                <p>Ireland/Europe: 0044 1204 415425 or 0044 7985 093397</p>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <nav className={scrollY < 45 ? 'navbar is-size-5 is-fixed-top is-transparent main' : 'navbar is-size-5 is-fixed-top is-transparent main scroll'}>
        <Link className="navbar-item" to="/"><div className={scrollY < 45 ? 'logo' : 'logo small'}></div></Link>
        <Link className="navbar-item" to="/sites/france">Sites France</Link>
        <Link className="navbar-item" to="/sites/3">Sites Portugal</Link>
        <Link className="navbar-item" to="/homes">Our Homes</Link>
        <Link className="navbar-item" to="/faqs">FAQs</Link>
        <Link className="navbar-item" to="/">Contact Us</Link>
        <Link className="navbar-item" to={`/profile`}>Bookings</Link>
      </nav>
    </>
  )
}
 
export default withRouter(NavBar)