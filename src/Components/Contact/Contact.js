import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="container-fluid py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h5 className="text-primary text-uppercase" style={{ letterSpacing: '5px' }}>
            Contact Us
          </h5>
          <h1 className="display-4">Get In Touch</h1>
        </div>
        <div className="row g-4">
          {/* Contact Info Section */}
          <div className="col-md-4">
            <div className="d-flex align-items-center mb-3">
              <div className="btn-lg-square bg-primary text-white rounded-circle me-3">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <h6 className="mb-0">123 Street, City, Country</h6>
            </div>
            <div className="d-flex align-items-center mb-3">
              <div className="btn-lg-square bg-primary text-white rounded-circle me-3">
                <i className="fas fa-envelope"></i>
              </div>
              <h6 className="mb-0">info@example.com</h6>
            </div>
            <div className="d-flex align-items-center mb-3">
              <div className="btn-lg-square bg-primary text-white rounded-circle me-3">
                <i className="fas fa-phone-alt"></i>
              </div>
              <h6 className="mb-0">+123 456 7890</h6>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-md-8">
            <form>
              <div className="row g-3">
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control border-0 bg-light px-4"
                    placeholder="Your Name"
                    required
                    style={{ height: '55px' }}
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="email"
                    className="form-control border-0 bg-light px-4"
                    placeholder="Your Email"
                    required
                    style={{ height: '55px' }}
                  />
                </div>
                <div className="col-12">
                  <input
                    type="text"
                    className="form-control border-0 bg-light px-4"
                    placeholder="Subject"
                    required
                    style={{ height: '55px' }}
                  />
                </div>
                <div className="col-12">
                  <textarea
                    className="form-control border-0 bg-light px-4 py-3"
                    rows="4"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>
                <div className="col-12">
                  <button className="btn btn-primary w-100 py-3" type="submit">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-5">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509015!2d144.95373531549418!3d-37.816279279751885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577ac3ef9c9a9a8!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1613972207391!5m2!1sen!2sau"
            width="100%"
            height="400"
            frameBorder="0"
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
            style={{ border: '0' }}
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
