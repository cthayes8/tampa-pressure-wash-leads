
import { Home, Building2, Car, Fence, Waves, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesOverview = () => {
  const services = [
    {
      icon: Home,
      title: 'House Washing',
      description: 'Gentle, effective cleaning for siding, brick, stucco, and more',
      link: '/residential'
    },
    {
      icon: Building2,
      title: 'Commercial Cleaning',
      description: 'Professional exterior cleaning for businesses and commercial properties',
      link: '/commercial'
    },
    {
      icon: Waves,
      title: 'Driveway & Concrete',
      description: 'High-pressure cleaning to remove stains, oil, and grime',
      link: '/services'
    },
    {
      icon: Fence,
      title: 'Deck & Fence Cleaning',
      description: 'Restore your outdoor spaces to their original beauty',
      link: '/services'
    },
    {
      icon: Car,
      title: 'Fleet Washing',
      description: 'Keep your business vehicles clean and professional',
      link: '/commercial'
    },
    {
      icon: Sparkles,
      title: 'Roof Cleaning',
      description: 'Safe, low-pressure roof cleaning to remove algae and stains',
      link: '/services'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Pressure Washing Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From residential homes to commercial properties, we deliver exceptional results 
            that enhance curb appeal and protect your investment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.link}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg mb-4 group-hover:bg-blue-600 transition-colors">
                <service.icon className="w-8 h-8 text-blue-600 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {service.description}
              </p>
              <div className="text-orange-500 font-semibold group-hover:text-orange-600 transition-colors">
                Learn More →
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/contact"
            className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center space-x-2"
          >
            <span>Get Your Free Estimate Today</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
