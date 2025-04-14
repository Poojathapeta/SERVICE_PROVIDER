import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");

    if (token && user) {
      setIsLoggedIn(true);
      const parsedUser = JSON.parse(user);
      setUserName(parsedUser.name || "User");
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setUserName("");
    router.push("/login");
  };

  return (
    <nav className="bg-blue-600 text-white px-6 py-4 shadow-md flex justify-between items-center">
      
      <Link href="/" className="text-xl font-bold hover:text-gray-200 transition flex items-center space-x-2">
      <img
    src="https://www.ateamcorp.com/service/images/navbar-logo.png" // 🔁 your actual logo URL here
    alt="Logo"
    className="h-10 w-auto"
  />
      Corp Services
      </Link>
      
      <div className="space-x-4 text-sm font-medium flex items-center">
        <Link href="/" className="hover:text-gray-300 transition">Home</Link>

        {isLoggedIn ? (
          <>
            <Link href="/booking" className="hover:text-gray-300 transition">Booking</Link>
            <span className="text-white font-semibold">Hi, {userName} 👋</span>
            <button
              onClick={handleLogout}
              className="text-red-300 hover:text-red-200 transition"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link href="/login" className="hover:text-gray-300 transition">Login</Link>
            <Link href="/register" className="hover:text-gray-300 transition">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}
