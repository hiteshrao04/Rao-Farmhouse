import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sprout, Truck, Clock, ShieldCheck, ArrowRight, Star } from 'lucide-react';
import './Home.css';

const Home = () => {
  useEffect(() => {
    // Fade in animation on scroll
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
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content container">
          <h1 className="display-large">Fresh Organic Kinnow</h1>
          <p className="hero-subtitle display-small">Direct from Rao Farmhouse to Your Home</p>
          <p className="hero-description body-large">
            Harvested after your order • No middlemen • Winter only
          </p>
          <div className="hero-buttons">
            <Link to="/order" className="btn-cta">Order Fresh Kinnow</Link>
            <Link to="/our-farm" className="btn-secondary">View Our Farm</Link>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="trust-section">
        <div className="container">
          <div className="trust-grid">
            <div className="trust-card animated">
              <Sprout size={48} className="trust-icon" />
              <h3 className="heading-3">100% Organic</h3>
              <p className="body-medium">No chemicals or pesticides</p>
            </div>
            <div className="trust-card animated">
              <Truck size={48} className="trust-icon" />
              <h3 className="heading-3">Farm Direct</h3>
              <p className="body-medium">No middlemen involved</p>
            </div>
            <div className="trust-card animated">
              <Clock size={48} className="trust-icon" />
              <h3 className="heading-3">Freshly Harvested</h3>
              <p className="body-medium">Picked after your order</p>
            </div>
            <div className="trust-card animated">
              <ShieldCheck size={48} className="trust-icon" />
              <h3 className="heading-3">Home Delivery</h3>
              <p className="body-medium">Minimum 5kg order</p>
            </div>
          </div>
        </div>
      </section>

      {/* Farm Story Section */}
      <section className="farm-story-section">
        <div className="container">
          <div className="farm-story-grid">
            <div className="farm-story-image animated">
              <div className="placeholder-image">
                <Sprout size={64} />
                <p>Farm Image</p>
              </div>
            </div>
            <div className="farm-story-content animated">
              <h2 className="heading-1">A Farm, Not a Factory</h2>
              <p className="body-large">
                Rao Farmhouse is home to 400+ organically grown kinnow plants. We grow seasonally, 
                harvest responsibly, and deliver directly — so you get fruit exactly as nature intended.
              </p>
              <p className="body-medium">
                Located away from city pollution, our farm focuses on quality over quantity. 
                Every kinnow is grown with care, patience, and zero chemicals.
              </p>
              <Link to="/our-farm" className="btn-primary">
                See Our Farming Practices <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Product Preview */}
      <section className="product-preview-section">
        <div className="container">
          <h2 className="heading-1 section-title animated">Order Fresh Kinnow</h2>
          <div className="product-grid">
            <div className="network-card animated hover-lift">
              <div className="product-badge">Starter Pack</div>
              <div className="product-image-placeholder">
                <Sprout size={48} />
              </div>
              <h3 className="network-card-title">5 KG</h3>
              <p className="product-price">₹250</p>
              <p className="network-card-content">Perfect for trying our fresh kinnow</p>
              <Link to="/order" className="btn-primary full-width">Order Now</Link>
            </div>

            <div className="network-card animated hover-lift best-value">
              <div className="product-badge best">Best Value</div>
              <div className="product-image-placeholder">
                <Sprout size={48} />
              </div>
              <h3 className="network-card-title">10 KG</h3>
              <p className="product-price">₹450</p>
              <p className="network-card-content">Most popular choice for families</p>
              <Link to="/order" className="btn-primary full-width">Order Now</Link>
            </div>

            <div className="network-card animated hover-lift">
              <div className="product-badge">Family Pack</div>
              <div className="product-image-placeholder">
                <Sprout size={48} />
              </div>
              <h3 className="network-card-title">20 KG</h3>
              <p className="product-price">₹850</p>
              <p className="network-card-content">Share with family and neighbors</p>
              <Link to="/order" className="btn-primary full-width">Order Now</Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works-section">
        <div className="container">
          <h2 className="heading-1 section-title animated">How It Works</h2>
          <div className="steps-container">
            <div className="step-card animated">
              <div className="step-number">1</div>
              <h3 className="heading-3">You Place Order</h3>
              <p className="body-medium">Select your quantity and place order via WhatsApp</p>
            </div>
            <div className="step-arrow">→</div>
            <div className="step-card animated">
              <div className="step-number">2</div>
              <h3 className="heading-3">We Harvest Fresh</h3>
              <p className="body-medium">Your kinnow is freshly picked from our farm</p>
            </div>
            <div className="step-arrow">→</div>
            <div className="step-card animated">
              <div className="step-number">3</div>
              <h3 className="heading-3">Careful Packing</h3>
              <p className="body-medium">Packed with care at the farm</p>
            </div>
            <div className="step-arrow">→</div>
            <div className="step-card animated">
              <div className="step-number">4</div>
              <h3 className="heading-3">Home Delivery</h3>
              <p className="body-medium">Delivered fresh to your doorstep</p>
            </div>
          </div>
        </div>
      </section>

      {/* Scarcity Section */}
      <section className="scarcity-section">
        <div className="container">
          <div className="scarcity-content animated">
            <Clock size={48} className="scarcity-icon" />
            <h2 className="heading-1">Seasonal Harvest – Winter Only</h2>
            <p className="body-large">
              Kinnow is harvested only during winter months. Limited quantity available daily. 
              Once the season ends, orders close.
            </p>
            <Link to="/order" className="btn-cta">Book Your Kinnow Now</Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="container">
          <h2 className="heading-1 section-title animated">What Our Customers Say</h2>
          <div className="testimonials-grid">
            <div className="network-card testimonial-card animated">
              <div className="stars">
                <Star size={20} fill="#F57C00" color="#F57C00" />
                <Star size={20} fill="#F57C00" color="#F57C00" />
                <Star size={20} fill="#F57C00" color="#F57C00" />
                <Star size={20} fill="#F57C00" color="#F57C00" />
                <Star size={20} fill="#F57C00" color="#F57C00" />
              </div>
              <p className="body-medium testimonial-text">
                "Juicy, sweet, and really fresh. Felt like village fruit. Will order again!"
              </p>
              <p className="body-small customer-name">– Priya S., Chandigarh</p>
            </div>

            <div className="network-card testimonial-card animated">
              <div className="stars">
                <Star size={20} fill="#F57C00" color="#F57C00" />
                <Star size={20} fill="#F57C00" color="#F57C00" />
                <Star size={20} fill="#F57C00" color="#F57C00" />
                <Star size={20} fill="#F57C00" color="#F57C00" />
                <Star size={20} fill="#F57C00" color="#F57C00" />
              </div>
              <p className="body-medium testimonial-text">
                "Finally found organic kinnow without going to the village. Kids loved it!"
              </p>
              <p className="body-small customer-name">– Rajesh K., Ludhiana</p>
            </div>

            <div className="network-card testimonial-card animated">
              <div className="stars">
                <Star size={20} fill="#F57C00" color="#F57C00" />
                <Star size={20} fill="#F57C00" color="#F57C00" />
                <Star size={20} fill="#F57C00" color="#F57C00" />
                <Star size={20} fill="#F57C00" color="#F57C00" />
                <Star size={20} fill="#F57C00" color="#F57C00" />
              </div>
              <p className="body-medium testimonial-text">
                "Best quality I've seen. Fresh delivery and reasonable price. Highly recommend!"
              </p>
              <p className="body-small customer-name">– Simran M., Patiala</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
