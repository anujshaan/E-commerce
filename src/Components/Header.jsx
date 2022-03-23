import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="Announcement">
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex align-items-center display-none">
              <p>+91 9931824747</p>
              <p>info@store.com</p>
            </div>
            <div className="col-12 col-lg-6 d-flex justify-content-center justify-content-lg-end align-items-center">
              <Link to="">
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link to="">
                <i className="fab fa-instagram"></i>
              </Link>
              <Link to="">
                <i className="fab fa-linkedin-in"></i>
              </Link>
              <Link to="">
                <i className="fab fa-youtube"></i>
              </Link>
              <Link to="">
                <i className="fab fa-pinterest-p"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="header">
        <div className="container">
          {/* Mobile Header */}
          <div className="mobile-header">
            <div className="container ">
              <div className="row ">
                <div className="col-6 d-flex align-items-center">
                  <Link className="navbar-brand" to="/">
                    <img src='/images/logo.png' alt="logo" />
                  </Link>
                </div>
                <div className="col-6 d-flex align-items-center justify-content-end Login-Register">
                  <div className="btn-group">
                    <button
                      className="name-button dropdown-toggle"
                      type="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="fas fa-user"></i>
                    </button>
                    <div className="dropdown-menu">
                      <Link className="dropdown-item" to="#">
                        Profile
                      </Link>
                      <Link className="dropdown-item" to="#">
                        Logout
                      </Link>
                    </div>
                  </div>
                  <Link className="cart-mobile-icon" to="/cart">
                    <i className="fas fa-shopping-bag"></i>
                    <span className="badge">2</span>
                  </Link>
                </div>
                <div className="col-12 d-flex align-items-center">
                  <form className="input-group">
                    <input
                      type="search"
                      className="form-control rounded search"
                      placeholder="Search anything..."
                    />
                    <button type="submit" className="search-button">
                      search
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Header */}
          <div className="pc-header">
            <div className="row">
              <div className="col-md-3 col-4 d-flex align-items center">
                <Link to="/" className="navbar-brand">
                  <img src='/images/logo.png' alt="" />
                </Link>
              </div>
              <div className="col-md-6 col-8 d-flex align-items-center">
                <form className="input-group">
                  <input
                    type="search"
                    className="form-control rounded search"
                    placeholder="Search"
                  />
                  <button className="search-button">
                      search
                  </button>
                </form>
              </div>
              <div className="col-md-3 d-flex align-items-center justify-content-end Login-Register">
                  <div className="btn-group">
                      <button className="name-button dropdown-toggle"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                          >
                              Hi, Anuj Shaan
                      </button>
                      <div className="dropdown-menu">
                          <Link to='/profile' className="dropdown-item">
                              Profile
                          </Link>
                          <Link to='#' className="dropdown-item">
                              Logout
                          </Link>
                      </div>
                  </div>
                  <Link to='/cart'>
                      <i className="fas fa-shopping-bag"></i>
                      <span className="badge">3</span>
                  </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
