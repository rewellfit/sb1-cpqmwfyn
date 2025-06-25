import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductCategories from './components/ProductCategories';
import FeaturedProducts from './components/FeaturedProducts';
import WhyRewellfit from './components/WhyRewellfit';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App font-inter">
      <Header />
      <Hero />
      <ProductCategories />
      <FeaturedProducts />
      <WhyRewellfit />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;