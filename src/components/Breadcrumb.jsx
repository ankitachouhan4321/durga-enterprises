import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({
    title = "Contact Us",
    backgroundImage = "/img/breadcrumb.jpg",
}) => {
    return (
        <section
            className="durga-breadcrumb"
            style={{
                backgroundImage: `linear-gradient(
          rgba(12, 15, 20, 0.78),
          rgba(12, 15, 20, 0.78)
        ), url("${backgroundImage}")`,
            }}
        >
            <div className="container durga-breadcrumb-container">
                {/* Page Title */}
                <h1 className="durga-breadcrumb-title">
                    {title}
                </h1>

                {/* Breadcrumb Navigation */}
                <nav
                    className="durga-breadcrumb-nav"
                    aria-label="Breadcrumb"
                >
                    <Link to="/">Home</Link>
                    <i className="fa-solid fa-chevron-right"></i>
                    <span aria-current="page">{title}</span>
                </nav>
            </div>
        </section>
    );
};

export default Breadcrumb;