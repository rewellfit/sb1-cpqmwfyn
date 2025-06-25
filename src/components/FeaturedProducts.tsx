import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ShoppingBag } from 'lucide-react';

const FeaturedProducts = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const products = [
    {
      id: 1,
      name: 'Premium Massage Gun',
      category: 'Herstel',
      price: '€149,99',
      image: 'https://images.pexels.com/photos/6975474/pexels-photo-6975474.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
      description: 'Professionele percussie massage voor diep spierherstel'
    },
    {
      id: 2,
      name: 'Resistance Band Set',
      category: 'Fitness',
      price: '€39,99',
      image: 'https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
      description: 'Complete set weerstandsbanden voor full-body training'
    },
    {
      id: 3,
      name: 'Foam Roller Pro',
      category: 'Herstel',
      price: '€59,99',
      image: 'https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
      description: 'Hoogwaardige foam roller voor myofasciale release'
    },
    {
      id: 4,
      name: 'Adjustable Dumbbells',
      category: 'Fitness',
      price: '€299,99',
      image: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
      description: 'Verstelbare dumbbells voor efficiënte krachttraining'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(products.length / 2));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(products.length / 2)) % Math.ceil(products.length / 2));
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4">
            Uitgelichte producten
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
            Ontdek onze meest populaire producten voor training en herstel
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square relative overflow-hidden bg-rewellfit-gray">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                    {product.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-gray-600 transition-colors duration-200">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 font-light leading-relaxed">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-black">
                    {product.price}
                  </span>
                  <button className="bg-black text-white p-3 rounded-full hover:bg-gray-800 transition-colors duration-200 transform hover:scale-105">
                    <ShoppingBag className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="lg:hidden">
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: Math.ceil(products.length / 2) }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-4">
                    {products.slice(slideIndex * 2, slideIndex * 2 + 2).map((product) => (
                      <div
                        key={product.id}
                        className="bg-white rounded-2xl overflow-hidden shadow-sm"
                      >
                        <div className="aspect-square relative overflow-hidden bg-rewellfit-gray">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-4 left-4">
                            <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                              {product.category}
                            </span>
                          </div>
                        </div>
                        
                        <div className="p-6">
                          <h3 className="text-xl font-semibold text-black mb-2">
                            {product.name}
                          </h3>
                          <p className="text-gray-600 text-sm mb-4 font-light leading-relaxed">
                            {product.description}
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-2xl font-bold text-black">
                              {product.price}
                            </span>
                            <button className="bg-black text-white p-3 rounded-full hover:bg-gray-800 transition-colors duration-200">
                              <ShoppingBag className="w-5 h-5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <button
              onClick={prevSlide}
              className="p-3 bg-rewellfit-gray rounded-full hover:bg-gray-300 transition-colors duration-200"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <div className="flex space-x-2">
              {Array.from({ length: Math.ceil(products.length / 2) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                    currentSlide === index ? 'bg-black' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextSlide}
              className="p-3 bg-rewellfit-gray rounded-full hover:bg-gray-300 transition-colors duration-200"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;