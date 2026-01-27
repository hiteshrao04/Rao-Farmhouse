import React from 'react';
import { MessageCircle } from 'lucide-react';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  const whatsappNumber = '919876543210'; // Replace with actual number
  const message = encodeURIComponent('Hi, I want to order fresh kinnow from Rao Farmhouse');
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <a 
      href={whatsappUrl} 
      className="whatsapp-button"
      target="_blank" 
      rel="noopener noreferrer"
      aria-label="Order on WhatsApp"
    >
      <MessageCircle size={28} />
      <span className="whatsapp-text">Order on WhatsApp</span>
    </a>
  );
};

export default WhatsAppButton;
