import React from "react";

export const Redtag = () => {
  return (
    <div className="bg-white py-6 sm:py-10 px-3 sm:px-4">
      {/* Title */}
      <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold">
        Why Choose NASA Heating?
      </h2>

      {/* Paragraph */}
      <div className="text-center max-w-screen-lg mx-auto mt-4 sm:mt-6 text-base sm:text-lg md:text-xl">
        We offer a full range of Heating, Ventilation, Air conditioning and Indoor air quality solutions. From furnaces, air conditioners,
        water heaters and humidifiers to whole-home air cleaners and ventilation systems, we can help you maintain an optimum indoor
        environment for your home and family.
      </div>

      {/* Container Box */}
      <div className="max-w-screen-lg mx-auto border shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out mt-6 sm:mt-8 md:mt-10">
        <div className="text-center text-base sm:text-lg md:text-xl font-bold p-3 sm:p-4">
          Following are some situations when a Red Tag may be issued:
        </div>
        {/* List of Issues */}
        <div className="mt-2 sm:mt-4 px-3 sm:px-4">
          <ol className="list-decimal list-inside text-sm sm:text-base md:text-lg grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3 md:gap-4">
            <li>Unsafe Installation - Improper Venting, Appliance over-sized or over heating</li>
            <li>Delayed combustion due to lack of maintenance</li>
            <li>Gas leaking from the supply piping</li>
            <li>Carbon Monoxide Leaks or presence detected in the home</li>
            <li>Lack of Combustion Air</li>
            <li>Defective / Compromised Heat Exchanger</li>
            <li>Improper Accessibility</li>
            <li>Gas appliance not found to be CSA or CUL approved</li>
          </ol>
        </div>

        {/* Red Section at the Bottom */}
        <div className="bg-red-600 text-white text-center py-2 sm:py-3 md:py-4 text-base sm:text-lg md:text-xl font-bold px-3 sm:px-4">
          We can help with the removal of the warning tag by either correcting the problem and have your gas equipment code compliant and safe to operate or by replacing the defective equipment.
        </div>
      </div>
    </div>
  );
};


// import React from "react";

// export const Redtag = () => {
//   return (
//     <div className="bg-white py-10 px-4">
//       {/* Title */}
//       <h2 className="text-center text-4xl font-bold">Red Tags</h2>

//       {/* Paragraph */}
//       <div className="text-center max-w-screen-lg mx-auto mt-6 text-xl">
//         Did you ever receive a Warning Tag or Red Tag (A or B) from your HVAC contractor or from Enbridge Gas and need help getting it resolved? Our certified and licensed engineers can do it for you. <br /><br />
//         A Warning Tag or Red Tag simply means that a TSSA licensed gas technician has found your gas fired equipment to be either not code compliant or unsafe to use. Failure to issue a Red Tag (or Warning Tag) in such circumstances can result in serious fines, imprisonment and loss of the gas license.
//       </div>

//       {/* List of Issues */}
//       <div className="max-w-screen-lg mx-auto mt-10">
//         <ol className="list-decimal list-inside text-lg grid grid-cols-1 md:grid-cols-2 gap-4">
//           <li>Unsafe Installation - Improper Venting, Appliance over-sized or over heating</li>
//           <li>Delayed combustion due to lack of maintenance</li>
//           <li>Gas leaking from the supply piping</li>
//           <li>Carbon Monoxide Leaks or presence detected in the home</li>
//           <li>Lack of Combustion Air</li>
//           <li>Defective / Compromised Heat Exchanger</li>
//           <li>Improper Accessibility</li>
//           <li>Gas appliance not found to be CSA or CUL approved</li>
//         </ol>
//       </div>

//       {/* Red Section at the Bottom */}
//       <div className="bg-red-600 text-white text-center py-4 text-xl font-bold mt-8 max-w-screen-lg mx-auto">
//         We can help with the removal of the warning tag by either correcting the problem and have your gas equipment code compliant and safe to operate or by replacing the defective equipment.
//       </div>
//     </div>
//   );
// };
