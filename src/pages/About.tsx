
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyElements from '@/components/StickyElements';
import { Award, Users, Shield, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Your Trusted Tampa Bay Pressure Washing Experts
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                  Since 2015, Tampa Pro Wash has been Tampa Bay's premier pressure washing company, 
                  transforming thousands of homes and businesses with professional exterior cleaning services.
                </p>
                <a
                  href="/contact"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
                >
                  Get Your Free Estimate
                </a>
              </div>
              <div className="lg:w-1/2">
                <img
                  src="https://images.unsplash.com/photo-1433832597046-4f10e10ac764?w=600&h=400&fit=crop"
                  alt="Tampa Pro Wash team"
                  className="w-full h-80 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Owner Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet the Owner</h2>
            </div>
            
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/3">
                <img
                  src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=400&fit=crop"
                  alt="Mike Johnson, Owner"
                  className="w-full h-80 object-cover rounded-lg shadow-lg"
                />
                <div className="text-center mt-4">
                  <h3 className="text-xl font-semibold text-gray-900">Mike Johnson</h3>
                  <p className="text-gray-600">Founder & Owner</p>
                </div>
              </div>
              
              <div className="lg:w-2/3">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600 mb-6">
                  "I started Tampa Pro Wash with a simple mission: to provide Tampa Bay residents and 
                  business owners with reliable, professional pressure washing services they can trust. 
                  As a Tampa native, I understand the unique challenges our humid climate presents, 
                  from algae growth to mildew buildup."
                </p>
                <p className="text-gray-600 mb-6">
                  "What sets us apart is our commitment to doing the job right the first time. We use 
                  the latest equipment, eco-friendly cleaning solutions, and techniques that are safe 
                  for your property and the environment. Every member of our team is trained to treat 
                  your home or business as if it were their own."
                </p>
                <p className="text-gray-600">
                  "After 15+ years in the business and over 2,100 satisfied customers, I'm proud to 
                  say that Tampa Pro Wash has become Tampa Bay's most trusted pressure washing company. 
                  We're not just cleaning properties – we're helping our neighbors take pride in their 
                  homes and businesses."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
              <p className="text-lg text-gray-600">
                These core values guide everything we do at Tampa Pro Wash
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Heart className="w-12 h-12 text-red-500 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Community First</h3>
                <p className="text-gray-600">
                  We're Tampa Bay locals serving our neighbors. Supporting our community and 
                  helping property owners take pride in their investments is what drives us.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Shield className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Trust & Integrity</h3>
                <p className="text-gray-600">
                  Honest pricing, reliable service, and doing what we say we'll do. 
                  We've built our reputation on trust and transparency.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Award className="w-12 h-12 text-yellow-500 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality Excellence</h3>
                <p className="text-gray-600">
                  We don't cut corners. From our equipment to our techniques to our customer service, 
                  we maintain the highest standards in everything we do.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Users className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Customer Focus</h3>
                <p className="text-gray-600">
                  Your satisfaction is our success. We listen to your needs, respect your property, 
                  and won't consider the job done until you're completely happy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Credentials & Certifications</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div>
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Licensed & Insured</h3>
                <p className="text-gray-600">Fully licensed pressure washing contractor with $2M general liability insurance</p>
              </div>
              
              <div>
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">BBB A+ Rating</h3>
                <p className="text-gray-600">Better Business Bureau accredited with A+ rating for ethical business practices</p>
              </div>
              
              <div>
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">PWNA Member</h3>
                <p className="text-gray-600">Member of the Power Washers of North America professional association</p>
              </div>
            </div>

            <div className="bg-blue-600 text-white p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">Ready to Experience the Tampa Pro Wash Difference?</h3>
              <p className="text-blue-100 mb-6">
                Join thousands of satisfied customers who trust us with their pressure washing needs.
              </p>
              <a
                href="/contact"
                className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors inline-block"
              >
                Get Your Free Estimate Today
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <StickyElements />
    </div>
  );
};

export default About;
