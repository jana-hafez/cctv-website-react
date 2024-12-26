import React from 'react';
import Carousel from '../Carousel/Carousel';
import About from '../About/About';
import Services from '../Services/Services';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';

function Home() {
  return (
    <div>
      {/* Carousel Section */}
      <Carousel />

      {/* About Section */}
      <section id="about">
        <About />
      </section>

      {/* Services Section */}
      <section id="services">
        <Services />
      </section>

      {/* Blog Section */}
      <section id="blog">
        <Blog />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default Home;
