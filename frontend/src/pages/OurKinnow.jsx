import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Droplets, Zap, Heart, Leaf, Apple, Sun } from 'lucide-react';
import './OurKinnow.css';

const OurKinnow = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fadeIn');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animated');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="our-kinnow-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <h1 className="display-large animated">Our Kinnow</h1>
          <p className="body-large animated">Naturally Sweet, Juicy, and Packed with Nutrition</p>
        </div>
      </section>

      {/* Product Overview */}
      <section className="product-overview-section">
        <div className="container">
          <div className="overview-grid">
            <div className="overview-image animated">
              <div className="placeholder-image-large">
                <Apple size={120} />
                <p>Fresh Kinnow</p>
              </div>
            </div>
            <div className="overview-content animated">
              <h2 className="heading-1">What Makes Our Kinnow Special?</h2>
              <p className="body-large">
                Our kinnow is naturally grown in optimal conditions, harvested at peak ripeness 
                during winter months when the fruit reaches its maximum sweetness and juice content.
              </p>
              <div className="feature-highlights">
                <div className="feature-item">
                  <Droplets className="feature-icon" />
                  <span>Extremely Juicy</span>
                </div>
                <div className="feature-item">
                  <Sun className="feature-icon" />
                  <span>Naturally Sweet</span>
                </div>
                <div className="feature-item">
                  <Leaf className="feature-icon" />
                  <span>100% Organic</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Taste & Quality */}
      <section className="taste-section">
        <div className="container">
          <h2 className="heading-1 section-title animated">Taste & Quality</h2>
          <div className="taste-grid">
            <div className="network-card animated">
              <h3 className="network-card-title">Sweetness Level</h3>
              <div className="quality-bar">
                <div className="quality-fill" style={{width: '95%'}}></div>
              </div>
              <p className="network-card-content">Perfectly balanced natural sweetness</p>
            </div>

            <div className="network-card animated">
              <h3 className="network-card-title">Juice Content</h3>
              <div className="quality-bar">
                <div className="quality-fill" style={{width: '90%'}}></div>
              </div>
              <p className="network-card-content">Exceptionally juicy and refreshing</p>
            </div>

            <div className="network-card animated">
              <h3 className="network-card-title">Size</h3>
              <div className="quality-bar">
                <div className="quality-fill" style={{width: '85%'}}></div>
              </div>
              <p className="network-card-content">Medium to large sized fruits</p>
            </div>
          </div>
        </div>
      </section>

      {/* Health Benefits */}
      <section className="health-benefits-section">
        <div className="container">
          <h2 className="heading-1 section-title animated">Health Benefits</h2>
          <div className="benefits-grid">
            <div className="benefit-card network-card animated hover-lift">
              <Zap size={48} className="benefit-icon" />
              <h3 className="heading-3">Rich in Vitamin C</h3>
              <p className="body-medium">
                Boosts immunity and helps fight common colds and infections.
              </p>
            </div>

            <div className="benefit-card network-card animated hover-lift">
              <Heart size={48} className="benefit-icon" />
              <h3 className="heading-3">Heart Healthy</h3>
              <p className="body-medium">
                Contains antioxidants that support cardiovascular health.
              </p>
            </div>

            <div className="benefit-card network-card animated hover-lift">
              <Droplets size={48} className="benefit-icon" />
              <h3 className="heading-3">Hydrating</h3>
              <p className="body-medium">
                High water content keeps you hydrated and refreshed.
              </p>
            </div>

            <div className="benefit-card network-card animated hover-lift">
              <Leaf size={48} className="benefit-icon" />
              <h3 className="heading-3">Natural Detox</h3>
              <p className="body-medium">
                Helps cleanse your system naturally with fiber and nutrients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seasonal Info */}
      <section className="seasonal-section">
        <div className="container">
          <div className="seasonal-content network-card animated">
            <Sun size={64} className="seasonal-icon" />
            <h2 className="heading-1">Harvest Season: November - February</h2>
            <p className="body-large">
              Kinnow naturally ripens during winter months. This is when the fruit develops its 
              characteristic sweetness and juice content. We harvest only during this season to 
              ensure you get the best quality fruit.
            </p>
            <div className="seasonal-note">
              <p className="body-medium"><strong>Important:</strong> Seasonal availability means limited quantities. 
              Orders are accepted only during harvest months.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Storage Tips */}
      <section className="storage-section">
        <div className="container">
          <h2 className="heading-1 section-title animated">Storage & Shelf Life</h2>
          <div className="storage-grid">
            <div className="storage-card animated">
              <h3 className="heading-3">Room Temperature</h3>
              <p className="body-medium">Keep in a cool, dry place for 5-7 days</p>
            </div>

            <div className="storage-card animated">
              <h3 className="heading-3">Refrigerated</h3>
              <p className="body-medium">Store in refrigerator for 2-3 weeks</p>
            </div>

            <div className="storage-card animated">
              <h3 className="heading-3">Best Practice</h3>
              <p className="body-medium">Consume fresh within first week for optimal taste</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="kinnow-cta-section">
        <div className="container">
          <div className="cta-content animated">
            <h2 className="heading-1">Ready to Experience Farm-Fresh Kinnow?</h2>
            <p className="body-large">
              Order now and taste the difference of organically grown, freshly harvested kinnow.
            </p>
            <Link to="/order" className="btn-cta">Order Fresh Kinnow</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurKinnow;
