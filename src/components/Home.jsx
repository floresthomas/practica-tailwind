import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-blue-500">
      <h1 className="text-white text-4xl font-bold mt-7">
        Conversion Marketing Platform for Agencies
      </h1>
      <p className="mt-2 w-1/1 text-gray-200 text-xl">
        Drive better results for your clients. OptinMonster offers powerful
        conversion
      </p>
      <p className="w-1/1 text-gray-200 text-xl">
        optimization tools to unlock maximum revenue from each website visitor.
      </p>
      <button className="bg-green-500 text-white text-xl rounded px-5 py-2 mt-7 mb-10 hover:bg-green-600">Get Started Now</button>
    </div>
  );
};

export default Home;
