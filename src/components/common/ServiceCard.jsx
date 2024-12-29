import React from 'react';

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center bg-white shadow-lg p-4 sm:p-6 md:p-8 lg:p-2 my-2 text-center h-[180px] sm:h-[220px] hover:bg-red-50 transition-colors duration-300">
      <div className="flex items-center justify-center">
        <img 
          src={icon} 
          alt={title} 
          className="h-16 object-contain"
        />
      </div>
      <h5 className="text-gray-800 font-bold text-base sm:text-lg md:text-xl lg:text-lg mb-2 mt-4">
        {title}
      </h5>
      <h6 className="font-medium text-gray-800 text-sm">
        {description}
      </h6>
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
