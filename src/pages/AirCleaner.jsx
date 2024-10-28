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
       "The EPA has named indoor air pollution as one of the top ve environmental risks to public health.",
       "Modern weather-tight homes trap airborne particles inside, so everyday contaminants accumulate and their concentration keeps increasing. Just one cubic foot of air can have more than 30 million pollutants, i.e. 100 times more than the air outside. With the amount of time spent indoors, it's no wonder so many people suffer from allergies, asthma and other respiratory illnesses.",
       "Pollen, cat dander, tobacco smoke particles, mold spores and household dust all contribute to poor indoor air quality which is ranked among the top ve environmental risks to public health."
        ]
    },
    {
      title: "Can you control Indoor Air Quality?",
      paragraphs: [
        "Yes, we can help you control the quality of the air with a whole-home air purier. Unlike standard portable air puriers, these are installed as part of your home's central heating and cooling system and work efciently to remove pollutants from throughout your entire home.",
        "It will also keep your air conditioner's cooling coil clean and your furnace working more efciently,saving energy, minimizing repair costs and extending service life."
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
        {/* Fixed Navbar */}


        {/* Apply padding to avoid overlap */}
        <div className="flex-grow pt-16"> {/* pt-16 ensures content doesn't overlap with navbar */}
          <SectionWithOverlay
            imageUrl={AirCleanerBanner}
            highlightText="AIR CLEANERS & FILTERS"
            heading="THE AIR INDOORS COULD BE THE MOST POLLUTED AIR YOU BREATHE ALL DAY"
            description="Find out how you can improve air quality in your home"
            buttonText="Call: 416-879-7198"
            buttonLink="#"
          />
          <FurnaceInfoSection sections={sections} imageUrl={imageUrl} />

          {/* Service Cards Section */}
          <div className='bg-stone-200 py-8'>
            <div className="px-2 sm:px-8 lg:px-96">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full sm:mx-auto lg:m-auto py-4 px-24 justify-center">
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

export default AirCleaner;
