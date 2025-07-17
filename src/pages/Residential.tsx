import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyElements from '@/components/StickyElements';
import { Home, Shield, Leaf, Star, Phone, ArrowRight } from 'lucide-react';

const Residential = () => {
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
              <Home className="w-4 h-4" />
              <span>Residential Cleaning Excellence</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Residential Pressure Washing
              <span className="block text-accent">in Tampa</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Transform your home's curb appeal with our professional residential cleaning services. 
              Safe, effective, and eco-friendly solutions for Tampa Bay homeowners.
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
                href="/contact"
                className="bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/30 transition-all duration-300"
              >
                Get Free Estimate
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-accent/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6 text-accent">
              <Home className="w-4 h-4" />
              <span>Complete Home Solutions</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Complete Home Exterior
              <span className="block text-gradient">Cleaning</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We clean every part of your home's exterior, using the right technique and pressure for each surface.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-2xl hover:shadow-accent/10 hover:scale-105 group">
              <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Home className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">House Washing</h3>
              <p className="text-muted-foreground mb-4">
                Gentle, low-pressure washing for vinyl, brick, stucco, and wood siding. Removes dirt, mildew, and algae safely.
              </p>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                  <span>All siding types</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                  <span>Trim and shutters</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                  <span>Eco-friendly detergents</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                  <span>Protects landscaping</span>
                </li>
              </ul>
            </div>

            {/* Continue with similar styling for other service cards */}
            <div className="bg-card/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-2xl hover:shadow-accent/10 hover:scale-105 group">
              <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-white font-bold text-2xl">🚗</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Driveway Cleaning</h3>
              <p className="text-muted-foreground mb-4">
                High-pressure cleaning removes oil stains, tire marks, and years of built-up grime from concrete and pavers.
              </p>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                  <span>Oil stain removal</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                  <span>Concrete restoration</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                  <span>Paver cleaning</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                  <span>Sealing available</span>
                </li>
              </ul>
            </div>

            {/* Add remaining service cards with similar styling... */}
            <div className="bg-card/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-2xl hover:shadow-accent/10 hover:scale-105 group">
              <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-white font-bold text-2xl">🏡</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Deck & Patio</h3>
              <p className="text-muted-foreground mb-4">
                Restore your outdoor living spaces with specialized cleaning for wood, composite, and stone surfaces.
              </p>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                  <span>Wood restoration</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                  <span>Composite cleaning</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                  <span>Stone patio cleaning</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                  <span>Staining prep</span>
                </li>
              </ul>
            </div>

            <div className="bg-card/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-2xl hover:shadow-accent/10 hover:scale-105 group">
              <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-white font-bold text-2xl">🔧</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Fence Cleaning</h3>
              <p className="text-muted-foreground mb-4">
                Clean and restore fences of all materials. Remove mildew, dirt, and weathering for like-new appearance.
              </p>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                  <span>Wood fencing</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                  <span>Vinyl fencing</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                  <span>Metal fencing</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                  <span>Staining preparation</span>
                </li>
              </ul>
            </div>

            <div className="bg-card/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-2xl hover:shadow-accent/10 hover:scale-105 group">
              <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-white font-bold text-2xl">🏠</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Roof Cleaning</h3>
              <p className="text-muted-foreground mb-4">
                Safe, low-pressure roof cleaning removes algae, moss, and black streaks without damaging shingles.
              </p>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                  <span>Soft washing technique</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                  <span>Algae removal</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                  <span>Extends roof life</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                  <span>No damage guarantee</span>
                </li>
              </ul>
            </div>

            <div className="bg-card/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-2xl hover:shadow-accent/10 hover:scale-105 group">
              <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-white font-bold text-2xl">🚪</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Sidewalks & Walkways</h3>
              <p className="text-muted-foreground mb-4">
                Clean concrete walkways, remove stains, and restore the welcoming entrance to your home.
              </p>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                  <span>Concrete cleaning</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                  <span>Stain removal</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                  <span>Slip-resistant treatment</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                  <span>Edge detail cleaning</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/30 relative overflow-hidden">
        <div className="absolute top-10 right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-primary/10 rounded-full blur-2xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-accent/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6 text-accent">
              <Star className="w-4 h-4" />
              <span>Why Choose Us</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Tampa Homeowners
              <span className="block text-gradient">Choose Us</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Fully Insured</h3>
              <p className="text-muted-foreground">$2M liability coverage protects your property and gives you peace of mind.</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Eco-Friendly</h3>
              <p className="text-muted-foreground">Biodegradable cleaners safe for your family, pets, and landscaping.</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">5-Star Service</h3>
              <p className="text-muted-foreground">Rated 4.9/5 stars with over 2,100 satisfied Tampa Bay customers.</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <span className="text-white font-bold text-2xl">$</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Fair Pricing</h3>
              <p className="text-muted-foreground">Upfront, transparent pricing with no hidden fees or surprises.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Serving Tampa Bay
            <span className="block text-gradient">Neighborhoods</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            We provide residential pressure washing services to neighborhoods throughout South Tampa, Brandon, Riverview, 
            Carrollwood, Westchase, and surrounding areas.
          </p>
          <a
            href="/contact"
            className="bg-gradient-primary text-white px-8 py-4 rounded-xl text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-2xl inline-flex items-center space-x-2"
          >
            <span>Schedule Your Free Estimate</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      <Footer />
      <StickyElements />
    </div>
  );
};

export default Residential;
