
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyElements from '@/components/StickyElements';
import { Phone, Mail, MapPin, Clock, MessageSquare, Star } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 gradient-primary"></div>
        <div className="absolute inset-0 bg-black/10"></div>
        
        {/* Background elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-accent/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-flex items-center space-x-2 bg-accent/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
              <MessageSquare className="w-4 h-4" />
              <span>Get Your Free Estimate</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Ready to Transform
              <span className="block text-accent">Your Property?</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Contact Tampa Bay's premier pressure washing experts today. Get your free, 
              no-obligation estimate and see why businesses choose us.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a
                href="tel:+18135551234"
                className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-2xl flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call (813) 555-1234</span>
              </a>
              <a
                href="mailto:info@tampaprowash.com"
                className="bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/30 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Mail className="w-5 h-5" />
                <span>Email Us</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <div className="inline-flex items-center space-x-2 bg-accent/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6 text-accent">
                  <Phone className="w-4 h-4" />
                  <span>Contact Information</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Get in Touch
                  <span className="block text-gradient">Today</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Ready to get started? Contact us today for your free estimate. 
                  We respond to all inquiries within 2 hours during business hours.
                </p>

                <div className="space-y-6">
                  <div className="flex items-center space-x-4 p-6 bg-card/70 backdrop-blur-sm rounded-2xl border border-border/50 hover:border-accent/50 transition-all duration-300">
                    <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Phone</h3>
                      <p className="text-muted-foreground">(813) 555-1234</p>
                      <p className="text-sm text-accent">Available 24/7 for emergencies</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 p-6 bg-card/70 backdrop-blur-sm rounded-2xl border border-border/50 hover:border-accent/50 transition-all duration-300">
                    <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Email</h3>
                      <p className="text-muted-foreground">info@tampaprowash.com</p>
                      <p className="text-sm text-accent">Response within 2 hours</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 p-6 bg-card/70 backdrop-blur-sm rounded-2xl border border-border/50 hover:border-accent/50 transition-all duration-300">
                    <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Service Area</h3>
                      <p className="text-muted-foreground">Tampa Bay & Surrounding Areas</p>
                      <p className="text-sm text-accent">50+ mile radius</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 p-6 bg-card/70 backdrop-blur-sm rounded-2xl border border-border/50 hover:border-accent/50 transition-all duration-300">
                    <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Business Hours</h3>
                      <p className="text-muted-foreground">Monday - Saturday: 7AM - 7PM</p>
                      <p className="text-sm text-accent">Sunday: Emergency calls only</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <div className="bg-card/70 backdrop-blur-sm p-8 rounded-2xl border border-border/50 shadow-2xl">
                  <div className="inline-flex items-center space-x-2 bg-accent/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6 text-accent">
                    <Star className="w-4 h-4" />
                    <span>Free Estimate Form</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-6">Get Your Free Quote</h3>
                  
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 rounded-xl border border-border/50 bg-background/50 text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-all"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 rounded-xl border border-border/50 bg-background/50 text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-all"
                          placeholder="Smith"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 rounded-xl border border-border/50 bg-background/50 text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-all"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 rounded-xl border border-border/50 bg-background/50 text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-all"
                        placeholder="(813) 555-0123"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Service Needed
                      </label>
                      <select className="w-full px-4 py-3 rounded-xl border border-border/50 bg-background/50 text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-all">
                        <option>Commercial Pressure Washing</option>
                        <option>Residential House Washing</option>
                        <option>Driveway Cleaning</option>
                        <option>Roof Cleaning</option>
                        <option>Deck & Fence Restoration</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Property Address
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-xl border border-border/50 bg-background/50 text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-all"
                        placeholder="123 Main St, Tampa, FL"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Additional Details
                      </label>
                      <textarea
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl border border-border/50 bg-background/50 text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-all"
                        placeholder="Tell us about your project..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-primary text-white py-4 px-6 rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-2xl"
                    >
                      Get My Free Estimate
                    </button>
                  </form>

                  <div className="mt-6 p-4 bg-accent/10 rounded-xl">
                    <p className="text-sm text-muted-foreground text-center">
                      We typically respond within 2 hours during business hours. 
                      For immediate assistance, call <strong>(813) 555-1234</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-20 bg-muted/30 relative overflow-hidden">
        <div className="absolute top-10 right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-primary/10 rounded-full blur-2xl"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Need Emergency
              <span className="block text-gradient">Cleaning Service?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We offer 24/7 emergency response for urgent cleaning needs. 
              Graffiti, vandalism, or storm damage - we're here to help.
            </p>
            <a
              href="tel:+18135551234"
              className="bg-gradient-primary text-white px-8 py-4 rounded-xl text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-2xl inline-flex items-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Call Emergency Line: (813) 555-1234</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <StickyElements />
    </div>
  );
};

export default Contact;
