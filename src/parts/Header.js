import React from "react";

import { withRouter } from "react-router-dom";

import Fade from "react-reveal/Fade";

const Header = ({match}) => {
  function getNavLink(path) {
    return match.path === path ? 'active' : '' 
  }

  return (
    <Fade top>
      <header className="spacing-sm header">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <a href="/" className="navbar-brand">
              UwebNewsApp
            </a>

            <div className="collapse navbar-collapse ">
              <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                  <a href="/" className={['nav-link', getNavLink('/')].join(' ')}>
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/sport" className={['nav-link', getNavLink('/sport')].join(' ')}>
                    Sports
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/technology" className={['nav-link', getNavLink('/technology')].join(' ')}>
                    Technology
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/bisnis" className={['nav-link', getNavLink('/bisnis')].join(' ')}>
                    Bussines
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/science" className={['nav-link', getNavLink('/science')].join(' ')}>
                    Science
                  </a>
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
