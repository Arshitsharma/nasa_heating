// import { Navbar } from '../components/navbar';
import Footer from '../components/Footer';
import { SectionWithOverlay } from '../components/common/SectionWithOverlay';
import FurnaceInfoSection from '../components/FurnaceInfoSection';
import ServiceCard from '../components/common/ServiceCard';
import CenteralAcBanner from '../assets/images/central-air-conditioners.jpg';
import CenteralAcImg from '../assets/products/central-air-conditioners.jpg';

// Import icons
import AssessmentIcon from '../assets/icons/icon-assessment.svg';
import BuyingOptionsIcon from '../assets/icons/icon-buying-options.svg';
import RepairAndServiceIcon from '../assets/icons/icon-red-tag-removal.svg';
import EmergencyCallIcon from '../assets/icons/icon-emergency-calls.svg';
import RentingIcon from '../assets/icons/icon-renting.svg';

function CentralAc() {
  const sections = [
    {
      title: "Beyond comfort to efficiency and health",
      paragraphs: [
        "A temperature controlled environment is essential for comfort and working efficiency. But nowadays,this extends further to Humidity Control, Optimal Air-Movement, Ventilation and Indoor Air Quality.",
        "This makes it a job for professionals. That is how you too can benefit from our years of experience,technical expertise and trained technicians.",
        ]
    },
    {
      title: "Even more important if you work from home",
      paragraphs: [
        "With working from home becoming the new normal, air-conditioning and comfort at home acquires added significance. Not only because it contributes to your working efficiency and energy levels, but it has health implications too.",
        "Get in touch to find out if your system measures up to these added considerations."
      ]
    },
  ];

  const imageUrl = CenteralAcImg;

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
      icon: RentingIcon, // Replace with actual icon path
      title: 'Financing',
      description: 'Trouble free Finance options to decide what works best for you.'
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
            imageUrl={CenteralAcBanner}
            highlightText="CENTRAL AIR CONDITIONERS"
            heading="AIR-CONDITIONING IS MORE THAN JUST TEMPERATURE CONTROL"
            description="Find out how you can optimize comfort and efficiency"
            buttonText="Call: 416-879-7198"
            buttonLink="#"
          />
          <FurnaceInfoSection 
            sections={sections} 
            imageUrl={imageUrl} 
            bottomText="We install, service & repair all brands of Air conditioners, including - Amana, Carrier, Lennox,
                        York, Trane, American Standard, Keeprite and Comfortmaker etc." 
          />

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

export default CentralAc;
