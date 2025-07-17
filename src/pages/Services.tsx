
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyElements from '@/components/StickyElements';
import { ArrowRight, Check, Star, Building2 } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'House Washing',
      description: 'Professional exterior house cleaning using low-pressure washing techniques',
      features: ['Removes dirt, mildew, and algae', 'Safe for all siding types', 'Eco-friendly cleaning solutions', 'Protects your paint and landscaping'],
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=400&fit=crop'
    },
    {
      title: 'Driveway & Concrete Cleaning',
      description: 'High-pressure cleaning to remove oil stains, grime, and restore concrete surfaces',
      features: ['Removes tough oil stains', 'Eliminates tire marks', 'Concrete sealing available', 'Improves curb appeal instantly'],
      image: 'https://images.unsplash.com/photo-1486718448742-163732cd1544?w=600&h=400&fit=crop'
    },
    {
      title: 'Deck & Fence Restoration',
      description: 'Specialized cleaning and restoration for wood and composite outdoor structures',
      features: ['Removes weathered gray appearance', 'Prepares surface for staining', 'Safe for wood and composite', 'Extends deck/fence lifespan'],
      image: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=600&h=400&fit=crop'
    },
    {
      title: 'Roof Cleaning',
      description: 'Low-pressure roof cleaning to safely remove algae, moss, and stains',
      features: ['Soft washing technique', 'Removes black streaks and algae', 'Extends roof lifespan', 'Improves energy efficiency'],
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=400&fit=crop'
    }
  ];

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
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-flex items-center space-x-2 bg-accent/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Building2 className="w-4 h-4" />
              <span>Comprehensive Cleaning Solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Professional Pressure Washing
              <span className="block text-accent">Services in Tampa</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              We provide comprehensive exterior cleaning services for residential and commercial properties 
              throughout the Tampa Bay area with unmatched quality and reliability.
            </p>
            <a
              href="tel:+18135551234"
              className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-2xl inline-block"
            >
              Call for Free Estimate: (813) 555-1234
            </a>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}>
                <div className="lg:w-1/2">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-80 object-cover rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="lg:w-1/2">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{service.title}</h2>
                  <p className="text-lg text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/contact"
                    className="bg-gradient-primary text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-xl inline-flex items-center space-x-2"
                  >
                    <span>Get Quote for {service.title}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30 relative overflow-hidden">
        <div className="absolute top-10 right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-primary/10 rounded-full blur-2xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-accent/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6 text-accent">
                <Star className="w-4 h-4" />
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Your Questions
                <span className="block text-gradient">Answered</span>
              </h2>
            </div>
            
            <div className="space-y-8">
              <div className="bg-card/70 backdrop-blur-sm p-8 rounded-2xl border border-border/50">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  How much does pressure washing cost in Tampa?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Costs vary based on the size and type of surface being cleaned. House washing typically ranges from $200-$600, 
                  while driveways range from $100-$300. We provide free, no-obligation estimates for all services.
                </p>
              </div>
              <div className="bg-card/70 backdrop-blur-sm p-8 rounded-2xl border border-border/50">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Is pressure washing safe for my home?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Yes, when done by professionals. We use appropriate pressure levels and techniques for each surface type. 
                  Our team is trained to clean effectively while protecting your property and landscaping.
                </p>
              </div>
              <div className="bg-card/70 backdrop-blur-sm p-8 rounded-2xl border border-border/50">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  How often should I have my property pressure washed?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We recommend annual cleaning for most properties in Tampa due to our humid climate. High-traffic areas like 
                  driveways may benefit from more frequent cleaning, while protected areas may need less frequent service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <StickyElements />
    </div>
  );
};

export default Services;
