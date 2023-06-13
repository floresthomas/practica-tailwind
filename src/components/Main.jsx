import React from "react";

const Main = () => {
  return (
    <div className="flex flex-row">
      <div className="bg-gray-700">
        <div className="ml-10 mt-5 mb-5">
          <h2 className="text-center text-white mb-3 text-2xl">Sub Accounts</h2>
          <p className="text-center text-blue-200">
            Streamline account management and your workflow by sharing
          </p>
          <p className="text-center text-blue-200">
            access and managing permissions of your OptinMonster dashboard with
            coworkers and clients.
          </p>
        </div>
      </div>
      <div className="bg-gray-600">
        <div className="mt-5 mb-5">
          <h2 className="text-center text-white mb-3 text-2xl">
            Custom Branding
          </h2>
          <p className="text-center text-blue-200">
            Remove all OptinMonster branding and replace it with your
          </p>
          <p className="text-center text-blue-200">
            own logo / brand colors to impress your clients with a true
            white-glove conversion optimization service.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
