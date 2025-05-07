import React from 'react';

const TestimonialSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">What Our Customers Say</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white shadow-lg p-6 rounded-lg w-80">
            <p className="italic">"Herbal Magic worked wonders for me. I feel healthier than ever!"</p>
            <p className="mt-4 font-semibold">John Doe</p>
            <p className="text-sm text-gray-500">Satisfied customer</p>
          </div>
          {/* Testimonial 2 */}
          <div className="bg-white shadow-lg p-6 rounded-lg w-80">
            <p className="italic">"I have recommended Herbal Magic to all my friends. It's truly a miracle product."</p>
            <p className="mt-4 font-semibold">Jane Smith</p>
            <p className="text-sm text-gray-500">Happy customer</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
