import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-green-600 text-white py-16">
      <div className="container mx-auto text-center md:text-left">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo / Brand */}
          <div>
            <h3 className="text-4xl font-bold mb-4">Herbal Magic</h3>
            <p className="text-lg">Natural Remedies for a Healthier You</p>
          </div>
          
          {/* Links */}
          <div>
            <h4 className="text-2xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-gray-300">About Us</a></li>
              <li><a href="#products" className="hover:text-gray-300">Products</a></li>
              <li><a href="#testimonials" className="hover:text-gray-300">Testimonials</a></li>
              <li><a href="#order" className="hover:text-gray-300">Order</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-2xl font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li><p>Phone: 070-12345678</p></li>
              <li><p>Email: contact@herbalmagic.com</p></li>
              <li><p>Address: 123 Herbal St, Lagos, Nigeria</p></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-2xl font-semibold mb-4">Follow Us</h4>
            <div className="flex justify-center gap-6 text-3xl">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                <FaFacebook />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <p className="text-center text-sm">© 2025 Herbal Magic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
