import React from 'react';

const IllnessesSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">How Herbal Magic Can Help</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Illness 1 */}
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <img src="https://via.placeholder.com/300" alt="Illness 1" className="w-full h-64 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold">Illness 1</h3>
            <p className="mt-2">Description of illness 1 and how the product helps.</p>
            <p className="mt-2 text-sm text-gray-500">Causes: Cause of illness 1.</p>
          </div>
          {/* Illness 2 */}
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <img src="https://via.placeholder.com/300" alt="Illness 2" className="w-full h-64 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold">Illness 2</h3>
            <p className="mt-2">Description of illness 2 and how the product helps.</p>
            <p className="mt-2 text-sm text-gray-500">Causes: Cause of illness 2.</p>
          </div>
          {/* Illness 3 */}
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <img src="https://via.placeholder.com/300" alt="Illness 3" className="w-full h-64 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold">Illness 3</h3>
            <p className="mt-2">Description of illness 3 and how the product helps.</p>
            <p className="mt-2 text-sm text-gray-500">Causes: Cause of illness 3.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IllnessesSection;
