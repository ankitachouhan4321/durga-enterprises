import React, { useState } from "react";
import Breadcrumb from "../components/Breadcrumb";

const CONTACT_EMAIL = "info.viraladsmedia@gmail.com";

const initialForm = {
  name: "",
  company: "",
  email: "",
  phone: "",
  message: "",
  website: "",
};

const Contact = () => {
  const [formData, setFormData] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    // Honeypot field to reduce spam
    if (formData.website.trim()) return;

    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    const data = new FormData();

    data.append(
      "_subject",
      "Durga Enterprises - New Website Enquiry"
    );
    data.append("_template", "table");
    data.append("_captcha", "false");
    data.append("_honey", formData.website);

    data.append("Name", formData.name.trim());
    data.append(
      "Company",
      formData.company.trim() || "Not Provided"
    );
    data.append("Email", formData.email.trim());
    data.append("Phone", formData.phone.trim());
    data.append("Message", formData.message.trim());

    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${CONTACT_EMAIL}`,
        {
          method: "POST",
          body: data,
          headers: {
            Accept: "application/json",
          },
        }
      );

      const result = await response.json();

      if (
        !response.ok ||
        (result.success !== "true" && result.success !== true)
      ) {
        throw new Error(
          result.message || "Form submission failed."
        );
      }

      setStatus({
        type: "success",
        message:
          "Your enquiry has been submitted. Our team will contact you after reviewing your message.",
      });

      setFormData(initialForm);
    } catch (error) {
      console.error("Contact form error:", error);

      setStatus({
        type: "danger",
        message:
          "We couldn't submit your enquiry right now. Please try again or contact us by phone or email.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Breadcrumb */}
      <Breadcrumb title="Contact Us" />

      {/* Contact Section */}
      <section className="durga-contact-section py-5">
        <div className="container py-lg-4">
          <div className="row g-4">

            {/* LEFT SIDE - CONTACT DETAILS */}
            <div className="col-lg-4">
              <div className="durga-contact-info h-100">

                <div className="section-heading">
                
                  <h2 className="section-title">
                    Contact Us for Industrial Needs
                  </h2>
                </div>

                {/* Phone */}
                <div className="durga-contact-detail">
                  <div className="durga-contact-icon">
                    <i className="fa-solid fa-phone"></i>
                  </div>

                  <div>
                    <h5>
                      <a href="tel:+919810032627">
                        +91 98100 32627
                      </a>
                    </h5>
                    <p>
                      Contact us for product enquiries.
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="durga-contact-detail">
                  <div className="durga-contact-icon">
                    <i className="fa-solid fa-envelope"></i>
                  </div>

                  <div>
                    <h5>Email Address</h5>
                    <p>
                      <a href="mailto:durgaenterprises918@yahoo.com">
                        durgaenterprises918@yahoo.com
                      </a>
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className="durga-contact-detail border-0">
                  <div className="durga-contact-icon">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>

                  <div>
                    <h5>Our Office</h5>
                    <p>
                      4882, Shop No. 305–306, 3rd Floor,
                      Laxmi Narayan Market, Phatak Namak,
                      Hauz Qazi, Delhi – 110006, India
                    </p>
                  </div>
                </div>

              

              </div>
            </div>

            {/* RIGHT SIDE - CONTACT FORM */}
            <div className="col-lg-8">
              <div className="durga-contact-form-wrapper">

                {/* DURGA ENTERPRISES - WORKING CONTACT FORM */}
                <form
                  action="https://formsubmit.co/info.viraladsmedia@gmail.com"
                  method="POST"
                >
                  {/* FormSubmit Settings */}
                  <input
                    type="hidden"
                    name="_subject"
                    value="New Enquiry - Durga Enterprises Website"
                  />

                  <input
                    type="hidden"
                    name="_template"
                    value="table"
                  />

                  {/* Spam Protection */}
                  <input
                    type="text"
                    name="_honey"
                    style={{ display: "none" }}
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  <div className="row g-4">

                    {/* Name */}
                    <div className="col-md-6">
                      <input
                        type="text"
                        name="Name"
                        className="durga-contact-input"
                        placeholder="Name *"
                        maxLength={100}
                        autoComplete="name"
                        required
                      />
                    </div>

                    {/* Company */}
                    <div className="col-md-6">
                      <input
                        type="text"
                        name="Company"
                        className="durga-contact-input"
                        placeholder="Company"
                        maxLength={120}
                        autoComplete="organization"
                      />
                    </div>

                    {/* Email */}
                    <div className="col-md-6">
                      <input
                        type="email"
                        name="email"
                        className="durga-contact-input"
                        placeholder="Email Address *"
                        autoComplete="email"
                        required
                      />
                    </div>

                    {/* Phone */}
                    <div className="col-md-6">
                      <input
                        type="tel"
                        name="Phone"
                        className="durga-contact-input"
                        placeholder="Phone Number *"
                        autoComplete="tel"
                        minLength={7}
                        maxLength={20}
                        required
                      />
                    </div>

                    {/* Message */}
                    <div className="col-12">
                      <textarea
                        name="Message"
                        className="durga-contact-textarea"
                        placeholder="How can we help? *"
                        rows={9}
                        maxLength={3000}
                        required
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="col-12">
                      <button
                        type="submit"
                        className="durga-contact-submit"
                      >
                        SEND A MESSAGE
                        <i className="fa-solid fa-arrow-right ms-2"></i>
                      </button>
                    </div>

                  </div>
                </form>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* GOOGLE MAP SECTION */}
      <section
        className="durga-contact-map"
        aria-label="Durga Enterprises location"
      >
        <iframe
          title="Durga Enterprises Location"
          src="https://www.google.com/maps?q=Hauz%20Qazi%20Delhi%20110006&output=embed"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  );
};

export default Contact;