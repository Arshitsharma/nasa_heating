import React from 'react';

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center bg-white shadow-lg p-4 sm:p-6 md:p-8 lg:p-2 my-2 text-center">
      <img 
        src={icon} 
        alt={title} 
        className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 mb-4"
      />
      <h3 className="text-gray-800 font-bold text-base sm:text-lg md:text-xl lg:text-2xl mb-2">
        {title}
      </h3>
      <p className="text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;



// ServiceCard.js

// import React from 'react';

// const ServiceCard = ({ icon, title, description }) => {
//   return (
//     <div className="flex flex-col items-center bg-white shadow-lg p-4 my-2 text-center">
//       <img src={icon} alt={title} className="w-auto h-16 mb-2" />
//       <h3 className="text-black-600 font-bold text-lg mb-2">{title}</h3>
//       <p className="text-gray-700">{description}</p>
//     </div>
//   );
// };

// export default ServiceCard;
