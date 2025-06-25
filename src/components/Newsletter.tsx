import React, { useState } from 'react';
import { Mail, ArrowRight } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center animate-slide-up">
          <div className="bg-white/5 backdrop-blur-sm p-2 rounded-full inline-flex items-center mb-8">
            <Mail className="w-6 h-6 text-white mr-2" />
            <span className="text-white font-medium">Blijf op de hoogte</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ontvang exclusieve tips en aanbiedingen
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 font-light leading-relaxed">
            Schrijf je in voor onze nieuwsbrief en krijg als eerste toegang tot nieuwe producten, 
            trainingstips en speciale kortingen.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Jouw e-mailadres"
                  className="w-full px-6 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all duration-200"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitted}
                className="bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitted ? (
                  'Bedankt!'
                ) : (
                  <>
                    Inschrijven
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </>
                )}
              </button>
            </div>
          </form>

          <p className="text-gray-400 text-sm mt-6 font-light">
            Geen spam, alleen waardevolle content. Je kunt je altijd uitschrijven.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;