import React from 'react';

const products = [
  {
    id: 1,
    name: 'Herbal Magic',
    price: '₦12,000',
    description: 'Natural remedy made from organic plants.',
    image: '/images/drugs/IMG-20250507-WA0000.jpg',
    whatsapp: 'https://wa.me/2347012345678?text=I%20am%20interested%20in%20Herbal%20Magic',
  },
  {
    id: 2,
    name: 'Parasite Cleanse',
    price: '₦10,000',
    description: 'Helps cleanse the body of harmful parasites.',
    image: '/images/drugs/IMG-20250507-WA0002.jpg',
    whatsapp: 'https://wa.me/2347012345678?text=I%20want%20to%20order%20Parasite%20Cleanse',
  },
  {
    id: 3,
    name: 'Detox Combo',
    price: '₦15,000',
    description: 'Full-body detox herbal combo.',
    image: '/images/drugs/IMG-20250507-WA0005.jpg',
    whatsapp: 'https://wa.me/2347012345678?text=Tell%20me%20more%20about%20Detox%20Combo',
  },
  {
    id: 4,
    name: 'Fibroid Flush',
    price: '₦18,000',
    description: 'Supports fibroid shrinkage naturally.',
    image: '/images/drugs/IMG-20250507-WA0014.jpg',
    whatsapp: 'https://wa.me/2347012345678?text=I%20need%20Fibroid%20Flush',
  },
  {
    id: 5,
    name: 'Fertility Boost',
    price: '₦20,000',
    description: 'Herbal formula to boost fertility.',
    image: '/images/drugs/IMG-20250507-WA0026.jpg',
    whatsapp: 'https://wa.me/2347012345678?text=I%20am%20interested%20in%20Fertility%20Boost',
  },
  {
    id: 6,
    name: 'Immune Shield',
    price: '₦8,000',
    description: 'Strengthens your immune system.',
    image: '/images/infections/IMG-20250507-WA0017.jpg',
    whatsapp: 'https://wa.me/2347012345678?text=Order%20Immune%20Shield',
  },
];

const ProductDetailsSection = () => {
  return (
    <section className="py-16 bg-white px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">🌿 Our Herbal Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="border-2 border-green-300 rounded-2xl shadow-lg p-4 bg-green-50 flex flex-col items-center text-center hover:shadow-2xl transition"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-56 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-green-800 font-bold text-lg mb-2">{product.price}</p>
              <p className="text-sm mb-4">{product.description}</p>
              <a
                href={product.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-block px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition"
              >
                Order on WhatsApp
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsSection;
