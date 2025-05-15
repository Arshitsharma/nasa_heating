import { useState } from 'react';
import { SectionCarousel } from '../components/SectionCarousel';
import Footer from '../components/Footer';
import { SectionWithOverlay } from '../components/common/SectionWithOverlay';
import FurnaceInfoSection from '../components/FurnaceInfoSection';
import ServiceCard from '../components/common/ServiceCard';

// Correctly import icons or ensure the paths are correct
import ThermostatBanner from '../assets/images/thermostats.jpg';
import ThermostatImg from '../assets/products/thermostats.jpg';
import ExpertIcon from '../assets/icons/icon-red-tag-removal.svg'; 
import BuyingAdviceIcon from '../assets/icons/icon-buying-options.svg';



function Thermostat() {
  const sections = [
    {
      title: "Programmable Smart Wi-Fi Thermostats",
      paragraphs: [
        "Ontario Regulations require a HVAC licensed & trained technician must install the thermostats since they control the gas furnace.",
        "These thermostats allow you to monitor and adjust your home's temperature from anywhere in the world, using your mobile devices.",
        "The smart thermostats learn your heating and cooling cycle times to deliver the right temperature when you want it. This permits energy savings without compromising comfort.",
        // "Advanced Fan Control - Allows timed air circulation and helps minimize temperature differences in areas within your home.",
        // "Auto Alerts - Extreme temperature alerts, problem with the heating or cooling system and filter change reminders sent to your mobile devices so that you are able to take timely & corrective action.",
        // "Locking Touchscreen - Advanced password protected locking features provide security and prevent unauthorized access to the thermostat.",
        // "It is recommended that these thermostats are installed by licensed and trained technicians, as they control your gas furnace."
    ],
    bulletPoints: [
      <> <strong>Advanced Fan Control</strong> - Allows timed air circulation and helps minimize temperature differences in areas within your home.</>,
      <> <strong>Auto Alerts</strong> - Extreme temperature alerts, problem with the heating or cooling system, and filter change reminders sent to your mobile devices so that you are able to take timely & corrective action.</>,
      <> <strong>Locking Touchscreen</strong> - Advanced password-protected locking features provide security and prevent unauthorized access to the thermostat.</>,
    ],
    },
  ];

  const imageUrl = ThermostatImg;
  // Service data for the cards
  const servicesData = [
    {
      icon: BuyingAdviceIcon,
      title: 'Buying Advice',
      description: 'Talk to us for help in choosing the right Smart Thermostat.'
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
            imageUrl={ThermostatBanner}
            highlightText="THERMOSTATS"
            heading="SMART TECHNOLOGY THAT OPTIMIZES COMFORT WHILE SAVING ENERGY"
            description="Find out what difference this can make for your home"
            buttonText="Call: 416-879-7198"
            buttonLink="#"
          />
          <FurnaceInfoSection 
            sections={sections} 
            imageUrl={imageUrl} 
            bottomText="We install, service & repair all brands of thermostats, including - Ecobee, Nest, Honeywell, White Rodgers, Sensi among many others."
            />

          {/* Service Cards Section */}
          <div className='bg-stone-200 py-8'>
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

        <div className="bg-stone-200">
        <Footer/>
        </div>
      </div>
    </>
  );
}

export default Thermostat;
