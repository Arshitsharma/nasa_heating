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
              
              {/* Render all paragraphs except the last one */}
              {section.paragraphs.slice(0, -1).map((paragraph, idx) => (
                <p key={idx} className="mb-2 text-gray-700 text-sm md:text-base lg:text-base">{paragraph}</p>
              ))}

              {/* Render bullet points if available */}
              {section.bulletPoints && section.bulletPoints.length > 0 && (
                <ul className="list-disc pl-5 mt-2 text-gray-700 text-sm md:text-base lg:text-base">
                  {section.bulletPoints.map((point, idx) => (
                    <li key={idx} className="mb-1">{point}</li>
                  ))}
                </ul>
              )}

              {/* Render the last paragraph separately */}
              {section.paragraphs.length > 0 && (
                <p className="mt-2 text-gray-700 text-sm md:text-base lg:text-base">
                  {section.paragraphs[section.paragraphs.length - 1]}
                </p>
              )}
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
// const FurnaceInfoSection = ({ sections, imageUrl, bottomText, moreText, topText }) => {
//   return (
//     <div className="bg-white">
//       <div className="flex flex-col md:flex-row max-w-full mx-4 lg:mx-32 py-6 md:py-10">
//         {/* Left Section for the Image */}
//         <div className="w-full md:w-1/2 flex justify-center items-center mb-6 md:mb-0 md:pl-24">
//           <img 
//             src={imageUrl} 
//             alt="Furnace"
//             className="w-full h-auto object-cover rounded-lg md:max-w-md lg:max-w-lg"
//           />
//         </div>

//         {/* Right Section for Text */}
//         <div className="w-full md:w-1/2 p-4 md:p-6 lg:p-0">
//           {/* Top text appears at the top */}
//           {topText && (
//             <h4 className="text-lg md:text-base text-gray-900 mb-2">{topText}</h4>
//           )}
          
//           {sections.map((section, index) => (
//             <div key={index} className="mb-6">
//               <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-2 text-gray-800">{section.title}</h2>
//               {section.paragraphs.map((paragraph, idx) => (
//                 <h4 key={idx} className="mb-2 text-gray-700 text-sm md:text-base lg:text-base">{paragraph}</h4>
//               ))}
//             </div>
//           ))}
          
//           {/* More text appears right after sections */}
//           {moreText && (
//             <span className="block font-bold text-base md:text-base text-gray-900 mb-4 -mt-4">{moreText}</span>
//           )}
          
//           {/* Bottom text appears at the bottom */}
//           {bottomText && (
//             <h4 className="font-bold text-lg md:text-base text-gray-900 mt-6">{bottomText}</h4>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FurnaceInfoSection;
