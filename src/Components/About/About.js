// About.js
import React from 'react';
import './About.css';

function About() {
  return (
    <div className="container-fluid py-5">
      <div className="container">
        <div className="row gx-5">
          <div className="col-lg-5 mb-5 mb-lg-0">
            <img className="w-100 h-100 rounded" src={`${process.env.PUBLIC_URL}/images/system2.jpg`} alt="About" style={{ objectFit: 'cover', border: '1px solid' }} />
          </div>
          <div className="col-lg-7">
            <div className="mb-4">
              <h5 className="text-primary text-uppercase" style={{ letterSpacing: '5px' }}>About Us</h5>
              <h1 className="display-5 mb-0">Delivering Reliable CCTV Solutions & Expert Services</h1>
            </div>
            <h4 className="text-body fst-italic mb-4">Providing top-notch security solutions for your peace of mind. Trusted by thousands for advanced surveillance systems.</h4>
            <p className="mb-4">We specialize in designing and installing cutting-edge CCTV systems tailored to your needs. With a focus on security and innovation, we bring the best solutions for residential, commercial, and industrial spaces. Our team is dedicated to ensuring your safety with seamless installation, support, and maintenance.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;