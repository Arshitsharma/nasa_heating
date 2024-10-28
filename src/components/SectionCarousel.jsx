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
  };

  const slides = [
    {
      imageUrl: familyHealthComfort,
      heading: "YOU WON'T COMPROMISE ON HEALTH AND COMFORT OF YOUR FAMILY!",
      description: 'Making the right HVAC choices can ensure that you don’t.',
      buttonText: 'Learn more...',
      buttonLink: '#',
    },
    {
      imageUrl: airConditioningDown,
      heading: 'TIME STOPPED WHEN THE AIR CONDITIONING WENT DOWN?',
      description: "No problem! We'll get to you in no time.",
      buttonText: 'Explore options',
      buttonLink: '#',
    },
    {
      imageUrl: buyrentreplace,
      heading: 'BUY/RENT REPAIR/REPLACE... LOOKING FOR ANSWERS?',
      description: 'We’ve got your back. With unbiased advice based on years of experience.',
      buttonText: 'Get started',
      buttonLink: '#',
    },
  ];

  return (
    <div className="w-full overflow-hidden" style={{ height: '600px' }}> {/* Set container height */}
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
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
    </div>
  );
};
