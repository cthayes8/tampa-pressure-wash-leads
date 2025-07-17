
import { Shield, Clock, Award, Users, Zap, FileCheck } from 'lucide-react';

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: Shield,
      title: '$5M Liability Insurance',
      description: 'Comprehensive commercial liability coverage protects your property and business from any risk.',
      color: 'text-blue-600'
    },
    {
      icon: FileCheck,
      title: 'OSHA & EPA Compliant',
      description: 'All work performed in compliance with safety regulations and environmental standards.',
      color: 'text-accent'
    },
    {
      icon: Clock,
      title: '24/7 Emergency Response',
      description: 'Round-the-clock emergency response for urgent cleaning needs within 2 hours.',
      color: 'text-primary'
    },
    {
      icon: Users,
      title: 'Property Management Partners',
      description: 'We work with property management companies and understand multi-property needs.',
      color: 'text-accent'
    },
    {
      icon: Zap,
      title: 'Minimal Business Disruption',
      description: 'Flexible scheduling during off-hours and weekends to minimize operational impact.',
      color: 'text-primary'
    },
    {
      icon: Award,
      title: '500+ Commercial Properties',
      description: 'Proven track record with office buildings, retail centers, and industrial facilities.',
      color: 'text-green-600'
    }
  ];

  return (
    <section className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-primary/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
      
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6 text-accent">
            <Award className="w-4 h-4" />
            <span>Why Tampa Businesses Choose Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            The Clear Choice for
            <span className="block text-gradient">Commercial Properties</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're not just another cleaning company. We're your strategic partner in property maintenance, 
            compliance, and professional image management.
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
          <div className="bg-gradient-to-r from-gray-900 to-blue-900 p-8 rounded-2xl text-white shadow-2xl">
            <h3 className="text-2xl font-bold mb-4 text-white">Ready to Partner with Tampa's Leading Commercial Contractor?</h3>
            <p className="text-gray-100 mb-6 text-lg">
              Join 500+ Tampa Bay commercial properties that trust us with their maintenance needs.
            </p>
            <a
              href="tel:+18135551234"
              className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-xl text-lg font-bold hover:scale-105 transition-all duration-300 shadow-xl"
            >
              Schedule Property Assessment
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
