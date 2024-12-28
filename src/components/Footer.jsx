import React from "react";
import tssaCertifiedIcon from '../assets/icons/footer-tssa-certified.svg';
import serviceAreaIcon from '../assets/icons/footer-service-area.svg';
import emergencyServiceIcon from '../assets/icons/footer-247 emergency service.svg';
import buyingAdviceIcon from '../assets/icons/footer-buying advice.svg';
import easyFinanceIcon from '../assets/icons/footer-easy finance.svg';
import freeEstimateIcon from "../assets/icons/footer-free-estimates.svg";
import satisfactionIcon from "../assets/icons/footer-100percent-satisfaction.svg";
import contactIcon from "../assets/icons/footer-contact.svg";

const Footer = () => {
  return (
    <div>
      <div className="bg-black text-white p-4 mx-0 md:mx-30 lg:mx-60"> {/* Maintain mx-60 for large screens and mx-0 for md and smaller */}
        <div className="flex justify-between items-center relative">
          <div className="flex space-x-4 relative">

          {/* new icon will be loaded after icon is made  */}
          <div>
              <img src={contactIcon } alt="Emergency Service" /> {/* Assuming `d.png` is in `public` */}
          </div>

            {/* Vertical line before the second circle */}
            <div className="relative flex justify-center items-center">
              <div className="absolute left-0 top-0 bottom-0 w-px bg-white h-full"></div>
            </div>

            <div>
              <img src={tssaCertifiedIcon} alt="TSSA Certified" />
            </div>
            <div>
              <img src={satisfactionIcon} alt="Emergency Service" /> {/* Assuming `d.png` is in `public` */}
            </div>

            {/* Vertical line after the 3rd circle */}
            <div className="relative flex justify-center items-center">
              <div className="absolute right-0 top-0 bottom-0 w-px bg-white h-full"></div>
            </div>

            <div>
              <img src={emergencyServiceIcon} alt="Greater Toronto" />
            </div>
            <div>
              <img src={serviceAreaIcon} alt="Satisfaction Guaranteed" /> 
            </div>

            {/* Vertical line after the 5th circle */}
            <div className="relative flex justify-center items-center">
              <div className="absolute right-0 top-0 bottom-0 w-px bg-white h-full"></div>
            </div>

            <div>
              <img src={buyingAdviceIcon} alt="Free Estimates" />
            </div>
            <div>
              <img src={freeEstimateIcon} alt="Free Estimate" />
            </div>
            <div>
              <img src={easyFinanceIcon}alt="Easy Finance Options" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
