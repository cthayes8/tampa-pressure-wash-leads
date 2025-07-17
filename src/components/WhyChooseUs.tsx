
import { Shield, Clock, Award, Users, Zap, Leaf } from 'lucide-react';

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: Shield,
      title: '$5M Insured',
      description: 'Comprehensive liability coverage protects your property and gives you complete peace of mind.',
      color: 'text-blue-600'
    },
    {
      icon: Clock,
      title: '24hr Emergency',
      description: 'Round-the-clock emergency response for urgent cleaning needs and unexpected situations.',
      color: 'text-accent'
    },
    {
      icon: Award,
      title: '15+ Years Experience',
      description: 'Proven track record with over 500 successful commercial projects and 100% satisfaction rate.',
      color: 'text-primary'
    },
    {
      icon: Users,
      title: 'Commercial Specialists',
      description: 'Dedicated team trained specifically for commercial properties and business requirements.',
      color: 'text-accent'
    },
    {
      icon: Zap,
      title: 'Advanced Equipment',
      description: 'State-of-the-art pressure washing equipment for superior results and faster completion.',
      color: 'text-primary'
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly',
      description: 'Environmentally safe cleaning solutions that protect your landscaping and local ecosystem.',
      color: 'text-green-600'
    }
  ];

  return (
    <section className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-primary/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6 text-accent">
            <Award className="w-4 h-4" />
            <span>Why Tampa Businesses Choose Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            The Clear Choice for
            <span className="block text-gradient">Professional Cleaning</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're not just another cleaning company. We're your partner in maintaining 
            a professional business image that drives results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="group bg-card/70 backdrop-blur-sm p-8 rounded-2xl border border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-2xl hover:shadow-accent/10 hover:scale-105"
            >
              <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-primary p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to See the Difference?</h3>
            <p className="text-blue-100 mb-6">
              Join hundreds of Tampa Bay businesses that trust us with their cleaning needs.
            </p>
            <a
              href="tel:+18135551234"
              className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-xl text-lg font-bold hover:scale-105 transition-all duration-300 shadow-xl"
            >
              Call (813) 555-1234
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
