import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sprout, Droplet, Sun, Heart, Shield } from 'lucide-react';
import './OurFarm.css';

const OurFarm = () => {
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
    <div className="our-farm-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <h1 className="display-large animated">Our Farm</h1>
          <p className="body-large animated">400+ Organic Kinnow Plants Grown with Love and Care</p>
        </div>
      </section>

      {/* Farm Story */}
      <section className="farm-detail-section">
        <div className="container">
          <div className="farm-detail-grid">
            <div className="farm-image-large animated">
              <div className="placeholder-image">
                <Sprout size={80} />
                <p>Farm Landscape</p>
              </div>
            </div>
            <div className="farm-detail-content animated">
              <h2 className="heading-1">A Family Legacy</h2>
              <p className="body-large">
                Rao Farmhouse is a family-owned organic farm located away from city pollution. 
                Our farm is home to over 400 kinnow plants, each grown with dedication and care.
              </p>
              <p className="body-medium">
                We believe in sustainable farming practices that respect nature and deliver the 
                highest quality fruit. Our farm focuses on quality over quantity, ensuring every 
                kinnow meets our strict standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Farming Practices */}
      <section className="farming-practices-section">
        <div className="container">
          <h2 className="heading-1 section-title animated">Our Organic Farming Practices</h2>
          <div className="practices-grid">
            <div className="network-card animated hover-lift">
              <Droplet size={48} className="practice-icon" />
              <h3 className="network-card-title">Natural Irrigation</h3>
              <p className="network-card-content">
                We use efficient water management systems that conserve water while ensuring 
                our plants get optimal hydration.
              </p>
            </div>

            <div className="network-card animated hover-lift">
              <Sun size={48} className="practice-icon" />
              <h3 className="network-card-title">Seasonal Growing</h3>
              <p className="network-card-content">
                Our kinnow naturally ripens during winter months, ensuring maximum sweetness 
                and nutritional value.
              </p>
            </div>

            <div className="network-card animated hover-lift">
              <Shield size={48} className="practice-icon" />
              <h3 className="network-card-title">Zero Chemicals</h3>
              <p className="network-card-content">
                No pesticides, no chemical fertilizers. We rely on organic compost and 
                natural pest management.
              </p>
            </div>

            <div className="network-card animated hover-lift">
              <Heart size={48} className="practice-icon" />
              <h3 className="network-card-title">Hand-Picked Care</h3>
              <p className="network-card-content">
                Each kinnow is carefully inspected and hand-picked at peak ripeness to 
                ensure premium quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Harvest Process */}
      <section className="harvest-section">
        <div className="container">
          <h2 className="heading-1 section-title animated">Our Harvest Process</h2>
          <div className="harvest-grid">
            <div className="harvest-step animated">
              <div className="harvest-image">
                <div className="placeholder-image">
                  <Sprout size={48} />
                </div>
              </div>
              <h3 className="heading-3">Step 1: Order Received</h3>
              <p className="body-medium">
                Once we receive your order, we prepare to harvest fresh kinnow specifically for you.
              </p>
            </div>

            <div className="harvest-step animated">
              <div className="harvest-image">
                <div className="placeholder-image">
                  <Sprout size={48} />
                </div>
              </div>
              <h3 className="heading-3">Step 2: Quality Selection</h3>
              <p className="body-medium">
                Our team carefully selects the ripest, juiciest kinnow from our trees.
              </p>
            </div>

            <div className="harvest-step animated">
              <div className="harvest-image">
                <div className="placeholder-image">
                  <Sprout size={48} />
                </div>
              </div>
              <h3 className="heading-3">Step 3: Gentle Harvesting</h3>
              <p className="body-medium">
                Each fruit is hand-picked with care to avoid any damage or bruising.
              </p>
            </div>

            <div className="harvest-step animated">
              <div className="harvest-image">
                <div className="placeholder-image">
                  <Sprout size={48} />
                </div>
              </div>
              <h3 className="heading-3">Step 4: Fresh Packing</h3>
              <p className="body-medium">
                Immediately packed at the farm to maintain freshness during delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-section">
        <div className="container">
          <div className="why-choose-content animated">
            <h2 className="heading-1">Why Choose Rao Farmhouse?</h2>
            <div className="why-choose-list">
              <div className="why-item">
                <div className="why-number">1</div>
                <div>
                  <h3 className="heading-3">Direct from Farm</h3>
                  <p className="body-medium">No middlemen means better prices and fresher fruit for you.</p>
                </div>
              </div>
              <div className="why-item">
                <div className="why-number">2</div>
                <div>
                  <h3 className="heading-3">Transparency</h3>
                  <p className="body-medium">Know exactly where your food comes from and how it's grown.</p>
                </div>
              </div>
              <div className="why-item">
                <div className="why-number">3</div>
                <div>
                  <h3 className="heading-3">Quality Assurance</h3>
                  <p className="body-medium">Every kinnow meets our strict quality standards before delivery.</p>
                </div>
              </div>
              <div className="why-item">
                <div className="why-number">4</div>
                <div>
                  <h3 className="heading-3">Supporting Local</h3>
                  <p className="body-medium">Your purchase directly supports our family farm and local agriculture.</p>
                </div>
              </div>
            </div>
            <Link to="/order" className="btn-cta">Order Fresh Kinnow Now</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurFarm;
