import React, { useMemo } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import HomePage from './pages/HomePage';
import GasFurnace from './pages/GasFurnace';
import CentralAc from './pages/CentralAc';
import DuctlessAc from './pages/DuctlessAc';
import StorageWaterHeater from './pages/StorageWaterHeater';
import TanklessWaterHeater from './pages/TanklessWaterHeater';
import TanklessCombiBoiler from './pages/TanklessCombiBoiler';
import Humidifier from './pages/Humidifier';
import Thermostat from './pages/Thermostat';
import AirCleaner from './pages/AirCleaner';
import VentilationUnits from './pages/VentilationUnits';
import RooftopUnit from './pages/RooftopUnit';
import GasPiping from './pages/GasPiping';

function App() {
  const { pathname } = useLocation();
  
  // Memoize route components to avoid unnecessary re-renders
  const routes = useMemo(
    () => [
      { path: '/', element: <HomePage /> },
      { path: '/heating/gas-furnaces', element: <GasFurnace /> },
      { path: '/air-conditioning/central-ac', element: <CentralAc /> },
      { path: '/air-conditioning/ductless-systems-&-heat-pumps', element: <DuctlessAc /> },
      { path: '/water-heaters/storage-water-heaters', element: <StorageWaterHeater /> },
      { path: '/water-heaters/tankless-water-heaters', element: <TanklessWaterHeater /> },
      { path: '/boilers/tankless-combi-boilers', element: <TanklessCombiBoiler /> },
      { path: '/indoor-air-quality/humidifiers', element: <Humidifier /> },
      { path: '/indoor-air-quality/thermostats', element: <Thermostat /> },
      { path: '/indoor-air-quality/air-cleaner', element: <AirCleaner /> },
      { path: '/indoor-air-quality/ventilation-units', element: <VentilationUnits /> },
      { path: '/rooftop-units', element: <RooftopUnit /> },
      { path: '/gas-piping', element: <GasPiping /> },
    ],
    []
  );

  return (
    <>
      {/* Conditionally apply class to Navbar for non-home routes */}
      <div className={pathname === '/' ? 'navbar-container' : 'fixed top-0 left-0 right-0 z-10 bg-white shadow-lg'}>
        <Navbar />
      </div>
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </>
  );
}

export default App;
