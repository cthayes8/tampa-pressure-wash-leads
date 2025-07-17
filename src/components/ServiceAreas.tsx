
import { MapPin, Phone } from 'lucide-react';

const ServiceAreas = () => {
  const areas = [
    'Tampa', 'St. Petersburg', 'Clearwater', 'Brandon', 'Plant City',
    'Temple Terrace', 'Riverview', 'Valrico', 'Seffner', 'Dover',
    'Largo', 'Pinellas Park', 'Seminole', 'Indian Shores', 'Belleair',
    'Dunedin', 'Safety Harbor', 'Oldsmar', 'Palm Harbor', 'Tarpon Springs'
  ];

  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Proudly Serving Tampa Bay
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide professional pressure washing services throughout Hillsborough, Pinellas, and Pasco Counties.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-12">
          {areas.map((area, index) => (
            <div
              key={index}
              className="bg-white p-3 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-center space-x-2">
                <MapPin className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-gray-900">{area}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl p-8 shadow-lg text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Don't See Your Area Listed?
          </h3>
          <p className="text-gray-600 mb-6">
            We're always expanding our service area. Give us a call to see if we can help with your pressure washing needs.
          </p>
          <a
            href="tel:+18135551234"
            className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors inline-flex items-center space-x-2"
          >
            <Phone className="w-5 h-5" />
            <span>Call (813) 555-1234</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
