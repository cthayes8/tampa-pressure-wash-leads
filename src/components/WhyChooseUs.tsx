
import { Shield, Clock, Award, Leaf, Users, DollarSign } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Shield,
      title: 'Licensed & Insured',
      description: 'Fully licensed and insured with $2M liability coverage for your peace of mind'
    },
    {
      icon: Clock,
      title: 'Fast Response Times',
      description: '24-hour response time with same-day service available throughout Tampa Bay'
    },
    {
      icon: Award,
      title: '15+ Years Experience',
      description: 'Over 15 years of pressure washing expertise with 2,100+ satisfied customers'
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly Methods',
      description: 'Environmentally safe cleaning solutions that protect your landscaping'
    },
    {
      icon: Users,
      title: 'Professional Team',
      description: 'Trained, uniformed technicians who treat your property with respect'
    },
    {
      icon: DollarSign,
      title: 'Upfront Pricing',
      description: 'No hidden fees or surprises - transparent pricing before we start'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Tampa Chooses Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We've built our reputation on quality work, fair pricing, and exceptional customer service. 
            Here's what sets us apart from the competition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4 mx-auto">
                <feature.icon className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-8">
            Trusted by Tampa Bay Residents & Businesses
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="bg-gray-100 px-6 py-3 rounded-lg">
              <span className="font-semibold">BBB A+ Rated</span>
            </div>
            <div className="bg-gray-100 px-6 py-3 rounded-lg">
              <span className="font-semibold">Google Reviews 4.9★</span>
            </div>
            <div className="bg-gray-100 px-6 py-3 rounded-lg">
              <span className="font-semibold">Angie's List Super Service</span>
            </div>
            <div className="bg-gray-100 px-6 py-3 rounded-lg">
              <span className="font-semibold">HomeAdvisor Elite Service</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
