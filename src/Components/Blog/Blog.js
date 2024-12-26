// Blog.js
import React from 'react';
import './Blog.css';

function Blog() {
  return (
    <div className="container-fluid py-5">
      <div className="container">
        <div className="text-center mx-auto mb-5" style={{ maxWidth: '600px' }}>
          <h5 className="text-primary text-uppercase" style={{ letterSpacing: '5px' }}>Blog</h5>
          <h1 className="display-5 mb-0">Latest Insights From Our Blog</h1>
        </div>
        <div className="row g-5">
          <div className="col-lg-6 wow slideInUp" data-wow-delay="0.3s">
            <div className="blog-item">
              <div className="position-relative">
                <img className="img-fluid w-100 rounded-top" src={`${process.env.PUBLIC_URL}/images/blog-1.jpg`} alt="" />
                <div className="blog-date">
                  <h5 className="text-white fw-bold mb-0">15</h5>
                  <h6 className="text-light mb-0">November</h6>
                </div>
              </div>
              <div className="bg-primary rounded-bottom p-5">
                <div className="d-flex mb-3">
                  <span className="text-light text-uppercase">Admin</span>
                  <span className="text-light px-2">|</span>
                  <span className="text-light text-uppercase">UX Design</span>
                </div>
                <a className="h3 m-0 text-white" href="">How to Enhance User Experience with Modern Design Trends</a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 wow slideInUp" data-wow-delay="0.6s">
            <div className="blog-item">
              <div className="position-relative">
                <img className="img-fluid w-100 rounded-top" src={`${process.env.PUBLIC_URL}/images/blog-2.jpg`} alt="" />
                <div className="blog-date">
                  <h5 className="text-white fw-bold mb-0">20</h5>
                  <h6 className="text-light mb-0">November</h6>
                </div>
              </div>
              <div className="bg-primary rounded-bottom p-5">
                <div className="d-flex mb-3">
                  <span className="text-light text-uppercase">Admin</span>
                  <span className="text-light px-2">|</span>
                  <span className="text-light text-uppercase">Web Development</span>
                </div>
                <a className="h3 m-0 text-white" href="">Top 5 Web Development Tools to Boost Productivity in 2024</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
