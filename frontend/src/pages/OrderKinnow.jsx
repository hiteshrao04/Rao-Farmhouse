import React, { useEffect, useState } from 'react';
import { ShoppingCart, Package, MapPin, Phone } from 'lucide-react';
import './OrderKinnow.css';

const OrderKinnow = () => {
  const [selectedPackage, setSelectedPackage] = useState('10kg');

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

  const packages = [
    {
      id: '5kg',
      weight: '5 KG',
      price: 250,
      description: 'Perfect for trying our fresh kinnow',
      badge: 'Starter Pack'
    },
    {
      id: '10kg',
      weight: '10 KG',
      price: 450,
      description: 'Most popular choice for families',
      badge: 'Best Value',
      bestValue: true
    },
    {
      id: '20kg',
      weight: '20 KG',
      price: 850,
      description: 'Share with family and neighbors',
      badge: 'Family Pack'
    }
  ];

  const handleWhatsAppOrder = () => {
    const selectedPkg = packages.find(pkg => pkg.id === selectedPackage);
    const message = encodeURIComponent(
      `Hi! I want to order ${selectedPkg.weight} of fresh organic kinnow from Rao Farmhouse.\n\nPrice: ₹${selectedPkg.price}\n\nPlease confirm availability and delivery details.`
    );
    const whatsappUrl = `https://wa.me/919876543210?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="order-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <h1 className="display-large animated">Order Fresh Kinnow</h1>
          <p className="body-large animated">Minimum Order: 5 KG | Freshly Harvested After Order</p>
        </div>
      </section>

      {/* Order Packages */}
      <section className="order-packages-section">
        <div className="container">
          <div className="packages-grid">
            {packages.map((pkg) => (
              <div 
                key={pkg.id}
                className={`package-card network-card animated hover-lift ${
                  selectedPackage === pkg.id ? 'selected' : ''
                } ${pkg.bestValue ? 'best-value' : ''}`}
                onClick={() => setSelectedPackage(pkg.id)}
              >
                <div className="product-badge">{pkg.badge}</div>
                <div className="package-icon">
                  <Package size={64} />
                </div>
                <h3 className="heading-2">{pkg.weight}</h3>
                <p className="package-price">₹{pkg.price}</p>
                <p className="network-card-content">{pkg.description}</p>
                <div className="package-details">
                  <p className="body-small">Price per kg: ₹{(pkg.price / parseInt(pkg.weight)).toFixed(0)}</p>
                </div>
                {selectedPackage === pkg.id && (
                  <div className="selected-indicator">Selected</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Order Details */}
      <section className="order-details-section">
        <div className="container">
          <div className="order-info-grid">
            <div className="network-card animated">
              <ShoppingCart size={40} className="info-icon" />
              <h3 className="heading-3">What's Included</h3>
              <ul className="info-list">
                <li>Freshly harvested organic kinnow</li>
                <li>Carefully hand-picked and sorted</li>
                <li>Packed at the farm for freshness</li>
                <li>Quality checked before dispatch</li>
              </ul>
            </div>

            <div className="network-card animated">
              <MapPin size={40} className="info-icon" />
              <h3 className="heading-3">Delivery Info</h3>
              <ul className="info-list">
                <li>City delivery within 24-48 hours</li>
                <li>Currently serving Punjab region</li>
                <li>Delivery charges may apply</li>
                <li>COD available on request</li>
              </ul>
            </div>

            <div className="network-card animated">
              <Phone size={40} className="info-icon" />
              <h3 className="heading-3">Order Process</h3>
              <ul className="info-list">
                <li>Select your package size</li>
                <li>Click "Order on WhatsApp" button</li>
                <li>Confirm your delivery address</li>
                <li>We'll harvest and deliver fresh!</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Order CTA */}
      <section className="order-cta-section">
        <div className="container">
          <div className="order-cta-content network-card animated">
            <h2 className="heading-1">Ready to Order?</h2>
            <p className="body-large">
              Selected: <strong>{packages.find(p => p.id === selectedPackage)?.weight}</strong> for 
              <strong> ₹{packages.find(p => p.id === selectedPackage)?.price}</strong>
            </p>
            <button onClick={handleWhatsAppOrder} className="btn-cta order-button">
              Order on WhatsApp
            </button>
            <p className="body-small order-note">
              Our team will confirm availability and delivery details via WhatsApp
            </p>
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="notes-section">
        <div className="container">
          <div className="notes-card network-card animated">
            <h3 className="heading-3">Important Notes</h3>
            <ul className="notes-list body-medium">
              <li>Orders are harvested fresh after confirmation</li>
              <li>Seasonal availability: November - February only</li>
              <li>Limited daily harvest capacity</li>
              <li>Prices may vary based on season and availability</li>
              <li>Delivery areas currently limited to Punjab region</li>
              <li>For bulk orders (50kg+), please contact us directly</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OrderKinnow;
