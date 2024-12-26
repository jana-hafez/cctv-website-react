import React from 'react';
import './Carousel.css';

function Carousel() {
  return (
    <div className="container-fluid p-0 mb-5">
      <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner">
          {/* Carousel Item */}
          <div className="carousel-item active">
            <img
              className="w-100"
              src={`${process.env.PUBLIC_URL}/images/new good.jpg`}
              alt="Carousel"
            />
            <div className="carousel-caption">
              <div className="text-container">
                <h5 className="text-uppercase animated bounceInDown">Best Security Services</h5>
                <h1 className="display-1 mb-md-4 animated zoomIn">Safe & Secure Home For Your Family</h1>
              </div>
            </div>
          </div>
          {/* Add more carousel items if needed */}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
