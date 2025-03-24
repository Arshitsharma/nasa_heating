import React, { useState } from "react";
import tssaCertifiedIcon from '../assets/icons/footer-tssa-certified.svg';
import serviceAreaIcon from '../assets/icons/footer-service-area.svg';
import emergencyServiceIcon from '../assets/icons/footer-247 emergency service.svg';
import buyingAdviceIcon from '../assets/icons/footer-buying advice.svg';
import easyFinanceIcon from '../assets/icons/footer-easy finance.svg';
import freeEstimateIcon from "../assets/icons/footer-free-estimates.svg";
import satisfactionIcon from "../assets/icons/footer-100percent-satisfaction.svg";
import contactIcon from "../assets/icons/footer-contact.svg";
import emailjs from '@emailjs/browser';
import nasaLogo from '../assets/icons/nasa-logo.svg';

const Footer = () => {
  // const [showModal, setShowModal] = useState(false);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const formData = new FormData(e.target);
    
  //   const templateParams = {
  //     fullName: formData.get('fullName'),
  //     email: formData.get('email'),
  //     dayPhone: formData.get('dayPhone'),
  //     nightPhone: formData.get('nightPhone'),
  //     bookingType: formData.get('bookingType'),
  //     hearAboutUs: formData.get('hearAboutUs'),
  //     comments: formData.get('comments')
  //   };

  //   emailjs.send(
  //     import.meta.env.VITE_EMAILJS_SERVICE_ID,
  //     import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  //     templateParams,
  //     import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  //   )
  //   .then(() => {
  //     alert('Thank you for your message. We will contact you soon!');
  //     setShowModal(false);
  //   })
  //   .catch((error) => {
  //     console.error('Error:', error);
  //     alert('Failed to send message. Please try again or contact us directly.');
  //   });
  // };


  return (
    <div>
      <div className="bg-black text-white p-4 mx-0 md:mx-30 lg:mx-60"> {/* Maintain mx-60 for large screens and mx-0 for md and smaller */}
        <div className="flex justify-between items-center relative">
          <div className="flex space-x-4 relative">

          {/* new icon will be loaded after icon is made  */}
          <div className="hover:scale-110 transition-all duration-200 cursor-pointer">
              <img 
                onClick={() => window.open('https://wa.me/14168797198', '_blank')}
                src={contactIcon} 
                alt="Contact Us" 
              />
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

      {/* Modal Form */}
      {/* {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4 overflow-y-auto">
          <div className="bg-white p-6 rounded-lg w-full max-w-md relative my-8">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h2 className="text-xl font-bold text-black">Contact Form</h2>
                <a 
                  href="mailto:nasaheating@gmail.com" 
                  className="text-red-600 hover:text-red-700 font-bold text-sm"
                >
                  nasaheating@gmail.com
                </a>
              </div>
              <img 
                src={nasaLogo} 
                alt="NASA Heating Logo" 
                className="h-12 w-auto"
              />
            </div>
            <form onSubmit={handleSubmit} className="max-h-[80vh] overflow-y-auto">
              <div className="space-y-4">
                <div>
                  <label className="block text-black">Full Name: *</label>
                  <input name="fullName" required className="w-full border p-2" />
                </div>
                <div>
                  <label className="block text-black">Email Address: *</label>
                  <input name="email" type="email" required className="w-full border p-2" />
                </div>
                <div>
                  <label className="block text-black">Day Time Telephone: *</label>
                  <input name="dayPhone" required className="w-full border p-2" />
                </div>
                <div>
                  <label className="block text-black">Night Time Telephone: *</label>
                  <input name="nightPhone" required className="w-full border p-2" />
                </div>
                <div>
                  <label className="block text-black">Type of Booking: *</label>
                  <select name="bookingType" required className="w-full border p-2">
                    <option value="">Please Choose</option>
                    <option value="Breakdown">Breakdown</option>
                    <option value="repair">Repair</option>
                    <option value="installation">Installation</option>
                    <option value="troubleshooting">Troubleshooting</option>
                  </select>
                </div>
                <div>
                  <label className="block text-black">How did you hear about us?:</label>
                  <input name="hearAboutUs" className="w-full border p-2" />
                </div>
                <div>
                  <label className="block text-black">Comments:</label>
                  <textarea name="comments" className="w-full border p-2 h-24"></textarea>
                </div>
              </div>
              <div className="mt-4 flex justify-end space-x-2 sticky bottom-0 bg-white py-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 bg-white text-red-600 border border-red-600 rounded hover:bg-red-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default Footer;
