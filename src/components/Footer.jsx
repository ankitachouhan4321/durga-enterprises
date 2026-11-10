import React from "react";
import { Link } from "react-router-dom";
import FloatingContact from './FloatingContact';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Our Products", path: "/products/safety-products" },
    { name: "Industries We Serve", path: "/#indus" },
    { name: "Contact Us", path: "/contact" },
  ];

  const productLinks = [
    { name: "Safety Products", path: "/products/safety-products" },
    { name: "MIG & TIG Torches", path: "/products/mig-tig-torches" },
    { name: "Gas Cutters & PUG Cutting Machines", path: "/products/gas-cutters-pug-cutting-Mmchines" },
    { name: "Welding Accessories & Regulators", path: "/products/welding-accessories-regulators" },
    { name: "Brass Parts", path: "/products/brass-parts" },
  ];

  return (

    <>
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
              <Link to="/contact" className=" btn-theme">
                Get a Quote
                <i className="fa-solid fa-arrow-right ps-2"></i>
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

                <Link to="/" className="footer-logo w-75">
                  <img src="/img/white-logo.png" alt="Durga Enterprises Logo" className="img-fluid" />
                </Link>

                <p className="footer-about-text">
                  Durga Enterprises is engaged in manufacturing
                  and importing welding and industrial safety
                  products. We serve workshops, fabrication units,
                  contractors and businesses with products for
                  different industrial requirements.
                </p>

                <div className="footer-business-info">
                  {/* <p className="mb-2">
                    <strong>Business:</strong> Welding & Safety Products
                  </p> */}

                  <p className="mb-0">
                    <strong>GSTIN:</strong> 07AOZPA9607C1ZS
                  </p>
                </div>

                {/* Contact Icons */}
                {/* Social Media Icons */}
                <div className="footer-social d-flex align-items-center gap-2 mt-4">

                  <a
                    href="https://www.facebook.com/durgaenterprises.fb"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                  >
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>

                  <a
                    href="https://www.instagram.com/durgaenterprises.ig/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                  >
                    <i className="fa-brands fa-instagram"></i>
                  </a>

                  {/* <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>

                  <a
                    href="https://www.youtube.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                  >
                    <i className="fa-brands fa-youtube"></i>
                  </a> */}



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
                      <a href="mailto:durgaenterprises918@yahoo.com">
                        durgaenterprises918@yahoo.com
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
                Designed  by <a href="http://viraladsmedia.com/" target="_blank" rel="noopener noreferrer"><strong>Viral Ads Media</strong>  </a>
                All Rights Reserved.
              </p>
            </div>

          </div>
        </div>
      </div>

    </footer>
 
      <FloatingContact/>
    
        </>
  );
};

export default Footer;