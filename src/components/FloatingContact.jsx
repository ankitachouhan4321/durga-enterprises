import React from "react";

const FloatingContact = () => {
    const phone = "919810032627";

    return (
        <div className="durga-floating-contact">

            <a
                href={`https://wa.me/${phone}?text=${encodeURIComponent("Hello Durga Enterprises, I want to enquire about your products.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="durga-float-btn whatsapp-btn"
                aria-label="Chat on WhatsApp"
            >
                <i className="fa-brands fa-whatsapp"></i>
                <span>Chat With Us</span>
            </a>

            <a
                href="tel:+919810032627"
                className="durga-float-btn call-btn"
                aria-label="Call Durga Enterprises"
            >
                <i className="fa-solid fa-phone"></i>
                <span>Call Now</span>
            </a>

        </div>
    );
};

export default FloatingContact;