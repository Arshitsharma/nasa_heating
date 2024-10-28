import Footer from '../components/Footer';
import { SectionWithOverlay } from '../components/common/SectionWithOverlay';
import FurnaceInfoSection from '../components/FurnaceInfoSection';
import ServiceCard from '../components/common/ServiceCard';

// Import icons
import AssessmentIcon from '../assets/icons/icon-assessment.svg';
import BuyingOptionsIcon from '../assets/icons/icon-buying-options.svg';
import RepairAndServiceIcon from '../assets/icons/icon-red-tag-removal.svg';
import EmergencyCallIcon from '../assets/icons/icon-emergency-calls.svg';
import RentingIcon from '../assets/icons/icon-renting.svg';

// Import local images
import BannerImg from '../assets/images/gas-furnaces.jpg'; // Replace with your actual image path
import FurnaceImg from '../assets/products/furnaces.jpg'; // Replace with your actual image path

function Heating() {
  const sections = [
    {
      title: "How can you control operating costs?",
      paragraphs: [
        "Heating with Natural Gas is significantly less expensive than oil, propane & electricity.",
        "Your investment in a High-Efficiency natural gas furnace is recovered through lower operating costs over the furnace's 15 to 20 year life span.",
        "If natural gas is available on your street, we can help you switch to a natural gas furnace, with ease."
      ]
    },
    {
      title: "Which furnace is right for you?",
      paragraphs: [
        "Considering that a gas furnace is a long-term investment, choosing the right furnace becomes important.",
        "Operating costs, efficiency and correct sizing are some critical considerations that can help you avoid problems like short cycling, noisy operation, uneven temperatures, and high gas bills.",
        "We can help you narrow down on the right type of furnace, whether - Single Stage, Two Stage & Modulating (Multiple Stage Operation), with appropriate sizing for your requirement and finally let you choose from the makes that make the grade."
      ]
    },
    {
      title: "When heating goes down in winters?",
      paragraphs: [
        "Call us for Fast Emergency Heating Service (Gas Furnace & Boiler) in the GTA and the surrounding areas.",
        "We respond quickly to your emergency heating situation."
      ]
    }
  ];

  // Use the imported images instead of URLs
  const imageUrl = FurnaceImg; // Use single image URL instead of array

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
        <div className="flex-grow pt-16">
          <SectionWithOverlay
            imageUrl={BannerImg}
            highlightText="Gas Furnace"
            heading="HEATING OF YOUR HOME MAKES UP FOR 40-60% OF YOUR ENERGY BILLS"
            description="We can help you lower your running costs."
            buttonText="+91 9876975789"
            buttonLink="#"
          />

          <FurnaceInfoSection sections={sections} imageUrl={imageUrl} /> {/* Pass imageUrl */}

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
        <Footer />
      </div>
    </>
  );
}

export default Heating;
