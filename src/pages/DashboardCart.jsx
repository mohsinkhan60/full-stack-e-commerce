
import { Eye, Pencil, Trash2 } from "lucide-react"

const DashboardCart = () => {
  const orders = [
    {
      id: "583488/80",
      created: "Apr 23, 2024",
      customer: "Gail C. Anderson",
      priority: "Normal",
      total: 1230.00,
      payment: "Unpaid",
      items: 4,
      delivery: "-",
      status: "Draft"
    },
    {
      id: "578246/80",
      created: "Apr 19, 2024",
      customer: "David A. Arnold",
      priority: "High",
      total: 1478.00,
      payment: "Paid",
      items: 5,
      delivery: "D-57837678",
      status: "Completed"
    },
    {
      id: "456754/80",
      created: "Apr 20, 2024",
      customer: "Jung S. Ayala",
      priority: "Normal",
      total: 987.00,
      payment: "Paid",
      items: 2,
      delivery: "-",
      status: "Packaging"
    },
    {
      id: "5834881/80",
      created: "Apr 23, 2024",
      customer: "Gail C. Anderson",
      priority: "Normal",
      total: 1230.00,
      payment: "Unpaid",
      items: 4,
      delivery: "-",
      status: "Draft"
    },
    {
      id: "5782467/80",
      created: "Apr 19, 2024",
      customer: "David A. Arnold",
      priority: "High",
      total: 1478.00,
      payment: "Paid",
      items: 5,
      delivery: "D-57837678",
      status: "Completed"
    },
    {
      id: "4567540/80",
      created: "Apr 20, 2024",
      customer: "Jung S. Ayala",
      priority: "Normal",
      total: 987.00,
      payment: "Paid",
      items: 2,
      delivery: "-",
      status: "Packaging"
    },
    // Add more orders as needed
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case 'Draft':
        return 'bg-gray-100 text-gray-800'
      case 'Packaging':
        return 'bg-yellow-100 text-yellow-800'
      case 'Completed':
        return 'bg-green-100 text-green-800'
      case 'Canceled':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getPaymentStatus = (status) => {
    switch (status) {
      case 'Paid':
        return 'bg-green-500 text-white'
      case 'Unpaid':
        return 'bg-gray-200 text-gray-700'
      case 'Refund':
        return 'bg-gray-200 text-gray-700'
      default:
        return 'bg-gray-200 text-gray-700'
    }
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-semibold text-gray-900">All Order List</h1>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="border-b">
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">Order ID</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">Created at</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">Customer</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">Priority</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">Total</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">Payment Status</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">Items</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">Delivery Number</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">Order Status</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={order.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="py-3 px-4 text-sm text-blue-600">#{order.id}</td>
                <td className="py-3 px-4 text-sm text-gray-500">{order.created}</td>
                <td className="py-3 px-4 text-sm text-orange-500">{order.customer}</td>
                <td className="py-3 px-4 text-sm text-gray-500">{order.priority}</td>
                <td className="py-3 px-4 text-sm text-gray-500">${order.total.toFixed(2)}</td>
                <td className="py-3 px-4">
                  <span className={`px-2 py-1 text-xs rounded-md ${getPaymentStatus(order.payment)}`}>
                    {order.payment}
                  </span>
                </td>
                <td className="py-3 px-4 text-sm text-gray-500">{order.items}</td>
                <td className="py-3 px-4 text-sm text-blue-600">{order.delivery}</td>
                <td className="py-3 px-4">
                  <span className={`px-2 py-1 text-xs rounded-md ${getStatusColor(order.status)}`}>
                    {order.status}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <div className="flex space-x-3">
                    <button className="text-gray-400 hover:text-gray-600">
                      <Eye className="w-5 h-5" />
                    </button>
                    <button className="text-gray-400 hover:text-gray-600">
                      <Pencil className="w-5 h-5" />
                    </button>
                    <button className="text-gray-400 hover:text-gray-600">
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default DashboardCart