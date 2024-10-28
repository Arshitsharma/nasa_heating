import React from 'react';
import provenProductsIcon from '../assets/icons/icon-air-proven products.svg';
import bestFitIcon from '../assets/icons/icon-buying advice.svg';
import competitivePricesIcon from '../assets/icons/icon-competitive pricing.svg';
import rapidResponseIcon from '../assets/icons/icon-rapid response.svg';
import technicianIcon from '../assets/icons/icon-trained technicians.svg'
import customerSatisfactionIcon from '../assets/icons/icon-customer-satisfaction.svg';

export const Section3 = () => {
  const features = [
    {
      icon: provenProductsIcon,
      title: 'We provide proven products',
      description: 'from all reputed brands',
    },
    {
      icon: bestFitIcon,
      title: 'We help you find the best-fit',
      description: 'products suited for your needs and budget',
    },
    {
      icon: competitivePricesIcon,
      title: 'Competitive prices',
      description: 'for equipment purchase',
    },
    {
      icon: rapidResponseIcon,
      title: 'Rapid Response',
      description: 'for Emergency breakdowns',
    },
    {
      icon: technicianIcon,
      title: 'Factory trained and experienced technicians',
      description: 'on call', 
    },
    {
      icon: customerSatisfactionIcon,
      title: '100% Customer Satisfaction',
      description: 'is our No. 1 priority',
    },
  ];

  return (
    <div className="bg-stone-200 py-10 mt-12">
      {/* Header */}
      <div className="flex text-4xl font-bold justify-center mt-6">
        Why Choose NASA Heating?
      </div>
      <div className="flex justify-center text-xl font-medium mx-60 mt-3 text-center">
        We offer a full range of Heating, Ventilation, Air-conditioning and Indoor air quality solutions that work together to make your home healthy, comfortable, safe and energy efficient. From furnaces, air-conditioners, whole-home air cleaners and humidity control to ventilation and zoned temperature solutions, we can help you maintain an optimum indoor environment for your home and family.
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-6 mt-10 mx-auto max-w-screen-lg text-center">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center pt-4 p-2 bg-white shadow-lg">
            <img src={feature.icon} alt={feature.title} className="text-red-600 text-5xl mb-4 h-16 w-16" />
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Footer Section */}
      <div className="text-center text-lg mt-10 mx-60">
        <p>
          We provide great customer service and rapid response to service calls for repairs of heating and air-conditioning equipment.
        </p>
        <p>
         Our licensed, experienced, and factory trained technicians will always find the best solution to any problem you may have with your existing HVAC system, and get your system up and running as quickly and efficiently as possible.
        </p>
      </div>
    </div>
  );
};
