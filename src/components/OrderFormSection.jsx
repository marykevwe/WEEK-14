import React, { useState, useEffect } from 'react';

const OrderFormSection = () => {
  const [selectedProduct, setSelectedProduct] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  // Set your promo end date here
  const promoEndDate = new Date('2025-05-10T23:59:59').getTime();

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = promoEndDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });

      if (distance < 0) {
        clearInterval(interval);
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Order for ${selectedProduct} submitted!\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`);
    // You could send this via an email service or backend API
  };

  return (
    <section className="py-16 bg-green-50 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-green-800">🎉 Order Now at Promo Prices!</h2>
        <p className="text-lg text-green-700 mb-6">Limited-time offer – promo ends in:</p>

        <div className="flex justify-center gap-4 mb-10 text-white">
          {['days', 'hours', 'minutes', 'seconds'].map((unit) => (
            <div key={unit} className="bg-green-700 rounded-xl px-4 py-3">
              <div className="text-2xl font-bold">{countdown[unit]}</div>
              <div className="text-sm uppercase">{unit}</div>
            </div>
          ))}
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-xl rounded-xl p-8 space-y-6 text-left"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 border border-gray-300 rounded-lg w-full"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 border border-gray-300 rounded-lg w-full"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>

          <select
            className="p-3 border border-gray-300 rounded-lg w-full"
            value={selectedProduct}
            onChange={(e) => setSelectedProduct(e.target.value)}
            required
          >
            <option value="">Select a product</option>
            <option value="Herbal Magic">Herbal Magic</option>
            <option value="Herbal Healing">Herbal Healing</option>
            <option value="Nature's Cure">Nature's Cure</option>
            <option value="Detox Combo">Detox Combo</option>
          </select>

          <textarea
            placeholder="Describe your issue or request (optional)"
            className="p-3 border border-gray-300 rounded-lg w-full h-32"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition"
          >
            📦 Submit Order
          </button>
        </form>
      </div>
    </section>
  );
};

export default OrderFormSection;
