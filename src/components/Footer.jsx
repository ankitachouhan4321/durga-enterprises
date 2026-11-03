import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "Our Products", path: "/products" },
    { name: "Industries We Serve", path: "/industries" },
    { name: "Contact Us", path: "/contact-us" },
  ];

  const productLinks = [
    { name: "Welding Equipment", path: "/products/welding-equipment" },
    { name: "Welding Accessories", path: "/products/welding-accessories" },
    { name: "Industrial Safety Products", path: "/products/safety-products" },
    { name: "Safety Gloves", path: "/products/safety-gloves" },
    { name: "Safety Helmets", path: "/products/safety-helmets" },
  ];

  return (
    <footer className="site-footer">

      {/* Top CTA Strip */}
      <div className="footer-cta">
        <div className="container">
          <div className="row align-items-center gy-4">

            <div className="col-lg-8">
              <div className="d-flex align-items-center gap-3">
                <div className="footer-cta-icon">
                  <i className="fa-solid fa-headset"></i>
                </div>

                <div>
                  <h3 className="mb-2">
                    Looking for Welding & Safety Products?
                  </h3>
                  <p className="mb-0">
                    Contact our team for product details and bulk enquiries.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 text-lg-end">
              <Link to="/contact-us" className="btn btn-theme">
                Get a Quote
                <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>

          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="footer-main">
        <div className="container">
          <div className="row gy-5">

            {/* Column 1 - Company */}
            <div className="col-lg-4 col-md-6">
              <div className="footer-widget">

                <Link to="/" className="footer-logo">
                  <span className="footer-brand-name">
                    DURGA
                  </span>
                  <span className="footer-brand-subtitle">
                    ENTERPRISES
                  </span>
                </Link>

                <p className="footer-about-text">
                  Durga Enterprises is engaged in manufacturing
                  and importing welding and industrial safety
                  products. We serve workshops, fabrication units,
                  contractors and businesses with products for
                  different industrial requirements.
                </p>

                <div className="footer-business-info">
                  <p className="mb-2">
                    <strong>Business:</strong> Welding & Safety Products
                  </p>

                  <p className="mb-0">
                    <strong>GSTIN:</strong> 07AOZPA9607C1ZS
                  </p>
                </div>

                {/* Contact Icons */}
                <div className="footer-social d-flex gap-2 mt-4">
                  <a
                    href="https://wa.me/919810032627"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp Durga Enterprises"
                  >
                    <i className="fa-brands fa-whatsapp"></i>
                  </a>

                  <a
                    href="tel:+919810032627"
                    aria-label="Call Durga Enterprises"
                  >
                    <i className="fa-solid fa-phone"></i>
                  </a>

                  <a
                    href="mailto:Durgaenterprises918@yahoo.com"
                    aria-label="Email Durga Enterprises"
                  >
                    <i className="fa-solid fa-envelope"></i>
                  </a>
                </div>

              </div>
            </div>

            {/* Column 2 - Quick Links */}
            <div className="col-lg-2 col-md-6">
              <div className="footer-widget">

                <h4 className="footer-widget-title">
                  Quick Links
                </h4>

                <ul className="footer-links list-unstyled mb-0">
                  {quickLinks.map((item) => (
                    <li key={item.path}>
                      <Link to={item.path}>
                        <i className="fa-solid fa-angle-right"></i>
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>

              </div>
            </div>

            {/* Column 3 - Products */}
            <div className="col-lg-3 col-md-6">
              <div className="footer-widget">

                <h4 className="footer-widget-title">
                  Our Products
                </h4>

                <ul className="footer-links list-unstyled mb-0">
                  {productLinks.map((item) => (
                    <li key={item.path}>
                      <Link to={item.path}>
                        <i className="fa-solid fa-angle-right"></i>
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/products"
                  className="footer-view-all d-inline-flex align-items-center gap-2 mt-3"
                >
                  View All Products
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>

              </div>
            </div>

            {/* Column 4 - Contact Details */}
            <div className="col-lg-3 col-md-6">
              <div className="footer-widget">

                <h4 className="footer-widget-title">
                  Contact Information
                </h4>

                <ul className="footer-contact list-unstyled mb-0">

                 

                  <li>
                    <div className="footer-contact-icon">
                      <i className="fa-solid fa-phone-volume"></i>
                    </div>

                    <div>
                      <strong>Call Us</strong>
                      <a href="tel:+919810032627">
                        +91 9810032627
                      </a>
                    </div>
                  </li>

                  <li>
                    <div className="footer-contact-icon">
                      <i className="fa-solid fa-envelope"></i>
                    </div>

                    <div>
                      <strong>Email Us</strong>
                      <a href="mailto:Durgaenterprises918@yahoo.com">
                        Durgaenterprises918@yahoo.com
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="footer-contact-icon">
                      <i className="fa-solid fa-location-dot"></i>
                    </div>

                    <div>
                      <strong>Our Address</strong>
                      <p>
                        4882, Shop No. 305-306,
                        3rd Floor, Laxmi Narayan Market,
                        Phatak Namak, Hauz Qazi,
                        Delhi - 110006, India
                      </p>
                    </div>
                  </li>
               
                </ul>

              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">
        <div className="container">
          <div className="row align-items-center gy-2">

            <div className="col-md-6 text-center text-md-start">
              <p className="mb-0">
                © {currentYear} <strong>Durga Enterprises</strong>.
                All Rights Reserved.
              </p>
            </div>

            <div className="col-md-6 text-center text-md-end">
              <p className="mb-0">
                Welding & Industrial Safety Products
              </p>
            </div>

          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;