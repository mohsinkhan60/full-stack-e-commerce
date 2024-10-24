import DashboardMain from "./DashboardMain";
import DashboardNav from "./DashboardNav";
import DashboardSidebar from "./DashboardSidebar";

const Dashboard = () => {
  return (
    <div className="flex flex-col lg:flex-row h-screen">
      <div className="flex-[0.2] hidden lg:flex">
        <DashboardSidebar />
      </div>
      <div className="bg-[#F9F7F7] flex flex-1 flex-col">
        <DashboardNav />
        <div className="flex-1 overflow-y-auto">
          <DashboardMain />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
