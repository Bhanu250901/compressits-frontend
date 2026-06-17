import {
  useState,
  useEffect
} from "react";

import {
  Menu,
  X,
  Coins,
  Wallet,
  History,
  LayoutDashboard,
  LogOut
} from "lucide-react";

import {
  Link,
  NavLink,
  useNavigate
} from "react-router-dom";

import axios from "axios";

export default function Navbar() {

  const navigate = useNavigate();

  const [isOpen, setIsOpen] =
    useState(false);

  const [isLoggedIn, setIsLoggedIn] =
    useState(false);

  const [coins,
    setCoins] =
    useState(0);

  // FETCH USER
  useEffect(() => {

    const fetchUser =
      async () => {

      const user =
        localStorage.getItem(
          "userEmail"
        );

      if (!user)
        return;

      setIsLoggedIn(true);

      try {

        const response =
          await axios.get(
            `https://compressits-backend-production.up.railway.app/api/auth/user/${user}`
          );

        setCoins(
          response.data.coins
        );

      } catch (error) {

        console.log(error);

      }
    };

    fetchUser();

  }, []);

  // LOGOUT
  const handleLogout = () => {

    localStorage.removeItem(
      "userEmail"
    );

    setIsLoggedIn(false);

    navigate("/login");
  };

  // NAV LINKS
  const navLinks = [

  {
    name: "Image Compress",
    path: "/image-compress",
    icon: "🖼"
  },

  {
    name: "PDF Compress",
    path: "/pdf-compress",
    icon: "📄"
  },

  {
    name: "Image Convert",
    path: "/convert",
    icon: "🔄"
  },

  {
    name: "PDF Convert",
    path: "/document-convert",
    icon: "📑"
  }

];

  return (

    <nav className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b">

      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <Link
  to="/"
  className="flex items-center gap-1"
>

  <div className="text-blue-600 text-1xl font-bold">

    ◢⚡◣

  </div>

  <h1 className="text-1xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">

    CompressIts

  </h1>

</Link>

        {/* DESKTOP MENU */}
        <div className="hidden xl:flex items-center gap-4">

          {navLinks.map((link) => (

            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `flex items-center gap-1 font-medium transition-all hover:text-blue-600 ${
                  isActive
                    ? "text-blue-600"
                    : "text-gray-700"
                }`
              }
            >

              {link.icon}

              {link.name}

            </NavLink>

          ))}

          {/* LOGIN ONLY */}
          {isLoggedIn && (

            <>

              <NavLink
                to="/withdraw"
                className={({ isActive }) =>
                  `flex items-center gap-1 font-medium transition-all hover:text-blue-600 ${
                    isActive
                      ? "text-blue-600"
                      : "text-gray-700"
                  }`
                }
              >

                <Wallet size={18} />

                Withdraw

              </NavLink>

              <NavLink
                to="/history"
               className={({ isActive }) =>
  `flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
    isActive
      ? "bg-blue-100 text-blue-600"
      : "text-gray-700 hover:bg-gray-100 hover:text-blue-600"
  }`
}
              >

                <History size={18} />

                History

              </NavLink>

            </>

          )}

        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-1 md:gap-3">

          {isLoggedIn ? (

            <>

              {/* COINS */}
<div className="hidden md:flex items-center gap-2 bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full font-semibold shadow-sm">
  <Coins size={16} />
  {coins}
</div>

{/* DASHBOARD */}
<Link
  to="/dashboard"
  className="hidden md:flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-50 text-blue-600 hover:bg-blue-100 transition"
>
  <LayoutDashboard size={16} />
  Dashboard
</Link>

{/* LOGOUT */}
<button
  onClick={handleLogout}
  className="hidden md:flex items-center gap-2 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-xl shadow-sm transition"
>
  <LogOut size={16} />
  Logout
</button>

            </>

          ) : (

            <>

              <Link
                to="/login"
                className="hidden lg:block px-4 py-2 text-sm font-medium hover:bg-gray-100 rounded-xl transition"
              >

                Login

              </Link>

              <Link
                to="/register"
                className="hidden lg:block px-5 py-2 bg-blue-600 text-white text-sm font-medium rounded-xl hover:bg-blue-700 transition shadow-md"
              >

                Get Started

              </Link>

            </>

          )}

          {/* MOBILE BUTTON */}
          <button
            onClick={() =>
              setIsOpen(!isOpen)
            }
            className="xl:hidden"
          >

            {isOpen ? (

              <X size={30} />

            ) : (

              <Menu size={30} />

            )}

          </button>

        </div>

      </div>

      {/* MOBILE MENU */}
      {isOpen && (

        <div className="xl:hidden border-t bg-white px-6 py-6 flex flex-col gap-5 shadow-lg">

          {navLinks.map((link) => (

            <NavLink
              key={link.name}
              to={link.path}
              onClick={() =>
                setIsOpen(false)
              }
              className={({ isActive }) =>
                `flex items-center gap-3 text-lg font-medium transition ${
                  isActive
                    ? "text-blue-600"
                    : "text-gray-700"
                }`
              }
            >

              {link.icon}

              {link.name}

            </NavLink>

          ))}

          {/* LOGIN ONLY */}
          {isLoggedIn && (

            <>

              <NavLink
                to="/withdraw"
                onClick={() =>
                  setIsOpen(false)
                }
                className="flex items-center gap-3 text-lg font-medium text-gray-700"
              >

                <Wallet size={20} />

                Withdraw

              </NavLink>

              <NavLink
                to="/history"
                onClick={() =>
                  setIsOpen(false)
                }
                className="flex items-center gap-3 text-lg font-medium text-gray-700"
              >

                <History size={20} />

                History

              </NavLink>

            </>

          )}

          {/* AUTH */}
          {isLoggedIn ? (

            <>

              <Link
                to="/dashboard"
                className="flex items-center gap-3 text-lg font-medium"
              >

                <LayoutDashboard size={20} />

                Dashboard

              </Link>

              <div className="flex items-center gap-3 text-lg font-medium text-yellow-600">

                <Coins size={20} />

                {coins} Coins

              </div>

              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-5 py-3 rounded-2xl text-center font-medium hover:bg-red-600 transition"
              >

                Logout

              </button>

            </>

          ) : (

            <>

              <Link
                to="/login"
                onClick={() =>
                  setIsOpen(false)
                }
                className="pt-2 text-lg font-medium"
              >

                Login

              </Link>

              <Link
                to="/register"
                onClick={() =>
                  setIsOpen(false)
                }
                className="bg-blue-600 text-white px-5 py-3 rounded-2xl text-center font-medium hover:bg-blue-700 transition"
              >

                Get Started Free

              </Link>

            </>

          )}

        </div>

      )}

    </nav>
  );
}