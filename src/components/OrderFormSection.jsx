import React, { useState } from 'react';

const OrderFormSection = () => {
  const [selectedProduct, setSelectedProduct] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Order for ${selectedProduct} submitted!`);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Place Your Order</h2>
        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-6">
          <select
            className="p-3 border border-gray-300 rounded-lg"
            value={selectedProduct}
            onChange={(e) => setSelectedProduct(e.target.value)}
          >
            <option value="">Select a product</option>
            <option value="Herbal Magic">Herbal Magic</option>
            <option value="Herbal Healing">Herbal Healing</option>
            <option value="Nature's Cure">Nature's Cure</option>
          </select>
          <button type="submit" className="bg-green-600 text-white p-3 rounded-lg">Submit Order</button>
        </form>
      </div>
    </section>
  );
};

export default OrderFormSection;
