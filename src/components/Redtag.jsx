import React from "react";

export const Redtag = () => {
  return (
    <div className="bg-white py-10 px-4">
      {/* Title */}
      <h2 className="text-center text-4xl font-bold">Red Tags</h2>

      {/* Paragraph */}
      <div className="text-center max-w-screen-lg mx-auto mt-6 text-xl">
        Did you ever receive a Warning Tag or Red Tag (A or B) from your HVAC contractor or from Enbridge Gas and need help getting it resolved? Our certified and licensed engineers can do it for you. <br /><br />
        A Warning Tag or Red Tag simply means that a TSSA licensed gas technician has found your gas fired equipment to be either not code compliant or unsafe to use. Failure to issue a Red Tag (or Warning Tag) in such circumstances can result in serious fines, imprisonment and loss of the gas license.
      </div>

      {/* List of Issues */}
      <div className="max-w-screen-lg mx-auto mt-10">
        <ol className="list-decimal list-inside text-lg grid grid-cols-1 md:grid-cols-2 gap-4">
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
      <div className="bg-red-600 text-white text-center py-4 text-xl font-bold mt-8 max-w-screen-lg mx-auto">
        We can help with the removal of the warning tag by either correcting the problem and have your gas equipment code compliant and safe to operate or by replacing the defective equipment.
      </div>
    </div>
  );
};
