
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyElements from '@/components/StickyElements';
import { ArrowRight, Check } from 'lucide-react';

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
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professional Pressure Washing Services in Tampa
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              We provide comprehensive exterior cleaning services for residential and commercial properties throughout the Tampa Bay area.
            </p>
            <a
              href="tel:+18135551234"
              className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors inline-block"
            >
              Call for Free Estimate: (813) 555-1234
            </a>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-8`}>
                <div className="lg:w-1/2">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-80 object-cover rounded-lg shadow-lg"
                  />
                </div>
                <div className="lg:w-1/2">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
                  <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-green-500" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/contact"
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center space-x-2"
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
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  How much does pressure washing cost in Tampa?
                </h3>
                <p className="text-gray-600">
                  Costs vary based on the size and type of surface being cleaned. House washing typically ranges from $200-$600, while driveways range from $100-$300. We provide free, no-obligation estimates for all services.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Is pressure washing safe for my home?
                </h3>
                <p className="text-gray-600">
                  Yes, when done by professionals. We use appropriate pressure levels and techniques for each surface type. Our team is trained to clean effectively while protecting your property and landscaping.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  How often should I have my property pressure washed?
                </h3>
                <p className="text-gray-600">
                  We recommend annual cleaning for most properties in Tampa due to our humid climate. High-traffic areas like driveways may benefit from more frequent cleaning, while protected areas may need less frequent service.
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
