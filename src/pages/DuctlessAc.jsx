// import { Navbar } from '../components/navbar';
import Footer from '../components/Footer';
import { SectionWithOverlay } from '../components/common/SectionWithOverlay';
import FurnaceInfoSection from '../components/FurnaceInfoSection';
import ServiceCard from '../components/common/ServiceCard';


import DuctlessAcBanner from '../assets/images/ductless-systems-heat-pumps.jpg';
import DuctlessAcImg from '../assets/products/ductless-units.jpg'; // Replace with your actual image path

// Import icons
import AssessmentIcon from '../assets/icons/icon-assessment.svg';
import BuyingOptionsIcon from '../assets/icons/icon-buying-options.svg';
import RepairAndServiceIcon from '../assets/icons/icon-red-tag-removal.svg';
import EmergencyCallIcon from '../assets/icons/icon-emergency-calls.svg';

function DuctlessAc() {
  const sections = [
    {
      title: "The best fit Ductless unit for your requirement",
      paragraphs: [
        "We install mini-split and multi-zone split systems that are stylish and energy-efficient for residential and light commercial applications",
        ]
    },
  ];

  const imageUrls = DuctlessAcImg;

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
      description: 'Call our Rapid Response number in case your heating goes down.'
    }
    
  ];

  return (
    <>
      <div className="flex flex-col min-h-screen">
        {/* Fixed Navbar */}
        {/* <div className="fixed top-0 left-0 right-0 z-10 bg-white shadow-lg">
          <Navbar/>
        </div> */}

        {/* Apply padding to avoid overlap */}
        <div className="flex-grow pt-16"> {/* pt-16 ensures content doesn't overlap with navbar */}
          <SectionWithOverlay
            imageUrl={DuctlessAcBanner}
            highlightText="DUCTLESS SYSTEMS & HEAT PUMPS"
            heading="CHOOSING THE RIGHT SYSTEM TODAY CAN SAVE YOU UNTIMELY REPLACEMENT COSTS"
            description="We can help you make the right choices"
            buttonText="Call: 416-879-7198"
            buttonLink="#"
          />
          <FurnaceInfoSection sections={sections} imageUrl={imageUrls} />

          {/* Service Cards Section */}
          
          <div className='bg-stone-200 py-4'>
          <div className="px-2 sm:px-8 lg:px-24 mx-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-full mx-4 sm:mx-8 lg:mx-60 py-4">
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

export default DuctlessAc;
