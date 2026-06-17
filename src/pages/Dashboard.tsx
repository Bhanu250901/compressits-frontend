import {
  Coins,
  User,
  Shield
} from "lucide-react";

import {
  useEffect,
  useState
} from "react";

import axios from "axios";


import toast from "react-hot-toast";

export default function Dashboard() {

  const userEmail =
    localStorage.getItem(
      "userEmail"
    );
  const isAdmin =
    userEmail ===
    "gandhambhanu2509@gmail.com";

  const [users, setUsers] =
    useState<any[]>([]);

  const [currentUser,
    setCurrentUser] =
    useState<any>(null);

  const [dailyClaimed,
    setDailyClaimed] =
    useState(false);

  const [search,
  setSearch] =
  useState(""); 
  
  const [withdrawRequests,
  setWithdrawRequests] =
  useState<any[]>([]);

  const [couponCodes,
  setCouponCodes] =
  useState<Record<number, string>>({});

  const [referralCode,
  setReferralCode] =
  useState("");

  // LOAD DATA
  useEffect(() => {

    // ADMIN USERS
    if (isAdmin) {

      axios
        .get(
          "https://compressits-backend-production.up.railway.app/api/auth/all-users"
        )
        .then((response) => {

          setUsers(
            response.data
          );

        axios
  .get(
    "https://compressits-backend-production.up.railway.app/api/auth/withdraw-requests"
  )
  .then((response) => {

    setWithdrawRequests(
      response.data
    );

  });  

        })
        .catch((error) => {

          console.log(error);

        });

    }

    // CURRENT USER
    if (userEmail) {

      axios
        .get(
          `https://compressits-backend-production.up.railway.app/api/auth/user/${userEmail}`
        )
        .then((response) => {

          setCurrentUser(
            response.data
          );

          // TODAY DATE
          const today =
            new Date()
              .toISOString()
              .split("T")[0];

          // CHECK CLAIM
          if (
            response.data
              ?.lastClaimDate ===
            today
          ) {

            setDailyClaimed(true);

          }

        })
        .catch((error) => {

          console.log(error);

        });

    }

  }, []);

  // TOTAL COINS
  const totalCoins =
    users.reduce(
      (
        total,
        user
      ) =>
        total +
        (user.coins || 0),

      0
    );

  // CLAIM DAILY REWARD
  const claimDailyReward =
    async () => {

    if (!userEmail) return;

    try {

      const response =
        await axios.post(
          `https://compressits-backend-production.up.railway.app/api/auth/daily-reward/${userEmail}`
        );

      toast.success(
        response.data
      );

      setDailyClaimed(true);

      // REFRESH USER
      const updatedUser =
        await axios.get(
          `https://compressits-backend-production.up.railway.app/api/auth/user/${userEmail}`
        );

      setCurrentUser(
        updatedUser.data
      );

    } catch (error) {

      console.log(error);

      toast.error(
        "Daily reward failed!"
      );
    }
  };

  const filteredUsers =
  users.filter((user) =>

    user.name
      ?.toLowerCase()
      .includes(
        search.toLowerCase()
      ) ||

    user.email
      ?.toLowerCase()
      .includes(
        search.toLowerCase()
      )

  );

  const approveRequest =
  async (id: number) => {

    const couponCode =
      couponCodes[id];

    if (!couponCode) {

      toast.error(
        "Enter coupon code!"
      );

      return;
    }

    try {

      await axios.post(
        `https://compressits-backend-production.up.railway.app/api/auth/approve-withdraw/${id}/${couponCode}`
      );

      toast.success(
        "Coupon sent!"
      );

      window.location.reload();

    } catch (error) {

      console.log(error);

      toast.error(
        "Approval failed!"
      );
    }
  };

const rejectRequest =
  async (id: number) => {

    try {

      await axios.post(
        `https://compressits-backend-production.up.railway.app/api/auth/reject-withdraw/${id}`
      );

      toast.success(
        "Request rejected!"
      );

      window.location.reload();

    } catch (error) {

      console.log(error);

      toast.error(
        "Reject failed!"
      );
    }
  };

  


  return (

    <div className="min-h-screen bg-gray-100 p-6">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="bg-white rounded-3xl p-8 shadow-md mb-8">

          <h1 className="text-3xl md:text-5xl font-bold mb-4">

            Dashboard

          </h1>

          <p className="text-gray-600 text-base md:text-lg">

            Welcome back 👋

          </p>

          <p className="text-blue-600 mt-2 font-medium">

            {userEmail}

          </p>

        </div>

        {/* ADMIN PANEL */}
        {isAdmin ? (

          <div className="bg-white rounded-3xl p-8 shadow-md">

            <div className="flex items-center gap-4 mb-6">

              <Shield
                className="text-red-500"
                size={40}
              />

              <h2 className="text-4xl font-bold">

                Admin Panel

              </h2>

            </div>

            {/* STATS */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">

              <div className="bg-blue-50 rounded-2xl p-6">

                <h3 className="text-2xl font-bold mb-2">

                  Total Users

                </h3>

                <p className="text-4xl font-bold text-blue-600">

                  {users.length}

                </p>

              </div>

              <div className="bg-yellow-50 rounded-2xl p-6">

                <h3 className="text-2xl font-bold mb-2">

                  Total Coins

                </h3>

                <p className="text-4xl font-bold text-yellow-600">

                  {totalCoins}

                </p>

              </div>

              <div className="bg-green-50 rounded-2xl p-6">

                <h3 className="text-2xl font-bold mb-2">

                  Active Users

                </h3>

                <p className="text-4xl font-bold text-green-600">

                  {users.length}

                </p>

              </div>

            </div>

            {/* USERS TABLE */}
            <div className="mt-10">

              <h3 className="text-3xl font-bold mb-6">

                Users Data

              </h3>
              <div className="mt-14">

  <h3 className="text-3xl font-bold mb-6">

    Withdraw Requests

  </h3>

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
            Details
          </th>

          <th className="p-4 text-left">
            Status
          </th>

          <th className="p-4 text-left">
            Action
          </th>

        </tr>

      </thead>

      <tbody>

        {withdrawRequests.map(
          (request) => (

          <tr
            key={request.id}
            className="border-b"
          >

            <td className="p-4">

              {request.userEmail}

            </td>

            <td className="p-4 font-bold text-yellow-600">

              {request.coins}

            </td>

            <td className="p-4">

              {request.rewardType}

            </td>

            <td className="p-4">

              {request.paymentDetails}

            </td>

            <td className="p-4">

              <span
                className={`px-4 py-2 rounded-full text-sm font-semibold ${
                  request.status ===
                  "APPROVED"
                    ? "bg-green-100 text-green-700"
                    : request.status ===
                      "REJECTED"
                    ? "bg-red-100 text-red-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >

                {request.status}

              </span>

            </td>

            <td className="p-4">

{request.status === "PENDING" ? (

  <div className="flex gap-2">

    <input
      type="text"
      placeholder="Coupon Code"
      value={
        couponCodes[
          request.id
        ] || ""
      }
      onChange={(e) =>
        setCouponCodes({
          ...couponCodes,
          [request.id]:
            e.target.value
        })
      }
      className="border px-2 py-1 rounded"
    />

    <button
      onClick={() =>
        approveRequest(
          request.id
        )
      }
      className="bg-green-600 text-white px-4 py-2 rounded"
    >
      Send
    </button>

    <button
      onClick={() =>
        rejectRequest(
          request.id
        )
      }
      className="bg-red-600 text-white px-4 py-2 rounded"
    >
      Reject
    </button>

  </div>

): request.status === "APPROVED" ? (

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

            <input
  type="text"
  placeholder="Search users..."
  value={search}
  onChange={(e) =>
    setSearch(
      e.target.value
    )
  }
  className="w-full border rounded-2xl px-5 py-4 mb-6 outline-none"
/>  

              <div className="overflow-x-auto">

                <table className="w-full bg-gray-50 rounded-2xl overflow-hidden">

                  <thead className="bg-gray-200">

                    <tr>

                      <th className="p-4 text-left">
                        Name
                      </th>

                      <th className="p-4 text-left">
                        Email
                      </th>

                      <th className="p-4 text-left">
                        Coins
                      </th>

                      <th className="p-4 text-left">
                        Referral
                      </th>

                    </tr>

                  </thead>

                  <tbody>

                    {filteredUsers.map(
                      (user) => (

                      <tr
                        key={user.id}
                        className="border-b"
                      >

                        <td className="p-4">

                          {user.name}

                        </td>

                        <td className="p-4">

                          {user.email}

                        </td>

                        <td className="p-4 text-blue-600 font-bold">

                          {user.coins}

                        </td>

                        <td className="p-4">

                          {user.referralCode}

                        </td>

                      </tr>

                    ))}

                  </tbody>

                </table>

              </div>

            </div>

          </div>

        ) : (

          // NORMAL USER
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">

            {/* COINS */}
            <div className="bg-white rounded-2xl p-4 md:p-8 shadow-md">

              <div className="flex items-center gap-4 mb-4">

                <Coins
                  className="text-yellow-500"
                  size={40}
                />

                <h2 className="text-xl md:text-3xl font-bold">

                  Coins

                </h2>

              </div>

             <p className="text-3xl md:text-5xl font-bold text-yellow-600">

                {currentUser?.coins || 0}

              </p>

            </div>

            {/* PROFILE */}
            <div className="bg-white rounded-2xl p-4 md:p-8 shadow-md">

              <div className="flex items-center gap-4 mb-4">

                <User
                  className="text-blue-500"
                  size={40}
                />

                <h2 className="text-3xl font-bold">

                  Profile

                </h2>

              </div>

              <p className="text-lg md:text-xl text-gray-700 mb-2">

                {currentUser?.name}

              </p>

              <p className="text-gray-500 mb-2">

                {currentUser?.email}

              </p>

              <p className="text-blue-600 font-semibold">

                Referral:
                {" "}
                {currentUser?.referralCode}

              </p>

              <div className="mt-4">

  <input
    type="text"
    placeholder="Enter Referral Code"
    value={referralCode}
    onChange={(e) =>
      setReferralCode(
        e.target.value
      )
    }
    className="w-full border rounded-xl px-4 py-3 mb-3"
  />

  <button
    onClick={async () => {

      try {

        const response =
          await axios.post(
            `https://compressits-backend-production.up.railway.app/api/auth/apply-referral/${userEmail}/${referralCode}`
          );

        toast.success(
          response.data
        );

        window.location.reload();

      } catch (error) {

        console.log(error);

        toast.error(
          "Referral failed!"
        );

      }

    }}
    className="w-full bg-blue-600 text-white py-3 rounded-xl"
  >

    Apply Referral

  </button>

</div>

            </div>

            {/* DAILY REWARD */}
            <div className="bg-white rounded-2xl p-4 md:p-8 shadow-md">

              <h2 className="text-3xl font-bold mb-4">

                Daily Reward

              </h2>

              <p className="text-gray-600 mb-6">

                Claim your free daily coins.

              </p>

              <button
                onClick={claimDailyReward}
                disabled={dailyClaimed}
                className={`w-full py-3 md:py-4 rounded-xl text-base md:text-lg font-semibold transition ${
                  dailyClaimed
                    ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                    : "bg-green-600 hover:bg-green-700 text-white"
                }`}
              >

                {dailyClaimed
                  ? "Already Claimed Today"
                  : "Claim +50 Coins"}

              </button>

            </div>

          </div>

        )}

      </div>

    </div>
  );
}