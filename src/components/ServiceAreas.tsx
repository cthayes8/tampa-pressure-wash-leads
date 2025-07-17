
import { MapPin, Phone } from 'lucide-react';

const ServiceAreas = () => {
  const areas = [
    'Downtown Tampa', 'Hyde Park', 'Ybor City', 'Westshore',
    'Brandon', 'Riverview', 'Carrollwood', 'Westchase',
    'Town N Country', 'Temple Terrace', 'Plant City', 'Clearwater',
    'St. Petersburg', 'Pinellas Park', 'Largo', 'Safety Harbor'
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-accent/10 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Content */}
            <div>
              <div className="inline-flex items-center space-x-2 bg-accent/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6 text-accent">
                <MapPin className="w-4 h-4" />
                <span>Serving Tampa Bay</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Proudly Serving
                <span className="block text-gradient">Tampa Bay Area</span>
              </h2>
              
              <p className="text-xl text-muted-foreground mb-8">
                From downtown Tampa to the surrounding communities, we provide professional 
                pressure washing services throughout the greater Tampa Bay region.
              </p>

              <div className="bg-card/70 backdrop-blur-sm p-6 rounded-2xl border border-border/50 mb-8">
                <h3 className="text-xl font-bold text-foreground mb-4">Service Coverage</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {areas.map((area, index) => (
                    <div key={index} className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+18135551234"
                  className="group bg-gradient-primary text-white px-8 py-4 rounded-xl text-lg font-bold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-2xl"
                >
                  <Phone className="w-5 h-5" />
                  <span>(813) 555-1234</span>
                </a>
                <a
                  href="/contact"
                  className="bg-card/70 backdrop-blur-sm border-2 border-accent/30 text-foreground px-8 py-4 rounded-xl text-lg font-bold hover:bg-accent/10 transition-all duration-300"
                >
                  Get Free Quote
                </a>
              </div>
            </div>

            {/* Right side - Map placeholder */}
            <div className="relative">
              <div className="bg-card/70 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
                <div className="aspect-square bg-gradient-secondary rounded-xl flex items-center justify-center text-white">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2">Tampa Bay</h3>
                    <p className="text-blue-100">Service Area Map</p>
                  </div>
                </div>
                <div className="mt-6 space-y-3">
                  <div className="flex items-center justify-between p-3 bg-accent/10 rounded-lg">
                    <span className="font-semibold text-foreground">Response Time</span>
                    <span className="text-accent font-bold">Under 2 Hours</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-primary/10 rounded-lg">
                    <span className="font-semibold text-foreground">Service Radius</span>
                    <span className="text-primary font-bold">50+ Miles</span>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent/30 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
