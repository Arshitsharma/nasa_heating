// import { Navbar } from '../components/navbar';
import Footer from '../components/Footer';
import { SectionWithOverlay } from '../components/common/SectionWithOverlay';
import FurnaceInfoSection from '../components/FurnaceInfoSection';
import ServiceCard from '../components/common/ServiceCard';

// Correctly import icons or ensure the paths are correct
import BarbecueIcon from '../assets/icons/icon-bar-be-cue-gas.svg';  // Example of directly importing an icon
import RedTagIcon from '../assets/icons/icon-red-tag-removal.svg';
import GaslineIcon from '../assets/icons/icon-gas-lines-stoves-dryers.svg';
import UndergroundIcon from '../assets/icons/undergroung-gas-lines-pools.svg';
import LeakIcon from '../assets/icons/icon-leak-testing.svg';




import GasPipingBannerImg from '../assets/images/gas-piping.jpg';
import FurnaceImg from '../assets/products/gas-piping.jpg';

function GasPiping() {
  const sections = [
    {
      title: "The most efficient way to fuel your heating applications",
      paragraphs: [
        "Come April and Ontarians get ready for sunny & warm weather, with outdoor BBQs and pool openings, and around the beginning of October all homeowners start ring up their home heating systems.",
        "Natural gas is the least expensive and most efcient way to fuel a BBQ, Pool Heater, Gas Furnace,Boiler, gas stove, water heater, re-place etc, to name a few.",
        ]
    },
    {
      title: "Assurance of a job done right, always!",
      paragraphs: [
        "But ensuring safe gas supply requiresexpertise. We employ certified & experienced gas fitters for all types of natural gas line work with pressure testing and tagging.",
        "Operating costs, efficiency and correct sizing are some critical considerations that can help you avoid problems like short cycling, noisy operation, uneven temperatures, and high gas bills.",
        "We assess your requirement and your application and accordingly suggest the appropriate piping for your needs.",
      ]
    },
  ];

  const imageUrl = FurnaceImg;

  // Service data for the cards
  const servicesData = [
    {
      icon: RedTagIcon, // Using the imported icon
      title: 'Red Tag Resolution & Removal',
    //   description: 'We assess your requirement and accordingly determine the right water heater type and size for your home.'
    },
    {
      icon: LeakIcon, // Replace with actual icon path
      title: 'Leak testing & Repair of gas lines',
    //   description: 'Based on determined type and size of water heater, we provide you with unbiased buying choices from leading brands.'
    },
    {
      icon: BarbecueIcon, // Replace with actual icon path
      title: 'Barbeque Gas Line Connections',
    //   description: 'Trouble free renting options along with comparisons to decide what works best for you in the short and the long term.'
    },
    {
        icon: UndergroundIcon, // Replace with actual icon path
        title: 'Outdoor Underground Gas Lines for Pool Heaters',
        // description: 'Based on determined type and size of water heater, we provide you with unbiased buying choices from leading brands.'
      },
      {
        icon: GaslineIcon, // Replace with actual icon path
        title: 'Appliance gas lines for Stoves, Dryers and fireplaces',
        // description: 'Trouble free renting options along with comparisons to decide what works best for you in the short and the long term.'
      },
  ];

  return (
    <>
      <div className="flex flex-col min-h-screen">
        
        {/* Fixed Navbar */}
        {/* <div className="fixed top-0 left-0 right-0 bg-white shadow-lg">
          <Navbar/>
        </div> */}
 
        {/* Apply padding to avoid overlap */}
        <div className="flex-grow pt-16"> {/* pt-16 ensures content doesn't overlap with navbar */}
          <SectionWithOverlay
            imageUrl={GasPipingBannerImg}
            highlightText="GAS PIPING"
            heading="PRESSURE TESTED &TAGGED GAS PIPING FOR INCIDENT FREE COMFORT"
            description=""
            buttonText="Call: 416-879-7198"
            buttonLink="#"
          />
          <FurnaceInfoSection sections={sections} imageUrl={imageUrl} />

          {/* Service Cards Section */}
          <div className='bg-stone-200 py-8'>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-full mx-4 sm:mx-8 lg:mx-60 py-4">
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

export default GasPiping;
