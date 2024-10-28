import React from 'react';

export const SectionWithOverlay = ({ imageUrl, highlightText, heading, description, buttonText, buttonLink }) => {
  return (
    <div className="relative w-full h-[470px]">
      {/* Background Image Covering Full Width and Height */}
      <img
        src={imageUrl}
        alt="Background"
        className="w-full h-full object-cover"
        loading="lazy"
      />

      {/* Overlay Box Positioned at the Bottom */}
      <div className="absolute bottom-0 left-0 w-full flex justify-start">
        <div className="bg-black bg-opacity-70 text-white p-8 max-w-sm w-full mx-[60] md:mx-[60px] lg:mx-60">
          {/* Conditionally render the highlightText if it exists */}
          {highlightText && (
            <div className="w-full flex justify-start">
              <h2 className="text-red-600 font-bold mb-2 text-2xl">
                {highlightText}
              </h2>
            </div>
          )}

          {/* Horizontal Red Line */}
          <div className="w-1/3 h-1 bg-red-600 mb-4"></div>

          <h1 className="text-3xl font-bold mb-4">{heading}</h1>
          <p className="mb-4">{description}</p>
          <a
            href={buttonLink}
            className="bg-red-600 text-white py-2 px-4 hover:bg-red-700"
          >
            {buttonText}
          </a>
        </div>
      </div>
    </div>
  );
};

// Additional Styles for Responsive Design
const styles = `
@media (max-width: 768px) {
  .SectionWithOverlay {
    height: auto;
  }
  
  .bg-black {
    padding: 4px; /* Reduced padding on mobile */
    margin: 0 16px; /* Adjust margins for mobile */
    max-width: none; /* Full width on mobile */
  }

  h1 {
    font-size: 1.5rem; /* Adjust heading size */
  }
  
  h2 {
    font-size: 1.25rem; /* Adjust highlight text size */
  }
  
  p {
    font-size: 0.875rem; /* Adjust paragraph text size */
  }

  .w-1/3 {
    width: 100%; /* Full width for the red line */
  }
}
`;

export default SectionWithOverlay;
