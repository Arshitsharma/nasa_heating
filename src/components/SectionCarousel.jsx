import React from 'react';
import Slider from 'react-slick';
import { HomeOverlay } from './common/HomeOverlay';
// import { SectionWithOverlay } from './common/SectionWithOverlay';
import familyHealthComfort from '../assets/images/family-health-comfort.jpg';
import airConditioningDown from '../assets/images/airconditioning-down.jpg';
import buyrentreplace from '../assets/images/buy-rent-replace.jpg';

export const SectionCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    appendDots: (dots) => (
      <div style={{ position: 'absolute', bottom: '20px', width: '100%' }}>
        <ul>{dots}</ul>
      </div>
    ),
    dotsClass: 'slick-dots custom-dots',
  };

  const slides = [
    {
      imageUrl: familyHealthComfort,
      heading: "YOU WON'T COMPROMISE ON HEALTH AND COMFORT OF YOUR FAMILY!",
      description: 'Making the right HVAC choices can ensure that you don’t.',
      buttonText: 'Call: 416-879-7198',
      buttonLink: '#',
    },
    {
      imageUrl: airConditioningDown,
      heading: 'TIME STOPPED WHEN THE AIR CONDITIONING WENT DOWN?',
      description: "No problem! We'll get to you in no time.",
      buttonText: 'Call: 416-879-7198',
      buttonLink: '#',
    },
    {
      imageUrl: buyrentreplace,
      heading: 'BUY/RENT REPAIR/REPLACE... LOOKING FOR ANSWERS?',
      description: 'We’ve got your back. With unbiased advice based on years of experience.',
      buttonText: 'Call: 416-879-7198',
      buttonLink: '#',
    },
  ];

  return (
    <div className="w-full relative" style={{ height: '600px' }}>
      <Slider {...settings} className="h-full">
        {slides.map((slide, index) => (
          <div key={index} className="h-full">
            <HomeOverlay
              imageUrl={slide.imageUrl}
              heading={slide.heading}
              description={slide.description}
              buttonText={slide.buttonText}
              buttonLink={slide.buttonLink}
            />
          </div>
        ))}
      </Slider>

      <style jsx global>{`
        .slick-prev, .slick-next {
          z-index: 1;
          width: 40px;
          height: 40px;
        }
        .slick-prev {
          left: 20px;
        }
        .slick-next {
          right: 20px;
        }
        .slick-prev:before, .slick-next:before {
          font-size: 40px;
          opacity: 0.75;
        }
        .custom-dots {
          bottom: 20px;
        }
        .custom-dots li button:before {
          color: white;
          opacity: 0.5;
          font-size: 12px;
        }
        .custom-dots li.slick-active button:before {
          color: white;
          opacity: 1;
        }
      `}</style>
    </div>
  );
};
