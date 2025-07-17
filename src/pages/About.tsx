
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyElements from '@/components/StickyElements';
import { Award, Users, Shield, Heart, Phone, ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 gradient-secondary"></div>
        <div className="absolute inset-0 bg-black/10"></div>
        
        {/* Background elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-accent/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2 text-white">
                <div className="inline-flex items-center space-x-2 bg-accent/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Award className="w-4 h-4" />
                  <span>Tampa's Trusted Experts</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Your Trusted Tampa Bay
                  <span className="block text-accent">Pressure Washing Experts</span>
                </h1>
                <p className="text-lg text-blue-100 mb-8">
                  Since 2015, Tampa Pro Wash has been Tampa Bay's premier pressure washing company, 
                  transforming thousands of homes and businesses with professional exterior cleaning services.
                </p>
                <a
                  href="/contact"
                  className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-2xl inline-flex items-center space-x-2"
                >
                  <span>Get Your Free Estimate</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
              <div className="lg:w-1/2">
                <div className="bg-card/20 backdrop-blur-sm rounded-2xl p-2 border border-white/20">
                  <img
                    src="https://images.unsplash.com/photo-1433832597046-4f10e10ac764?w=600&h=400&fit=crop"
                    alt="Tampa Pro Wash team"
                    className="w-full h-80 object-cover rounded-xl shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Owner Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-accent/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6 text-accent">
                <Users className="w-4 h-4" />
                <span>Meet the Owner</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                The Story Behind
                <span className="block text-gradient">Tampa Pro Wash</span>
              </h2>
            </div>
            
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/3">
                <div className="bg-card/70 backdrop-blur-sm rounded-2xl p-4 border border-border/50">
                  <img
                    src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=400&fit=crop"
                    alt="Mike Johnson, Owner"
                    className="w-full h-80 object-cover rounded-xl shadow-lg"
                  />
                  <div className="text-center mt-6">
                    <h3 className="text-xl font-semibold text-foreground">Mike Johnson</h3>
                    <p className="text-muted-foreground">Founder & Owner</p>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-2/3">
                <div className="bg-card/70 backdrop-blur-sm p-8 rounded-2xl border border-border/50">
                  <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    "I started Tampa Pro Wash with a simple mission: to provide Tampa Bay residents and 
                    business owners with reliable, professional pressure washing services they can trust. 
                    As a Tampa native, I understand the unique challenges our humid climate presents, 
                    from algae growth to mildew buildup."
                  </p>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    "What sets us apart is our commitment to doing the job right the first time. We use 
                    the latest equipment, eco-friendly cleaning solutions, and techniques that are safe 
                    for your property and the environment. Every member of our team is trained to treat 
                    your home or business as if it were their own."
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    "After 15+ years in the business and over 2,100 satisfied customers, I'm proud to 
                    say that Tampa Pro Wash has become Tampa Bay's most trusted pressure washing company. 
                    We're not just cleaning properties – we're helping our neighbors take pride in their 
                    homes and businesses."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-muted/30 relative overflow-hidden">
        <div className="absolute top-10 right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-primary/10 rounded-full blur-2xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-accent/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6 text-accent">
                <Heart className="w-4 h-4" />
                <span>Our Core Values</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Values That Guide
                <span className="block text-gradient">Everything We Do</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                These core values guide everything we do at Tampa Pro Wash
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-card/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-2xl hover:shadow-accent/10 hover:scale-105 group">
                <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Community First</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We're Tampa Bay locals serving our neighbors. Supporting our community and 
                  helping property owners take pride in their investments is what drives us.
                </p>
              </div>

              <div className="bg-card/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-2xl hover:shadow-accent/10 hover:scale-105 group">
                <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Trust & Integrity</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Honest pricing, reliable service, and doing what we say we'll do. 
                  We've built our reputation on trust and transparency.
                </p>
              </div>

              <div className="bg-card/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-2xl hover:shadow-accent/10 hover:scale-105 group">
                <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Quality Excellence</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We don't cut corners. From our equipment to our techniques to our customer service, 
                  we maintain the highest standards in everything we do.
                </p>
              </div>

              <div className="bg-card/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-2xl hover:shadow-accent/10 hover:scale-105 group">
                <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Customer Focus</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Your satisfaction is our success. We listen to your needs, respect your property, 
                  and won't consider the job done until you're completely happy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-accent/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6 text-accent">
              <Shield className="w-4 h-4" />
              <span>Credentials & Certifications</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Licensed, Insured &
              <span className="block text-gradient">Certified Excellence</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="group">
                <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Licensed & Insured</h3>
                <p className="text-muted-foreground">Fully licensed pressure washing contractor with $2M general liability insurance</p>
              </div>
              
              <div className="group">
                <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">BBB A+ Rating</h3>
                <p className="text-muted-foreground">Better Business Bureau accredited with A+ rating for ethical business practices</p>
              </div>
              
              <div className="group">
                <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">PWNA Member</h3>
                <p className="text-muted-foreground">Member of the Power Washers of North America professional association</p>
              </div>
            </div>

            <div className="bg-gradient-primary p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Experience the Tampa Pro Wash Difference?</h3>
              <p className="text-blue-100 mb-6">
                Join thousands of satisfied customers who trust us with their pressure washing needs.
              </p>
              <a
                href="/contact"
                className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-xl inline-flex items-center space-x-2"
              >
                <span>Get Your Free Estimate Today</span>
                <ArrowRight className="w-5 h-5" />
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
