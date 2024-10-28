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
      title: "Modern Air Conditioning extends beyond comfort to efficiency and health",
      paragraphs: [
        "A temperature controlled environment is essential for comfort and working efficiency. But this can extend beyond controlling Temperature and Humidity to optimal Air-Movement, ventilation and Indoor Air Quality.",
        "This makes it a job for professionals. That is how you too can beneift from our years of experience,technical expertise and trained technicians.",
        ]
    },
    {
      title: "This becomes even more important when you are working from home",
      paragraphs: [
        "With working from home becoming the new normal, air conditioning and comfort at home acquiresadded signicance. Not only because it can contribute to your working efciency and energy levels,but it has health implications too.",
        "Get in touch to and out if your system is working as per these added considerations."
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
      title: 'Renting',
      description: 'Trouble free renting options to decide what works best for you.'
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
        {/* Apply padding to avoid overlap */}
        <div className="flex-grow pt-16"> {/* pt-16 ensures content doesn't overlap with navbar */}
          <SectionWithOverlay
            imageUrl={CenteralAcBanner}
            highlightText="CENTRAL AIR CONDITIONERS"
            heading="AIR-CONDITIONING IS MORE THAN JUST TEMPERATURE CONTROL"
            description="Find out how you can optimize comfort and efficiency"
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

export default CentralAc;
