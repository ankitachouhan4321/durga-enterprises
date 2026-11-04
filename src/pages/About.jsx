import React from 'react'
import Breadcrumb from '../components/Breadcrumb'

const About = () => {
  return (
    <>
      {/* Breadcrumb */}
      <Breadcrumb title="About Us" />


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

              <a href="/about" className="btn-theme mt-4">
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




      {/* ================= PRODUCT CAPABILITIES START ================= */}
      <section className="home-capabilities-section py-5">
        <div className="container py-lg-4">

          {/* Section Heading */}
          <div className="home-capabilities-heading text-center mb-5">
            <h2 className="section-title">
              <span>OUR INDUSTRIAL SOLUTIONS ARE</span>
              <br />
              BUILT FOR PERFORMANCE
            </h2>
          </div>

          {/* Cards */}
          <div className="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-3 g-xl-4 justify-content-center">

            {[
              {
                id: 1,
                title: "Welding Equipment & Accessories",
                image: "/img/cap1.jpg",
              },
              {
                id: 2,
                title: "Industrial Safety & Protection",
                image: "/img/cap2.jpg",
              },
              {
                id: 3,
                title: "Road & Traffic Safety",
                image: "/img/cap3.jpg",
              },
              {
                id: 4,
                title: "Industrial Tools & Equipment",
                image: "/img/cap4.jpg",
              },
              {
                id: 5,
                title: "Workplace Safety Essentials",
                image: "/img/cap5.jpg",
              },
            ].map((item) => (
              <div className="col" key={item.id}>

                <div className="home-capabilities-card h-100">

                  <div className="home-capabilities-image">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                    />
                  </div>

                  <div className="home-capabilities-content">
                    <h3>{item.title}</h3>
                  </div>

                </div>
              </div>
            ))}

          </div>
        </div>
      </section>
      {/* ================= PRODUCT CAPABILITIES END ================= */}
    </>
  )
}

export default About
