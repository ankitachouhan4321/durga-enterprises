import React, { useEffect, useRef, useState } from "react";
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Counter from "../components/Counter";


const bannerSlides = [
    {
        id: 1,
        highlight: "Durga Enterprises",
        firstLine: "Welding & Safety Products",
        secondLine: "For Every Industry",
        description:
            "Explore welding equipment, accessories and industrial safety products for workshops, fabrication units and businesses.",
        image: "img/banner1.png",
    },

    {
        id: 2,
        highlight: "Industrial Safety",
        firstLine: "Protection Products",
        secondLine: "For Your Workplace",
        description:
            "Discover industrial safety products for daily workplace requirements, protection and practical industrial applications.",
        image: "img/banner2.png",
    },

    {
        id: 3,
        highlight: "Welding Solutions",
        firstLine: "Equipment & Accessories",
        secondLine: "For Professionals",
        description:
            "Find welding equipment and accessories for metal fabrication, maintenance and industrial operations.",
        image: "img/banner3.png",
    },
];

const featuredProducts = [
    {
        id: 1,
        name: "Reflective Safety Jackets",
        image: "/img/prod/1.jpg",
        slug: "reflective-safety-jackets",
        description: "High-visibility reflective safety jackets for construction, road work, and industrial workplace safety.",
    },
    {
        id: 2,
        name: "Barricade Cone",
        image: "/img/prod/2.jpg",
        slug: "barricade-cone",
        description:
            "Traffic barricade cone for marking construction sites, road work zones, restricted areas and temporary safety boundaries.",
    },
    {
        id: 3,
        name: "Caution Warning Tape",
        image: "/img/prod/3.jpg",
        slug: "caution-warning-tape",
        description: "Red and white caution tape with English and Hindi warning text for marking restricted and hazardous areas.",
    },
    {
        id: 4,
        name: "Full Body Protective Safety Gear",
        image: "/img/prod/4.jpg",
        slug: "full-body-protective-safety-gear",
        description: "Black body protection set with chest, shoulder, arm, thigh, and leg guards for impact protection.",
    },
    {
        id: 5,
        name: "Black Industrial Safety Glasses",
        image: "/img/prod/5.jpg",
        slug: "black-industrial-safety-glasses",
        description: "Black protective eyewear with dark lenses for suitable industrial and workplace applications.",
    },
    {
        id: 6,
        name: "Fall Arrester FF-800",
        image: "/img/prod/6.jpg",
        slug: "fall-arrester-ff-800",
        description: "Industrial rope grab fall arrester with metal locking mechanism for compatible fall protection systems.",
    }
];

