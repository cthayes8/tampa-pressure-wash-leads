
import { Star, Phone, ArrowRight, Building2, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700">
      {/* Background texture overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/20 via-transparent to-slate-600/20"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-center">
            {/* Left side - Content */}
            <div className="text-white space-y-8">
              {/* Main headline */}
              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold leading-tight">
                  Helping Your
                  <span className="block">Business</span>
                  <span className="block text-cyan-400">Shine</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 max-w-xl leading-relaxed">
                  Trusted pressure washing services for commercial properties across the Tampa Bay area.
                </p>
              </div>

              {/* Single CTA Button */}
              <div className="pt-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center space-x-2 bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl"
                >
                  <span>GET A FREE ESTIMATE</span>
                </Link>
              </div>
            </div>

            {/* Right side - Character illustration */}
            <div className="relative flex justify-center items-center">
              <div className="relative w-96 h-96 flex items-center justify-center">
                {/* Character from logo - we'll use a larger version */}
                <img 
                  src="/TBPW2.png" 
                  alt="Tampa's Best Pressure Wash Character" 
                  className="w-full h-full object-contain"
                />
                
                {/* Water splash effects */}
                <div className="absolute top-16 right-12 text-cyan-400 animate-bounce">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.5c-1.5 0-2.8.6-3.8 1.6C7.2 5.1 6.5 6.4 6.5 8c0 3.3 2.7 6 6 6s6-2.7 6-6c0-1.6-.7-2.9-1.7-3.9C15.8 3.1 14.5 2.5 12 2.5z"/>
                  </svg>
                </div>
                <div className="absolute top-20 right-8 text-cyan-400 animate-bounce delay-100">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.5c-1.5 0-2.8.6-3.8 1.6C7.2 5.1 6.5 6.4 6.5 8c0 3.3 2.7 6 6 6s6-2.7 6-6c0-1.6-.7-2.9-1.7-3.9C15.8 3.1 14.5 2.5 12 2.5z"/>
                  </svg>
                </div>
                <div className="absolute top-24 right-16 text-cyan-400 animate-bounce delay-200">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.5c-1.5 0-2.8.6-3.8 1.6C7.2 5.1 6.5 6.4 6.5 8c0 3.3 2.7 6 6 6s6-2.7 6-6c0-1.6-.7-2.9-1.7-3.9C15.8 3.1 14.5 2.5 12 2.5z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
