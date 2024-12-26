// Testimonials.js
import React from 'react';
import './Testimonials.css';

function Testimonials() {
  return (
    <div className="container-fluid py-5">
      <div className="container">
        <div className="text-center mx-auto mb-5" style={{ maxWidth: '600px' }}>
          <h5 className="text-primary text-uppercase" style={{ letterSpacing: '5px' }}>Testimonials</h5>
          <h1 className="display-5 mb-0">What People Say About Our Services</h1>
        </div>
        <div className="owl-carousel testimonial-carousel">
          <div className="text-center pb-4">
            <img className="img-fluid mx-auto rounded-circle" src={`${process.env.PUBLIC_URL}/images/testimonial-1.jpg`} alt="" style={{ width: '100px', height: '100px' }} />
            <div className="testimonial-text bg-light rounded p-4 mt-n5">
              <p className="mt-5">The service was exceptional! The team went above and beyond to deliver results that exceeded my expectations.</p>
              <h4 className="text-truncate">John Doe</h4>
              <i>Software Engineer</i>
            </div>
          </div>
          <div className="text-center">
            <img className="img-fluid mx-auto rounded-circle" src={`${process.env.PUBLIC_URL}/images/testimonial-2.jpg`} alt="" style={{ width: '100px', height: '100px' }} />
            <div className="testimonial-text bg-light rounded p-4 mt-n5">
              <p className="mt-5">I am extremely happy with the professionalism and quality of work. Definitely recommend their services to others!</p>
              <h4 className="text-truncate">Jane Smith</h4>
              <i>Marketing Specialist</i>
            </div>
          </div>
          <div className="text-center">
            <img className="img-fluid mx-auto rounded-circle" src={`${process.env.PUBLIC_URL}/images/testimonial-3.jpg`} alt="" style={{ width: '100px', height: '100px' }} />
            <div className="testimonial-text bg-light rounded p-4 mt-n5">
              <p className="mt-5">They delivered on time and with great attention to detail. Truly a fantastic experience working with this team.</p>
              <h4 className="text-truncate">Michael Lee</h4>
              <i>Business Owner</i>
            </div>
          </div>
          <div className="text-center">
            <img className="img-fluid mx-auto rounded-circle" src={`${process.env.PUBLIC_URL}/images/testimonial-4.jpg`} alt="" style={{ width: '100px', height: '100px' }} />
            <div className="testimonial-text bg-light rounded p-4 mt-n5">
              <p className="mt-5">From start to finish, the team was attentive and responsive. I’m so happy with the end result!</p>
              <h4 className="text-truncate">Sarah Johnson</h4>
              <i>Designer</i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;