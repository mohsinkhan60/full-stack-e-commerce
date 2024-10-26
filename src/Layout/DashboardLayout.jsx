import { Outlet } from "react-router-dom";
import DashboardNav from "../Components/Dashboard/DashboardNav";
import DashboardSidebar from "../Components/Dashboard/DashboardSidebar";
import { useState } from "react";

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row h-screen">
        <div
          className={`flex-[0.2] z-[999] lg:flex ${
            sidebarOpen ? "block" : "hidden"
          }`}
        >
          <DashboardSidebar
            isOpen={sidebarOpen}
            toggleSidebar={toggleSidebar}
          />
        </div>
        <div className="bg-[#F9F7F7] flex flex-1 flex-col">
          <DashboardNav toggleSidebar={toggleSidebar} />
          <div className="flex-1 overflow-y-auto">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};
export default DashboardLayout;
