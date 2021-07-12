import React from "react";

import { withRouter } from "react-router-dom";

import Fade from "react-reveal/Fade";

import { Link } from "react-router-dom";

const Header = (props) => {
  function getNavLink(path) {
    return props.match.path === path ? "active" : "";
  }

  return (
    <Fade top>
      <header className="spacing-sm header">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <Link to="/" className="navbar-brand">
              UwebNewsApp
            </Link>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link
                    to="/"
                    className={["nav-link", getNavLink("/")].join(" ")}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/sport"
                    className={["nav-link", getNavLink("/sport")].join(" ")}
                  >
                    Sports
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/technology"
                    className={["nav-link", getNavLink("/technology")].join(
                      " "
                    )}
                  >
                    Technology
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/bisnis"
                    className={["nav-link", getNavLink("/bisnis")].join(" ")}
                  >
                    Bussines
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/science"
                    className={["nav-link", getNavLink("/science")].join(" ")}
                  >
                    Science
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </Fade>
  );
};

export default withRouter(Header);