// SAMPLE DATA - Replace with verified customer reviews
const testimonials = [
    {
        id: 1,
        name: "Customer Name",
        designation: "Fabrication Workshop",
        rating: 5,
        review:
            "We found the welding and safety product range useful for our workshop requirements. The enquiry process was straightforward.",
    },
    {
        id: 2,
        name: "Customer Name",
        designation: "Industrial Buyer",
        rating: 5,
        review:
            "The team helped us understand the available industrial safety products and suitable options for our requirements.",
    },
    {
        id: 3,
        name: "Customer Name",
        designation: "Construction Contractor",
        rating: 5,
        review:
            "We enquired about safety equipment for our project. The product information helped us compare the available options.",
    },
    {
        id: 4,
        name: "Customer Name",
        designation: "Workshop Owner",
        rating: 5,
        review:
            "A practical range of welding accessories and protective products for everyday workshop requirements.",
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
    rgba(0, 0, 0, 0.53) 0%,
    rgba(0, 0, 0, 0.06) 50%,
    rgba(0, 0, 0, 0) 100%
  ), url("${slide.image}")`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
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
                                                    <a
                                                        href="#product-sec"
                                                        className=" btn-theme"
                                                    >
                                                        Our Products
                                                    </a>

                                                    <Link
                                                        to="/contact"
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
                                <img src="/img/about.png" alt="About Us" className="img-fluid" />
                            </div>

                        </div>
                        <div className="col-lg-6">

                            {/* Global Heading */}
                            <div className="section-heading">
                                <span className="section-subtitle">
                                    About Durga Enterprises
                                </span>

                                <h2 className="section-title">
                                    Your Trusted Source for Welding & Industrial Safety Products
                                </h2>
                            </div>

                            <p>
                                Durga Enterprises is a Delhi-based manufacturer, importer,
                                and supplier of welding accessories and industrial safety
                                products. We offer a wide range of products designed to
                                support the everyday requirements of fabrication workshops,
                                construction sites, manufacturing units, and industrial
                                operations.
                            </p>

                            <p>
                                Our product range includes welding accessories, personal
                                protective equipment, safety jackets, protective eyewear,
                                traffic safety products, and other industrial safety
                                essentials. With a customer-focused approach, we aim to
                                provide dependable product options, competitive pricing,
                                and responsive support for individual and bulk enquiries.
                            </p>

                            <br />

                            <Link to="/about" className="btn-theme mt-4">
                                Read More
                                <i className="fa-solid fa-arrow-right"></i>
                            </Link>

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
                        backgroundImage: 'url("/img/man.png")',
                    }}
                    role="img"
                    aria-label="Welding and industrial manufacturing"
                ></div>

                <div className="container position-relative">
                    <div className="row align-items-center">

                        <div className="col-lg-7">
                            <div className="home-manufacturing-content">

                                {/* Global Heading */}
                                <div className="section-heading">
                                    <span className="section-subtitle">
                                        Our Manufacturing & Production
                                    </span>

                                    <h2 className="section-title">
                                        Quality Welding & Safety Products
                                        for Industrial Applications
                                    </h2>
                                </div>

                                {/* Manufacturing Content */}
                                <p className="home-manufacturing-desc">
                                    At Durga Enterprises, we are engaged in the
                                    manufacturing, importing, and supply of welding
                                    and industrial safety products. We focus on
                                    meeting the requirements of fabrication workshops,
                                    construction companies, engineering units,
                                    factories, contractors, and industrial businesses.
                                </p>

                                <p className="home-manufacturing-desc">
                                    Our product range includes welding accessories,
                                    safety gloves, helmets, protective eyewear,
                                    safety shoes, ear protection equipment, and
                                    other industrial safety essentials.
                                </p>

                                <p className="home-manufacturing-desc">
                                    We understand the importance of consistent product
                                    quality, suitable specifications, and dependable
                                    supply. Our approach focuses on understanding
                                    customer requirements and supporting both
                                    regular and bulk purchasing needs.
                                </p>

                                {/* Company Information */}
                                <div className="home-manufacturing-info mt-4">
                                    <h5 className="fw-bold mb-1">
                                        Durga Enterprises
                                    </h5>

                                    <span>
                                        Manufacturing, Importing & Supplying
                                        Welding and Industrial Safety Products
                                    </span>
                                </div>



                            </div>
                        </div>

                    </div>
                </div>

            </section>
            {/* ================= MANUFACTURING SECTION end ================= */}


            {/* ================= INDUSTRIES WE SERVE ================= */}
            <section className="home-industries-section py-5" id="indus">

                <div className="container">

                    {/* Global Heading */}
                    <div className=" text-center mb-5">


                        <h2 className="section-title">
                            Industries We Serve
                        </h2>

                        <p className="home-industries-intro mx-auto mt-3 mb-0">
                            Durga Enterprises offers welding and industrial safety
                            products for workshops, fabrication units, construction
                            projects, and different industrial applications.
                        </p>
                    </div>

                    {/* Industries Grid */}
                    <div className="row g-4 justify-content-center">

                        {[
                            {
                                title: "Metal Fabrication",
                                image: "/img/ind-1.jpg",
                            },
                            {
                                title: "Manufacturing Units",
                                image: "/img/ind-2.jpg",
                            },
                            {
                                title: "Construction Industry",
                                image: "/img/ind-3.jpg",
                            },
                            {
                                title: "Automotive Workshops",
                                image: "/img/ind-4.jpg",
                            },
                            {
                                title: "Engineering Workshops",
                                image: "/img/ind-5.jpg",
                            },
                            {
                                title: "Industrial Maintenance",
                                image: "/img/ind-6.jpg",
                            },
                            {
                                title: "Steel & Metal Processing",
                                image: "/img/ind-7.jpg",
                            },
                        ].map((industry, index) => (

                            <div
                                className="col-xl-3 col-lg-4 col-md-6"
                                key={index}
                            >
                                <div className="home-industry-card h-100">

                                    {/* Industry Image */}
                                    <div className="home-industry-image">
                                        <img
                                            src={industry.image}
                                            alt={industry.title}
                                            className="img-fluid w-100"
                                            loading="lazy"
                                        />
                                    </div>

                                    {/* Industry Name */}
                                    <div className="home-industry-title">
                                        <h3 className="mb-0">
                                            {industry.title}
                                        </h3>
                                    </div>

                                </div>
                            </div>

                        ))}

                    </div>
                </div>

            </section>
            {/* industries end */}
            {/* ================= WHY CHOOSE US START ================= */}
            <section
                id="why-choose-us"
                className="home-why-choose-section py-lg-5 py-4"
            >
                <div className="container py-lg-5">

                    {/* Global Section Heading */}
                    <div className="home-why-choose-head text-center mx-auto mb-5">


                        <h2 className="home-why-choose-title">
                            Why Durga Enterprises Is the Right Choice for Your Industrial Needs
                        </h2>

                        <p className="home-why-choose-intro">
                            Durga Enterprises offers a wide range of welding accessories
                            and industrial safety products for workshops, fabrication
                            units, contractors, and industrial businesses. We focus on
                            understanding customer requirements and providing suitable
                            products for different applications.
                        </p>
                    </div>

                    <div className="row g-4">

                        {/* 01 */}
                        <div className="col-lg-4 col-md-6">
                            <div className="home-choose-item d-flex gap-3 h-100">
                                <div className="home-choose-icon">
                                    <i className="fa-solid fa-industry"></i>
                                </div>

                                <div>
                                    <h5>Manufacturing & Importing</h5>
                                    <p>
                                        Engaged in manufacturing and importing welding
                                        and industrial safety products to serve different
                                        business requirements.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 02 */}
                        <div className="col-lg-4 col-md-6">
                            <div className="home-choose-item d-flex gap-3 h-100">
                                <div className="home-choose-icon">
                                    <i className="fa-solid fa-boxes-stacked"></i>
                                </div>

                                <div>
                                    <h5>Wide Product Range</h5>
                                    <p>
                                        Explore welding accessories, protective equipment,
                                        traffic safety products, and other industrial
                                        safety essentials in one place.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 03 */}
                        <div className="col-lg-4 col-md-6">
                            <div className="home-choose-item d-flex gap-3 h-100">
                                <div className="home-choose-icon">
                                    <i className="fa-solid fa-shield-halved"></i>
                                </div>

                                <div>
                                    <h5>Safety-Focused Products</h5>
                                    <p>
                                        Products for workplace protection, road safety,
                                        welding operations, and other applications
                                        where appropriate safety equipment is essential.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 04 */}
                        <div className="col-lg-4 col-md-6">
                            <div className="home-choose-item d-flex gap-3 h-100">
                                <div className="home-choose-icon">
                                    <i className="fa-solid fa-clipboard-check"></i>
                                </div>

                                <div>
                                    <h5>Product Selection Support</h5>
                                    <p>
                                        We help customers explore suitable product
                                        options based on their application, required
                                        specifications, and purchasing needs.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 05 */}
                        <div className="col-lg-4 col-md-6">
                            <div className="home-choose-item d-flex gap-3 h-100">
                                <div className="home-choose-icon">
                                    <i className="fa-solid fa-helmet-safety"></i>
                                </div>

                                <div>
                                    <h5>Industrial Applications</h5>
                                    <p>
                                        Our product range supports fabrication,
                                        construction, maintenance, engineering,
                                        manufacturing, and industrial workplace needs.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 06 */}
                        <div className="col-lg-4 col-md-6">
                            <div className="home-choose-item d-flex gap-3 h-100">
                                <div className="home-choose-icon">
                                    <i className="fa-solid fa-truck-fast"></i>
                                </div>

                                <div>
                                    <h5>Bulk Order Enquiries</h5>
                                    <p>
                                        We welcome enquiries from industrial buyers,
                                        contractors, traders, and businesses looking
                                        for products in larger quantities.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 07 */}
                        <div className="col-lg-4 col-md-6">
                            <div className="home-choose-item d-flex gap-3 h-100">
                                <div className="home-choose-icon">
                                    <i className="fa-solid fa-screwdriver-wrench"></i>
                                </div>

                                <div>
                                    <h5>Practical Product Solutions</h5>
                                    <p>
                                        From welding accessories to protective gear,
                                        our range is intended to address everyday
                                        industrial and workplace requirements.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 08 */}
                        <div className="col-lg-4 col-md-6">
                            <div className="home-choose-item d-flex gap-3 h-100">
                                <div className="home-choose-icon">
                                    <i className="fa-solid fa-handshake"></i>
                                </div>

                                <div>
                                    <h5>Customer-Focused Approach</h5>
                                    <p>
                                        We focus on understanding customer needs,
                                        communicating product information clearly,
                                        and building lasting business relationships.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 09 */}
                        <div className="col-lg-4 col-md-6">
                            <div className="home-choose-item d-flex gap-3 h-100">
                                <div className="home-choose-icon">
                                    <i className="fa-solid fa-headset"></i>
                                </div>

                                <div>
                                    <h5>Responsive Enquiry Support</h5>
                                    <p>
                                        Connect with our team for product information,
                                        availability enquiries, specifications,
                                        and assistance with your requirements.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
            {/* ================= WHY CHOOSE US END ================= */}

            {/* ================= FEATURED PRODUCTS ================= */}
            <section className="home-products-section py-5" id="product-sec">

                <div className="container">

                    {/* Section Heading */}
                    <div className="row align-items-end g-3 mb-4">

                        <div className="col-lg-8">
                            <div className="section-heading mb-0">
                                <span className="section-subtitle">
                                    Our Product Collection
                                </span>

                                <h2 className="section-title">
                                    Explore Our Featured Products
                                </h2>
                            </div>

                            <p className="home-products-intro mt-3 mb-0">
                                Discover welding equipment, accessories and industrial
                                safety products for workshops, fabrication units
                                and various industrial applications.
                            </p>
                        </div>

                        {/* Slider Navigation */}
                        <div className="col-lg-4">
                            <div className="d-flex gap-2 justify-content-lg-end">

                                <button
                                    type="button"
                                    className="home-products-prev"
                                    aria-label="Previous products"
                                >
                                    <i className="fa-solid fa-arrow-left"></i>
                                </button>

                                <button
                                    type="button"
                                    className="home-products-next"
                                    aria-label="Next products"
                                >
                                    <i className="fa-solid fa-arrow-right"></i>
                                </button>

                            </div>
                        </div>

                    </div>

                    {/* Products Slider */}
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={24}
                        slidesPerView={1}
                        speed={700}
                        grabCursor={true}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        navigation={{
                            prevEl: ".home-products-prev",
                            nextEl: ".home-products-next",
                        }}
                        pagination={{
                            clickable: true,
                            el: ".home-products-pagination",
                        }}
                        breakpoints={{
                            576: {
                                slidesPerView: 2,
                                spaceBetween: 16,
                            },
                            992: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                            1200: {
                                slidesPerView: 4,
                                spaceBetween: 24,
                            },
                        }}
                        className="home-products-slider"
                    >

                        {featuredProducts.map((product) => (
                            <SwiperSlide key={product.id}>

                                <article className="home-product-card h-100">

                                    {/* Product Image */}
                                    <div className="home-product-image">

                                        <Link to={`/products/${product.slug}`}>
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                loading="lazy"
                                            />
                                        </Link>

                                    </div>

                                    {/* Product Information */}
                                    <div className="home-product-content">

                                        <span className="home-product-category">
                                            {product.category}
                                        </span>

                                        <h3 className="home-product-name">
                                            <Link to={`/products/${product.slug}`}>
                                                {product.name}
                                            </Link>
                                        </h3>

                                        <p className="home-product-description">
                                            {product.description}
                                        </p>

                                        {/* Card Buttons */}
                                        <div className="home-product-actions">

                                            {/* <Link
                                                to={`/products/${product.slug}`}
                                                className=" btn-theme-outline home-product-view"
                                            >
                                                View More
                                            </Link> */}

                                            <a
                                                href={`https://wa.me/919810032627?text=${encodeURIComponent(
                                                    `Hello Durga Enterprises, I would like to enquire about ${product.name}.`
                                                )}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className=" btn-theme home-product-enquiry"
                                            >
                                                Enquire Now <i className="fa-solid fa-arrow-right"></i>
                                            </a>

                                        </div>

                                    </div>

                                </article>

                            </SwiperSlide>
                        ))}

                    </Swiper>


                    {/* View All Products */}
                    <div className="text-center mt-4">
                        <Link to="/products/safety-products" className=" btn-theme">
                            View All Products
                            <i className="fa-solid fa-arrow-right"></i>
                        </Link>
                    </div>

                </div>

            </section>
            {/* product-sec end */}

            {/* ================= DURGA STATS SECTION ================= */}
            <section id="durga-stats-sec">
                <div className="container py-lg-5 py-3">

                    {/* Main Counter */}
                    <div className="text-center durga-stats-content mx-auto">

                        <div className="durga-main-counter">
                            <Counter end={500} suffix="+" />
                            <span className="durga-counter-underline"></span>
                        </div>

                        <h2 className="durga-stats-heading mt-4">
                            Customers Served
                        </h2>

                        <p className="durga-stats-desc mx-auto mt-3">
                            Durga Enterprises focuses on serving industrial buyers,
                            fabrication workshops, contractors, and businesses
                            with welding accessories and industrial safety products.
                            We aim to support customers with suitable product
                            options and responsive enquiry assistance.
                        </p>

                    </div>

                    {/* Bottom Counters */}
                    <div className="row justify-content-center text-center g-4 mt-lg-4 mt-3">

                        {/* Counter 1 */}
                        <div className="col-lg-3 col-sm-4 col-6">
                            <div className="durga-stat-item">
                                <div className="durga-stat-number">
                                    <Counter end={10} suffix="+" />
                                </div>
                                <h6>Years of Experience</h6>
                            </div>
                        </div>

                        {/* Counter 2 */}
                        <div className="col-lg-3 col-sm-4 col-6">
                            <div className="durga-stat-item">
                                <div className="durga-stat-number">
                                    <Counter end={100} suffix="+" />
                                </div>
                                <h6>Products Available</h6>
                            </div>
                        </div>

                        {/* Counter 3 */}
                        <div className="col-lg-3 col-sm-4 col-6">
                            <div className="durga-stat-item">
                                <div className="durga-stat-number">
                                    <Counter end={100} suffix="%" />
                                </div>
                                <h6>Customer Satisfaction</h6>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            {/* ================= DURGA STATS SECTION END ================= */}

            {/* ================= USP SECTION START ================= */}
            <section id="durga-usp-sec" className="pb-5">
                <div className="container">
                    <div className="row g-3 justify-content-center">

                        {[
                            {
                                icon: "fa-tags",
                                title: "Competitive Wholesale Pricing",
                            },
                            {
                                icon: "fa-shield-halved",
                                title: "Safety-Focused Product Range",
                            },
                            {
                                icon: "fa-boxes-stacked",
                                title: "Wide Range of Products",
                            },
                            {
                                icon: "fa-industry",
                                title: "Manufacturing & Importing",
                            },
                            {
                                icon: "fa-headset",
                                title: "Customer Enquiry Support",
                            },
                            {
                                icon: "fa-truck",
                                title: "Bulk Order Assistance",
                            },
                        ].map((item, index) => (
                            <div
                                className="col-xl-2 col-lg-3 col-md-4 col-6"
                                key={index}
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <div className="durga-usp-card text-center h-100">

                                    <div className="durga-usp-icon">
                                        <i className={`fa-solid ${item.icon}`}></i>
                                    </div>

                                    <h6>{item.title}</h6>

                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </section>
            {/* ================= USP SECTION END ================= */}

            {/* ================= FAQ SECTION START ================= */}
            <section className="durga-faq-section py-5">
                <div className="container py-lg-4">

                    <div className="row align-items-start g-5">

                        {/* Left Heading */}
                        <div className="col-lg-5">
                            <div className="section-heading">
                                <span className="section-subtitle">
                                    Frequently Asked Questions
                                </span>

                                <h2 className="section-title">
                                    Have Questions About Our Products?
                                </h2>
                            </div>

                            <p className="durga-faq-intro">
                                Find answers to common questions about our welding
                                accessories, industrial safety equipment, product
                                availability, and bulk order enquiries.
                            </p>

                            <a href="/contact" className="btn-theme mt-3">
                                Contact Us
                                <i className="fa-solid fa-arrow-right"></i>
                            </a>
                        </div>

                        {/* Right FAQ Accordion */}
                        <div className="col-lg-7">

                            <div className="accordion durga-faq-accordion" id="durgaFaqAccordion">

                                {/* FAQ 1 */}
                                <div className="accordion-item">
                                    <h3 className="accordion-header">
                                        <button
                                            className="accordion-button"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#durgaFaqOne"
                                            aria-expanded="true"
                                            aria-controls="durgaFaqOne"
                                        >
                                            What products does Durga Enterprises offer?
                                        </button>
                                    </h3>

                                    <div
                                        id="durgaFaqOne"
                                        className="accordion-collapse collapse show"
                                        data-bs-parent="#durgaFaqAccordion"
                                    >
                                        <div className="accordion-body">
                                            Durga Enterprises offers welding accessories and
                                            industrial safety products, including safety
                                            helmets, protective eyewear, safety gloves,
                                            safety shoes, reflective jackets, traffic safety
                                            products, and other workplace safety essentials.
                                        </div>
                                    </div>
                                </div>

                                {/* FAQ 2 */}
                                <div className="accordion-item">
                                    <h3 className="accordion-header">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#durgaFaqTwo"
                                            aria-expanded="false"
                                            aria-controls="durgaFaqTwo"
                                        >
                                            Can I enquire about bulk orders?
                                        </button>
                                    </h3>

                                    <div
                                        id="durgaFaqTwo"
                                        className="accordion-collapse collapse"
                                        data-bs-parent="#durgaFaqAccordion"
                                    >
                                        <div className="accordion-body">
                                            Yes. You can contact our team with your required
                                            products, quantities, and delivery location.
                                            We will help you with product information,
                                            availability, and quotation enquiries.
                                        </div>
                                    </div>
                                </div>

                                {/* FAQ 3 */}
                                <div className="accordion-item">
                                    <h3 className="accordion-header">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#durgaFaqThree"
                                            aria-expanded="false"
                                            aria-controls="durgaFaqThree"
                                        >
                                            Which industries use your safety products?
                                        </button>
                                    </h3>

                                    <div
                                        id="durgaFaqThree"
                                        className="accordion-collapse collapse"
                                        data-bs-parent="#durgaFaqAccordion"
                                    >
                                        <div className="accordion-body">
                                            Our product range is relevant to manufacturing
                                            units, fabrication workshops, construction
                                            sites, maintenance teams, engineering workshops,
                                            and other industrial workplaces. Product
                                            suitability depends on the specific application.
                                        </div>
                                    </div>
                                </div>

                                {/* FAQ 4 */}
                                <div className="accordion-item">
                                    <h3 className="accordion-header">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#durgaFaqFour"
                                            aria-expanded="false"
                                            aria-controls="durgaFaqFour"
                                        >
                                            How can I get a quotation for products?
                                        </button>
                                    </h3>

                                    <div
                                        id="durgaFaqFour"
                                        className="accordion-collapse collapse"
                                        data-bs-parent="#durgaFaqAccordion"
                                    >
                                        <div className="accordion-body">
                                            You can submit an enquiry through our website
                                            contact form or call us at +91 98100 32627.
                                            Share your product requirements and quantity
                                            so our team can respond to your enquiry.
                                        </div>
                                    </div>
                                </div>

                                {/* FAQ 5 */}
                                <div className="accordion-item">
                                    <h3 className="accordion-header">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#durgaFaqFive"
                                            aria-expanded="false"
                                            aria-controls="durgaFaqFive"
                                        >
                                            Where is Durga Enterprises located?
                                        </button>
                                    </h3>

                                    <div
                                        id="durgaFaqFive"
                                        className="accordion-collapse collapse"
                                        data-bs-parent="#durgaFaqAccordion"
                                    >
                                        <div className="accordion-body">
                                            Durga Enterprises is located at 4882,
                                            Shop No. 305–306, 3rd Floor, Laxmi Narayan
                                            Market, Phatak Namak, Hauz Qazi,
                                            Delhi – 110006, India.
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ================= FAQ SECTION end ================= */}

            {/* ================= TESTIMONIAL SECTION ================= */}
            <section className="home-testimonial-section py-lg-5 py-4">
                <div className="container py-lg-4">

                    {/* Global Heading */}
                    <div className="text-center mb-5">
                        <span className="section-subtitle">
                            Customer Feedback
                        </span>

                        <h2 className="section-title">
                            What Our Customers Say
                        </h2>

                        <p className="home-testimonial-intro mx-auto mt-3 mb-0">
                            We value the trust of our customers and focus on
                            understanding their welding and industrial
                            safety product requirements.
                        </p>
                    </div>

                    {/* Testimonial Swiper */}
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        slidesPerView={1}
                        spaceBetween={24}
                        speed={700}
                        grabCursor={true}
                        autoplay={{
                            delay: 4500,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        pagination={{
                            clickable: true,
                            el: ".home-testimonial-pagination",
                        }}
                        breakpoints={{
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            1200: {
                                slidesPerView: 3,
                                spaceBetween: 24,
                            },
                        }}
                        className="home-testimonial-slider"
                    >

                        {testimonials.map((item) => (
                            <SwiperSlide key={item.id}>

                                <div className="home-testimonial-card h-100">

                                    {/* Rating */}
                                    <div className="home-testimonial-rating mb-3">
                                        {Array.from({ length: item.rating }).map((_, index) => (
                                            <i
                                                key={index}
                                                className="fa-solid fa-star"
                                            ></i>
                                        ))}
                                    </div>

                                    {/* Review */}
                                    <p className="home-testimonial-review">
                                        "{item.review}"
                                    </p>

                                    {/* Customer Information */}
                                    <div className="home-testimonial-user d-flex align-items-center gap-3 mt-auto">

                                        <div className="home-testimonial-avatar">
                                            <i className="fa-regular fa-user"></i>
                                        </div>

                                        <div>
                                            <h5 className="mb-1">
                                                {item.name}
                                            </h5>

                                            <span>
                                                {item.designation}
                                            </span>
                                        </div>

                                    </div>

                                </div>

                            </SwiperSlide>
                        ))}

                    </Swiper>

                    {/* Pagination */}
                    <div className="home-testimonial-pagination"></div>

                </div>
            </section>
            {/* ================= TESTIMONIAL SECTION END ================= */}



        </>
    )
}

export default Home

