
import { Phone, MessageCircle } from 'lucide-react';
import { useState } from 'react';

const StickyElements = () => {
  const [showChat, setShowChat] = useState(false);

  return (
    <>
      {/* Mobile Sticky CTA Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t shadow-lg">
        <div className="flex">
          <a
            href="tel:+18135551234"
            className="flex-1 bg-slate-800 text-white py-4 px-6 flex items-center justify-center space-x-2 font-semibold"
          >
            <Phone className="w-5 h-5" />
            <span>Call Now</span>
          </a>
          <a
            href="/contact"
            className="flex-1 bg-cyan-500 text-white py-4 px-6 flex items-center justify-center space-x-2 font-semibold"
          >
            <span>Commercial Quote</span>
          </a>
        </div>
      </div>

      {/* Floating Chat Button */}
      <button
        onClick={() => setShowChat(!showChat)}
        className="fixed bottom-20 md:bottom-6 right-6 z-50 bg-cyan-500 text-white p-4 rounded-full shadow-lg hover:bg-cyan-600 transition-colors"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {/* Chat Widget (Simple) */}
      {showChat && (
        <div className="fixed bottom-32 md:bottom-20 right-6 z-50 bg-white rounded-lg shadow-xl p-6 w-80 border">
          <div className="mb-4">
            <h3 className="font-semibold text-gray-900">Commercial Property Quote</h3>
            <p className="text-sm text-gray-600">Text us for instant commercial pricing!</p>
          </div>
          <a
            href="sms:+18135551234?body=Hi! I'd like a quote for commercial pressure washing."
            className="block w-full bg-cyan-500 text-white py-3 px-4 rounded-lg text-center font-semibold hover:bg-cyan-600 transition-colors"
          >
            Text Us Now
          </a>
          <button
            onClick={() => setShowChat(false)}
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
          >
            ×
          </button>
        </div>
      )}

      {/* Floating Review Widget */}
      <div className="fixed top-1/2 left-0 transform -translate-y-1/2 z-40 hidden lg:block">
        <div className="bg-yellow-400 text-gray-900 p-3 rounded-r-lg shadow-lg">
          <div className="text-xs font-semibold">★★★★★ 4.9/5</div>
          <div className="text-xs">Google Reviews</div>
        </div>
      </div>
    </>
  );
};

export default StickyElements;
