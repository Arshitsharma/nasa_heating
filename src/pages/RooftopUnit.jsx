import Footer from '../components/Footer';
import { SectionWithOverlay } from '../components/common/SectionWithOverlay';
import FurnaceInfoSection from '../components/FurnaceInfoSection';
import ServiceCard from '../components/common/ServiceCard';

// Correctly import icons or ensure the paths are correct
import RooftopUnitBanner from '../assets/images/rooftop-units.jpg';
import RooftopUnitImg from '../assets/products/rooftop-units.jpg';

import AssessmentIcon from '../assets/icons/icon-assessment.svg';
import BuyingOptionsIcon from '../assets/icons/icon-buying-options.svg';
import RepairAndServiceIcon from '../assets/icons/icon-red-tag-removal.svg';


function RooftopUnit() {
  const sections = [
    {
      title: "Maintenance & Repair",
      paragraphs: [
          "Regular maintenance reduces your operating and energy costs, improves safety, ensures reliability and extends the life of the HVAC unit. The additional operating cost of a rooftop unit low on refrigerant or having dirty air-filters and coils can exceed the cost of an annual maintenance contract.",
        ]
    },
    {
     title: "Yearly Preventive Maintenance Plans",
     paragraphs: [
          "Plans include comprehensive maintenance visits, including Spring Start Up, and Fall Change Over,visits. Filter replacement costs are covered in these plans. Get in touch for more details.",
        ]
    },
    {
     title: "Fast Emergency Heating Service",
     paragraphs: [
          "Call us for the quick emergency Heating & Cooling repair service in the GTA and the surrounding areas. Our technicians are on call 24/7, ready to address your emergency.",
        ]
       },
  ];

  const imageUrl = RooftopUnitImg;

  // Service data for the cards
  const servicesData = [
    {
      icon: AssessmentIcon,
      title: 'Assessment',
      description: 'We assess and determine the right maintenance plan for you'
    },
    {
      icon: RepairAndServiceIcon,
      title: 'Repair & Service',
      description: 'Factory trained technicians to service all makes and models'
    },
    {
        icon: RepairAndServiceIcon,
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
            imageUrl={RooftopUnitBanner}
            highlightText="ROOFTOP UNITS & UNIT HEATERS"
            heading="Fast Trouble-Shooting & Accurate Repairs"
            description="Get in touch today"
            buttonText="Call: 416-879-7198"
            buttonLink="#"
          />
          <FurnaceInfoSection 
            sections={sections} 
            imageUrl={imageUrl} 
            topText="We provide professional service, trouble-shooting and repair of Rooftop HVAC Units & Unit Heaters across the GTA."
            bottomText="We install, service & repair all brands of Rooftop Units including - Lennox, Carrier, York, Trane, Keeprite among many others."
          />

          {/* Service Cards Section */}
          <div className='bg-stone-200 py-8'>
            <div className="px-4 sm:px-8 lg:px-96">
              {/* Mobile scroll container */}
              <div className="overflow-x-auto -mx-4 px-4 sm:overflow-visible sm:mx-0">
                <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 w-max sm:w-full mx-auto py-4 px-4 sm:px-24 justify-center">
                  {servicesData.map((service, index) => (
                    <div className="w-[280px] sm:w-auto">
                      <ServiceCard 
                          key={index} 
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
        </div>

        <div className="bg-stone-200">
        <Footer/>
        </div>
      </div>
    </>
  );
}

export default RooftopUnit;
