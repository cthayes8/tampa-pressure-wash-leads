
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyElements from '@/components/StickyElements';
import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    zipCode: '',
    serviceType: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you! We\'ll contact you within 2 hours with your free quote.');
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get Your Free Pressure Washing Quote
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Ready to transform your property? Contact Tampa Bay's most trusted pressure washing experts. 
              We respond to all inquiries within 2 hours!
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a
                href="tel:+18135551234"
                className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call (813) 555-1234</span>
              </a>
              <a
                href="sms:+18135551234?body=Hi! I'd like a quote for pressure washing."
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-700 transition-colors flex items-center justify-center space-x-2"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Text Us</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Request Your Free Quote</h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and we'll provide you with a detailed quote within 2 hours. 
                  All estimates are completely free with no obligation.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="(813) 555-0123"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-2">
                        Zip Code *
                      </label>
                      <input
                        type="text"
                        id="zipCode"
                        name="zipCode"
                        required
                        value={formData.zipCode}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="33602"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Needed *
                    </label>
                    <select
                      id="serviceType"
                      name="serviceType"
                      required
                      value={formData.serviceType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select a service</option>
                      <option value="house-washing">House Washing</option>
                      <option value="driveway-cleaning">Driveway/Concrete Cleaning</option>
                      <option value="deck-cleaning">Deck & Fence Cleaning</option>
                      <option value="roof-cleaning">Roof Cleaning</option>
                      <option value="commercial-cleaning">Commercial Cleaning</option>
                      <option value="full-property">Full Property Cleaning</option>
                      <option value="other">Other (please describe)</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Project Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Tell us about your project, approximate square footage, any specific concerns, or questions you have..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-orange-500 text-white py-4 px-6 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors"
                  >
                    Get My Free Quote
                  </button>

                  <p className="text-sm text-gray-500 text-center">
                    By submitting this form, you agree to receive communications from Tampa Pro Wash. 
                    We respect your privacy and will never share your information.
                  </p>
                </form>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Phone</h3>
                      <a href="tel:+18135551234" className="text-blue-600 hover:text-blue-700">
                        (813) 555-1234
                      </a>
                      <p className="text-sm text-gray-600">Available 7 days a week</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Email</h3>
                      <a href="mailto:info@tampaprowash.com" className="text-blue-600 hover:text-blue-700">
                        info@tampaprowash.com
                      </a>
                      <p className="text-sm text-gray-600">We respond within 2 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Service Area</h3>
                      <p className="text-gray-700">Tampa Bay Area</p>
                      <p className="text-sm text-gray-600">Hillsborough, Pinellas & Pasco Counties</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Business Hours</h3>
                      <div className="text-gray-700">
                        <p>Monday - Friday: 7:00 AM - 7:00 PM</p>
                        <p>Saturday: 8:00 AM - 5:00 PM</p>
                        <p>Sunday: Emergency Only</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Trust Signals */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-4">Why Call Tampa Pro Wash?</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>✓ 2-hour response time guarantee</li>
                    <li>✓ Free, no-obligation quotes</li>
                    <li>✓ Licensed & insured ($2M coverage)</li>
                    <li>✓ 4.9-star Google rating</li>
                    <li>✓ 15+ years of experience</li>
                    <li>✓ 100% satisfaction guarantee</li>
                  </ul>
                </div>

                {/* Emergency Contact */}
                <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <h3 className="font-semibold text-red-800 mb-2">Need Emergency Service?</h3>
                  <p className="text-sm text-red-700 mb-3">
                    For urgent pressure washing needs (storm damage, commercial emergencies, etc.)
                  </p>
                  <a
                    href="tel:+18135551234"
                    className="bg-red-600 text-white px-4 py-2 rounded font-semibold hover:bg-red-700 transition-colors inline-block"
                  >
                    Call Emergency Line
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <StickyElements />
    </div>
  );
};

export default Contact;
