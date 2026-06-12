import {
  useState,
  useEffect
} from "react";

import axios from "axios";

import toast from "react-hot-toast";

export default function Withdraw() {

  const [user, setUser] = useState<any>(null);

  const userEmail =
    localStorage.getItem(
      "userEmail"
    );

  const [coins,
    setCoins] =
    useState(0);

  const [rewardType,
  setRewardType] =
  useState("10000");

  const [loading,
    setLoading] =
    useState(false);

  // LOAD USER
  useEffect(() => {

    if (!userEmail)
      return;

    axios
  .get(`http://localhost:8080/api/auth/user/${userEmail}`)
  .then((response) => {

    setUser(response.data);
    setCoins(response.data.coins);

  });
  }, []);

  // WITHDRAW
  const handleWithdraw =
    async (
      e: React.FormEvent
    ) => {

    e.preventDefault();

    // MINIMUM
    if (coins < parseInt(rewardType)) {

      toast.error(
  `You need ${parseInt(rewardType).toLocaleString()} coins`
);

      return;
    }

    setLoading(true);

    try {

      const response =
        await axios.post(
          "http://localhost:8080/api/auth/withdraw",
          {
            userEmail,
            coins: parseInt(rewardType),
            rewardType,
          }
        );

      toast.success(
        response.data
      );

      

    } catch (error) {

      console.log(error);

      toast.error(
        "Withdraw failed!"
      );

    } finally {

      setLoading(false);

    }
  };

  return (

    <div className="min-h-screen bg-gray-100 py-20 px-6">

      <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl p-10">

        <h1 className="text-5xl font-bold mb-8 text-center">

          Withdraw Rewards

        </h1>

        {/* COINS */}
        <div className="bg-yellow-50 rounded-2xl p-6 text-center mb-8">

          <p className="text-lg text-gray-600 mb-2">

            Available Coins

          </p>

          <h2 className="text-5xl font-bold text-yellow-600">

            {coins}

          </h2>

        </div>

        {/* FORM */}
        <form
          onSubmit={handleWithdraw}
          className="space-y-6"
        >

          {/* REWARD TYPE */}
          <div>

            <label className="block text-lg font-semibold mb-2">

              Reward Type

            </label>

           <select
  value={rewardType}
  onChange={(e) =>
    setRewardType(
      e.target.value
    )
  }
  className="w-full border rounded-2xl px-5 py-4"
>

  {!user?.bonusRedeemed && (
  <option value="10000">
    🎁 Welcome Reward - ₹10 Amazon Gift Card (10,000 Coins)
  </option>
)}

  <option value="100000">
    💰 ₹100 Amazon Gift Card (100,000 Coins)
  </option>

  <option value="200000">
    💰 ₹200 Amazon Gift Card (200,000 Coins)
  </option>

  <option value="500000">
    💰 ₹500 Amazon Gift Card (500,000 Coins)
  </option>

  <option value="1000000">
    💰 ₹1000 Amazon Gift Card (1,000,000 Coins)
  </option>

</select>


<div className="bg-blue-50 border border-blue-200 rounded-2xl p-4">

  <p className="text-blue-700 font-semibold">

    🎁 ₹10 Gift Card = One Time Welcome Reward

  </p>

  <p className="text-gray-700 mt-2">

    After completing your first redemption,
    you can continue earning coins and redeem:

  </p>

  <ul className="mt-3 text-gray-700 space-y-2">

    <li>💰 ₹100 Gift Card → 100,000 Coins</li>

    <li>💰 ₹200 Gift Card → 200,000 Coins</li>

    <li>💰 ₹500 Gift Card → 500,000 Coins</li>

    <li>💰 ₹1000 Gift Card → 1,000,000 Coins</li>

  </ul>

  <p className="mt-3 text-green-700 font-medium">

    ✅ ₹100, ₹200, ₹500 and ₹1000 rewards can be redeemed unlimited times.

  </p>

</div>
          </div>

         
          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-2xl text-xl font-semibold transition"
          >

            {loading
  ? "Processing..."
  : `Redeem ${parseInt(rewardType).toLocaleString()} Coins`}
          </button>

        </form>

      </div>

    </div>
  );
}