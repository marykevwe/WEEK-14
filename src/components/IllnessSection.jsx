import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const sliderSettings = {
  dots: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: true,
};

const illnessImages1 = [
  "/images/infections/IMG-20250507-WA0017.jpg",
  "/images/infections/IMG-20250507-WA0012.jpg",
  "/images/infections/IMG-20250507-WA0020.jpg",
];

const illnessImages2 = [
  "/images/infections/IMG-20250507-WA0035.jpg",
  "/images/infections/IMG-20250507-WA0043.jpg",
  "/images/infections/IMG-20250507-WA0041.jpg",
];

const IllnessesSection = () => {
  return (
    <div>
      <div className='container mx-auto text-center mt-8'>
      <h1 className="text-4xl text-[#057a55] font-bold tracking-wider">
          Herbal Magic <br /> 🌿 Say Goodbye to Chronic Illnesses and Infections — Treat Over 30 Conditions Naturally!  .
        </h1>
      </div>


    <section className="py-12 bg-gray-100 space-y-24">
      {/* First Carousel Block */}
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 px-4">
        <div className="w-full md:w-1/2">
          <Slider {...sliderSettings}>
            {illnessImages1.map((src, index) => (
              <div key={index}>
                <img
                  src={src}
                  alt={`Illness ${index + 1}`}
                  className="w-full max-h-[400px] object-cover rounded-xl"
                />
              </div>
            ))}
          </Slider>
        </div>
        <div className="w-full md:w-1/2  md:text-left">
        <div className="max-w-4xl mx-auto space-y-4 leading-relaxed">
        <h2 className="text-2xl md:text-3xl font-bold text-green-700">
          The Truth About Drug Resistance
        </h2>
        <p>
          Overused antibiotics for Staphylococcus aureus, gonorrhea, or vaginal infections now struggle to work due to self-medication, misuse, and bacterial evolution. If your symptoms linger despite treatments, you’re likely fighting a resistant strain.
        </p>
        <h3 className="text-xl md:text-2xl font-semibold text-red-600 mt-6">
          Are You Tired of Stubborn Staphylococcus Infections?
        </h3>
        <p>
          Discover the Herbal Cure Big Pharma Won’t Tell You About. Is Staphylococcus aureus or recurring staphylococcus infections ruining your life? Antibiotics and standard drugs for staphylococcus treatment often fail not because your infection is “incurable,” but because resistance has skyrocketed.
        </p>
        <h4 className="text-lg font-semibold text-purple-600 mt-6">
          Meaning of Staphylococcus Aureus
        </h4>
        <p>
          Staphylococcus aureus infection is a stubborn bacterial illness caused by the Staphylococcus aureus bacteria. It triggers painful skin boils, sepsis, or even life-threatening complications. While antibiotics are the go-to fix, drug-resistant strains now thrive due to overuse and self-medication leaving sufferers trapped in a cycle of failed treatments.
        </p>
      </div>
        </div>
      </div>

      {/* Second Carousel Block */}
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 px-4">
        <div className="w-full md:w-1/2">
          <Slider {...sliderSettings}>
            {illnessImages2.map((src, index) => (
              <div key={index}>
                <img
                  src={src}
                  alt={`Illness ${index + 4}`}
                  className="w-full max-h-[400px] object-cover rounded-xl"
                />
              </div>
            ))}
          </Slider>
        </div>
        <div className="w-full md:w-1/2 md:text-left">
        <div className="max-w-4xl mx-auto space-y-4 leading-relaxed">
        <h3 className="text-xl md:text-2xl font-semibold text-indigo-700">
          Causes of Staphylococcus: How It Spreads & Who’s at Risk
        </h3>
        <p>Staphylococcus aureus infection thrives through:</p>
        <ul className="list-inside space-y-2 leading-relaxed">
  <li>⚠️ Direct contact with infected skin or contaminated surfaces (towels, door handles).</li>
  <li>⚠️ Skin damage like cuts, bites, or wounds—open doors for bacteria.</li>
  <li>⚠️ Weak immunity, letting Staphylococcus aureus overpower defenses.</li>
  <li>⚠️ Unsanitary habits: Coughing, unwashed hands, or spoiled food.</li>
</ul>


        <p className="mt-4">Risk factors amplifying your vulnerability:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>➜ Chronic diseases (diabetes, cancer, eczema).</li>
          <li>➜ Invasive devices (catheters, artificial joints).</li>
          <li>➜ Lung disorders (cystic fibrosis) or recreational drug use.</li>
        </ul>

        <h3 className="text-xl md:text-2xl font-semibold text-emerald-700 mt-6">
          Are You Currently Struggling with Any Infection?
        </h3>
        <p>
          There’s hope with <span className="font-bold text-green-700">Bubulizer</span>
        </p>
        <p>
          Our herbal remedy tackles Staphylococcus aureus at its source, neutralizing bacteria and strengthening defenses. Stop blaming yourself, blame outdated antibiotics.
        </p>
        <ul className="list-disc list-inside space-y-2 mt-4">
          <li>✅ Permanently eradicates Staphylococcus aureus infections.</li>
          <li>✅ Replaces harsh antibiotics with zero side effects.</li>
          <li>✅ Stops recurrence by boosting your body’s defenses.</li>
        </ul>

        <p className="mt-4 font-semibold text-lg">
          Why keep wasting money on treatments that don’t work? Thousands have ditched ineffective drugs for staphylococcus treatment for this proven solution.
        </p>
      </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default IllnessesSection;