import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="flex flex-row justify-between items-center mt-3 mb-3">
        <p className="text-white text-3xl ml-5">Optimonster</p>
        <div>
          <ul className="flex flex-row gap-4 justify-center items-center mr-5">
            <li>
              <p className="text-gray-300 hover:text-white">Solutions</p>
            </li>
            <li>
              <p className="text-gray-300 hover:text-white">Features</p>
            </li>
            <li>
              <p className="text-gray-300 hover:text-white">Pricing</p>
            </li>
            <button className="bg-green-500 hover:bg-green-600 text-white text-sm py-1 px-4 rounded">Get Started</button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
