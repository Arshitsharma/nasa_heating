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
        "A whole-home ventilation system is designed to bring in fresh outside air into the home, removing stale and humid air. It also removes VOCs, odors caused by pets, cooking and everyday activities.",
        "The ventilation unit runs the Furnace fan to circulate the fresh air throughout the home. The controller is designed to meet the ASHRAE 62.2-2010 standard for ventilation.",
        "Contact us to find about how we can improve your existing home with our quality products and services.",
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
            imageUrl={VentilationUnitBanner}
            highlightText="VENTILATION UNITS"
            heading="WEATHER TIGHT HOMES TRAP HIGHER CONCENTRATION OF TOXIC VOCs INSIDE"
            description="We can assess and devise an optimal solution for your home"
            buttonText="Call: 416-879-7198"
            buttonLink="#"
          />
          <FurnaceInfoSection 
            sections={sections} 
            imageUrl={imageUrl} 
            bottomText="We install, service & repair all brands of Ventilation Units including - Honeywell, Aprilaire, VanEE HRV Systems etc."
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

export default VentilationUnits;
