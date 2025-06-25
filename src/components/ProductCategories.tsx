import React from 'react';
import { Dumbbell, Heart } from 'lucide-react';

const ProductCategories = () => {
  const categories = [
    {
      title: 'Fitness',
      description: 'Premium trainingsapparatuur voor maximale prestaties',
      icon: Dumbbell,
      image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      link: '#fitness'
    },
    {
      title: 'Herstel',
      description: 'Innovatieve tools voor optimaal spierherstel',
      icon: Heart,
      image: 'https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      link: '#herstel'
    }
  ];

  return (
    <section className="py-20 bg-rewellfit-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4">
            Onze categorieën
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
            Kies uit onze zorgvuldig samengestelde collecties voor training en herstel
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {categories.map((category, index) => (
            <div
              key={category.title}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="aspect-w-16 aspect-h-12 relative overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-64 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              </div>
              
              <div className="p-8 lg:p-10">
                <div className="flex items-center mb-4">
                  <div className="bg-rewellfit-gray p-3 rounded-full mr-4 group-hover:bg-black group-hover:text-white transition-all duration-300">
                    <category.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-black">
                    {category.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 mb-6 font-light leading-relaxed">
                  {category.description}
                </p>
                
                <a
                  href={category.link}
                  className="inline-flex items-center text-black font-medium hover:text-gray-600 transition-colors duration-200 group-hover:translate-x-2 transform transition-transform duration-300"
                >
                  Bekijk collectie
                  <span className="ml-2">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;