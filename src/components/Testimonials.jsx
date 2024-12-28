import React from "react";
import googleLogo from '../assets/icons/logo-google.svg';
import homestarsLogo from '../assets/icons/logo-homestars.svg';
import trustedprosLogo from '../assets/icons/logo-trustedpros.svg';

export const Testimonials = () => {
  return (
    <div className="py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold mb-4">Red Tags</h2>
        <p className="text-center mb-8">Find out what our customers have to say about us.</p>
        
        <div className="overflow-x-auto md:overflow-visible -mx-4 sm:mx-0 py-4">
          <div className="flex md:grid md:grid-cols-3 gap-8 min-w-min px-4 sm:px-0">
            <div className="flex-shrink-0 w-72 md:w-auto flex flex-col items-center transition-transform duration-300 hover:scale-105 z-10">
              <img src={googleLogo} alt="Google" className="h-16 mb-4 transition-transform duration-300 hover:scale-110" />
              <p className="text-center">Rating</p>
              <p className="text-2xl font-bold mb-8">4.1/5</p>
              <button className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700" 
                onClick={() => window.open('https://www.google.com/search?q=nasa+heating+and+air+conditioning+reviews', '_blank')}>
                Read Reviews
              </button>
            </div>

            <div className="flex-shrink-0 w-72 md:w-auto flex flex-col items-center transition-transform duration-300 hover:scale-105 z-10">
              <img src={homestarsLogo} alt="HomeStars" className="h-16 mb-4 transition-transform duration-300 hover:scale-110" />
              <p className="text-center">Rating</p>
              <p className="text-2xl font-bold mb-8">8.9/10</p>
              <button className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700"
                onClick={() => window.open('https://homestars.com/companies/217628-nasa-heating-air-conditioning-services-ltd', '_blank')}>
                Read Reviews
              </button>
            </div>

            <div className="flex-shrink-0 w-72 md:w-auto flex flex-col items-center transition-transform duration-300 hover:scale-105 z-10">
              <img src={trustedprosLogo} alt="TrustedPros" className="h-16 mb-4 transition-transform duration-300 hover:scale-110" />
              <p className="text-center">Rating</p>
              <p className="text-2xl font-bold mb-8">4.8/5</p>
              <button className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700"
                onClick={() => window.open('https://trustedpros.ca/company/nasa-heating-air-conditioning-services-ltd', '_blank')}>
                Read Reviews
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// export const Testimonials = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     arrows: true,
//     nextArrow: <SampleNextArrow />,
//     prevArrow: <SamplePrevArrow />,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <div className="py-8">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-center text-3xl font-bold mb-8">Customer Testimonials</h2>
//         <Slider {...settings}>
//           {testimonials.map((testimonial, index) => (
//             <div key={index} className="p-4">
//               <div className="bg-white p-6 shadow-lg rounded-lg text-center min-h-[200px] flex flex-col justify-between">
//                 <div className="text-yellow-500 mb-2">
//                   <span>⭐⭐⭐⭐⭐</span>
//                 </div>
//                 <p>{testimonial.quote}</p>
//                 <p className="mt-4 font-bold">{testimonial.author}</p>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </div>
//   );
// };

// const testimonials = [
//   {
//     quote: "Jairam from NASA was very helpful and understanding. Good Job Done!",
//     author: "Karen Singer",
//   },
//   {
//     quote: "NASA people were very prompt when our heating went down.",
//     author: "Paul Senna",
//   },
//   {
//     quote: "Great service and professional staff.",
//     author: "John Doe",
//   },
//   {
//     quote: "Highly recommend their services for any HVAC needs.",
//     author: "Jane Smith",
//   },
// ];

// function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={`${className} slick-arrow`}
//       style={{
//         ...style,
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         background: "gray",
//         borderRadius: "50%",
//         width: "40px",
//         height: "40px",
//         right: "0px",
//         zIndex: 1,
//       }}
//       onClick={onClick}
//     >
//       <span className="text-white">➔</span>
//     </div>
//   );
// }

// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={`${className} slick-arrow`}
//       style={{
//         ...style,
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         background: "gray",
//         borderRadius: "50%",
//         width: "40px",
//         height: "40px",
//         left: "0px",
//         zIndex: 1,
//       }}
//       onClick={onClick}
//     >
//       <span className="text-white">➔</span>
//     </div>
//   );
// }
