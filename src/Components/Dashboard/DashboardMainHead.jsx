/* eslint-disable react/prop-types */

import { ShoppingBag, Award, Briefcase, DollarSign } from "lucide-react";
import { useState } from "react";
import { Bar, XAxis, YAxis, CartesianGrid, Tooltip, Line, ComposedChart, ResponsiveContainer } from 'recharts'

const data = [
  { month: 'Jan', pageViews: 7, clicks: 8 },
  { month: 'Feb', pageViews: 22, clicks: 5 },
  { month: 'Mar', pageViews: 30, clicks: 12 },
  { month: 'Apr', pageViews: 28, clicks: 20 },
  { month: 'May', pageViews: 48, clicks: 15 },
  { month: 'Jun', pageViews: 60, clicks: 8 },
  { month: 'Jul', pageViews: 41, clicks: 7 },
  { month: 'Aug', pageViews: 24, clicks: 10 },
  { month: 'Sep', pageViews: 78, clicks: 28 },
  { month: 'Oct', pageViews: 52, clicks: 28 },
  { month: 'Nov', pageViews: 62, clicks: 15 },
  { month: 'Dec', pageViews: 66, clicks: 33 },
]

const MetricCard = ({ icon: Icon, title, value, change, period }) => (
  <div className="bg-white relative h-40 p-4 rounded-xl shadow">
    <div className="flex items-center justify-between mb-2">
      <div className="bg-[#FFE2D5] p-2 rounded">
        <Icon className="text-orange-500" size={24} />
      </div>
      <span className="text-sm text-gray-500">{title}</span>
    </div>
    <div className="text-2xl font-bold mb-2">{value}</div>
    <div className="flex absolute bottom-0 w-full left-0 items-center rounded-b-xl justify-between bg-[#e3e6eb] p-3">
      <div
        className={`text-sm ${change > 0 ? "text-green-500" : "text-red-500"}`}
      >
        {change > 0 ? "▲" : "▼"} {Math.abs(change)}% {period}
      </div>
      <button className="text-blue-500 text-sm mt-2">View More</button>
    </div>
  </div>
);
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 border border-gray-300 rounded shadow">
        <p className="font-semibold">{label}</p>
        <p className="text-orange-500">Page Views: {payload[0].value}k</p>
        <p className="text-green-500">Clicks: {payload[1].value}k</p>
      </div>
    )
  }
  return null
}

const PerformanceChart = () => {
  const [activeFilter, setActiveFilter] = useState('1Y')

  const filters = ['ALL', '1M', '6M', '1Y']

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Performance</h2>
        <div className="flex space-x-2">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`px-3 py-1 text-sm rounded ${
                activeFilter === filter
                  ? 'bg-blue-100 text-blue-600'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
      <ResponsiveContainer width="100%" height={400}>
        <ComposedChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="month" tickLine={false} />
          <YAxis tickCount={5} tickLine={false} axisLine={false} />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="pageViews" fill="#FF7E47" radius={[4, 4, 0, 0]} />
          <Line type="monotone" dataKey="clicks" stroke="#4CAF50" strokeWidth={2} dot={false} />
        </ComposedChart>
      </ResponsiveContainer>
      <div className="flex justify-center mt-4 space-x-8">
        <div className="flex items-center">
          <div className="w-3 h-3 bg-orange-500 rounded-full mr-2"></div>
          <span className="text-sm text-gray-600">Page Views</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
          <span className="text-sm text-gray-600">Clicks</span>
        </div>
      </div>
    </div>
  )
}
const DashboardMainHead = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4 container mx-auto items-center justify-center max-w-full lg:px-4 xl:px-5">
      <div className="max-w-7xl flex flex-col lg:flex-row mx-auto">
        <div className="mx-2">
          <div
            className="bg-[#FFE2D5] text-[#662B57] p-4 mb-4 rounded"
            role="alert"
          >
            <p>
              We regret to inform you that our server is currently experiencing
              technical difficulties.
            </p>
          </div>
          <div className="grid grid-cols-1 my-5 lg:my-0 md:grid-cols-2 gap-3 lg:gap-6 flex-1">
            <MetricCard
              icon={ShoppingBag}
              title="Total Orders"
              value="13,647"
              change={2.3}
              period="Last Week"
            />
            <MetricCard
              icon={Award}
              title="New Leads"
              value="9,526"
              change={8.1}
              period="Last Month"
            />
            <MetricCard
              icon={Briefcase}
              title="Deals"
              value="976"
              change={-0.3}
              period="Last Month"
            />
            <MetricCard
              icon={DollarSign}
              title="Booked Revenue"
              value="$123.6k"
              change={-10.6}
              period="Last Month"
            />
          </div>
        </div>
        <div className="flex-1">
          <PerformanceChart />
        </div>
      </div>
    </div>
  );
};
export default DashboardMainHead;
