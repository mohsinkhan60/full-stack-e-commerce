import { TEChart } from "tw-elements-react";

const pages = [
  { path: "ecommerce", views: 465, exitRate: 4.4 },
  { path: "larkon", views: 426, exitRate: 20.4 },
  { path: "larkon/chat", views: 254, exitRate: 12.25 },
  { path: "larkon/auth", views: 3369, exitRate: 5.2 },
  { path: "larkon/email", views: 985, exitRate: 64.2 },
];

const getExitRateColor = (rate) => {
  if (rate < 10) return "bg-green-100 text-green-800";
  if (rate < 30) return "bg-yellow-100 text-yellow-800";
  return "bg-red-100 text-red-800";
};

const DashboardMainGraph = () => {
  return (
    <div className="container mx-auto px-4 lg:px-5 ">
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex-1 flex-col gap-2 flex lg:flex-row items-center justify-between mb-4">
          <div className="flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg py-10 px-16 lg:px-24 shadow-md max-w-sm mx-auto ">
              <h2 className="text-xl font-semibold text-gray-700 mb-4">
                Conversions
              </h2>
              <div className="relative w-48 h-48 mx-auto mb-4">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle
                    className="text-gray-200 stroke-current"
                    strokeWidth="10"
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                  ></circle>
                  <circle
                    className="text-orange-400 progress-ring stroke-current"
                    strokeWidth="10"
                    strokeLinecap="round"
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    strokeDasharray="251.2"
                    strokeDashoffset="87.92"
                  ></circle>
                </svg>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                  <span className="text-3xl font-bold text-gray-700">
                    65.2%
                  </span>
                  <p className="text-sm text-gray-500">Returning Customer</p>
                </div>
              </div>
              <div className="flex justify-between text-sm mb-4">
                <span className="text-gray-500">This Week</span>
                <span className="text-gray-500">Last Week</span>
              </div>
              <div className="flex justify-between text-lg font-semibold mb-4">
                <span className="text-gray-700">23.5k</span>
                <span className="text-gray-700">41.05k</span>
              </div>
              <button className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-200 transition duration-200">
                View Details
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="bg-white p-3 rounded-lg py-10 shadow-md max-w-sm mx-auto">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  Top Pages
                </h2>
                <button className="text-orange-500 hover:text-orange-600 text-sm font-medium">
                  View All
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Page Path
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Page Views
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Exit Rate
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {pages.map((page, index) => (
                      <tr
                        key={index}
                        className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {page.path}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {page.views}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <span
                            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getExitRateColor(
                              page.exitRate
                            )}`}
                          >
                            {page.exitRate}%
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center w-full lg:w-96 lg:mb-5 bg-white rounded-lg shadow-md">
          <TEChart
            type="doughnut"
            data={{
              labels: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ],
              datasets: [
                {
                  label: "Traffic",
                  data: [2112, 2343, 2545, 3423, 2365, 1985, 987],
                  backgroundColor: [
                    "rgba(63, 81, 181, 0.5)",
                    "rgba(77, 182, 172, 0.5)",
                    "rgba(66, 133, 244, 0.5)",
                    "rgba(156, 39, 176, 0.5)",
                    "rgba(233, 30, 99, 0.5)",
                    "rgba(66, 73, 244, 0.4)",
                    "rgba(66, 133, 244, 0.2)",
                  ],
                },
              ],
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardMainGraph;
