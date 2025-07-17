
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyElements from '@/components/StickyElements';
import { Building2, Users, Clock, Award, Shield, Zap, Star, ArrowRight } from 'lucide-react';

const Commercial = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 gradient-secondary"></div>
        <div className="absolute inset-0 bg-black/10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-flex items-center space-x-2 bg-accent/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Building2 className="w-4 h-4" />
              <span>Commercial Pressure Washing Specialists</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Tampa Bay's Premier
              <span className="block text-accent">Commercial Cleaning</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Professional exterior cleaning that enhances your business image, protects your investment, 
              and keeps customers coming back. Trusted by Tampa's leading businesses.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
              <a
                href="tel:+18135551234"
                className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 shadow-xl"
              >
                <span>Call (813) 555-1234</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/contact"
                className="bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/30 transition-all duration-300"
              >
                Get Commercial Quote
              </a>
            </div>
            
            {/* Trust indicators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">500+</div>
                <div className="text-sm text-blue-100">Commercial Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">$5M</div>
                <div className="text-sm text-blue-100">Insurance Coverage</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">24hr</div>
                <div className="text-sm text-blue-100">Emergency Service</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Services */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Comprehensive Commercial Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From office buildings to retail centers, we deliver exceptional results that enhance your professional image.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Building2,
                title: 'Office Buildings',
                description: 'Professional cleaning for corporate facilities, maintaining a pristine business environment.',
                features: ['Building exteriors', 'Storefront cleaning', 'Window surrounds', 'Entry ways']
              },
              {
                icon: '🏪',
                title: 'Retail Centers',
                description: 'Attract customers with clean, inviting shopping environments that drive foot traffic.',
                features: ['Shopping centers', 'Strip malls', 'Individual stores', 'Parking areas']
              },
              {
                icon: '🍽️',
                title: 'Restaurants',
                description: 'Maintain health standards and customer appeal with specialized restaurant cleaning.',
                features: ['Grease removal', 'Patio cleaning', 'Drive-through areas', 'Dumpster areas']
              },
              {
                icon: '🏭',
                title: 'Industrial',
                description: 'Heavy-duty cleaning for warehouses, manufacturing, and industrial facilities.',
                features: ['Warehouse exteriors', 'Loading docks', 'Equipment cleaning', 'Safety compliance']
              },
              {
                icon: '🚛',
                title: 'Fleet Services',
                description: 'Keep your company vehicles clean and professional with regular fleet washing.',
                features: ['Delivery trucks', 'Company cars', 'Service vehicles', 'Equipment']
              },
              {
                icon: '🚗',
                title: 'Parking Areas',
                description: 'Clean parking lots and walkways that create positive first impressions.',
                features: ['Parking lots', 'Oil stain removal', 'Sidewalks', 'Crosswalks']
              }
            ].map((service, index) => (
              <div key={index} className="bg-card p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-border/50 group hover:scale-105">
                <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {typeof service.icon === 'string' ? (
                    <span className="text-white text-2xl">{service.icon}</span>
                  ) : (
                    <service.icon className="w-8 h-8 text-white" />
                  )}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Why Tampa's Top Businesses Choose Us
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're not just another cleaning company. We're your partner in maintaining a professional business image.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Clock,
                title: 'Flexible Scheduling',
                description: 'We work around your business hours with early morning, evening, and weekend availability.'
              },
              {
                icon: Shield,
                title: '$5M Insured',
                description: 'Comprehensive liability coverage protects your property and gives you complete peace of mind.'
              },
              {
                icon: Award,
                title: 'Proven Results',
                description: 'Over 500 successful commercial projects with a 100% customer satisfaction rate.'
              },
              {
                icon: Zap,
                title: 'Emergency Service',
                description: '24-hour emergency response for urgent cleaning needs and unexpected situations.'
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-12">
              Trusted by Tampa Bay's Leading Businesses
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-card p-8 rounded-2xl shadow-lg border border-border/50">
                <div className="flex items-center space-x-1 mb-4 justify-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "Tampa's Best Pressure Wash transformed our shopping center. Professional, reliable, and the results speak for themselves. Our customers notice the difference."
                </p>
                <div className="font-semibold text-foreground">Sarah Johnson</div>
                <div className="text-sm text-muted-foreground">Property Manager, Westshore Plaza</div>
              </div>
              
              <div className="bg-card p-8 rounded-2xl shadow-lg border border-border/50">
                <div className="flex items-center space-x-1 mb-4 justify-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "Outstanding service! They work around our business hours and deliver exceptional results every time. Highly recommend for any commercial property."
                </p>
                <div className="font-semibold text-foreground">Mike Rodriguez</div>
                <div className="text-sm text-muted-foreground">Facilities Director, Tampa Tech Center</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-8 text-muted-foreground">
              <div>4.9★ Google Rating</div>
              <div>•</div>
              <div>500+ Projects Completed</div>
              <div>•</div>
              <div>15+ Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 gradient-primary"></div>
        <div className="absolute inset-0 bg-black/10"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Elevate Your Business Image?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of Tampa Bay businesses that trust us with their exterior cleaning needs. 
            Get your free commercial estimate today.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="tel:+18135551234"
              className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-xl"
            >
              Call (813) 555-1234
            </a>
            <a
              href="/contact"
              className="bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/30 transition-all duration-300"
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
