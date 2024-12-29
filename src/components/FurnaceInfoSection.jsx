import React from 'react';

// Create the FurnaceInfoSection component
const FurnaceInfoSection = ({ sections, imageUrl, bottomText, moreText, topText }) => {
  return (
    <div className="bg-white">
      <div className="flex flex-col md:flex-row max-w-full mx-4 lg:mx-32 py-6 md:py-10">
        {/* Left Section for the Image */}
        <div className="w-full md:w-1/2 flex justify-center items-center mb-6 md:mb-0 md:pl-24">
          <img 
            src={imageUrl} 
            alt="Furnace"
            className="w-full h-auto object-cover rounded-lg md:max-w-md lg:max-w-lg"
          />
        </div>

        {/* Right Section for Text */}
        <div className="w-full md:w-1/2 p-4 md:p-6 lg:p-0">
          {/* Top text appears at the top */}
          {topText && (
            <h4 className="text-lg md:text-base text-gray-900 mb-2">{topText}</h4>
          )}
          
          {sections.map((section, index) => (
            <div key={index} className="mb-6">
              <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-2 text-gray-800">{section.title}</h2>
              {section.paragraphs.map((paragraph, idx) => (
                <h4 key={idx} className="mb-2 text-gray-700 text-sm md:text-base lg:text-base">{paragraph}</h4>
              ))}
            </div>
          ))}
          
          {/* More text appears right after sections */}
          {moreText && (
            <span className="block font-bold text-base md:text-base text-gray-900 mb-4 -mt-4">{moreText}</span>
          )}
          
          {/* Bottom text appears at the bottom */}
          {bottomText && (
            <h4 className="font-bold text-lg md:text-base text-gray-900 mt-6">{bottomText}</h4>
          )}
        </div>
      </div>
    </div>
  );
};

export default FurnaceInfoSection;


// import React from 'react';

// // Create the FurnaceInfoSection component
// const FurnaceInfoSection = ({ sections, imageUrl }) => {
//   return (
//     <div className='bg-white-100'>
//       <div className="flex flex-col md:flex-row max-w mx-60 py-4 md:py-8">
//         {/* Left Section for the Image */}
//         <div className="md:w-1/2 flex flex-col justify-center items-center">
//           <img 
//             src={imageUrl} 
//             alt="loading..." // Updated alt text
//             className="w-full h-32 md:h-max object-contain mb-4" // Adjusted height here
//           />
//         </div>
        
//         {/* Right Section for Text */}
//         <div className="md:w-1/2 p-4">
//           {sections.map((section, index) => (
//             <div key={index} className="mb-6">
//               <h2 className="text-xl font-bold mb-2">{section.title}</h2>
//               {section.paragraphs.map((paragraph, idx) => (
//                 <p key={idx} className="mb-2 text-gray-700">{paragraph}</p>
//               ))}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FurnaceInfoSection;


// #for 2 seperate images in case of just 1

// import React from 'react';

// // Create the FurnaceInfoSection component
// const FurnaceInfoSection = ({ sections, imageUrls }) => {
//   return (
//     <div className='bg-gray-100'>
//     <div className="flex flex-col md:flex-row max-w mx-60 py-4 md-8">
//       {/* Left Section for Images */}
//       <div className="md:w-1/2 flex flex-col justify-center items-center">
//         {imageUrls.map((imageUrl, index) => (
//           <img 
//             key={index} 
//             src={imageUrl} 
//             alt={`Image ${index + 1}`} 
//             className="w-full h-32 md:h-80 object-cover mb-4" // Adjusted height here
//           />
//         ))}
//       </div>
      
//       {/* Right Section for Text */}
//       <div className="md:w-1/2 p-4">
//         {sections.map((section, index) => (
//           <div key={index} className="mb-6">
//             <h2 className="text-xl font-bold mb-2">{section.title}</h2>
//             {section.paragraphs.map((paragraph, idx) => (
//               <p key={idx} className="mb-2 text-gray-700">{paragraph}</p>
//             ))}
//           </div>
//         ))}
//       </div>
//     </div>
//     </div>
//   );
// };

// export default FurnaceInfoSection;
