
// Services.js
import React from 'react';
import './Services.css';

function Services() {
  return (
    <div className="container-fluid py-5">
      <div className="container">
        <div className="text-center mx-auto mb-5" style={{ maxWidth: '600px' }}>
          <h5 className="text-primary text-uppercase" style={{ letterSpacing: '5px' }}>Services</h5>
          <h1 className="display-5 mb-0">Our Premier CCTV Security Solutions</h1>
        </div>
        <div className="row g-5">
          <div className="col-lg-4 col-md-6">
            <div className="service-item bg-light border-bottom border-5 border-primary rounded p-3">
              <i className="flaticon-cctv d-block display-1 fw-normal text-secondary mb-3"></i>
              <h5 className="text-primary mb-0">CCTV</h5>
              <h3 className="mb-3">Expert Installation</h3>
              <p>We offer professional CCTV installation services tailored to your specific security needs, ensuring complete coverage and reliability.</p>
              <a href="#">Read More<i className="bi bi-arrow-right ms-2"></i></a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-item bg-light border-bottom border-5 border-primary rounded p-3">
              <i className="flaticon-surveillance d-block display-1 fw-normal text-secondary mb-3"></i>
              <h5 className="text-primary mb-0">CCTV</h5>
              <h3 className="mb-3">System Configuration</h3>
              <p>Our experts configure your CCTV system for optimal performance, ensuring clear video quality and efficient storage management.</p>
              <a href="#">Read More<i className="bi bi-arrow-right ms-2"></i></a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-item bg-light border-bottom border-5 border-primary rounded p-3">
              <i className="flaticon-camera d-block display-1 fw-normal text-secondary mb-3"></i>
              <h5 className="text-primary mb-0">CCTV</h5>
              <h3 className="mb-3">Routine Maintenance</h3>
              <p>We provide ongoing maintenance to ensure your CCTV systems are always in peak condition, minimizing downtime and preventing issues.</p>
              <a href="#">Read More<i className="bi bi-arrow-right ms-2"></i></a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-item bg-light border-bottom border-5 border-primary rounded p-3">
              <i className="flaticon-double d-block display-1 fw-normal text-secondary mb-3"></i>
              <h5 className="text-primary mb-0">CCTV</h5>
              <h3 className="mb-3">Repair & Troubleshooting</h3>
              <p>Our team provides fast and reliable CCTV repair services, troubleshooting any technical issues to restore full functionality quickly.</p>
              <a href="#">Read More<i className="bi bi-arrow-right ms-2"></i></a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-item bg-light border-bottom border-5 border-primary rounded p-3">
              <i className="flaticon-security-system d-block display-1 fw-normal text-secondary mb-3"></i>
              <h5 className="text-primary mb-0">CCTV</h5>
              <h3 className="mb-3">Remote Monitoring</h3>
              <p>Monitor your premises remotely with our advanced CCTV systems, offering real-time surveillance from anywhere with an internet connection.</p>
              <a href="#">Read More<i className="bi bi-arrow-right ms-2"></i></a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-item bg-light border-bottom border-5 border-primary rounded p-3">
              <i className="flaticon-recorder d-block display-1 fw-normal text-secondary mb-3"></i>
              <h5 className="text-primary mb-0">CCTV</h5>
              <h3 className="mb-3">Access Control Integration</h3>
              <p>Integrate your CCTV system with access control solutions for enhanced security, ensuring only authorized personnel can enter restricted areas.</p>
              <a href="#">Read More<i className="bi bi-arrow-right ms-2"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;