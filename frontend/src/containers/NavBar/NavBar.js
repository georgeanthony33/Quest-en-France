import React, { useState, useEffect, useRef, useContext } from "react";
import { Link, withRouter } from "react-router-dom";
import "./NavBar.scss";
import config from "../../util/Config";
import axios from "axios";
import Auth from "../../util/Auth";
import { Notyf } from "notyf";

export const notyf = new Notyf({
  duration: 2000,
  ripple: true,
  position: {
    x: "center",
    y: "top",
  },
  types: [
    {
      type: "login",
      className: 'notyf-login',
      background: "#23C552",
      icon: {
        className: "fas fa-sign-in-alt",
        tagName: "i",
        color: 'white'
      },
    },
    {
      type: "logout",
      className: 'notyf-login',
      background: "#D70103",
      icon: {
        className: "fas fa-sign-out-alt",
        tagName: "i",
        color: 'white'
      },
    },
  ],
});

const NavBar = (props) => {

  const [burgerNavOpen, setBurgerNavOpen] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const toggleBurgerNav = () => {
    setBurgerNavOpen(!burgerNavOpen);
  };

  const headersToken = {
    headers: { Authorization: `Bearer ${Auth.getToken()}` },
  };

  const [loginDetails, setLoginDetails] = useState(null);
  useEffect(() => {
    const getLoginDetails = async () => {
      if (headersToken.headers.Authorization === "Bearer null") {
        setLoginDetails(false);
      } else {
        try {
          const response = await axios.get("/api/profile/", headersToken);
          setLoginDetails(response.data);
        } catch (err) {
          console.log(err);
        }
      }
    };
    getLoginDetails();
  }, [props?.location?.state?.token, props.location.pathname]);

  const { first_name, last_name } = loginDetails || {}

  const handleLogout = () => {
    Auth.logout();
    setLoginDetails(null);
    notyf.open({
      type: 'logout',
      message: 'Logged out'
    });
    props.history.push("/");
  };

  const userMenuNode = useRef();
  useEffect(() => {
    const handleClickAway = (e) => {
      if (userMenuNode?.current && userMenuNode.current.contains(e.target)) return;
      setIsUserMenuOpen(false);
    };
    document.addEventListener("click", handleClickAway);
    return () => {
      document.removeEventListener("click", handleClickAway);
    };
  }, []);

  const mobileNavNode = useRef();
  useEffect(() => {
    const handleClickAway = (e) => {
      if (mobileNavNode?.current && mobileNavNode.current.contains(e.target)) return;
      setBurgerNavOpen(false);
    };
    document.addEventListener("click", handleClickAway);
    return () => {
      document.removeEventListener("click", handleClickAway);
    };
  }, []);

  const sites = config.sites;

  return (
    <nav
      id="NavBar"
      className={`navbar is-size-5 is-fixed-top is-black ${
        burgerNavOpen ? "has-text-black" : "has-text-white"
      }`}
      role="navigation"
      aria-label="main navigation"
      ref={mobileNavNode}
    >
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          <div className="logo small"></div>
        </Link>
        <button
          style={{ height: "72px" }}
          className={`navbar-burger anchor-button ${burgerNavOpen && "is-active"}`}
          aria-label="menu"
          aria-expanded="false"
          burgerNavOpen={burgerNavOpen}
          onClick={toggleBurgerNav}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </div>
      <div className={`navbar-menu ${burgerNavOpen && "is-active mobile-menu"}`}>
        <div className="navbar-start">
          {!burgerNavOpen ? (
            <>
              <div
                className={`navbar-item has-dropdown ${isHover && "is-active"}`}
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
              >
                <Link className="navbar-link has-text-white dropdown-arrow" to="/sites">
                  Sites
                </Link>

                <div className="navbar-dropdown" id="navbar-dropdown">
                  {sites.map((site, index) => (
                    <Link
                      key={index}
                      className="navbar-item has-text-white"
                      to={`/sites/${site.id}`}
                    >
                      {site.label}
                    </Link>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <div className="mobile-dropdown">
              <Link className={"navbar-link has-text-white dropdown-arrow"} to="/sites">
                Sites
              </Link>
              <div className="navbar-dropdown">
                {sites.map((site, index) => (
                  <Link
                    key={index}
                    className="navbar-item has-text-white"
                    to={`/sites/${site.id}`}
                  >
                    {site.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
          <Link
            className="navbar-item has-text-white"
            to="/homes"
          >
            Our Homes
          </Link>
          <Link
            className="navbar-item has-text-white"
            to="/faqs"
          >
            FAQs
          </Link>
          <Link
            className="navbar-item has-text-white"
            to="/contact"
          >
            Contact Us
          </Link>
        </div>
        <div className={`navbar-end ${burgerNavOpen && "navbar-end-mobile"}`}>
          {burgerNavOpen ? 
          loginDetails ?
          <>
            <Link
              className="navbar-item has-text-white is-flex is-align-items-center"
              id="mobile"
              to={{
                pathname: "/myprofile",
                state: {
                  preSelection: "contactDetails",
                },
              }}
            >
              <i className="fas fa-user-circle mobile-icon"></i>
              <p className="profile-link">{first_name} {last_name}</p>
            </Link>
            <Link
              className="navbar-item has-text-white"
              to={{
                pathname: "/myprofile",
                state: {
                  preSelection: "myBookings",
                },
              }}
            >
              My Bookings
            </Link>
            <p className="navbar-item has-text-white is-flex is-align-items-center mobile-logout" onClick={handleLogout}><i className="fas fa-sign-out-alt mobile-icon"></i>Logout</p>
          </>
            :
          <>
            <Link
              to={{
                pathname: "/login",
                state: {
                  falsifyLoginDetails: false,
                },
              }}
            >
              Login
            </Link>
            <Link to="/register">Register</Link>
          </>
          :
          <div
            className="navbar-item has-text-white"
            onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
            ref={userMenuNode}
          >
            <i className="desktop fas fa-user-circle"></i>
            {isUserMenuOpen ? (
              <div className="user-menu">
                {!loginDetails && (
                  <>
                    <Link
                      to={{
                        pathname: "/login",
                        state: {
                          falsifyLoginDetails: false,
                        },
                      }}
                    >
                      Login
                    </Link>
                    <Link to="/register">Register</Link>
                  </>
                )}
                <Link
                  to={{
                    pathname: "/myprofile",
                    state: {
                      preSelection: "myBookings",
                    },
                  }}
                >
                  My Bookings
                </Link>
                <Link
                  to={{
                    pathname: "/myprofile",
                    state: {
                      preSelection: "contactDetails",
                    },
                  }}
                >
                  My Profile
                </Link>
                {loginDetails && <p onClick={handleLogout}>Logout</p>}
              </div>
            ) : null}
          </div>}
        </div>
      </div>
    </nav>
  );
};

export default withRouter(NavBar);
