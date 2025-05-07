import React from 'react'

const DiseasesSection = () => {
  return (
    <section id="diseases" className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Diseases We Cure</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img src="image-url.jpg" alt="Disease" className="w-full h-40 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold">Malaria</h3>
            <p>Malaria is a life-threatening disease caused by parasites that are transmitted to people through the bites of infected female Anopheles mosquitoes.</p>
          </div>
          {/* Repeat for other diseases */}
        </div>
      </div>
    </section>
  );
};


export default DiseasesSection