import React from 'react';
// Import SVGs
import SunIcon from '../assets/icons/icon-heating.svg';
import SnowflakeIcon from '../assets/icons/icon-air-conditioning.svg';
import WaterDropIcon from '../assets/icons/icon-indoor-air-quality.svg';

const services = [
  { title: 'Emergency Repairs' },
  { title: 'Installation' },
  { title: 'Servicing' },
  { title: 'Maintenance' },
  { title: 'Purchase' },
  { title: 'Renting' },
];

const serviceCards = [
  {
    title: 'Heating',
    icon: SunIcon,
    items: ['Furnaces', 'Water Heaters', 'TANKLESS Water Heaters', 'Boilers for Hydronic Heating'],
  },
  {
    title: 'Air-conditioning',
    icon: SnowflakeIcon,
    items: ['Air-conditioners', 'Ductless Air-conditioners', 'Rooftop Units'],
  },
  {
    title: 'Indoor Air Quality',
    icon: WaterDropIcon,
    items: [
      'Central Humidifiers',
      'Air Cleaners & Filters',
      'Ventilation & Fresh Air Units',
      'Thermostats - WiFi, Standard & Digital',
    ],
  },
];

export const Section2 = () => {
  return (
  <>
    {/* Section Header */}
      <div className="flex flex-col items-center text-4xl font-bold mt-6">
        <h1>How can we help you?</h1>
        <p className="text-xl font-normal mx-auto mt-3 px-60 text-center">
        Prompt, reliable and helpful. Our engineers always have a solution 
        for any problem that you may have with your heating, air
        conditioning, hot water system or its components.
        </p>
      </div>

        <div className="max-w-screen-lg mx-auto px-6 sm:px-12 lg:px-24">
      {/* Button Group */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-6 justify-center mt-6">
        {services.map((service, index) => (
          <button
            key={index}
            className="bg-red-600 text-white py-3 px-6 rounded font-semibold text-lg hover:bg-red-700 transition duration-300"
          >
            {service.title}
          </button>
        ))}
      </div>

      {/* Services Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {serviceCards.map((card, index) => (
          <div key={index} className="border p-6 text-center shadow-lg">
            <img src={card.icon} alt={card.title} className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
            <ul className="text-left">
              {card.items.map((item, itemIndex) => (
                <li key={itemIndex}>• {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </>
  );
};
