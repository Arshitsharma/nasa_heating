import { useState } from 'react';
import { SectionCarousel } from '../components/SectionCarousel';
import Footer from '../components/Footer';
import { SectionWithOverlay } from '../components/common/SectionWithOverlay';
import FurnaceInfoSection from '../components/FurnaceInfoSection';
import ServiceCard from '../components/common/ServiceCard';

// Correctly import icons or ensure the paths are correct
import VentilationUnitBanner from '../assets/images/ventilation-units.jpg';
import VentilationUnitImg from '../assets/products/ventilation-units.jpg';

import AssessmentIcon from '../assets/icons/icon-assessment.svg';
import BuyingOptionsIcon from '../assets/icons/icon-buying-options.svg';
import RepairAndServiceIcon from '../assets/icons/icon-red-tag-removal.svg';


function VentilationUnits() {
  const sections = [
    {
      title: "Ventilation is as critical as Heating or Cooling",
      paragraphs: [
        "A whole-home ventilation system is designed to bring in fresh outside air into the home, removing stale and humid air. It also exchanges odors caused by pets, cooking and everyday activities with fresh outdoor air.",
        "It runs the Furnace fan to circulate the fresh air throughout the home. The controller is designed to meet the ASHRAE 62.2-2010 standard for ventilation.",
        "The ventilation mode selection allows for time only operation or for temperature and humidity limits to be applied to the incoming fresh air.",
        "Contact us to nd about how we can improve your existing home with our quality products and services.",
        ]
    },
  ];

  const imageUrl = VentilationUnitImg

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
            imageUrl={VentilationUnitBanner}
            highlightText="VENTILATION UNITS"
            heading="WEATHER TIGHT HOMES TRAP HIGHER CONCENTRATION OF TOXIC GASES INSIDE"
            description="We can assess and devise an optimal solution for your home"
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

export default VentilationUnits;
