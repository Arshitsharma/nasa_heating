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
    items: ['Furnaces', 'Water Heaters', 'Tankless Water Heaters', 'Boilers for Hydronic Heating'],
  },
  {
    title: 'Air-conditioning',
    icon: SnowflakeIcon,
    items: ['Air-conditioners','Central Air Conditioners' , 'Ductless Air-conditioners', 'Rooftop Units'],
  },
  {
    title: 'Indoor Air Quality',
    icon: WaterDropIcon,
    items: [
      'Central Humidifiers',
      'Air Cleaners & Filters',
      'Ventilation & Fresh Air Units',
      'Thermostats - WiFi, Digital',
    ],
  },
];

export const Section2 = React.memo(() => {
  return (
    <div>
      {/* Section Header */}
      <div className="flex flex-col items-center text-3xl md:text-4xl font-bold mt-6 px-4 sm:px-6 lg:px-0 max-w-6xl mx-auto">
        <h1>How can we help you?</h1>
        <h3 className="text-base md:text-xl font-normal mx-auto mt-3 text-center px-4 sm:px-6 lg:px-8">
          Prompt, reliable and helpful. Our service engineers always have a solution for any problem that you may have with your
          heating, air-conditioning, hot water system, or its components.
        </h3>
      </div>

      <div className="max-w-screen-lg mx-auto px-4 sm:px-8 lg:px-16">
        {/* Button Group */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 justify-center mt-6">
          {services.map((service, index) => (
            <button
              key={index}
              className="bg-red-600 text-white py-2 md:py-3 px-4 md:px-6 font-semibold text-sm md:text-lg cursor-default"
              aria-label={`Learn more about ${service.title}`}
            >
              {service.title}
            </button>
          ))}
        </div>

        {/* Services Cards */}
        
        {/*         
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mt-8">
          {serviceCards.map((card, index) => (
            <div
              key={index}
              // className="flex flex-col items-center border p-4 md:p-6 text-center shadow-lg rounded-md"
              className="flex flex-col items-center border p-4 md:p-6 text-center shadow-lg rounded-md transition-colors duration-300 hover:bg-red-100"
              aria-label={`Details about ${card.title}`}
            >
              <img src={card.icon} alt={`${card.title} icon`} className="w-12 h-12 md:w-16 md:h-16 mb-4" />
              <h5 className="text-xl md:text-2xl font-bold mb-2">{card.title}</h5>
              <ul className="list-disc pl-4 text-left text-sm md:text-base space-y-1 mt-2">
                {card.items.map((item, itemIndex) => (
                  <li className='text-sm' key={itemIndex}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div> */}

        {/* Services Cards */}

        <div className="mt-6 overflow-x-auto sm:overflow-visible">
          <div className="flex sm:grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {serviceCards.map((card, index) => (
              <div
                key={index}
                // className="flex-shrink-0 sm:flex-shrink md:flex-shrink-0 flex flex-col items-center border p-4 md:p-6 text-center shadow-lg shadow-neutral-400 transition-colors duration-300 hover:bg-red-100 w-64 sm:w-auto select-none"
                className="flex-shrink-0 sm:flex-shrink md:flex-shrink-0 flex flex-col items-center border p-4 md:p-6 text-center shadow-lg shadow-neutral-400 transition-colors duration-300"
                aria-label={`Details about ${card.title}`}
              >
                <img src={card.icon} alt={`${card.title} icon`} className="w-12 h-12 md:w-16 md:h-16 mb-4" />
                <h5 className="text-xl md:text-2xl font-bold mb-2">{card.title}</h5>
                <ul className="list-disc pl-4 text-left text-sm md:text-base space-y-1 mt-2">
                  {card.items.map((item, itemIndex) => (
                    <li className="text-sm" key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
});

// import React from 'react';
// // Import SVGs
// import SunIcon from '../assets/icons/icon-heating.svg';
// import SnowflakeIcon from '../assets/icons/icon-air-conditioning.svg';
// import WaterDropIcon from '../assets/icons/icon-indoor-air-quality.svg';

// const services = [
//   { title: 'Emergency Repairs' },
//   { title: 'Installation' },
//   { title: 'Servicing' },
//   { title: 'Maintenance' },
//   { title: 'Purchase' },
//   { title: 'Renting' },
// ];

// const serviceCards = [
//   {
//     title: 'Heating',
//     icon: SunIcon,
//     items: ['Furnaces', 'Water Heaters', 'TANKLESS Water Heaters', 'Boilers for Hydronic Heating'],
//   },
//   {
//     title: 'Air-conditioning',
//     icon: SnowflakeIcon,
//     items: ['Air-conditioners', 'Ductless Air-conditioners', 'Rooftop Units'],
//   },
//   {
//     title: 'Indoor Air Quality',
//     icon: WaterDropIcon,
//     items: [
//       'Central Humidifiers',
//       'Air Cleaners & Filters',
//       'Ventilation & Fresh Air Units',
//       'Thermostats - WiFi, Standard & Digital',
//     ],
//   },
// ];
// export const Section2 = () => {
//   return (
//     <>
//       {/* Section Header */}
//       <div className="flex flex-col items-center text-3xl md:text-4xl font-bold mt-6 px-4 sm:px-6 lg:px-0 max-w-6xl mx-auto">
//         <h1>How can we help you?</h1>
//         <h3 className="text-base md:text-xl font-normal mx-auto mt-3 text-center px-4 sm:px-6 lg:px-8">
//           Prompt, reliable and helpful. Our engineers always have a solution 
//           for any problem that you may have with your heating, air conditioning, hot water system or its components.
//         </h3>
//       </div>

//       <div className="max-w-screen-lg mx-auto px-4 sm:px-8 lg:px-16">
//         {/* Button Group */}
//         <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 justify-center mt-6">
//           {services.map((service, index) => (
//             <button
//               key={index}
//               className="bg-red-600 text-white py-2 md:py-3 px-4 md:px-6 rounded font-semibold text-sm md:text-lg hover:bg-red-700 transition duration-300"
//             >
//               {service.title}
//             </button>
//           ))}
//         </div>

//         {/* Services Cards */}
//         {/* <div className="flex gap-4 md:gap-6 mt-8 overflow-x-auto px-4 md:px-0 snap-x snap-mandatory">
//           {serviceCards.map((card, index) => (
//             <div
//               key={index}
//               className="min-w-[85%] md:min-w-0 md:w-1/3 border p-4 md:p-6 text-center shadow-lg rounded-md snap-center"
//             >
//               <img src={card.icon} alt={card.title} className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4" />
//               <h5 className="text-xl md:text-xl font-bold mb-2">{card.title}</h5>
//               <h6 className="text-left text-sm md:text-base">
//                 {card.items.map((item, itemIndex) => (
//                   <li key={itemIndex}> {item}</li>
//                 ))}
//               </h6>
//             </div>
//           ))}
//         </div> */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mt-8">
//         {serviceCards.map((card, index) => (
//           <div
//             key={index}
//             className="flex flex-col items-center border p-4 md:p-6 text-center shadow-lg rounded-md"
//           >
//             <img src={card.icon} alt={card.title} className="w-12 h-12 md:w-16 md:h-16 mb-4" />
//             <h5 className="text-xl md:text-2xl font-bold mb-2">{card.title}</h5>
//             {/* <ul className="text-left text-sm md:text-base space-y-1 mt-2">
//               {card.items.map((item, itemIndex) => (
//                 <li key={itemIndex} className="leading-relaxed">• {item}</li>
//               ))}
//             </ul> */}
//             <ul className="list-none pl-4 text-left text-sm md:text-base space-y-1 mt-2">
//               {card.items.map((item, itemIndex) => (
//                 <li key={itemIndex} className="flex">
//                   <span className="mr-1">•</span>
//                   <span className="indent-[0rem] pl-0">{item}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//       </div>
//     </>
//   );
// };
