import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Mail, Phone, MapPin, Instagram } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-brand">
              <Leaf size={32} className="footer-logo-icon" />
              <h3>Rao Farmhouse</h3>
            </div>
            <p className="footer-description">
              Fresh organic kinnow directly from our farm to your home. 
              No middlemen, no compromise.
            </p>
            <div className="footer-tagline">
              <strong>From Our Trees to Your Table</strong>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/our-farm">Our Farm</Link></li>
              <li><Link to="/our-kinnow">Our Kinnow</Link></li>
              <li><Link to="/order">Order Now</Link></li>
              <li><Link to="/delivery">Delivery Policy</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Us</h4>
            <ul className="footer-contact">
              <li>
                <Phone size={18} />
                <span>+91 93062  80687</span>
              </li>
              <li>
                <Mail size={18} />
                <span>hello@raofarmhouse.com</span>
              </li>
              <li>
                <MapPin size={18} />
                <span>Isharwal, Haryana, India</span>
              </li>
              <li>
                <Instagram size={18} />
                <a href="https://instagram.com/raofarmhouse" target="_blank" rel="noopener noreferrer">@raofarmhouse</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Season Info</h4>
            <div className="season-badge">
              <p><strong>Winter Harvest Only</strong></p>
              <p className="body-small">November - February</p>
              <p className="body-small">Limited daily availability</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Rao Farmhouse | Farm Fresh • Organic • Seasonal</p>
        </div>
      </div>
    </footer>);

};

export default Footer;