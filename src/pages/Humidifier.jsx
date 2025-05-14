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
        "Humidification is one of the most important aspects of total indoor comfort.",
        "Physicians and other experts often recommend humidity control to prevent the damaging effects of dry air, like higher likelihood of getting colds, flu and other upper respiratory ailments.",
        "Dry air can make people more susceptible to infections. Dry air can also aggravate allergy and asthma symptoms.",
        "Low humidity can also cause home damage. It causes walls, woodwork, and hardwood floors to crack and shrink. Electronics too can fall prey to static electricity, requiring expensive repairs or worse."
       ]
    },
    {
      title: "Why Choose a Whole-Home Humidifier?",
      paragraphs: [
        "Installed directly to your home's central heating and cooling system, a whole-home humidifier provides comfort, unlike portable units that only humidify the rooms they are placed in.",
        "Too much humidity can be as much of a problem as too little. Unlike portable units, a whole-home humidifier continually monitors relative humidity levels and delivers the perfect amount of moisture to the air throughout your entire home.",

        ]
    },
    {
        title: "Smart humidifiers provide peace of mind",
        paragraphs: [
          "The Smart Automatic Humidifier is a completely automated, “no touch” humidifier, never needing manual adjustments. The advanced technology measures the outdoor temperature and indoor humidity over 86,000 times a day and maintains your home humidity levels to optimum. It is three times more accurate and four times more reliable than other humidifiers."
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
        {/* Changed padding to be responsive */}
        <div className="flex-grow pt-16 md:pt-24 mt-6">
          <SectionWithOverlay
            imageUrl={HumidifierBanner}
            highlightText="HUMIDIFIERS"
            heading="HUMIDIFICATION IS A CRITICAL ASPECT OF TOTAL INDOOR COMFORT"
            description="Find out how you can control it & get it right"
            buttonText="Call: 416-879-7198"
            buttonLink="#"
          />
          <FurnaceInfoSection 
              sections={sections} 
            imageUrl={imageUrl} 
            bottomText="We install, service & repair all brands of humidifiers (Flow thru and Steam type), including -
                        Aprilaire, General Aire among many others." 
          />
 
          {/* Service Cards Section */}
          <div className="bg-stone-200 py-2">
            <div className="px-4 sm:px-8 lg:px-80">
              <div className="flex overflow-x-auto sm:grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-4 sm:mx-10 md:mx-20 lg:mx-60 py-4 no-scrollbar">
                {servicesData.map((service, index) => (
                  <div key={index} className="flex-shrink-0 w-[280px] sm:w-auto">
                    <ServiceCard 
                      icon={service.icon} 
                      title={service.title} 
                      description={service.description} 
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-stone-200">
        <Footer/>
        </div>
      </div>
    </>
  );
}

export default Humidifier;
