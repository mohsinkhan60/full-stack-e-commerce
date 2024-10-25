import DashboardMainGraph from "./DashboardMainGraph";
import DashboardMainHead from "./DashboardMainHead";


const DashboardMain = () => {
  return (
    <div className="h-screen p-3 lg:p-12 container mx-auto items-center justify-center max-w-full lg:px-4 xl:px-5">
      <DashboardMainHead />
      <DashboardMainGraph />
    </div>
  );
};

export default DashboardMain;
