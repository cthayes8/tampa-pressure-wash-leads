
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyElements from '@/components/StickyElements';
import { Home, Shield, Leaf, Star } from 'lucide-react';

const Residential = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Residential Pressure Washing in Tampa
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Transform your home's curb appeal with our professional residential cleaning services. 
              Safe, effective, and eco-friendly solutions for Tampa Bay homeowners.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a
                href="tel:+18135551234"
                className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors"
              >
                Call (813) 555-1234
              </a>
              <a
                href="/contact"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-700 transition-colors"
              >
                Get Free Estimate
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Complete Home Exterior Cleaning
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We clean every part of your home's exterior, using the right technique and pressure for each surface.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Home className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">House Washing</h3>
              <p className="text-gray-600 mb-4">
                Gentle, low-pressure washing for vinyl, brick, stucco, and wood siding. Removes dirt, mildew, and algae safely.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• All siding types</li>
                <li>• Trim and shutters</li>
                <li>• Eco-friendly detergents</li>
                <li>• Protects landscaping</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-blue-600 font-bold text-xl">🚗</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Driveway Cleaning</h3>
              <p className="text-gray-600 mb-4">
                High-pressure cleaning removes oil stains, tire marks, and years of built-up grime from concrete and pavers.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Oil stain removal</li>
                <li>• Concrete restoration</li>
                <li>• Paver cleaning</li>
                <li>• Sealing available</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-blue-600 font-bold text-xl">🏡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Deck & Patio</h3>
              <p className="text-gray-600 mb-4">
                Restore your outdoor living spaces with specialized cleaning for wood, composite, and stone surfaces.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Wood restoration</li>
                <li>• Composite cleaning</li>
                <li>• Stone patio cleaning</li>
                <li>• Staining prep</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-blue-600 font-bold text-xl">🔧</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Fence Cleaning</h3>
              <p className="text-gray-600 mb-4">
                Clean and restore fences of all materials. Remove mildew, dirt, and weathering for like-new appearance.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Wood fencing</li>
                <li>• Vinyl fencing</li>
                <li>• Metal fencing</li>
                <li>• Staining preparation</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-blue-600 font-bold text-xl">🏠</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Roof Cleaning</h3>
              <p className="text-gray-600 mb-4">
                Safe, low-pressure roof cleaning removes algae, moss, and black streaks without damaging shingles.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Soft washing technique</li>
                <li>• Algae removal</li>
                <li>• Extends roof life</li>
                <li>• No damage guarantee</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-blue-600 font-bold text-xl">🚪</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Sidewalks & Walkways</h3>
              <p className="text-gray-600 mb-4">
                Clean concrete walkways, remove stains, and restore the welcoming entrance to your home.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Concrete cleaning</li>
                <li>• Stain removal</li>
                <li>• Slip-resistant treatment</li>
                <li>• Edge detail cleaning</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Tampa Homeowners Choose Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Fully Insured</h3>
              <p className="text-gray-600">$2M liability coverage protects your property and gives you peace of mind.</p>
            </div>
            <div className="text-center">
              <Leaf className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Eco-Friendly</h3>
              <p className="text-gray-600">Biodegradable cleaners safe for your family, pets, and landscaping.</p>
            </div>
            <div className="text-center">
              <Star className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">5-Star Service</h3>
              <p className="text-gray-600">Rated 4.9/5 stars with over 2,100 satisfied Tampa Bay customers.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 font-bold text-xl">$</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Fair Pricing</h3>
              <p className="text-gray-600">Upfront, transparent pricing with no hidden fees or surprises.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Serving Tampa Bay Neighborhoods
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            We provide residential pressure washing services to neighborhoods throughout South Tampa, Brandon, Riverview, Carrollwood, Westchase, and surrounding areas.
          </p>
          <a
            href="/contact"
            className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Schedule Your Free Estimate
          </a>
        </div>
      </section>

      <Footer />
      <StickyElements />
    </div>
  );
};

export default Residential;
