import { useState } from 'react';
import { SectionCarousel } from '../components/SectionCarousel';
import Footer from '../components/Footer';
import { SectionWithOverlay } from '../components/common/SectionWithOverlay';
import FurnaceInfoSection from '../components/FurnaceInfoSection';
import ServiceCard from '../components/common/ServiceCard';

// Correctly import icons or ensure the paths are correct
import HumidifierBanner from '../assets/images/humidifiers.jpg';
import HumidifierImg from '../assets/products/humidifiers.jpg';
import ExpertIcon from '../assets/icons/icon-red-tag-removal.svg'; 
import BuyingAdviceIcon from '../assets/icons/icon-buying-options.svg';


function Humidifier() {
  const sections = [
    {
      title: "Heat is your friend, dryness the enemy!",
      paragraphs: [
        "Humidification, or the process of adding moisture to the air is one of the most important aspects of total indoor comfort, yet it's one of the least understood.",
        "Physicians and other experts often recommend humidity control to prevent the damaging effects of dry air, like higher likelihood of getting colds, flu and other upper respiratory ailments.",
        "According to The American Society of Otolaryngology, dry air can make people more susceptible to infection. In addition, drier air can also aggravate allergy and asthma symptoms.",
        "Low humidity can cause home damage. It causes walls, woodwork, and your beautiful hardwood floors to crack. Electronics can fall prey to static electric charges, requiring expensive repair or replacement."
       ]
    },
    {
      title: "Why Choose a Whole-Home Humidifier?",
      paragraphs: [
        "Installed directly to your home's central heating and cooling system, a whole-home humidifier provides comfort, unlike portable units that only address certain rooms.",
        "Too much humidity can be as much of a problem as too little humidity. Unlike portable units, a whole-home humidifier continually monitors relative humidity levels and then delivers the perfect amount of moisture to the air throughout your entire home.",

        ]
    },
    {
        title: "Smart humidifiers provide peace of mind",
        paragraphs: [
          "The Smart Automatic Humidier is the world’s first computer-equipped, completely automated, “no touch” humidifier. It never needs constant manual adjustments. The advanced computer technology measures the outdoor temperature and indoor humidity over 86,000 times a day and continually adjusts your homes indoor humidity to its optimum level. It also performs at a level three times more accurate and four times more reliable than other humidifiers."
         ]
      },
  ];

  const imageUrl = HumidifierImg

  // Service data for the cards
  const servicesData = [
    {
      icon: BuyingAdviceIcon,
      title: 'Buying Advice',
      description: 'Talk to us for help in choosing the right Humidifier.'
    },
    {
      icon: ExpertIcon,
      title: 'Expert Installation',
      description: 'Factory trained technicians ensure perfect installation'
    },
  ];

  return (
    <>
      <div className="flex flex-col min-h-screen">
        {/* Apply padding to avoid overlap */}
        <div className="flex-grow pt-16"> {/* pt-16 ensures content doesn't overlap with navbar */}
          <SectionWithOverlay
            imageUrl={HumidifierBanner}
            highlightText="HUMIDIFIERS"
            heading="HUMIDIFICATION IS ONE OF THE CRITICAL ASPECTS OF TOTAL INDOOR COMFORT"
            description="Find out how you can get things right"
            buttonText="Call: 416-879-7198"
            buttonLink="#"
          />
          <FurnaceInfoSection sections={sections} imageUrl={imageUrl} />
 
          {/* Service Cards Section */}
          <div className="bg-stone-200 py-2">
            <div className="px-4 sm:px-8 lg:px-80">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-4 sm:mx-10 md:mx-20 lg:mx-60 py-4 justify-center">
                {servicesData.map((service, index) => (
                  <ServiceCard 
                    key={index} 
                    icon={service.icon} 
                    title={service.title} 
                    description={service.description} 
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <Footer/>
      </div>
    </>
  );
}

export default Humidifier;
