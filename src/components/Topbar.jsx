import React from "react";
import { FaSearch} from "react-icons/fa";

const Topbar = () => {
  return (
    <div className="w-full bg-gray-50 p-4 flex justify-between items-center border-b shadow-sm">

      <div className="relative flex items-center w-1/3">
        <FaSearch
          size={18}
          className="absolute left-3 text-gray-400"
          aria-hidden="true"
        />
        <input
          type="text"
          placeholder="Search..."
          className="w-full bg-white border border-gray-300 rounded-lg pl-10 py-2 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div className="flex items-center space-x-6">

        <button className="text-gray-600 hover:text-blue-600 transition">
          <img src="/help.png" alt="help" className="w-6 h-6" />
        </button>

        <button className="text-gray-600 hover:text-blue-600 transition">
          <img src="/msg.png" alt="Messages" className="w-6 h-6" />
        </button>

        <button className="text-gray-600 hover:text-blue-600 transition">
          <img src="/sort.png" alt="Sort" className="w-6 h-6" />
        </button>

  
        <button className="text-gray-600 hover:text-blue-600 transition">
          <img src="/notification.png" alt="notofication" className="w-6 h-6" />
        </button>

        
        <div className="flex items-center space-x-2">
          <img
            src="/user_profile.png"
            alt="Profile"
            className="w-20 h-20 rounded-full border border-gray-300 shadow-sm object-cover bg-yellow-400 p-1"
          />
          <span className="text-gray-700 font-medium">Adeline H. Dancy</span>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
