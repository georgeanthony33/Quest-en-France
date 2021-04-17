import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
// import { notify } from 'react-notify-toast'
// import Auth from "../../components/Common/Auth";
// import Logo from "../../assets/Logos/QeF.png";
import "./NavBar.scss";
import config from "../../util/Config";

const NavBar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [isHover, setIsHover] = useState(false);
  // const [ scrollY, setScrollY ] = useState(0)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const toggleNavbar = () => {
    setNavOpen(!navOpen);
  };

  // const handleLogout = () => {
  //   Auth.logout()
  //   // notify.show('Come back soon!', 'custom', 3000, { background: '#FFFFF0' })
  //   this.props.history.push('/')
  // }

  // const userID = Auth.getPayload().sub

  // useEffect(() => {
  //   window.addEventListener('scroll', () => setScrollY(window.scrollY))
  //   return () => window.removeEventListener('scroll', () => setScrollY(window.scrollY))
  // }, [])
  const sites = config.sites;

  return (
    // <div className='NavBar'>
    /* <nav className={scrollY < 45 ? 'navbar is-size-5 contacts-nav is-transparent' : 'closed'}>
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
                <p>+441204 415425 or +447985 093397</p>
              </div>
            </div>
          </div>
        </div>
      </nav> */

    <nav
      id="NavBar"
      className={`navbar is-size-5 is-fixed-top is-black ${
        navOpen ? "has-text-black" : "has-text-white"
      }`}
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          <div className="logo small"></div>
        </Link>
        <button
          style={{ height: "72px" }}
          className="navbar-burger anchor-button"
          aria-label="menu"
          aria-expanded="false"
          navOpen={navOpen}
          onClick={toggleNavbar}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </div>
      <div className={`navbar-menu ${navOpen && "is-active"}`}>
        <div className="navbar-start">
          {!navOpen ? (
            <>
              <div
                className={`navbar-item has-dropdown ${isHover && "is-active"}`}
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
              >
                <Link className={"navbar-link has-text-white "} to="/sites">
                  Sites
                </Link>

                <div className="navbar-dropdown">
                  {sites.map((site, index) => (
                    <Link
                      key={index}
                      className="navbar-item"
                      to={`/sites/${site.id}`}
                    >
                      {site.label}
                    </Link>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <>
              <Link className={"navbar-item has-text-white "} to="/sites">
                Sites
              </Link>
              {sites.map((site, index) => (
                <Link
                  key={index}
                  className="navbar-item"
                  to={`/sites/${site.id}`}
                >
                  {site.label}
                </Link>
              ))}
            </>
          )}
          <Link
            className={`navbar-item has-text-white ${
              navOpen ? "has-text-black" : "has-text-white"
            }`}
            to="/homes"
          >
            Our Homes
          </Link>
          <Link
            className={`navbar-item has-text-white ${
              navOpen ? "has-text-black" : "has-text-white"
            }`}
            to="/faqs"
          >
            FAQs
          </Link>
          <Link
            className={`navbar-item has-text-white ${
              navOpen ? "has-text-black" : "has-text-white"
            }`}
            to="/"
          >
            Contact Us
          </Link>
        </div>
        <div className="navbar-end">
          <div
            className={`navbar-item has-text-white ${
              navOpen ? "has-text-black" : "has-text-white"
            }`}
            onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
          >
            <i className="fas fa-user-circle"></i>
            {isUserMenuOpen ? <div className="user-menu"></div> : null}
          </div>
        </div>
      </div>
    </nav>

    /* <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
    </a>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item">
        Home
      </a>

      <a class="navbar-item">
        Documentation
      </a>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          More
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            About
          </a>
          <a class="navbar-item">
            Jobs
          </a>
          <a class="navbar-item">
            Contact
          </a>
          <hr class="navbar-divider">
          <a class="navbar-item">
            Report an issue
          </a>
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light">
            Log in
          </a>
        </div>
      </div>
    </div>
  </div>
</nav> */
  );
};

export default withRouter(NavBar);
