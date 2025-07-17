
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyElements from '@/components/StickyElements';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: 'How Much Does Pressure Washing Cost in Tampa?',
      excerpt: 'A comprehensive guide to pressure washing prices in the Tampa Bay area, including factors that affect cost and how to get the best value.',
      author: 'Mike Johnson',
      date: '2024-01-15',
      category: 'Pricing Guide',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=400&fit=crop'
    },
    {
      title: 'Best Time of Year to Pressure Wash Your Home in Florida',
      excerpt: 'Learn when to schedule your pressure washing service for optimal results in Tampa\'s unique climate and weather patterns.',
      author: 'Mike Johnson',
      date: '2024-01-10',
      category: 'Seasonal Tips',
      image: 'https://images.unsplash.com/photo-1486718448742-163732cd1544?w=600&h=400&fit=crop'
    },
    {
      title: 'DIY vs Professional Pressure Washing: What Tampa Homeowners Need to Know',
      excerpt: 'Comparing the pros and cons of DIY pressure washing versus hiring professionals for your Tampa home.',
      author: 'Mike Johnson',
      date: '2024-01-05',
      category: 'Homeowner Guide',
      image: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=600&h=400&fit=crop'
    },
    {
      title: 'How to Remove Black Streaks from Your Roof Safely',
      excerpt: 'A step-by-step guide to understanding and safely removing algae stains from your roof without damaging shingles.',
      author: 'Mike Johnson',
      date: '2023-12-28',
      category: 'Roof Cleaning',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=400&fit=crop'
    },
    {
      title: 'Preparing Your Tampa Home for Pressure Washing',
      excerpt: 'Essential steps homeowners should take before their pressure washing appointment to ensure the best results.',
      author: 'Mike Johnson',
      date: '2023-12-20',
      category: 'Preparation Tips',
      image: 'https://images.unsplash.com/photo-1433832597046-4f10e10ac764?w=600&h=400&fit=crop'
    },
    {
      title: 'The Environmental Benefits of Professional Pressure Washing',
      excerpt: 'How professional pressure washing services help protect Tampa Bay\'s environment while keeping your property clean.',
      author: 'Mike Johnson',
      date: '2023-12-15',
      category: 'Environmental',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=400&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Pressure Washing Tips & Insights
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Expert advice, tips, and insights from Tampa Bay's premier pressure washing professionals. 
              Learn how to maintain and protect your property investment.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                    Featured Post
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-gray-600 mb-6">
                    {blogPosts[0].excerpt}
                  </p>
                  <div className="flex items-center text-sm text-gray-500 mb-6">
                    <User className="w-4 h-4 mr-2" />
                    <span className="mr-4">{blogPosts[0].author}</span>
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{new Date(blogPosts[0].date).toLocaleDateString()}</span>
                  </div>
                  <a
                    href="#"
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center space-x-2"
                  >
                    <span>Read Full Article</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Recent Articles
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.slice(1).map((post, index) => (
                <article key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium mb-3">
                      {post.category}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <User className="w-4 h-4 mr-2" />
                      <span className="mr-4">{post.author}</span>
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <a
                      href="#"
                      className="text-blue-600 font-semibold hover:text-blue-700 transition-colors inline-flex items-center space-x-2"
                    >
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Stay Updated with Tampa Pro Wash
            </h2>
            <p className="text-blue-100 mb-8">
              Get expert pressure washing tips, maintenance reminders, and special offers 
              delivered directly to your inbox.
            </p>
            <form className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-orange-500 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs text-blue-200 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <StickyElements />
    </div>
  );
};

export default Blog;
