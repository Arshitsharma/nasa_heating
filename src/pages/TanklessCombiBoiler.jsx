import { useState } from 'react';
// import { Navbar } from '../components/navbar';
import { SectionCarousel } from '../components/SectionCarousel';
import Footer from '../components/Footer';
import { SectionWithOverlay } from '../components/common/SectionWithOverlay';
import FurnaceInfoSection from '../components/FurnaceInfoSection';
import ServiceCard from '../components/common/ServiceCard';

// Correctly import icons or ensure the paths are correct

import TanklessBoilerBanner from '../assets/images/tankless-combi-boilers.jpg';
import TanklessBoilerImg from '../assets/products/tankless-combi-boilers.jpg';

import AssessmentIcon from '../assets/icons/icon-assessment.svg';
import BuyingOptionsIcon from '../assets/icons/icon-buying-options.svg';
import RepairAndServiceIcon from '../assets/icons/icon-red-tag-removal.svg';
import EmergencyCallIcon from '../assets/icons/icon-emergency-calls.svg';
import RentingIcon from '../assets/icons/icon-renting.svg';


function TanklessCombiBoiler() {
  const sections = [
    {
      title: "Thinking of upgrading your boiler?",
      paragraphs: [
        "We can help you choose a high efficiency, wall mounted boiler that can help you save up to 30-50% on your annual gas bill and free-up valuable floor space.",
        "We can also replace your old, unsightly cast iron radiators with modern units."
       ]
    },
    {
      title: "Why should you upgrade?",
      paragraphs: [
        "Modern boilers allow you to include more applications of heating for comfort and practical use that include:",
        "1. Central Heating with Radiators or Air Handlers.",
        "2. In-Floor Radiant Heating.",
        "3. Ice & Snow Melt systems for Driveways & Walkways.",
        "4. Combi systems for Central Heating & Domestic Hot Water.",
        "5. System Zoning that allows you control over temperature in every room."
        ]
    },
    {
        title: "Regular maintenance of your boiler is important",
        paragraphs: [
          "Timely and regular maintenance reduces boiler operating and energy costs, improves safety,ensures reliability, extends life of the boiler, indentify and eliminate potential problems in time.",
         ]
      },
  ];

  const imageUrl = TanklessBoilerImg;

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
      title: 'Financing',
      description: 'Trouble free Finance options to decide what works best for you.'
    },
    {
      icon: RepairAndServiceIcon,
      title: 'Repair & Service',
      description: 'Factory trained technicians to service all makes and models.'
    },
    {
      icon: EmergencyCallIcon,
      title: 'Emergency Calls',
      description: 'Rapid Response number in case your heating goes down.'
    }
  ];

  return (
    <>
      <div className="flex flex-col min-h-screen">
        {/* Fixed Navbar */}
        {/* <div className="fixed top-0 left-0 right-0 z-10 bg-white shadow-lg">
          <Navbar/>
        </div> */}

        {/* Changed padding to be responsive */}
        <div className="flex-grow pt-16 md:pt-24 mt-6">
          <SectionWithOverlay
            imageUrl={TanklessBoilerBanner}
            highlightText="TANKLESS COMBI BOILERS"
            heading="A HIGH EFFICIENCY BOILER CAN SAVE YOU 30-50% ON YOUR ANNUAL GAS BILLS"
            description="Find out how you too can benefit"
            buttonText="Call: 416-879-7198"
            buttonLink="#"
          />
          <FurnaceInfoSection 
            sections={sections} 
            imageUrl={imageUrl}
            moreText="Service should be performed by a qualified technician trained and 
                      licensed to maintain & repair the boiler."
            bottomText="We install, service & repair all brands of residential or commercial 
                        Combi Boilers, including -Navien, Noritz, Bradford White, Rinnai, 
                        Viessmann, Bosch etc."  
          />

          {/* Service Cards Section */}
          <div className='bg-stone-200 py-8'>
            <div className="overflow-x-auto">
              <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-full mx-4 sm:mx-8 lg:mx-60 py-4">
                {servicesData.map((service, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-[280px] sm:w-full" // Fixed width on mobile, full width on larger screens
                  >
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
        <Footer/>
      </div>
    </>
  );
}

export default TanklessCombiBoiler;
