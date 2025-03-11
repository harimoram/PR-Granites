import React from 'react';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-text">
          <h1 className="hero-title">High-Quality Granite for Your Dream Projects</h1>
          <p className="hero-description">Transform your spaces with the elegance and durability of our premium granite products.</p>
          <a href="#contact" className="cta-button">Get Started</a>
        </div>
        <div className="hero-image">
          <img src="/Hero-Image.png" alt="Granite" className="hero-img" />
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <h2>Who We Are</h2>
        <p>
          At Granite Pro, we specialize in offering top-notch granite products for both residential and commercial
          projects. Whether you're renovating your kitchen, bathroom, or undertaking large-scale construction projects,
          we have the materials you need to create spaces that last.
        </p>
        <div className="about-content">
          <div className="about-image">
            <img src="About-Image.png" alt="Granite Product 1" />
          </div>
          <div className="about-text">
            <p>
              Our premium granite is sourced from the best quarries around the world, ensuring that every piece is
              crafted with attention to detail. From rich, dark hues to lighter shades, we have a wide range of granite
              colors and textures to suit your needs.
            </p>
            <a href="#contact" className="cta-button about-cta">Contact Us for Custom Orders</a>
          </div>
        </div>
      </section>

      {/* Our Products Section */}
      <section className="products-section">
        <h3>Explore Our Exclusive Stone Collection</h3>
        <div className="products-categories">
          <div className="product-category">
            <a href="/granite-countertops" className="category-link">
              <img src="granite-countertops.png" alt="Granite Countertops" className="category-img" />
              <h4>Granite Countertops</h4>
            </a>
          </div>
          <div className="product-category">
            <a href="/marble-slabs-tiles" className="category-link">
              <img src="marble-slabs-tiles.png" alt="Marble Slabs & Tiles" className="category-img" />
              <h4>Marble Slabs & Tiles</h4>
            </a>
          </div>
          <div className="product-category">
            <a href="/quartz-stone" className="category-link">
              <img src="quartz-stone.png" alt="Quartz & Engineered Stone" className="category-img" />
              <h4>Quartz & Engineered Stone</h4>
            </a>
          </div>
          <div className="product-category">
            <a href="/custom-stone-designs" className="category-link">
              <img src="custom-stone-designs.png" alt="Custom Stone Designs" className="category-img" />
              <h4>Custom Stone Designs</h4>
            </a>
          </div>
        </div>
        <a href="/product-gallery" className="cta-button">View Full Catalog</a>
      </section>

      {/* Additional Section with Shapes and Animation */}
      <section className="extra-section">
        <h3>Why Choose Granite Pro?</h3>
        <div className="extra-content">
          <div className="extra-text">
            <p>We deliver the finest quality, exceptional customer service, and seamless installation experience. Choose us for:</p>
            <ul>
              <li>High Durability</li>
              <li>Customizable Designs</li>
              <li>Expert Installation</li>
            </ul>
            <a href="#contact" className="cta-button">Request a Quote</a>
          </div>
          {/* Added Image Beside Text */}
          <div className="extra-image">
            <img src="About-Image.png" alt="Granite Slabs" className="extra-img" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
