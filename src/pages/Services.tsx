
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyElements from '@/components/StickyElements';
import { ArrowRight, Check, Star, Building2 } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Commercial Building Washing',
      description: 'Professional exterior cleaning for office buildings, retail centers, and commercial properties',
      features: ['OSHA compliant procedures', 'Minimal business disruption', 'Eco-friendly cleaning solutions', 'Maintains professional appearance'],
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop'
    },
    {
      title: 'Property Management Services',
      description: 'Comprehensive maintenance solutions for multi-property portfolios with scheduling and reporting',
      features: ['Multi-property discounts', 'Scheduled maintenance programs', 'Digital reporting dashboard', 'Priority emergency response'],
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop'
    },
    {
      title: 'Parking Lot & Concrete Cleaning',
      description: 'High-pressure cleaning to remove oil stains, grime, and restore commercial concrete surfaces',
      features: ['Removes tough oil stains', 'Eliminates tire marks', 'Concrete sealing available', 'Improves customer experience'],
      image: 'https://images.unsplash.com/photo-1486718448742-163732cd1544?w=600&h=400&fit=crop'
    },
    {
      title: 'Fleet & Equipment Washing',
      description: 'Professional cleaning for company vehicles, equipment, and fleet maintenance',
      features: ['Regular maintenance schedules', 'Mobile service available', 'Eco-friendly detergents', 'Maintains professional image'],
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=400&fit=crop'
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
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-flex items-center space-x-2 bg-accent/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Building2 className="w-4 h-4" />
              <span>Comprehensive Cleaning Solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Commercial Pressure Washing
              <span className="block text-accent">Services in Tampa</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              We provide comprehensive commercial cleaning services for businesses and properties 
              throughout the Tampa Bay area with OSHA compliance and unmatched reliability.
            </p>
            <a
              href="tel:+18135551234"
              className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-2xl inline-block"
            >
              Call for Commercial Quote: (813) 555-1234
            </a>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 bg-background">
        <div className="container">
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
                    className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-xl inline-flex items-center space-x-2"
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
        
        <div className="container relative z-10">
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
                  How much does commercial pressure washing cost in Tampa?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Commercial pricing depends on square footage, frequency, and scope of work. Office buildings typically range from $0.10-$0.30 per sq ft, 
                  while parking lots range from $0.05-$0.15 per sq ft. We offer volume discounts for multi-property contracts and provide detailed commercial proposals.
                </p>
              </div>
              <div className="bg-card/70 backdrop-blur-sm p-8 rounded-2xl border border-border/50">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Do you work with property management companies?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Yes, we specialize in working with property managers and offer multi-property discounts, scheduled maintenance programs, 
                  digital reporting dashboards, and priority emergency response. We understand the unique needs of commercial properties.
                </p>
              </div>
              <div className="bg-card/70 backdrop-blur-sm p-8 rounded-2xl border border-border/50">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Are you OSHA compliant and properly insured?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Yes, we are fully OSHA certified and EPA compliant. We carry $5M in liability insurance and provide all necessary 
                  documentation for commercial contracts. Our team follows all safety protocols and compliance requirements.
                </p>
              </div>
              <div className="bg-card/70 backdrop-blur-sm p-8 rounded-2xl border border-border/50">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  How often should commercial properties be pressure washed?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We recommend quarterly cleaning for high-traffic commercial areas in Tampa's humid climate. Office buildings may need 
                  bi-annual service, while retail centers and restaurants often benefit from monthly maintenance to maintain professional appearance.
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
