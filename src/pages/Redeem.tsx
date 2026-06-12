import {
  useState
} from "react";

import axios from "axios";

import toast from "react-hot-toast";

export default function Redeem() {

  const [coins, setCoins] =
    useState("");

  const [rewardType,
    setRewardType] =
    useState("UPI");

  const [paymentDetails,
    setPaymentDetails] =
    useState("");

  const userEmail =
    localStorage.getItem(
      "userEmail"
    );

  const handleRedeem =
    async (
      e: React.FormEvent
    ) => {

    e.preventDefault();

    try {

      const response =
        await axios.post(
          "http://localhost:8080/api/auth/withdraw",
          {
            userEmail,
            coins:
              Number(coins),
            rewardType,
            paymentDetails,
          }
        );

      toast.success(
        response.data
      );

      setCoins("");
      setPaymentDetails("");

    } catch (error) {

      console.log(error);

      toast.error(
        "Redeem failed!"
      );
    }
  };

  return (

    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-6">

      <div className="bg-white rounded-3xl shadow-xl p-10 w-full max-w-lg">

        <h1 className="text-4xl font-bold text-center mb-8">

          Redeem Coins

        </h1>

        <form
          onSubmit={handleRedeem}
          className="space-y-5"
        >

          {/* Coins */}
          <input
            type="number"
            placeholder="Enter coins"
            value={coins}
            onChange={(e) =>
              setCoins(
                e.target.value
              )
            }
            className="w-full border rounded-2xl px-5 py-4 outline-none"
          />

          {/* Reward Type */}
          <select
            value={rewardType}
            onChange={(e) =>
              setRewardType(
                e.target.value
              )
            }
            className="w-full border rounded-2xl px-5 py-4 outline-none"
          >

            <option value="UPI">
              UPI Cash
            </option>

            <option value="Amazon">
              Amazon Gift Card
            </option>

            <option value="Paytm">
              Paytm Wallet
            </option>

          </select>

          {/* Payment Details */}
          <input
            type="text"
            placeholder="Enter UPI ID or Email"
            value={paymentDetails}
            onChange={(e) =>
              setPaymentDetails(
                e.target.value
              )
            }
            className="w-full border rounded-2xl px-5 py-4 outline-none"
          />

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl text-lg font-semibold transition"
          >

            Submit Redeem Request

          </button>

        </form>

      </div>

    </div>
  );
}