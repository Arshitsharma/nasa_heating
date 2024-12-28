import React from 'react';

export const HomeOverlay = ({ imageUrl, highlightText, heading, description, buttonText, buttonLink }) => {
  return (
    <div className="relative w-full h-[600px] md:h-[600px]"> {/* Set container height */}
      {/* Background Image Covering Full Width and Height */}
      <img
        src={imageUrl}
        alt={heading ? heading : "Decorative background"} // Updated alt text
        className="w-full h-full object-cover md:object-center" // Ensures full coverage without spaces
        loading="lazy"
      />

      {/* Text Overlay with Accessibility Enhancements */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-start">
        <div className="bg-black bg-opacity-60 text-white p-8 ml-4 sm:ml-8 md:ml-60 max-w-sm">
          {highlightText && (
            <h2 className="text-red-600 font-bold mb-2 text-2xl">
              {highlightText}
            </h2>
          )}
          
          <div className="w-1/3 h-1 bg-red-600 mb-4"></div>
          
          <h1 className="text-3xl font-bold mb-4">{heading}</h1>
          <h3 className="text-xl mb-4">{description}</h3>
          <a
            href={buttonLink}
            className="bg-red-600 text-white py-2 px-4 hover:bg-red-700"
            aria-label={buttonText}
          >
            {buttonText}
          </a>
        </div>
      </div>
    </div>
  );
};


// import React from 'react';

// export const HomeOverlay = ({ imageUrl, highlightText, heading, description, buttonText, buttonLink }) => {
//   return (
//     <div className="relative w-full h-[600px]"> {/* Set container height */}
//       {/* Background Image Covering Full Width and Height */}
//       <img
//         src={imageUrl}
//         alt={heading ? heading : "Decorative background"} // Updated alt text
//         className="w-full h-full object-cover" // Ensures full coverage without spaces
//         loading="lazy"
//       />

//       {/* Text Overlay with Accessibility Enhancements */}
//       <div className="absolute top-0 left-0 w-full h-full flex items-center justify-start">
//         <div className="bg-black bg-opacity-60 text-white p-8 ml-60 max-w-sm">
//           {highlightText && (
//             <h2 className="text-red-600 font-bold mb-2 text-2xl">
//               {highlightText}
//             </h2>
//           )}
          
//           <div className="w-1/3 h-1 bg-red-600 mb-4"></div>
          
//           <h1 className="text-3xl font-bold mb-4">{heading}</h1>
//           <p className="mb-4">{description}</p>
//           <a
//             href={buttonLink}
//             className="bg-red-600 text-white py-2 px-4 hover:bg-red-700"
//             aria-label={buttonText}
//           >
//             {buttonText}
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };
