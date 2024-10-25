/* eslint-disable react/prop-types */
import { useState } from "react";
import { Bell, Moon, Settings, Clock, Search } from "lucide-react";
import { FiMenu } from "react-icons/fi";


const DashboardNav = ({toggleSidebar}) => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="bg-[#F9F7F7] top-0 sticky h-16 shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-full">
        <FiMenu className="flex lg:hidden" onClick={toggleSidebar} />
        <h1 className="text-xl font-semibold text-gray-700">WELCOME!</h1>
        <div className="flex items-center space-x-4">
          <button className="text-gray-500 hover:text-gray-600">
            <Moon className="h-5 w-5" />
          </button>
          <button className="text-gray-500 hover:text-gray-600 relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-0 right-0 -mt-1 -mr-1 px-1.5 py-0.5 bg-red-500 rounded-full text-xs text-white">3</span>
          </button>
          <button className="text-gray-500 hover:text-gray-600">
            <Settings className="h-5 w-5" />
          </button>
          <button className="text-gray-500 hover:text-gray-600">
            <Clock className="h-5 w-5" />
          </button>
          <div className="relative">
            <img src="/About/3.webp" alt="User avatar" className="h-8 w-8 rounded-full" />
          </div>
          <div className="relative hidden sm:block">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full sm:w-64 px-4 py-2 text-sm text-gray-700 bg-[#EAE8E8] rounded-md"
            />
            <Search className="absolute right-3 top-2.5 h-4 w-4 text-gray-400" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardNav;
