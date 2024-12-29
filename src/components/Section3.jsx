import React from 'react';
import provenProductsIcon from '../assets/icons/icon-air-proven products.svg';
import bestFitIcon from '../assets/icons/icon-buying advice.svg';
import competitivePricesIcon from '../assets/icons/icon-competitive pricing.svg';
import rapidResponseIcon from '../assets/icons/icon-rapid response.svg';
import technicianIcon from '../assets/icons/icon-trained technicians.svg';
import customerSatisfactionIcon from '../assets/icons/icon-customer-satisfaction.svg';

export const Section3 = () => {
  const features = [
    {
      icon: provenProductsIcon,
      title: 'We provide proven products from all reputed brands',
      // description: 'from all reputed brands',
    },
    {
      icon: bestFitIcon,
      title: 'The best-fit products suited for your needs and budget',
      // description: 'products suited for your needs and budget',
    },
    {
      icon: competitivePricesIcon,
      title: 'Competitive prices for equipment purchase & repairs',
      // description: 'for equipment purchase',
    },
    {
      icon: rapidResponseIcon,
      title: 'Rapid Response',
      description: 'for Emergency breakdowns',
    },
    {
      icon: technicianIcon,
      title: 'Factory trained and experienced technicians on call',
      // description: 'on call',
    },
    {
      icon: customerSatisfactionIcon,
      title: '100% Customer Satisfaction is our No. 1 priority',
      // description: 'is our No. 1 priority',
    },
  ];

  return (
    <div className="bg-stone-200 py-10 mt-12">
      {/* Header */}
      <div className="text-center">
        {/* Main Heading */}
        <h1 className="text-3xl md:text-4xl font-bold">
          Why Choose NASA Heating?
        </h1>
        
        {/* Subheading Text */}
        <h3 className="text-base md:text-xl font-normal mt-2 md:mt-3 mx-4 sm:mx-10 md:mx-60 text-center">
        We offer a full range of Heating, Ventilation, Air conditioning and Indoor air quality solutions. From furnaces, air conditioners,
        water heaters and humidifiers to whole-home air cleaners and ventilation systems, we can help you maintain an optimum indoor
        environment for your home and family.
        </h3>
      </div>

      {/* Features Section */}
      <div className="mt-10 mx-auto max-w-screen-lg px-4">
        <div className="flex md:grid md:grid-cols-3 lg:grid-cols-6 gap-4 overflow-x-auto md:overflow-visible pb-4 md:pb-0">
          {features.map((feature, index) => (
            <div
              key={index}
              className="select-none flex-shrink-0 flex flex-col items-center pt-4 p-2 bg-white shadow-lg shadow-neutral-400 w-[250px] sm:w-[280px] md:w-full transition-colors duration-300 hover:bg-red-100"
            >
              <img src={feature.icon} alt={feature.title} className="text-red-600 text-5xl mb-1 h-16 w-16" />
              <h6 className='text-sm text-center'>{feature.title}</h6>
              <h6 className='text-sm text-center'>{feature.description}</h6>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Section */}

      {/* <div className="text-center mt-10 mx-4 sm:mx-10 md:mx-60 text-base md:text-lg">
        <p className="mb-4">
          We provide great customer service and rapid response to service calls for repairs of heating and air-conditioning equipment.
        </p>
        <p>
          Our licensed, experienced, and factory-trained technicians will always find the best solution to any problem you may have with your existing HVAC system, and get your system up and running as quickly and efficiently as possible.
        </p>
      </div> */}
    </div>
  );
};


// import React from 'react';
// import provenProductsIcon from '../assets/icons/icon-air-proven products.svg';
// import bestFitIcon from '../assets/icons/icon-buying advice.svg';
// import competitivePricesIcon from '../assets/icons/icon-competitive pricing.svg';
// import rapidResponseIcon from '../assets/icons/icon-rapid response.svg';
// import technicianIcon from '../assets/icons/icon-trained technicians.svg'
// import customerSatisfactionIcon from '../assets/icons/icon-customer-satisfaction.svg';

// export const Section3 = () => {
//   const features = [
//     {
//       icon: provenProductsIcon,
//       title: 'We provide proven products',
//       description: 'from all reputed brands',
//     },
//     {
//       icon: bestFitIcon,
//       title: 'We help you find the best-fit',
//       description: 'products suited for your needs and budget',
//     },
//     {
//       icon: competitivePricesIcon,
//       title: 'Competitive prices',
//       description: 'for equipment purchase',
//     },
//     {
//       icon: rapidResponseIcon,
//       title: 'Rapid Response',
//       description: 'for Emergency breakdowns',
//     },
//     {
//       icon: technicianIcon,
//       title: 'Factory trained and experienced technicians',
//       description: 'on call', 
//     },
//     {
//       icon: customerSatisfactionIcon,
//       title: '100% Customer Satisfaction',
//       description: 'is our No. 1 priority',
//     },
//   ];

//   return (
//     <div className="bg-stone-200 py-10 mt-12">
//       {/* Header */}
//       <div className="flex text-4xl font-bold justify-center mt-6">
//         Why Choose NASA Heating?
//       </div>
//       <div className="flex justify-center text-xl font-medium mx-60 mt-3 text-center">
//         We offer a full range of Heating, Ventilation, Air-conditioning and Indoor air quality solutions that work together to make your home healthy, comfortable, safe and energy efficient. From furnaces, air-conditioners, whole-home air cleaners and humidity control to ventilation and zoned temperature solutions, we can help you maintain an optimum indoor environment for your home and family.
//       </div>

//       {/* Features Section */}
//       <div className="grid grid-cols-1 md:grid-cols-6 gap-6 mt-10 mx-auto max-w-screen-lg text-center">
//         {features.map((feature, index) => (
//           <div key={index} className="flex flex-col items-center pt-4 p-2 bg-white shadow-lg">
//             <img src={feature.icon} alt={feature.title} className="text-red-600 text-5xl mb-4 h-16 w-16" />
//             <h3>{feature.title}</h3>
//             <p>{feature.description}</p>
//           </div>
//         ))}
//       </div>

//       {/* Footer Section */}
//       <div className="text-center text-lg mt-10 mx-60">
//         <p>
//           We provide great customer service and rapid response to service calls for repairs of heating and air-conditioning equipment.
//         </p>
//         <p>
//          Our licensed, experienced, and factory trained technicians will always find the best solution to any problem you may have with your existing HVAC system, and get your system up and running as quickly and efficiently as possible.
//         </p>
//       </div>
//     </div>
//   );
// };
