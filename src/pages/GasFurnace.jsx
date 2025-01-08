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
        "If natural gas is available on your street, we can help you switch with ease."
      ]
    },
    {
      title: "Which furnace is right for you?",
      paragraphs: [
        "Gas furnace is a long term investment so choosing the right furnace is important.",
        "Operating costs, efficiency and 'correct sizing' are some critical considerations that can help you avoid problems like short cycling, noisy operation, uneven temperatures and high gas bills.",
        "We can help you identify the right furnace - Single Stage, Two Stage & Modulating (Multiple Stage Operation), with appropriate sizing for your home and then you can choose the product that best fits your budget."
      ]
    },
    {
      title: "When heating goes down in winters?",
      paragraphs: [
        "Call us for Emergency Heating Service (Gas Furnace & Boiler) in the GTA and the surrounding areas. Our technicians are on call 24/7, ready to address your emergency."
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
        {/* Changed padding to be responsive */}
        <div className="flex-grow pt-16 md:pt-24 mt-6">
          <SectionWithOverlay
            imageUrl={BannerImg}
            highlightText="Gas Furnace"
            heading="HEATING OF YOUR HOME MAKES UP FOR 40-60% OF YOUR ENERGY BILLS"
            description="We can help you lower your running costs."
            buttonText="Call: 416-879-7198'"
            buttonLink="#"
          />

          <FurnaceInfoSection 
            sections={sections} 
            imageUrl={imageUrl}
            bottomText="We install, service and repair all brands of Gas furnaces, 
                        including- Keeprite, Arcoaire,Lennox, Carrier, York, Trane, 
                        Amana and Goodman etc." 
          />

          {/* Service Cards Section */}
          
          {/* <div className='bg-stone-200 py-8'>
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
          </div> */}

          <div className="bg-stone-200 py-8">
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
          <div className="bg-stone-200">
          <Footer/>
        </div>
      </div>
    </>
  );
}

export default Heating;
