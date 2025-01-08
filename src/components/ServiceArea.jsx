import React from 'react';
import serviceAreaMap from '../assets/icons/map-service-area.svg';

export const ServiceArea = () => {
  const cities = [
    'Mississauga', 'Rexdale', 'Oakville', 'Brampton', 'Burlington', 
    'Woodbridge', 'Milton', 'Markham', 'Cambridge', 'Scarboro', 
    'Guelph', 'Toronto'
  ];

  return (
    <div className="bg-stone-200 py-8 sm:py-10 px-3 sm:px-4">
      <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
        Our service area
      </h2>
      <p className="text-center text-sm sm:text-base mb-4 sm:mb-6">
        In the Greater Toronto Area (GTA) we service the following cities:
      </p>

      <div className="max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
        {/* Cities List */}
        <div className="flex flex-col items-center order-2 md:order-1">
          <ul className="grid grid-cols-2 md:grid-cols-1 gap-x-8 gap-y-1 sm:gap-y-2 text-sm sm:text-base list-disc px-4">
            {cities.map((city, index) => (
              <li key={index} className="ml-4">{city}</li>
            ))}
          </ul>
        </div>

        {/* Map Image */}
        <div className="flex justify-center order-1 md:order-2 mb-6 md:mb-0">
          <img 
            src={serviceAreaMap} 
            alt="GTA Service Area Map" 
            className="max-w-full h-auto w-[320px] sm:w-[440px] map transition-transform duration-300 transform scale-105 hover:scale-110"
          />
        </div>
      </div>
    </div>
  );
}; 