// import { Navbar } from '../components/navbar';
import Footer from '../components/Footer';
import { SectionWithOverlay } from '../components/common/SectionWithOverlay';
import FurnaceInfoSection from '../components/FurnaceInfoSection';
import ServiceCard from '../components/common/ServiceCard';


import HeatPumpsBanner from '../assets/images/heat-pump.jpg';
import HeatPumpsImg from '../assets/products/heat-pumps.jpg'; // Replace with your actual image path

// Import icons
import AssessmentIcon from '../assets/icons/icon-assessment.svg';
import BuyingOptionsIcon from '../assets/icons/icon-buying-options.svg';
import RepairAndServiceIcon from '../assets/icons/icon-red-tag-removal.svg';
import EmergencyCallIcon from '../assets/icons/icon-emergency-calls.svg';

function HeatPumps() {
  const sections = [
    {
      title: "Energy saving heating",
      paragraphs: [
        "At the most basic level, a heat pump is an appliance that can efficiently & economically heat and cool your home. In the heating mode it uses much less energy than a gas furnace, boiler, or electric radiator. For heating, it absorbs ambient heat from the outside air and transfers it inside (or out in cooling mode), as opposed to generating heat by burning fossil fuel or using energy-intensive electrical resistance heating elements."
    ]
    },
    {
        title: "Heat Pumps are eco-friendly",
        paragraphs: [
          "Air-source heat pumps will trim your household carbon dioxide emissions by about 40 percent compared with gas furnaces."
    ]
    },
    {
        title: "Heat Pumps are cost efficient too",
        paragraphs: [
          "Heat pumps are the most affordable way to heat and cool a home. Electric resistance, Propane and Oil are always expensive and cost about two-and-a-half to three times as a heat pump does to produce the same amount of heat."
    ]
    },
    {
        title: "Types of air-to-air heat pumps",
        paragraphs: [
          "Central Units - These units supply heating and cooling through the existing supply & return air ductwork in the house.",
          "Ductless Units - Single Zone and Multi Zone Units - Work with one or more indoor heads located within the home.",
    ]
    },
  ];

  const imageUrls = HeatPumpsImg;

  // Service data for the cards
  const servicesData = [
    {
      icon: AssessmentIcon, // Using the imported icon
      title: 'Assessment',
      description: 'We assess if your air conditioning is working at optimal levels.'
    },
    {
      icon: BuyingOptionsIcon, // Replace with actual icon path
      title: 'Buying Options',
      description: 'Then we recommend addition or changes to your existing system.'
    },
    {
      icon: RepairAndServiceIcon, // Replace with actual icon path
      title: 'Repair & Service',
      description: 'Factory trained technicians to service all makes and models.'
    },
    {
      icon: EmergencyCallIcon, // Replace with actual icon path
      title: 'Emergency Calls',
      description: 'Rapid Response number in case your Air Conditioning goes down.'
    }
    
  ];

  return (
    <>
      <div className="flex flex-col min-h-screen">

        {/* Changed padding to be responsive */}
        <div className="flex-grow pt-16 md:pt-24 mt-6">
          <SectionWithOverlay
            imageUrl={HeatPumpsBanner}
            highlightText="HEAT PUMPS"
            heading="AN ENERGY-EFFICIENT ALTERNATIVE TO CONVENTIONAL HEATING"
            description="We can help you make the right choices"
            buttonText="Call: 416-879-7198"
            buttonLink="#"
          />
          <FurnaceInfoSection 
          sections={sections} 
          imageUrl={imageUrls} 
          bottomText="We install, service and repiar all brands of ductless units, 
                      including - Mitsubishi, MITS AIR etc." 
          />

          {/* Service Cards Section */}
          <div className='bg-stone-200 py-4'>
            <div className="px-2 sm:px-8 lg:px-24 mx-2">
              <div className="flex overflow-x-auto sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-full mx-4 sm:mx-8 lg:mx-60 py-4">
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

export default HeatPumps;
