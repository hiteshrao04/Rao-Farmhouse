import React, { useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Instagram } from 'lucide-react';
import './Contact.css';

const Contact = () => {
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
    <div className="contact-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <h1 className="display-large animated">Contact Us</h1>
          <p className="body-large animated">We'd Love to Hear From You</p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="contact-options-section">
        <div className="container">
          <div className="contact-grid">
            <div className="network-card contact-card animated hover-lift">
              <Phone size={48} className="contact-icon" />
              <h3 className="heading-3">Call Us</h3>
              <a href="tel:+919876543210" className="contact-link body-large">
                +91 98765 43210
              </a>
              <p className="body-small">Mon - Sat, 9:00 AM - 6:00 PM</p>
            </div>

            <div className="network-card contact-card animated hover-lift">
              <MessageCircle size={48} className="contact-icon" />
              <h3 className="heading-3">WhatsApp</h3>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link body-large">

                Chat with Us
              </a>
              <p className="body-small">Quick response guaranteed</p>
            </div>

            <div className="network-card contact-card animated hover-lift">
              <Mail size={48} className="contact-icon" />
              <h3 className="heading-3">Email</h3>
              <a href="mailto:hello@raofarmhouse.com" className="contact-link body-large">raofarmhouse04@gmail.com

              </a>
              <p className="body-small">Response within 24 hours</p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="location-section">
        <div className="container">
          <div className="location-grid">
            <div className="location-content animated">
              <MapPin size={64} className="location-icon" />
              <h2 className="heading-1">Visit Our Farm</h2>
              <p className="body-large">
                Rao Farmhouse<br />
                Village Road, Near Kinnow Orchards<br />
                Punjab, India
              </p>
              <div className="farm-hours">
                <Clock size={24} />
                <div>
                  <h4 className="heading-3">Farm Visiting Hours</h4>
                  <p className="body-medium">Monday - Saturday: 9:00 AM - 5:00 PM</p>
                  <p className="body-medium">Sunday: Closed</p>
                  <p className="body-small">Please call ahead to schedule a visit</p>
                </div>
              </div>
            </div>

            <div className="map-container animated">
              <div className="map-placeholder">
                <MapPin size={64} />
                <p className="body-medium">Google Maps Integration</p>
                <p className="body-small">Exact location will be shared after order confirmation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="social-section">
        <div className="container">
          <div className="social-content network-card animated">
            <h2 className="heading-2">Follow Our Journey</h2>
            <p className="body-large">
              Stay updated with our daily farm activities, harvest updates, and seasonal availability
            </p>
            <div className="social-links">
              <a
                href="https://instagram.com/raofarmhouse"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link">

                <Instagram size={32} />
                <span>@raofarmhouseisharwal</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <h2 className="heading-1 section-title animated">Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-card network-card animated">
              <h3 className="heading-3">What is the minimum order?</h3>
              <p className="body-medium">
                The minimum order is 5 KG. We recommend 10 KG for the best value.
              </p>
            </div>

            <div className="faq-card network-card animated">
              <h3 className="heading-3">How fresh is the kinnow?</h3>
              <p className="body-medium">
                We harvest your kinnow after receiving your order. It's delivered within 24-48 hours of harvest.
              </p>
            </div>

            <div className="faq-card network-card animated">
              <h3 className="heading-3">Do you deliver outside Punjab?</h3>
              <p className="body-medium">
                Currently, we deliver within Punjab region. For other areas, please contact us to check availability.
              </p>
            </div>

            <div className="faq-card network-card animated">
              <h3 className="heading-3">What payment methods do you accept?</h3>
              <p className="body-medium">
                We accept UPI, bank transfer, and Cash on Delivery (COD) for most areas.
              </p>
            </div>

            <div className="faq-card network-card animated">
              <h3 className="heading-3">When is kinnow season?</h3>
              <p className="body-medium">
                Kinnow season is from November to February. Orders are only accepted during this period.
              </p>
            </div>

            <div className="faq-card network-card animated">
              <h3 className="heading-3">Can I visit the farm?</h3>
              <p className="body-medium">
                Yes! Farm visits are welcome. Please call ahead to schedule your visit during our operating hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="contact-cta-section">
        <div className="container">
          <div className="contact-cta-content animated">
            <h2 className="heading-1">Ready to Order Fresh Kinnow?</h2>
            <p className="body-large">
              Contact us today to place your order or ask any questions
            </p>
            <div className="cta-buttons">
              <a href="https://wa.me/919876543210" className="btn-cta" target="_blank" rel="noopener noreferrer">
                Order on WhatsApp
              </a>
              <a href="tel:+919876543210" className="btn-secondary">
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>);

};

export default Contact;