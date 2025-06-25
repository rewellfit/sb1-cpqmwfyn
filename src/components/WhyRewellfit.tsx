import React from 'react';
import { Award, Truck, Users, Shield } from 'lucide-react';

const WhyRewellfit = () => {
  const features = [
    {
      icon: Award,
      title: 'Premium kwaliteit',
      description: 'Alleen de beste materialen en hoogste kwaliteitsstandaarden'
    },
    {
      icon: Truck,
      title: 'Snelle levering',
      description: 'Gratis verzending binnen 24 uur bij bestellingen boven €50'
    },
    {
      icon: Users,
      title: 'Expert ondersteuning',
      description: 'Persoonlijk advies van gecertificeerde fitness professionals'
    },
    {
      icon: Shield,
      title: 'Tevredenheidsgarantie',
      description: '30 dagen niet goed, geld terug garantie op alle producten'
    }
  ];

  return (
    <section className="py-20 bg-rewellfit-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4">
            Waarom Rewellfit?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
            Ontdek waarom duizenden sporters kiezen voor onze producten en service
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="text-center group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:shadow-lg transition-all duration-300 transform group-hover:-translate-y-2">
                <feature.icon className="w-8 h-8 text-black group-hover:scale-110 transition-transform duration-300" />
              </div>
              
              <h3 className="text-xl font-semibold text-black mb-3 group-hover:text-gray-600 transition-colors duration-200">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 font-light leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyRewellfit;