
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">TP</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Tampa Pro Wash</h3>
                <p className="text-sm text-gray-400">Pressure Washing Experts</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Tampa Bay's trusted pressure washing company. Professional, reliable, and eco-friendly cleaning services since 2015.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li><Link to="/residential" className="text-gray-400 hover:text-white transition-colors">Residential Cleaning</Link></li>
              <li><Link to="/commercial" className="text-gray-400 hover:text-white transition-colors">Commercial Cleaning</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">House Washing</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Driveway Cleaning</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Deck & Fence Cleaning</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Roof Cleaning</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Get Free Quote</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Reviews</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Gallery</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-orange-500" />
                <a href="tel:+18135551234" className="text-gray-400 hover:text-white transition-colors">
                  (813) 555-1234
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-orange-500" />
                <a href="mailto:info@tampaprowash.com" className="text-gray-400 hover:text-white transition-colors">
                  info@tampaprowash.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-orange-500 mt-1" />
                <div className="text-gray-400">
                  <div>Serving Tampa Bay Area</div>
                  <div>Hillsborough, Pinellas & Pasco Counties</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-orange-500 mt-1" />
                <div className="text-gray-400">
                  <div>Mon-Fri: 7AM-7PM</div>
                  <div>Sat: 8AM-5PM</div>
                  <div>Sun: Emergency Only</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Tampa Pro Wash. All rights reserved. Licensed & Insured.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
