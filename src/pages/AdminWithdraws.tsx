import {
  useEffect,
  useState
} from "react";

import axios from "axios";

import toast from "react-hot-toast";

export default function AdminWithdraws() {

  const [requests,
    setRequests] =
    useState<any[]>([]);

    const [couponCodes,
  setCouponCodes] =
  useState<Record<number, string>>({});

  // LOAD REQUESTS
  const fetchRequests =
    async () => {

    try {

      const response =
        await axios.get(
          "https://compressits-backend-production.up.railway.app/api/auth/withdraw-requests"
        );

      setRequests(
        response.data
      );

    } catch (error) {

      console.log(error);
    }
  };

  useEffect(() => {

    fetchRequests();

  }, []);

  // APPROVE
const approveRequest =
  async (
    id: number
  ) => {

  const couponCode =
    couponCodes[id];

  if (!couponCode) {

    toast.error(
      "Enter coupon code first!"
    );

    return;
  }

  try {

    const response =
     await axios.post(
  `https://compressits-backend-production.up.railway.app/api/auth/approve-withdraw/${id}/${couponCode}`
);

    toast.success(
      response.data
    );

    fetchRequests();

  } catch (error) {

    console.log(error);

    toast.error(
      "Approval failed!"
    );
  }
};

  // REJECT
  const rejectRequest =
    async (
      id: number
    ) => {

    try {

      const response =
        await axios.post(
          `https://compressits-backend-production.up.railway.app/api/auth/reject-withdraw/${id}`
        );

      toast.success(
        response.data
      );

      fetchRequests();

    } catch (error) {

      console.log(error);

      toast.error(
        "Reject failed!"
      );
    }
  };

  return (

    <div className="min-h-screen bg-gray-100 p-6">

      <div className="max-w-7xl mx-auto">

        <div className="bg-white rounded-3xl shadow-xl p-10">

          <h1 className="text-5xl font-bold mb-10">

            Withdraw Requests

          </h1>

          <div className="overflow-x-auto">

            <table className="w-full bg-gray-50 rounded-2xl overflow-hidden">

              <thead className="bg-gray-200">

                <tr>

  <th className="p-4 text-left">
    Email
  </th>

  <th className="p-4 text-left">
    Coins
  </th>

  <th className="p-4 text-left">
    Reward
  </th>

  <th className="p-4 text-left">
    Payment
  </th>

  <th className="p-4 text-left">
    Coupon Input
  </th>

  <th className="p-4 text-left">
    Coupon Code
  </th>

  <th className="p-4 text-left">
    Status
  </th>

  <th className="p-4 text-left">
    Actions
  </th>

</tr>

              </thead>

             <tbody>

  {requests.map((request) => (

    <tr
      key={request.id}
      className="border-b"
    >

      <td className="p-4">
        {request.userEmail}
      </td>

      <td className="p-4 font-bold text-blue-600">
        {request.coins}
      </td>

      <td className="p-4">
        {request.rewardType}
      </td>

      <td className="p-4">
        {request.paymentDetails || "-"}
      </td>

      <td className="p-4">

        {request.status === "PENDING" ? (

          <input
            type="text"
            placeholder="Amazon Coupon"
            value={
              couponCodes[request.id] || ""
            }
            onChange={(e) =>
              setCouponCodes({
                ...couponCodes,
                [request.id]:
                  e.target.value,
              })
            }
            className="border rounded-xl px-3 py-2 w-48"
          />

        ) : (

          "-"
        )}

      </td>

      <td className="p-4 font-semibold text-green-600">

        {request.couponCode || "-"}

      </td>

      <td className="p-4">

        <span
          className={`px-4 py-2 rounded-full text-sm font-medium ${
            request.status === "APPROVED"
              ? "bg-green-100 text-green-700"
              : request.status === "REJECTED"
              ? "bg-red-100 text-red-700"
              : "bg-yellow-100 text-yellow-700"
          }`}
        >
          {request.status}
        </span>

      </td>

      <td className="p-4">

        {request.status === "PENDING" ? (

          <div className="flex gap-3">

            <button
              onClick={() =>
                approveRequest(
                  request.id
                )
              }
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-xl"
            >
              Approve
            </button>

            <button
              onClick={() =>
                rejectRequest(
                  request.id
                )
              }
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-xl"
            >
              Reject
            </button>

          </div>

        ) : request.status === "APPROVED" ? (

          <span className="text-green-600 font-bold">
            ✓ Approved
          </span>

        ) : (

          <span className="text-red-600 font-bold">
            ✗ Rejected
          </span>

        )}

      </td>

    </tr>

  ))}

</tbody>

            </table>

          </div>

        </div>

      </div>

    </div>
  );
}