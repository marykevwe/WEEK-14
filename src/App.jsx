import React from 'react';
import Header from './components/Header';
import IllnessesSection from './components/IllnessSection';
import ProductDetailsSection from './components/ProductDetailsSection';
import TestimonialSection from './components/TestimonialSection';
import OrderFormSection from './components/OrderFormSection';
import Footer from './Components/Footer';
import DiseasesSection from './components/DiseasesSection';

function App() {
  return (
    <div>
      <Header/>
      <IllnessesSection/>
      <DiseasesSection/>
      <ProductDetailsSection/>
      <TestimonialSection/>
      <OrderFormSection/>
      <Footer/>
    </div>
  );
}

export default App;
