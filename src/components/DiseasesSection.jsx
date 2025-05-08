import React from 'react';

const DiseasesSection = () => {
  return (
    <section id="diseases" className="py-16 bg-gray-100 px-4 md:px-10 space-y-10">
      
      {/* Container 1: Herbal Cure */}
      <div className="border-4 border-green-400 bg-green-50 rounded-2xl shadow-xl p-6 flex flex-col md:flex-row gap-6">
        {/* Image */}
        <div className="md:w-1/2">
          <img
           src="/images/drugs/IMG-20250507-WA0044.jpg"
            alt="Herbal Cure"
            className="w-full h-auto rounded-xl object-cover"
          />
        </div>

        {/* Content */}
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold text-green-800 mb-2">🌿 Permanent Natural Herbal Cure</h2>
          <p className="mb-4">Permanent natural herbal cure for the listed health issues 👇</p>
          <ul className="list-disc list-inside grid grid-cols-2 gap-x-4 gap-y-1 text-gray-800 text-sm">
            <li>Heart Diseases</li>
            <li>Hypertension</li>
            <li>Diabetes</li>
            <li>HSV 1 & 2</li>
            <li>Genital Warts</li>
            <li>HPV</li>
            <li>Gonorrhea</li>
            <li>Staphylococcus</li>
            <li>Fibroids</li>
            <li>Cancer</li>
            <li>Prostate Diseases</li>
            <li>Thyroid Diseases</li>
            <li>Goiter</li>
            <li>Kidney Diseases</li>
            <li>Arthritis</li>
            <li>Heart Failure</li>
            <li>Infertility</li>
            <li>Cardiac Arrest</li>
            <li>PCOS</li>
            <li>Endometriosis</li>
            <li>HIV/AIDS</li>
            <li>Hormonal Issues</li>
            <li>High Blood Pressure</li>
            <li>Low Sperm Count</li>
            <li>Tumor</li>
            <li>Trichomoniasis</li>
            <li>Syphilis</li>
            <li>Chlamydia</li>
            <li>UTI</li>
            <li>E.T.C</li>
          </ul>
        </div>
      </div>

      {/* Container 2: Parasite Symptoms */}
      <div className="border-4 border-yellow-400 bg-yellow-50 rounded-2xl shadow-xl p-6 flex flex-col md:flex-row gap-6">
        {/* Image */}
        <div className="md:w-1/2">
          <img
            src="/images/infections/Untitled.jpg"
            alt="Parasite Symptoms"
            className="w-full h-auto rounded-xl object-cover"
          />
        </div>

        {/* Content */}
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold text-yellow-800 mb-4">🐛 Symptoms of Parasites</h2>
          <div className="space-y-4 text-sm text-gray-800">
            <div>
              <h3 className="font-semibold text-yellow-700">🛏️ Sleeping Problems</h3>
              <ul className="list-disc list-inside">
                <li>Drooling during sleep</li>
                <li>Gnashing of teeth</li>
                <li>Snoring</li>
                <li>Insomnia</li>
                <li>Twitching during sleep</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-yellow-700">🍽️ Appetite</h3>
              <ul className="list-disc list-inside">
                <li>Salt cravings</li>
                <li>Evening sweets rush</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-yellow-700">🧏 Visible Signs</h3>
              <ul className="list-disc list-inside">
                <li>Rash and pimples</li>
                <li>Mucus and secretions</li>
                <li>Itching</li>
                <li>Hair loss</li>
                <li>Nail flaking</li>
                <li>Dark eye rings</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Container 3: Monkeypox Info */}
      <div className="border-4 border-purple-400 bg-purple-50 rounded-2xl shadow-xl p-6 flex flex-col md:flex-row gap-6">
        {/* Image */}
        <div className="md:w-1/2">
          <img
            src="/images/infections/Untitled2.jpg"
            alt="Monkeypox Awareness"
            className="w-full h-auto rounded-xl object-cover"
          />
        </div>

        {/* Content */}
        <div className="md:w-1/2 space-y-3 text-sm text-gray-800">
          <h2 className="text-2xl font-bold text-purple-800">🦠 Monkeypox 101 — Let’s Stay Safe This Summer</h2>
          <p><strong>01:</strong> Monkeypox virus is related to smallpox. Symptoms are milder and rarely fatal.</p>
          <p><strong>02:</strong> Symptoms: Fever, headache, muscle aches, rash, chills, exhaustion.</p>
          <p><strong>03:</strong> Rash may appear on face, hands, genitals. Blisters scab and heal over 2–4 weeks.</p>
          <p><strong>04:</strong> Spread by: Contact with rash/body fluids, respiratory droplets, shared fabrics.</p>
          <p><strong>05:</strong> If symptoms occur:</p>
          <ul className="list-disc list-inside">
            <li>Call a healthcare provider</li>
            <li>Isolate at home</li>
            <li>Wear a mask</li>
            <li>Avoid physical contact</li>
          </ul>
        </div>
      </div>

    </section>
  );
};

export default DiseasesSection;
