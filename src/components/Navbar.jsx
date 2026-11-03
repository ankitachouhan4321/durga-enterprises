import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="site-header">

      {/* Top Header */}
      <div className="top-header text-white">
        <div className="container">
          <div className="row align-items-center">

            <div className="col-lg-10">
              <div className="d-flex flex-wrap align-items-center">

                <a
                  href="tel:+919810032627"
                  className="top-header-item"
                >
                  <i className="fa-solid fa-phone"></i>
                  <span>Call: +91 9810032627</span>
                </a>

                <div className="top-header-item">
                  <i className="fa-regular fa-clock"></i>
                  <span>Mon - Sat: Contact for Timings</span>
                </div>

                <a
                  href="mailto:Durgaenterprises918@yahoo.com"
                  className="top-header-item"
                >
                  <i className="fa-regular fa-envelope"></i>
                  <span>Durgaenterprises918@yahoo.com</span>
                </a>

              </div>
            </div>

            <div className="col-lg-2 d-none d-lg-block">
              <div className="d-flex justify-content-end gap-3">
                <a
                  href="tel:+919810032627"
                  className="text-white"
                  aria-label="Call Durga Enterprises"
                >
                  <i className="fa-solid fa-phone"></i>
                </a>

                <a
                  href="mailto:Durgaenterprises918@yahoo.com"
                  className="text-white"
                  aria-label="Email Durga Enterprises"
                >
                  <i className="fa-solid fa-envelope"></i>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="navbar navbar-expand-lg bg-white shadow-sm">
        <div className="container">

          {/* Logo */}
          <Link className="navbar-brand" to="/">
            <img
              src="/img/logo.png"
              alt="Durga Enterprises"
              className="site-logo"
            />
          </Link>

          {/* Mobile Toggle */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
            aria-controls="mainNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navigation */}
          <div
            className="collapse navbar-collapse"
            id="mainNavbar"
          >
            <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-2">

              <li className="nav-item">
                <NavLink className="nav-link" to="/" end>
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/about-us">
                  About Us
                </NavLink>
              </li>

              {/* Products Dropdown */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Products
                </a>

                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/products">
                      All Products
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="dropdown-item"
                      to="/products/welding-equipment"
                    >
                      Welding Equipment
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="dropdown-item"
                      to="/products/welding-accessories"
                    >
                      Welding Accessories
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="dropdown-item"
                      to="/products/safety-products"
                    >
                      Safety Products
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/industries">
                  Industries
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/contact-us">
                  Contact Us
                </NavLink>
              </li>

              {/* Search Icon */}
              <li className="nav-item">
                <button
                  type="button"
                  className="nav-link border-0 bg-transparent"
                  aria-label="Search products"
                  data-bs-toggle="modal"
                  data-bs-target="#productSearchModal"
                >
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </li>

              {/* Global Button */}
              <li className="nav-item ms-lg-2 mt-3 mt-lg-0">
                <Link
                  to="/contact-us"
                  className="btn-theme"
                >
                  Get a Quote
                </Link>
              </li>

            </ul>
          </div>

        </div>
      </nav>

      {/* Product Search Modal */}
      <div
        className="modal fade"
        id="productSearchModal"
        tabIndex="-1"
        aria-labelledby="productSearchTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">

            <div className="modal-header">
              <h5 className="modal-title" id="productSearchTitle">
                Search Products
              </h5>

              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <form action="/products" method="get">
              <div className="modal-body">
                <input
                  type="search"
                  name="q"
                  className="form-control"
                  placeholder="Search welding or safety products..."
                  required
                />
              </div>

              <div className="modal-footer">
                <button type="submit" className="btn btn-theme">
                  Search
                </button>
              </div>
            </form>

          </div>
        </div>
      </div>

    </header>
  );
};

export default Navbar;