import React from 'react';

const ProductDetailsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Product Details</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <img src="https://via.placeholder.com/400" alt="Product" className="w-80 h-80 object-cover rounded-lg" />
          <div className="text-left">
            <h3 className="text-2xl font-semibold mb-4">Herbal Magic</h3>
            <p className="text-lg">Herbal Magic is a natural remedy made from the finest plants to help you recover from various ailments.</p>
            <ul className="mt-4 text-lg">
              <li>✔ 100% Organic Ingredients</li>
              <li>✔ Effective for various diseases</li>
              <li>✔ No side effects</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsSection;
