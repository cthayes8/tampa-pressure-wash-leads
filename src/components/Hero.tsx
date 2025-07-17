
import { Star, Phone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-orange-500/20 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Hero Headline */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Tampa's Trusted
            <span className="text-orange-400 block">Pressure Washing Experts</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Same-Day Service • Upfront Pricing • Fully Licensed & Insured
            <span className="block mt-2 text-lg">Transforming properties across Tampa Bay since 2015</span>
          </p>

          {/* Social Proof Strip */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8 p-4 bg-white/10 backdrop-blur-sm rounded-lg">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="ml-2 font-semibold">4.9 Stars on Google</span>
            </div>
            <div className="text-sm">
              <span className="font-semibold">2,100+ Happy Customers</span>
            </div>
            <div className="text-sm">
              <span className="font-semibold">Licensed & Insured</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 shadow-lg"
            >
              <span>Get FREE Quote</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            
            <a
              href="tel:+18135551234"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-white hover:text-blue-700 transition-all duration-300 flex items-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>(813) 555-1234</span>
            </a>
          </div>

          {/* Quick Benefits */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="text-center p-4">
              <div className="text-2xl font-bold text-orange-400">24hr</div>
              <div className="text-sm">Response Time</div>
            </div>
            <div className="text-center p-4">
              <div className="text-2xl font-bold text-orange-400">100%</div>
              <div className="text-sm">Satisfaction Guaranteed</div>
            </div>
            <div className="text-center p-4">
              <div className="text-2xl font-bold text-orange-400">15+</div>
              <div className="text-sm">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
