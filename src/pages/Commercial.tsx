
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyElements from '@/components/StickyElements';
import { Building2, Users, Clock, Award } from 'lucide-react';

const Commercial = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-700 to-gray-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Commercial Pressure Washing Services in Tampa
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Professional exterior cleaning for businesses, restaurants, retail stores, and commercial properties. 
              Maintain your professional image with regular cleaning services.
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
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-800 transition-colors"
              >
                Request Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Commercial Cleaning Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Keep your business looking professional with our comprehensive commercial pressure washing services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg border">
              <Building2 className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Building Exteriors</h3>
              <p className="text-gray-600 mb-4">
                Professional cleaning for office buildings, retail stores, restaurants, and other commercial structures.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Storefront cleaning</li>
                <li>• Building facades</li>
                <li>• Window surrounding areas</li>
                <li>• Entry ways and canopies</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-blue-600 font-bold text-xl">🚗</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Parking Areas</h3>
              <p className="text-gray-600 mb-4">
                Clean parking lots, walkways, and drive-through areas to maintain a professional appearance.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Parking lot cleaning</li>
                <li>• Oil stain removal</li>
                <li>• Sidewalk cleaning</li>
                <li>• Drive-through areas</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-blue-600 font-bold text-xl">🚛</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Fleet Washing</h3>
              <p className="text-gray-600 mb-4">
                Keep your company vehicles clean and professional with regular fleet washing services.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Delivery trucks</li>
                <li>• Company cars</li>
                <li>• Service vehicles</li>
                <li>• Equipment cleaning</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-blue-600 font-bold text-xl">🏪</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Retail Stores</h3>
              <p className="text-gray-600 mb-4">
                Attract customers with clean, inviting storefronts and shopping areas.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Storefront washing</li>
                <li>• Shopping center cleaning</li>
                <li>• Entrance areas</li>
                <li>• Outdoor seating areas</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-blue-600 font-bold text-xl">🍽️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Restaurants</h3>
              <p className="text-gray-600 mb-4">
                Maintain health standards and customer appeal with regular restaurant exterior cleaning.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Grease removal</li>
                <li>• Patio cleaning</li>
                <li>• Entrance areas</li>
                <li>• Dumpster area cleaning</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-blue-600 font-bold text-xl">🏭</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Industrial</h3>
              <p className="text-gray-600 mb-4">
                Heavy-duty cleaning for warehouses, manufacturing facilities, and industrial properties.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Warehouse exteriors</li>
                <li>• Loading docks</li>
                <li>• Industrial equipment</li>
                <li>• Safety compliance cleaning</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits for Business */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Businesses Choose Tampa Pro Wash
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Flexible Scheduling</h3>
              <p className="text-gray-600">Early morning, evening, and weekend service to minimize business disruption.</p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Professional Team</h3>
              <p className="text-gray-600">Uniformed, trained technicians who understand commercial property needs.</p>
            </div>
            <div className="text-center">
              <Award className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Reliable Service</h3>
              <p className="text-gray-600">Consistent, high-quality results with scheduled maintenance programs.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 font-bold text-xl">$</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Competitive Rates</h3>
              <p className="text-gray-600">Volume discounts and contract pricing for regular maintenance programs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Enhance Your Business Image?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us today for a free commercial cleaning estimate. We'll work with your schedule and budget.
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
              Request Commercial Quote
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <StickyElements />
    </div>
  );
};

export default Commercial;
