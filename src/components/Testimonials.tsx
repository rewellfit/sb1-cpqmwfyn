import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah van der Berg',
      role: 'Personal Trainer',
      rating: 5,
      text: 'De massage gun van Rewellfit heeft mijn herstelroutine compleet veranderd. Mijn klanten zien direct resultaat en ik kan ze nu nog beter helpen.',
      image: 'https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      id: 2,
      name: 'Mark Jansen',
      role: 'Crossfit Atleet',
      rating: 5,
      text: 'Eindelijk producten die echt werken! De kwaliteit is uitstekend en de resultaten spreken voor zich. Rewellfit is nu mijn go-to merk.',
      image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      id: 3,
      name: 'Lisa Vermeulen',
      role: 'Yoga Instructeur',
      rating: 5,
      text: 'De foam roller is perfect voor mijn lessen. Mijn studenten zijn enthousiast over de kwaliteit en het comfort tijdens gebruik.',
      image: 'https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4">
            Wat onze klanten zeggen
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
            Lees de ervaringen van sporters die hun doelen hebben bereikt met Rewellfit
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-rewellfit-gray rounded-3xl p-8 lg:p-12 animate-slide-up">
            <div className="text-center">
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-xl lg:text-2xl text-gray-700 mb-8 font-light leading-relaxed italic">
                "{testimonials[currentTestimonial].text}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-center">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div className="text-left">
                  <div className="font-semibold text-black text-lg">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-gray-600 font-light">
                    {testimonials[currentTestimonial].role}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center mt-8 space-x-4">
              <button
                onClick={prevTestimonial}
                className="p-3 bg-white rounded-full hover:bg-gray-100 transition-colors duration-200 shadow-sm"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                      currentTestimonial === index ? 'bg-black' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextTestimonial}
                className="p-3 bg-white rounded-full hover:bg-gray-100 transition-colors duration-200 shadow-sm"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;