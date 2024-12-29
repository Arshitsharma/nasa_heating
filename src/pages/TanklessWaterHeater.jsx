import { useState } from 'react';
// import { Navbar } from '../components/navbar';
import { SectionCarousel } from '../components/SectionCarousel';
import Footer from '../components/Footer';
import { SectionWithOverlay } from '../components/common/SectionWithOverlay';
import FurnaceInfoSection from '../components/FurnaceInfoSection';
import ServiceCard from '../components/common/ServiceCard';

import TanklessWaterImg from '../assets/products/tankless-water-heaters.jpg';
import TanklessWaterBanner from '../assets/images/tankless-water-heaters.jpg';

import AssessmentIcon from '../assets/icons/icon-assessment.svg';
import BuyingOptionsIcon from '../assets/icons/icon-buying-options.svg';
import RepairAndServiceIcon from '../assets/icons/icon-red-tag-removal.svg';
import EmergencyCallIcon from '../assets/icons/icon-emergency-calls.svg';
import RentingIcon from '../assets/icons/icon-renting.svg';


function TanklessWaterHeater() {
  const sections = [
   {
      title: "Tankless Water Heaters lower your energy costs and save water at the same time",
      paragraphs: [
        "An on-demand Tankless water heater is activated when you turn on the faucet, supplies hot water for as long as you need. While Tank-type water heaters have limited storage capacity and often run out of water during extended demands.",
        "Tank-type water heaters start to rust, build up scale and debris inside the tank. While the Tankless water heater heats the water as it passes thru the heat exchanger, so you always get clean hot water.",
        "You also save water as countless gallons of cold water is wasted in waiting for hot water to reach the faucet. There are simple plumbing devices that use the existing hot and cold water lines to circulate & pre-heat the water (when needed) thereby reducing the wait time for hot water to reach the faucet."
      ]
    },
    {
      title: "Other advantages",
      paragraphs: [
        "Software & sensors to detect water leaks and automatically turn off the ow of cold water, preventing damage to the water heater - or worse, to your home or business.",
        "Some Tankless brands also offer Stainless Steel Heat Exchangers that outlast Copper Heat Exchangers being less prone to corrosion, mineral deposits and leaks.",
        "In-Take Air Filters minimize dirt and debris from collecting inside the cabinet & the heat exchanger,reducing service calls.",
        "Tankless water heaters, with routine maintenance, should last 2 to 3 times longer than a tank-type water heater."
        ]
    },
  ];

  const imageUrls = TanklessWaterImg;

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
        {/* Changed padding to be responsive */}
        <div className="flex-grow pt-16 md:pt-24 mt-6">
          <SectionWithOverlay
            imageUrl={TanklessWaterBanner}
            highlightText="TANK LESS WATER HEATERS"
            heading="UP TO 98% EFFICIENCY WITH ON-DEMAND WATER HEATING"
            description="Find out what this means to you in savings"
            buttonText="Call: 416-879-7198"
            buttonLink="#"
          />
          <FurnaceInfoSection sections={sections} imageUrl={imageUrls} />

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

export default TanklessWaterHeater;
