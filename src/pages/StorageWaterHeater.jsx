import { useState } from 'react';
// import { Navbar } from '../components/navbar';
import { SectionCarousel } from '../components/SectionCarousel';
import Footer from '../components/Footer';
import { SectionWithOverlay } from '../components/common/SectionWithOverlay';
import FurnaceInfoSection from '../components/FurnaceInfoSection';
import ServiceCard from '../components/common/ServiceCard';

import StorageWaterBanner from '../assets/images/storage-water-heaters.jpg';
import StorageWaterImg from '../assets/products/storage-water-heaters.jpg';

// Import icons
import AssessmentIcon from '../assets/icons/icon-assessment.svg';
import BuyingOptionsIcon from '../assets/icons/icon-buying-options.svg';
import RepairAndServiceIcon from '../assets/icons/icon-red-tag-removal.svg';
import EmergencyCallIcon from '../assets/icons/icon-emergency-calls.svg';
import RentingIcon from '../assets/icons/icon-renting.svg';

function StorageWaterHeater() {
  const sections = [
    {
      title: "Which Water Heater is right for you?",
      paragraphs: [
        "A reliable supply of hot water is essential for any home. It also accounts for 20-25% of your energy bill.",
        "So assessing your requirement, analyzing usage patterns and then determining the right type and size of your new water heater is critical. We offer high-quality, high-efficiency water heaters that work great and provide a long term, trouble free service."
      ]
    },
    {
      title: "Should you rent or own?",
      paragraphs: [
        "Renting is a popular option, with monthly rents ranging from $25 to $50 a month, for a particular size and type of the water heater. And no worries on account of maintenance, repairs or replacements.",
        "To buy or to rent, depends on how you look at it. Economically, over time, buying is a better deal.Since a typical water heater lasts about 12-15 years, owning beats renting after 5 to 6 years."
       ]
    },
    {
      title: "Maintenance and Warranties",
      paragraphs: [
        "Water heaters come with 6 to12 year warranty which cover parts & the tank. We can provide you with an extended warranty of 10 yrs. on new water heaters covering all parts & labor for a small fee."
      ]
    }
  ];

  const imageUrl = StorageWaterImg;
  // Service data for the cards
  const servicesData = [
    {
      icon: AssessmentIcon,
      title: 'Assessment',
      description: 'We assess and determine the right furnace type and size.'
    },
    {
      icon: BuyingOptionsIcon,
      title: 'Buying Options',
      description: 'We offer unbiased buying choices from leading brands.'
    },
    {
      icon: RentingIcon,
      title: 'Renting',
      description: 'Trouble free renting options to decide what works best for you.'
    },
    {
      icon: RepairAndServiceIcon,
      title: 'Repair & Service',
      description: 'Factory trained technicians to service all makes and models.'
    },
    {
      icon: EmergencyCallIcon,
      title: 'Emergency Calls',
      description: 'Call our Rapid Response number in case your heating goes down.'
    }
  ];

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow pt-16"> {/* pt-16 ensures content doesn't overlap with navbar */}
          <SectionWithOverlay
            imageUrl={StorageWaterBanner}
            highlightText="STORAGE WATER HEATERS"
            heading="WATER HEATING IS THE SECOND HIGHEST ENERGY EXPENSE IN MOST HOMES"
            description="Find out how you keep running costs in check"
            buttonText="Call: 416-879-7198"
            buttonLink="#"
          />
          <FurnaceInfoSection sections={sections} imageUrl={imageUrl} />

          {/* Service Cards Section */}
          <div className='bg-stone-200 py-8'>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-full mx-4 sm:mx-8 lg:mx-60 py-4">
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

        {/* Footer */}
        <Footer/>
      </div>
    </>
  );
}

export default StorageWaterHeater;
