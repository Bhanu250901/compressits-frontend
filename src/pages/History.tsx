import {
  useEffect,
  useState
} from "react";

import axios from "axios";

import {
  History as HistoryIcon
} from "lucide-react";

export default function History() {

  const [showCoupon, setShowCoupon] = useState(false);

const [couponCode, setCouponCode] = useState("");

  const userEmail =
    localStorage.getItem(
      "userEmail"
    );

  
  const [withdraws,
    setWithdraws] =
    useState<any[]>([]);

  const [activeTab,
  setActiveTab] =
  useState("coins");

const [coinHistory,
  setCoinHistory] =
  useState<any[]>([]);  

const [copied,
  setCopied] =
  useState(false);  

  // LOAD DATA
  useEffect(() => {

    axios
  .get(
    `https://compressits-backend-production.up.railway.app/api/auth/coin-history/${userEmail}`
  )
  .then((response) => {

    setCoinHistory(
      response.data
    );

  });

    // WITHDRAWS
    axios
      .get(
        "https://compressits-backend-production.up.railway.app/api/auth/withdraw-requests"
      )
      .then((response) => {

        const filtered =
          response.data.filter(
            (item: any) =>

              item.userEmail ===
              userEmail
          );

        setWithdraws(
          filtered
        );

      });

  }, []);

  return (

    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-20 px-6">

      <div className="max-w-5xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-12">

          <div className="inline-flex items-center gap-3 bg-white px-5 py-3 rounded-full shadow-sm mb-6">

            <HistoryIcon className="text-blue-600" />

            <span className="font-medium">

              User Activity

            </span>

          </div>

          <h1 className="text-5xl font-bold mb-4">

            History

          </h1>

          <div className="flex gap-4 justify-center mb-8">

  <button
    onClick={() =>
      setActiveTab("coins")
    }
    className={`px-6 py-3 rounded-xl ${
      activeTab === "coins"
        ? "bg-blue-600 text-white"
        : "bg-gray-200"
    }`}
  >
    🪙 Coin History
  </button>

  <button
    onClick={() =>
      setActiveTab("redeem")
    }
    className={`px-6 py-3 rounded-xl ${
      activeTab === "redeem"
        ? "bg-blue-600 text-white"
        : "bg-gray-200"
    }`}
  >
    💰 Redeem History
  </button>

</div>

          <p className="text-xl text-gray-600">

            Your rewards and withdraw history

          </p>

        </div>

        {/* WITHDRAW HISTORY */}
        {activeTab === "coins" && (

<div className="bg-white rounded-3xl shadow-xl p-8">

  <h2 className="text-3xl font-bold mb-8">
    Coin History
  </h2>

  {coinHistory.length === 0 ? (

  <p className="text-gray-500">
    No coin history found.
  </p>

) : (

  <table className="w-full">

    <thead className="bg-gray-100">

      <tr>
        <th className="p-4 text-left">
          Activity
        </th>

        <th className="p-4 text-left">
          Coins
        </th>
      </tr>

    </thead>

    <tbody>

      {coinHistory.map((item: any) => (

        <tr
          key={item.id}
          className="border-b"
        >

          <td className="p-4">
            {item.activity}
          </td>

          <td className="p-4 text-green-600 font-bold">
            +{item.coins}
          </td>

        </tr>

      ))}

    </tbody>

  </table>

)}

</div>

)}

        {activeTab === "redeem" && (

        <div className="bg-white rounded-3xl shadow-xl p-8">

          <h2 className="text-3xl font-bold mb-8">

            Withdraw Requests

          </h2>

          {withdraws.length === 0 ? (

            <p className="text-gray-500">

              No withdraw history found.

            </p>

          ) : (

            <div className="overflow-x-auto">

              <table className="w-full">

                <thead className="bg-gray-100">

                  <tr>

                    <th className="p-4 text-left">

                      Reward

                    </th>

                    <th className="p-4 text-left">

                      Coins

                    </th>


                    <th className="p-4 text-left">

                      Status

                    </th>

                    <th className="p-4 text-left">

  Coupon

</th>

                  </tr>

                </thead>

                <tbody>

                  {withdraws.map(
                    (item) => (

                    <tr
                      key={item.id}
                      className="border-b"
                    >

                      <td className="p-4 font-semibold">

  {item.coins === 10000 &&
    "₹10 Amazon Gift Card"}

  {item.coins === 100000 &&
    "₹100 Amazon Gift Card"}

  {item.coins === 200000 &&
    "₹200 Amazon Gift Card"}

  {item.coins === 500000 &&
    "₹500 Amazon Gift Card"}

  {item.coins === 1000000 &&
    "₹1000 Amazon Gift Card"}

</td>
                      <td className="p-4 font-bold text-yellow-600">

                        {item.coins}

                      </td>

                

                      <td className="p-4">

                        <span
                          className={`px-4 py-2 rounded-full text-sm font-semibold ${
                            item.status ===
                            "APPROVED"
                              ? "bg-green-100 text-green-700"
                              : item.status ===
                                "REJECTED"
                              ? "bg-red-100 text-red-700"
                              : "bg-yellow-100 text-yellow-700"
                          }`}
                        >

                          {item.status}

                        </span>

                      </td>

                      <td className="p-4">

  {item.status === "APPROVED" &&
   item.couponCode ? (

    <button
  onClick={() => {
    setCouponCode(item.couponCode);
    setShowCoupon(true);
  }}
  className="bg-green-600 text-white px-4 py-2 rounded-xl"
>
  View Coupon
</button>

  ) : item.status === "REJECTED" ? (

    <span className="text-red-600 font-semibold">
      Coins Refunded
    </span>

  ) : (

    <span className="text-yellow-600 font-semibold">
      Waiting For Approval
    </span>

  )}

</td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

          )}

        </div>

        )}

      </div>
      {showCoupon && (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

    <div className="bg-white rounded-2xl p-8 w-[400px] text-center">

      <h2 className="text-2xl font-bold mb-4">
        🎁 Amazon Gift Card
      </h2>

      <div className="bg-gray-100 border rounded-xl p-4 mb-4">

        <p className="font-mono text-lg break-all">
          {couponCode}
        </p>

      </div>

      <button
  onClick={() => {

    navigator.clipboard.writeText(
      couponCode
    );

    setCopied(true);

    setTimeout(() => {

      setCopied(false);

    }, 2000);

  }}
  className={`px-4 py-2 rounded-lg mr-2 text-white ${
    copied
      ? "bg-green-600"
      : "bg-blue-600"
  }`}
>

  {copied
    ? "✅ Copied"
    : "📋 Copy Code"}

</button>

      <button
       onClick={() => {

  setShowCoupon(false);

  setCopied(false);

}}
        className="bg-red-600 text-white px-4 py-2 rounded-lg"
      >
        Close
      </button>

    </div>

  </div>
)}

    </div>
  );
}