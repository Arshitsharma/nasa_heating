import { useState } from 'react';
import { SectionCarousel } from '../components/SectionCarousel';
import Footer from '../components/Footer';
import { SectionWithOverlay } from '../components/common/SectionWithOverlay';
import FurnaceInfoSection from '../components/FurnaceInfoSection';
import ServiceCard from '../components/common/ServiceCard';

// Correctly import icons or ensure the paths are correct
import AirCleanerBanner from '../assets/images/air-cleaners-filters.jpg';
import AirCleanerImg from '../assets/products/air-cleaners-and-filters.jpg';

import AssessmentIcon from '../assets/icons/icon-assessment.svg';
import BuyingOptionsIcon from '../assets/icons/icon-buying-options.svg';
import RepairAndServiceIcon from '../assets/icons/icon-red-tag-removal.svg';


function AirCleaner() {
  const sections = [
    {
      title: "Strange but true!",
      paragraphs: [
       "Studies have proven that indoor air pollution as one of the top five environmental risks to public health.",
       "Modern weather-tight homes trap airborne particles inside, so everyday contaminants accumulate and their concentration keeps increasing. Just one cubic foot of air can have more than 30 million pollutants, i.e. 100 times more than the air outside. With the amount of time spent indoors, it's no wonder so many people suffer from allergies, asthma and other respiratory illnesses.",
       "Pollen, cat dander, tobacco smoke particles, mold spores, VOCs and household dust all contribute to poor indoor air quality."
        ]
    },
    {
      title: "Can you control Indoor Air Quality?",
      paragraphs: [
        "Absolutely, we can help you control the quality of the air with a whole-home air purifier. Unlike standard portable air purifiers, these are integrated as an essential part of your home's central heating and cooling system and work efficiently to remove pollutants from throughout your entire home.",
        "Proper Air-Filtration will keep your cooling coil clean and your furnace working more efficiently, saving energy, minimizing repair costs and extending service life."
        ]
    },
  ];

  const imageUrl = AirCleanerImg;

  // Service data for the cards
  const servicesData = [
    {
      icon: AssessmentIcon,
      title: 'Assessment',
      description: 'We assess and determine the right Whole-home Purifier for you'
    },
    {
      icon: BuyingOptionsIcon,
      title: 'Buying Options',
      description: 'Then we provide you with unbiased buying choices from leading brands'
    },
    {
        icon: RepairAndServiceIcon,
        title: 'Repair & Service',
        description: 'Factory trained technicians to service all makes and models'
      },
  ];

  return (
    <>
      <div className="flex flex-col min-h-screen">

        {/* Changed padding to be responsive */}
        <div className="flex-grow pt-16 md:pt-24 mt-6">
          <SectionWithOverlay
            imageUrl={AirCleanerBanner}
            highlightText="AIR CLEANERS & FILTERS"
            heading="THE AIR INDOORS COULD BE THE MOST POLLUTED AIR YOU BREATHE ALL DAY"
            description="Find out how you can improve air quality in your home"
            buttonText="Call: 416-879-7198"
            buttonLink="#"
          />
          <FurnaceInfoSection 
            sections={sections} 
            imageUrl={imageUrl} 
            bottomText="We install, service & repair all brands of Air Cleaners including - Aprilaire, Trane, Carrier, Electroaire among many others."
            />

          {/* Service Cards Section */}
          <div className='bg-stone-200 py-8'>
            <div className="px-4 sm:px-8 lg:px-96">
              {/* Mobile scroll container */}
              <div className="overflow-x-auto -mx-4 px-4 sm:overflow-visible sm:mx-0">
                <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 w-max sm:w-full mx-auto py-4 px-4 sm:px-24 justify-center">
                  {servicesData.map((service, index) => (
                  <div className="w-[280px] sm:w-auto">
                    <ServiceCard 
                        key={index} 
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
        </div>

        <div className="bg-stone-200">
        <Footer/>
        </div>
      </div>
    </>
  );
}

export default AirCleaner;
