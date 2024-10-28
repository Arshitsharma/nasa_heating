import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    ],
  };

  return (
    <div className="bg-stone-200 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold mb-8">Customer Testimonials</h2>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-4">
              <div className="bg-white p-6 shadow-lg rounded-lg text-center min-h-[200px] flex flex-col justify-between">
                <div className="text-yellow-500 mb-2">
                  <span>⭐⭐⭐⭐⭐</span>
                </div>
                <p>{testimonial.quote}</p>
                <p className="mt-4 font-bold">{testimonial.author}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

const testimonials = [
  {
    quote: "Jairam from NASA was very helpful and understanding. Good Job Done!",
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
        background: "gray",
        borderRadius: "50%",
        width: "40px",
        height: "40px",
        right: "0px",
        zIndex: 1,
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
        background: "gray",
        borderRadius: "50%",
        width: "40px",
        height: "40px",
        left: "0px",
        zIndex: 1,
      }}
      onClick={onClick}
    >
      <span className="text-white">➔</span>
    </div>
  );
}
