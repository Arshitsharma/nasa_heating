import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/icons/nasa-logo.svg';
import phoneLogo from "../assets/icons/rapid-response-unit.svg";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMain, setSelectedMain] = useState('');
  const [selectedSub, setSelectedSub] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownParent, setDropdownParent] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleSubItemClick = (subItemPath, parentItem) => {
    setSelectedSub(subItemPath);
    setSelectedMain(parentItem);
    setIsOpen(false);
    setDropdownOpen(false);
    navigate(subItemPath);
    window.scrollTo(0, 0); // Scroll to top on navigation
  };

  const handleMainItemClick = (item, itemPath) => {
    if (dropdownOptions[item].subItems.length === 0) {
      setSelectedMain(item);
      setSelectedSub('');
      setDropdownOpen(false);
      navigate(itemPath);
      window.scrollTo(0, 0); // Scroll to top on navigation
    } else {
      setDropdownParent(item);
      setDropdownOpen(dropdownParent === item ? !dropdownOpen : true);
    }
  };

  const dropdownOptions = {
    'HEATING': 
    { path: '/heating', 
      subItems: [
        { label: 'GAS FURNACES', path: '/heating/gas-furnaces' }
      ] 
    },
    'AIR CONDITIONING': {
      path: '/air-conditioning',
      subItems: [
        { label: 'CENTRAL AIR CONDITIONERS', path: '/air-conditioning/central-ac' },
        { label: 'DUCTLESS SYSTEMS & HEAT PUMPS', path: '/air-conditioning/ductless-systems-&-heat-pumps' },
      ],
    },
    'WATER HEATER': {
      path: '/water-heaters',
      subItems: [
        { label: 'STORAGE WATER HEATERS', path: '/water-heaters/storage-water-heaters' },
        { label: 'TANKLESS WATER HEATERS', path: '/water-heaters/tankless-water-heaters' },
      ],
    },
    'BOILERS': { 
      path: '/boilers', 
      subItems: [
        { label: 'TANKLESS COMBI BOILERS', path: '/boilers/tankless-combi-boilers' }
      ] 
    },
    'INDOOR AIR QUALITY': { 
      path: '/indoor-air-quality', 
      subItems: [
        { label: 'HUMIDIFIERS', path: '/indoor-air-quality/humidifiers' },
        { label: 'THERMOSTAT', path: '/indoor-air-quality/thermostats' },
        { label: 'AIR CLEANER & FILTER', path: '/indoor-air-quality/air-cleaner' },
        { label: 'VENTILATION UNITS', path: '/indoor-air-quality/ventilation-units' },
      ] 
      
    },
    'ROOFTOP UNITS': { 
      path: '/rooftop-units', 
      subItems: [
      ] 
    },
    'GAS PIPING': { 
      path: '/gas-piping', 
      subItems: []
    }
  };

  useEffect(() => {
    // Update selected items based on the current path
    const currentPath = location.pathname;
    let found = false;

    Object.keys(dropdownOptions).forEach((mainItem) => {
      if (dropdownOptions[mainItem].path === currentPath) {
        setSelectedMain(mainItem);
        setSelectedSub('');
        found = true;
      } else {
        dropdownOptions[mainItem].subItems.forEach((subItem) => {
          if (subItem.path === currentPath) {
            setSelectedMain(mainItem);
            setSelectedSub(subItem.path);
            found = true;
          }
        });
      }
    });

    if (!found) {
      setSelectedMain('');
      setSelectedSub('');
    }
  }, [location.pathname]);

  return (
    <nav className="bg-gray-100 shadow-md w-full h-26">
      <div className="flex items-center justify-between max-w-6xl mx-auto px-4 sm:px-6 lg:px-0 py-4">
        <img 
          src={logo} 
          alt="NASA HVAC Logo" 
          onClick={() => navigate('/')} 
          className="h-12 w-auto cursor-pointer" 
        />
        <img 
          src={phoneLogo} 
          alt="Phone Contact" 
          className="h-12 w-auto" 
        />
        <button 
          onClick={toggleMenu} 
          className="text-gray-700 focus:outline-none md:hidden" 
          aria-label="Toggle menu"
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
            />
          </svg>
        </button>
      </div>
      
      <div className={`${isOpen ? 'block' : 'hidden'} md:flex md:justify-center md:space-x-16 mt-2`}>
        {Object.keys(dropdownOptions).map((item) => (
          <div key={item} className="relative">
            <span
              className={`text-gray-700 font-semibold cursor-pointer hover:text-red-500 ${selectedMain === item ? 'text-red-500' : ''}`}
              onClick={() => handleMainItemClick(item, dropdownOptions[item].path)}
            >
              {item.replace(/-/g, ' ').replace(/\b\w/g, char => char.toUpperCase())}
            </span>
            {dropdownParent === item && dropdownOpen && dropdownOptions[item].subItems.length > 0 && (
              <div className="absolute z-10 mt-2 bg-white shadow-lg rounded-md w-max">
                {dropdownOptions[item].subItems.map((subItem) => (
                  <span
                    key={subItem.path}
                    className={`block px-4 py-2 text-gray-700 hover:bg-red-100 cursor-pointer ${selectedSub === subItem.path ? 'bg-red-100' : ''}`}
                    onClick={() => handleSubItemClick(subItem.path, item)}
                  >
                    {subItem.label}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
};
