
import { Star, Phone, ArrowRight, Building2, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/pressure-washing-bg.mp4" type="video/mp4" />
          {/* Fallback gradient if video doesn't load */}
        </video>
        {/* Video overlay for text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      {/* Fallback gradient background (shown if video fails to load) */}
      <div className="absolute inset-0 gradient-primary opacity-90"></div>
      
      {/* Floating elements for visual interest */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-accent/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Content */}
            <div className="text-white space-y-8">
              {/* Premium badge */}
              <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                <Award className="w-4 h-4 text-accent" />
                <span>Tampa Bay's #1 Commercial Pressure Washing</span>
              </div>
              
              {/* Main headline */}
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  Pressure Washing
                  <span className="block text-accent">That Drives Results</span>
                </h1>
                <p className="text-xl md:text-2xl text-blue-100 max-w-xl">
                  Professional commercial cleaning that enhances your business image and protects your investment.
                </p>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap items-center gap-6 text-sm">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="ml-2 font-semibold">4.9/5 Stars</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Building2 className="w-4 h-4" />
                  <span>500+ Commercial Projects</span>
                </div>
                <div>
                  <span className="font-semibold">$5M+ Insured</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="group bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-2xl"
                >
                  <span>Get Commercial Quote</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <a
                  href="tel:+18135551234"
                  className="bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-white/30 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>(813) 555-1234</span>
                </a>
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">24hr</div>
                  <div className="text-sm text-blue-100">Emergency Response</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">15+</div>
                  <div className="text-sm text-blue-100">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">100%</div>
                  <div className="text-sm text-blue-100">Satisfaction Rate</div>
                </div>
              </div>
            </div>

            {/* Right side - Visual element */}
            <div className="relative">
              <div className="relative z-10 bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white">Why Tampa's Top Businesses Choose Us</h3>
                  <div className="space-y-4">
                    {[
                      'Same-day commercial service available',
                      'Licensed, bonded & $5M insured',
                      'Eco-friendly cleaning solutions',
                      'Flexible scheduling around your business',
                      'Transparent, upfront pricing'
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-3 text-white">
                        <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-sm font-bold">✓</span>
                        </div>
                        <span className="text-blue-100">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-white/20">
                    <p className="text-accent font-semibold">Free estimates in 24 hours or less</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent/30 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom wave transition */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" className="w-full h-auto">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
