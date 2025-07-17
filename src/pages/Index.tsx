
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ServicesOverview from '@/components/ServicesOverview';
import WhyChooseUs from '@/components/WhyChooseUs';
import ServiceAreas from '@/components/ServiceAreas';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import StickyElements from '@/components/StickyElements';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ServicesOverview />
      <WhyChooseUs />
      <ServiceAreas />
      <Testimonials />
      <Footer />
      <StickyElements />
    </div>
  );
};

export default Index;
