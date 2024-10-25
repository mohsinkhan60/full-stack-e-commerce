import { useState } from "react";
import DashboardMain from "./DashboardMain";
import DashboardNav from "./DashboardNav";
import DashboardSidebar from "./DashboardSidebar";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      <div className={`flex-[0.2] z-[999] lg:flex ${sidebarOpen ? 'block' : 'hidden'}`}>
        <DashboardSidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      </div>
      <div className="bg-[#F9F7F7] flex flex-1 flex-col">
        <DashboardNav toggleSidebar={toggleSidebar} />
        <div className="flex-1 overflow-y-auto">
          <DashboardMain />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
