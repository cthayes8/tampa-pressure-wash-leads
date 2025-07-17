
import { Building2, Home, Truck, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesOverview = () => {
  const services = [
    {
      icon: Building2,
      title: 'Commercial Pressure Washing',
      description: 'Professional exterior cleaning for office buildings, retail centers, restaurants, and industrial facilities.',
      link: '/commercial',
      features: ['Office buildings', 'Shopping centers', 'Restaurants', 'Industrial facilities']
    },
    {
      icon: Home,
      title: 'Residential Services',
      description: 'Transform your home\'s curb appeal with our comprehensive residential cleaning solutions.',
      link: '/residential',
      features: ['House washing', 'Driveway cleaning', 'Deck restoration', 'Roof cleaning']
    },
    {
      icon: Truck,
      title: 'Fleet & Equipment',
      description: 'Keep your company vehicles and equipment clean and professional with regular maintenance.',
      link: '/commercial',
      features: ['Fleet washing', 'Heavy equipment', 'Construction vehicles', 'Delivery trucks']
    },
    {
      icon: Sparkles,
      title: 'Specialized Cleaning',
      description: 'Advanced cleaning solutions for unique surfaces and challenging cleaning situations.',
      link: '/services',
      features: ['Graffiti removal', 'Oil stain treatment', 'Concrete sealing', 'Emergency cleanup']
    }
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-primary/10 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6 text-accent">
            <Sparkles className="w-4 h-4" />
            <span>Comprehensive Cleaning Solutions</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Professional Services for
            <span className="block text-gradient">Every Need</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From commercial facilities to residential properties, we deliver exceptional results 
            that enhance your image and protect your investment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.link}
              className="group bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-2xl hover:shadow-accent/10 hover:scale-105"
            >
              <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 text-accent font-semibold group-hover:translate-x-2 transition-transform">
                Learn More →
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            to="/services"
            className="bg-gradient-primary text-white px-8 py-4 rounded-xl text-lg font-bold hover:scale-105 transition-all duration-300 shadow-2xl inline-block"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
