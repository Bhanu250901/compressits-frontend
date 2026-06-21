import {
  useEffect,
  useState
} from "react";

import axios from "axios";

import {
  Trophy
} from "lucide-react";

import { Helmet } from "react-helmet-async";

export default function Leaderboard() {

  const [users, setUsers] =
    useState<any[]>([]);

  useEffect(() => {

    axios
      .get(
        "https://compressits-backend-production.up.railway.app/api/auth/leaderboard"
      )
      .then((response) => {

        setUsers(
          response.data
        );

      })
      .catch((error) => {

        console.log(error);

      });

  }, []);

 return (
  <>
    <Helmet>
      <title>
        Leaderboard | CompressIts
      </title>

      <meta
        name="description"
        content="View the CompressIts leaderboard and see top users ranked by reward coins earned through file compression and conversion."
      />

      <meta
        name="keywords"
        content="CompressIts leaderboard, top users, reward coins, file compression rewards, file conversion rewards"
      />

      <meta
        property="og:title"
        content="Leaderboard | CompressIts"
      />

      <meta
        property="og:description"
        content="Check the top users and reward coin rankings on CompressIts."
      />

      <meta
        property="og:url"
        content="https://compressits.com/leaderboard"
      />

      <link
        rel="canonical"
        href="https://compressits.com/leaderboard"
      />
    </Helmet>

    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto">

        <div className="bg-white rounded-3xl shadow-xl p-10">

          <div className="flex items-center gap-4 mb-10">

            <Trophy
              className="text-yellow-500"
              size={45}
            />

            <h1 className="text-5xl font-bold">

              Leaderboard

            </h1>

          </div>

          <div className="space-y-4">

            {users.map(
              (
                user,
                index
              ) => (

              <div
                key={user.id}
                className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 bg-gray-50 rounded-2xl p-6"
              >

                <div className="flex items-center gap-5">

                  <div className="text-3xl font-bold text-gray-500">

                    #{index + 1}

                  </div>

                  <div>

                    <h2 className="text-2xl font-bold">

                      {user.name}

                    </h2>

                    <p className="text-gray-500">

                      {
  user.email
    .split("@")[0]
    .slice(0, 4) +
  "xxxxxxxx@" +
  user.email
    .split("@")[1]
}

                    </p>

                  </div>

                </div>

                <div className="text-3xl font-bold text-yellow-600">

                  {user.coins} 🪙

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </div>
    </>
  );
}