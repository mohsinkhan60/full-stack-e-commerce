import DashboardMain from "./DashboardMain"
import DashboardNav from "./DashboardNav"
import DashboardSidebar from "./DashboardSidebar"



const Dashboard = () => {
  return (
    <div className="flex flex-row">
      <div className="flex flex-[.3]">
         <DashboardSidebar />
      </div>
      <div className="flex flex-1 flex-col">
         <DashboardNav />
         <DashboardMain />
      </div>
    </div>
  )
}
export default Dashboard