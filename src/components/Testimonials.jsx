import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import googleLogo from '../assets/icons/logo-google.svg';
import homestarsLogo from '../assets/icons/logo-homestars.svg';
import trustedprosLogo from '../assets/icons/logo-trustedpros.svg';
import './Testimonials.css';

export const Testimonials = () => {
    const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true
        }
      }
    ],
  };

  return (
    <div className="testimonials-section">
      <div className="py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-center text-4xl font-bold mb-12">Our Customer Reviews and Ratings</h1>
          {/* <h2 className="text-center text-3xl font-bold mb-4">Customer Testimonials</h2>
          <p className="text-center mb-8">Find out what our customers have to say about us.</p> */}
          
          <div className="overflow-x-auto md:overflow-visible -mx-4 sm:mx-0 py-4">
            <div className="flex md:grid md:grid-cols-3 gap-8 min-w-min px-4 sm:px-0">
              <div className="flex-shrink-0 w-72 md:w-auto flex flex-col items-center transition-transform duration-300 hover:scale-105 z-10">
                <img src={googleLogo} alt="Google" className="h-16 mb-4 transition-transform duration-300 hover:scale-110" />
                <p className="text-center">Rating</p>
                <p className="text-2xl font-bold mb-8">4.1/5</p>
                <button className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700" 
                  onClick={() => window.open('https://www.google.com/search?q=nasa+heating+and+air+conditioning+services&sca_esv=d0b6e812b6b64225&hl=en-IN&gl=in&sxsrf=ADLYWIIM70H-baS-7ndtLRYyOYZTvdERhg%3A1735915319276&ei=N_d3Z9LGEPy4seMPqp6k2Ac&oq=nasa+heating&gs_lp=Egxnd3Mtd2l6LXNlcnAiDG5hc2EgaGVhdGluZyoCCAAyBRAAGIAEMgUQABiABDIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgsQABiABBiGAxiKBTILEAAYgAQYhgMYigUyCxAAGIAEGIYDGIoFMggQABiiBBiJBUi3ZFDpJVigOnABeAGQAQCYAd4BoAH0EKoBBTAuOS4zuAEByAEA-AEBmAINoALtEqgCFcICBhCzARiFBMICGhAuGIAEGJECGLQCGMcBGIoFGOoCGK8B2AEBwgIUEAAYgAQYkQIYtAIYigUY6gLYAQHCAhQQABiABBjjBBi0AhjpBBjqAtgBAcICEBAAGAMYtAIY6gIYjwHYAQLCAgoQABiABBhDGIoFwgIUEC4YgAQYsQMYgwEYxwEYjgUYrwHCAhEQLhiABBixAxjRAxiDARjHAcICCxAAGIAEGLEDGIMBwgILEC4YgAQYsQMYgwHCAgsQLhiABBjRAxjHAcICCxAAGIAEGJECGIoFwgINEC4YgAQYQxjlBBiKBcICEBAuGIAEGNEDGEMYxwEYigXCAhAQLhiABBhDGMcBGIoFGK8BwgIWEC4YgAQYsQMY0QMYQxiDARjHARiKBcICEBAAGIAEGLEDGEMYgwEYigXCAgoQLhiABBhDGIoFwgINEAAYgAQYsQMYQxiKBcICCBAAGIAEGLEDwgIIEC4YgAQYsQPCAh8QLhiABBhDGMcBGIoFGK8BGJcFGNwEGN4EGOAE2AECwgIOEC4YgAQYsQMYxwEYrwHCAggQABiABBjJA8ICHRAuGIAEGLEDGMcBGK8BGJcFGNwEGN4EGOAE2AECwgIFEAAY7wWYAx_xBWCBwO5tMMpdugYECAEYB7oGBggCEAEYCpIHBTEuNi42oAfvcA&sclient=gws-wiz-serp#lrd=0x882b41e6af8958c3:0x4b861b46b36b1186,1,,,', '_blank')}>
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
                  onClick={() => window.open('https://trustedpros.ca/company/nasa-heating-and-air-conditioning-services-ltd', '_blank')}>
                  Read Reviews
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="pb-8">
         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
           <Slider {...settings}>
             {testimonials.map((testimonial, index) => (
              <div key={index} className="p-4">
                <div className="bg-white rounded-lg text-left">
                  <div className="flex text-yellow-400 text-2xl mb-4">
                    ★★★★★
                  </div>
                  <div className="min-h-[80px] mb-4">
                    <p className="text-gray-700">{testimonial.quote}</p>
                  </div>
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div> */}
      
    </div>
  );
};


const testimonials = [
  {
    quote: "Jairam from NASA was very helpful and understanding.\nGood Job Done!",
    author: "Karen Singer",
  },
  {
    quote: "NASA people were very prompt when our heating went down.",
    author: "Paul Senna",
  },
  {
    quote: "Great service and professional staff.",
    author: "John Doe",
  },
  {
    quote: "Highly recommend their services for any HVAC needs.",
    author: "Jane Smith",
  },
  {
    quote: "NASA people were very prompt when our heating went down.",
    author: "Paul Senna",
  },
  {
    quote: "Great service and professional staff.",
    author: "John Doe",
  },
];

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} slick-arrow`}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "transparent",
        borderRadius: "50%",
        width: "40px",
        height: "40px",
        right: "0px",
      }}
      onClick={onClick}
    >
      <span className="text-white">➔</span>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} slick-arrow`}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "transparent",
        borderRadius: "50%",
        width: "40px",
        height: "40px",
        left: "0px",
        zIndex: 2,
      }}
      onClick={onClick}
    >
      <span className="text-white">➔</span>
    </div>
  );
}
