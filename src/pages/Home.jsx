import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";


const bannerSlides = [
    {
        id: 1,
        highlight: "Durga Enterprises",
        firstLine: "Welding & Safety Products",
        secondLine: "For Every Industry",
        description:
            "Explore welding equipment, accessories and industrial safety products for workshops, fabrication units and businesses.",
        image: "https://simbott.com/wp-content/uploads/2024/05/Essential-Safety-Equipment-for-Welding-1024x576.jpg",
    },
    {
        id: 2,
        highlight: "Industrial Safety",
        firstLine: "Protection Products",
        secondLine: "For Your Workplace",
        description:
            "Discover industrial safety products for daily workplace requirements, protection and practical industrial applications.",
        image: "https://simbott.com/wp-content/uploads/2024/05/Essential-Safety-Equipment-for-Welding-1024x576.jpg",
    },
    {
        id: 3,
        highlight: "Welding Solutions",
        firstLine: "Equipment & Accessories",
        secondLine: "For Professionals",
        description:
            "Find welding equipment and accessories for metal fabrication, maintenance and industrial operations.",
        image: "https://simbott.com/wp-content/uploads/2024/05/Essential-Safety-Equipment-for-Welding-1024x576.jpg",
    },
];

const Home = () => {
    return (
        <>

            {/* home-banner start */}
            <section className="home-banner">
                <Swiper
                    modules={[Autoplay, Pagination, EffectFade]}
                    slidesPerView={1}
                    loop={true}
                    effect="fade"
                    fadeEffect={{ crossFade: true }}
                    speed={800}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    className="home-banner-slider"
                >
                    {bannerSlides.map((slide, index) => (
                        <SwiperSlide key={slide.id}>
                            <div
                                className="home-banner-item d-flex align-items-center"
                                style={{
                                    backgroundImage: `linear-gradient(
      90deg,
      rgba(7, 31, 73, 0.90) 0%,
      rgba(7, 31, 73, 0.75) 50%,
      rgba(7, 31, 73, 0.55) 100%
    ), url("${slide.image}")`,
                                }}
                            >
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-9 col-xl-8">

                                            <div className="home-banner-content">

                                                {index === 0 ? (
                                                    <h1 className="home-banner-title">
                                                        <span>{slide.highlight}</span>
                                                        {" - "}
                                                        {slide.firstLine}
                                                        <br />
                                                        {slide.secondLine}
                                                    </h1>
                                                ) : (
                                                    <h2 className="home-banner-title">
                                                        <span>{slide.highlight}</span>
                                                        {" - "}
                                                        {slide.firstLine}
                                                        <br />
                                                        {slide.secondLine}
                                                    </h2>
                                                )}

                                                <p className="home-banner-desc">
                                                    {slide.description}
                                                </p>

                                                <div className="d-flex flex-wrap gap-4 mt-5">
                                                    <Link
                                                        to="/products"
                                                        className=" btn-theme"
                                                    >
                                                        Our Products
                                                    </Link>

                                                    <Link
                                                        to="/contact-us"
                                                        className=" btn-theme-outline home-banner-outline"
                                                    >
                                                        Contact Us
                                                    </Link>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>

            {/* home-banner end */}

            {/* about-sec start */}
            <section id="about-sec" className="py-lg-5 py-3">
                <div className="container-lg about-sec py-lg-5 py-3">
                    <div className="row ">
                        <div className="col-lg-6">
                            <div class="img-deg"></div>
                            <div className="img-box">
                                <img src="/img/logo.png" alt="About Us" className="img-fluid" />
                            </div>

                        </div>

                        <div class="col-lg-6">

                            {/* Global Heading */}
                            <div className="section-heading">
                                <span className="section-subtitle">
                                    Our Manufacturing & Production
                                </span>

                                <h2 className="section-title">
                                    Welding & Safety Products for Industrial Needs
                                </h2>

                            </div>

                            <p>lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                            <p>ectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo conse

                            </p>
                            <br/>

                            <a href="/" className="btn-theme mt-4">
                                Read More
                                <i className="fa-solid fa-arrow-right"></i>
                            </a>
                        </div>

                    </div>

                </div>
            </section>

            {/* about-sec end */}


            {/* ================= MANUFACTURING SECTION ================= */}
            <section className="home-manufacturing-section position-relative overflow-hidden">

                {/* Right Diagonal Background Image */}
                <div
                    className="home-manufacturing-image"
                    style={{
                        backgroundImage: 'url("https://ifingerstudio.com/templates/dustrial-html/img/video-bg2.png")',
                    }}
                    role="img"
                    aria-label="Welding and industrial manufacturing"
                ></div>

                <div className="container position-relative">
                    <div className="row align-items-center">

                        <div className="col-lg-6">
                            <div className="home-manufacturing-content">

                                {/* Global Heading */}
                                <div className="section-heading">
                                    <span className="section-subtitle">
                                        Our Manufacturing & Production
                                    </span>

                                    <h2 className="section-title">
                                        Welding & Safety Products for Industrial Needs
                                    </h2>
                                </div>

                                {/* Manufacturing Content */}
                                <p className="home-manufacturing-desc">
                                    At Durga Enterprises, we are engaged in the
                                    manufacturing and importing of welding and
                                    industrial safety products. Our product range
                                    supports the requirements of fabrication
                                    workshops, manufacturing units, contractors,
                                    and industrial businesses.
                                </p>

                                <p className="home-manufacturing-desc">
                                    We focus on providing practical welding
                                    accessories and workplace safety products
                                    for different industrial applications.
                                    Our range helps businesses find suitable
                                    products for their everyday operations
                                    and bulk purchasing requirements.
                                </p>

                                {/* Company Information */}
                                <div className="home-manufacturing-info mt-4">
                                    <h5 className="fw-bold mb-1">
                                        Durga Enterprises
                                    </h5>

                                    <span>
                                        Manufacturing & Importing Welding and Safety Products
                                    </span>
                                </div>

                                {/* Global Button */}
                                <div className="mt-4">
                                    <Link to="/products" className=" btn-theme">
                                        Explore Our Products
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </Link>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>

            </section>

        </>
    )
}

export default Home

