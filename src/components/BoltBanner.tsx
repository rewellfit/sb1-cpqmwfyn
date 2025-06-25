import React from 'react';
import { ArrowRight, Zap, Wind } from 'lucide-react';

const BoltBanner = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Electric mobility lifestyle"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
      </div>

      {/* Animated Elements */}
      <div className="absolute top-20 left-10 animate-pulse">
        <Zap className="w-8 h-8 text-yellow-400 opacity-70" />
      </div>
      <div className="absolute top-40 right-20 animate-bounce">
        <Wind className="w-6 h-6 text-lime-400 opacity-60" />
      </div>
      <div className="absolute bottom-32 left-20 animate-pulse">
        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center min-h-screen">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            {/* Brand Logo */}
            <div className="flex items-center mb-8 group">
              <div className="bg-yellow-400 p-3 rounded-xl mr-4 transform group-hover:rotate-12 transition-transform duration-300">
                <Zap className="w-8 h-8 text-black" />
              </div>
              <span className="text-2xl font-bold text-white tracking-wide">BOLT</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight">
              <span className="block transform hover:scale-105 transition-transform duration-500">
                Snel.
              </span>
              <span className="block text-yellow-400 transform hover:scale-105 transition-transform duration-500 delay-100">
                Stijlvol.
              </span>
              <span className="block text-lime-400 transform hover:scale-105 transition-transform duration-500 delay-200">
                Elektrisch.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl leading-relaxed font-light">
              Ervaar de vrijheid van elektrische mobiliteit met onze nieuwste steps en e-bikes. 
              <span className="text-yellow-400 font-medium"> Duurzaam, krachtig</span> en gemaakt voor de stad.
            </p>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <button className="group relative px-8 py-4 bg-yellow-400 text-black font-bold text-lg rounded-xl hover:bg-yellow-300 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-yellow-400/25 overflow-hidden">
                <span className="relative z-10 flex items-center">
                  Bekijk modellen
                  <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-lime-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <button className="px-8 py-4 border-2 border-lime-400 text-lime-400 font-bold text-lg rounded-xl hover:bg-lime-400 hover:text-black transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-lime-400/25">
                Meer info
              </button>
            </div>

            {/* Stats/Features */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="text-3xl font-bold text-yellow-400 mb-2 group-hover:scale-110 transition-transform duration-300">50km</div>
                <div className="text-gray-400 text-sm uppercase tracking-wide">Bereik</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl font-bold text-lime-400 mb-2 group-hover:scale-110 transition-transform duration-300">25km/h</div>
                <div className="text-gray-400 text-sm uppercase tracking-wide">Top Snelheid</div>
              </div>
              <div className="text-center group col-span-2 md:col-span-1">
                <div className="text-3xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">3h</div>
                <div className="text-gray-400 text-sm uppercase tracking-wide">Oplaadtijd</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/80 to-transparent"></div>
      
      {/* Animated Lines */}
      <div className="absolute top-1/2 right-0 w-64 h-px bg-gradient-to-l from-yellow-400 to-transparent opacity-50 animate-pulse"></div>
      <div className="absolute top-1/3 right-10 w-32 h-px bg-gradient-to-l from-lime-400 to-transparent opacity-30 animate-pulse delay-1000"></div>
    </div>
  );
};

export default BoltBanner;