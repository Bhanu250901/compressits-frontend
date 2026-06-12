import {
  Users,
  Coins,
  Gift,
  Bell,
  Search,
} from "lucide-react";

export default function AdminDashboard() {

  return (

    <div className="min-h-screen bg-gray-100 p-6">

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-10">

          <div>

            <h1 className="text-5xl font-bold text-gray-900">
              Admin Panel
            </h1>

            <p className="text-gray-600 text-lg mt-2">
              Manage users, rewards and withdrawals
            </p>

          </div>

          {/* Notifications */}
          <div className="relative">

            <button className="bg-white p-4 rounded-2xl shadow-md">

              <Bell size={28} />

            </button>

            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
              3
            </span>

          </div>

        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-10">

          {/* Total Users */}
          <div className="bg-white rounded-3xl p-6 shadow-md">

            <Users
              className="text-blue-600 mb-5"
              size={40}
            />

            <h2 className="text-4xl font-bold mb-2">
              245
            </h2>

            <p className="text-gray-500">
              Total Users
            </p>

          </div>

          {/* Coins */}
          <div className="bg-white rounded-3xl p-6 shadow-md">

            <Coins
              className="text-yellow-500 mb-5"
              size={40}
            />

            <h2 className="text-4xl font-bold mb-2">
              12K
            </h2>

            <p className="text-gray-500">
              Coins Distributed
            </p>

          </div>

          {/* Redeems */}
          <div className="bg-white rounded-3xl p-6 shadow-md">

            <Gift
              className="text-green-500 mb-5"
              size={40}
            />

            <h2 className="text-4xl font-bold mb-2">
              56
            </h2>

            <p className="text-gray-500">
              Rewards Redeemed
            </p>

          </div>

          {/* Pending */}
          <div className="bg-white rounded-3xl p-6 shadow-md">

            <Bell
              className="text-red-500 mb-5"
              size={40}
            />

            <h2 className="text-4xl font-bold mb-2">
              8
            </h2>

            <p className="text-gray-500">
              Pending Requests
            </p>

          </div>

        </div>

        {/* User Table */}
        <div className="bg-white rounded-3xl shadow-md p-8">

          {/* Top */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-5 mb-8">

            <h2 className="text-3xl font-bold">
              Users
            </h2>

            {/* Search */}
            <div className="flex items-center gap-3 bg-gray-100 px-5 py-3 rounded-2xl w-full md:w-[350px]">

              <Search
                size={22}
                className="text-gray-500"
              />

              <input
                type="text"
                placeholder="Search users..."
                className="bg-transparent outline-none w-full"
              />

            </div>

          </div>

          {/* Table */}
          <div className="overflow-x-auto">

            <table className="w-full">

              <thead>

                <tr className="text-left border-b">

                  <th className="py-4">
                    User
                  </th>

                  <th className="py-4">
                    Email
                  </th>

                  <th className="py-4">
                    Coins
                  </th>

                  <th className="py-4">
                    Status
                  </th>

                  <th className="py-4">
                    Action
                  </th>

                </tr>

              </thead>

              <tbody>

                <tr className="border-b hover:bg-gray-50 transition">

                  <td className="py-5 font-medium">
                    Bhanu
                  </td>

                  <td>
                    bhanu@gmail.com
                  </td>

                  <td className="font-bold text-blue-600">
                    120
                  </td>

                  <td>

                    <span className="bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm">
                      Active
                    </span>

                  </td>

                  <td>

                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl transition">
                      View
                    </button>

                  </td>

                </tr>

                <tr className="border-b hover:bg-gray-50 transition">

                  <td className="py-5 font-medium">
                    Rahul
                  </td>

                  <td>
                    rahul@gmail.com
                  </td>

                  <td className="font-bold text-blue-600">
                    340
                  </td>

                  <td>

                    <span className="bg-yellow-100 text-yellow-600 px-4 py-2 rounded-full text-sm">
                      Pending
                    </span>

                  </td>

                  <td>

                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl transition">
                      View
                    </button>

                  </td>

                </tr>

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </div>
  );
}