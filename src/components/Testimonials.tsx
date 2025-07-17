
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'South Tampa',
      rating: 5,
      text: 'Absolutely amazing service! They transformed our dirty concrete driveway and made our house look brand new. The team was professional, on time, and the pricing was very fair.',
      service: 'House & Driveway Washing'
    },
    {
      name: 'Mike Rodriguez',
      location: 'Brandon',
      rating: 5,
      text: 'I own several rental properties and Tampa Pro Wash has become my go-to for keeping them in great shape. Fast, reliable, and they always do excellent work.',
      service: 'Commercial Property Cleaning'
    },
    {
      name: 'Jennifer Chen',
      location: 'Clearwater',
      rating: 5,
      text: 'Our deck was covered in mildew and algae. They made it look like new again! Very impressed with their attention to detail and eco-friendly cleaning solutions.',
      service: 'Deck Cleaning & Restoration'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what Tampa Bay residents and business owners 
            have to say about our pressure washing services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-xl relative"
            >
              <Quote className="w-8 h-8 text-blue-600 mb-4" />
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-700 mb-6 italic">
                "{testimonial.text}"
              </p>

              <div className="border-t pt-4">
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                <div className="text-sm text-gray-600">{testimonial.location}</div>
                <div className="text-sm text-blue-600 font-medium mt-1">{testimonial.service}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-blue-600 text-white p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">Join 2,100+ Satisfied Customers</h3>
            <p className="text-blue-100 mb-6">
              Experience the difference professional pressure washing can make for your property.
            </p>
            <a
              href="tel:+18135551234"
              className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors inline-block"
            >
              Get Your Free Quote Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
