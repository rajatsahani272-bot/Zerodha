import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [user, setUser] = useState(null);

  // Get logged-in user
  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get(
          "https://zerodha-ezwn.onrender.com/auth/me",
          {
            withCredentials: true,
          }
        );

        console.log("Logged in user:", response.data.user);

        setUser(response.data.user);
      } catch (err) {
        console.log(
          "User fetch error:",
          err.response?.data || err.message
        );
      }
    };

    getUser();
  }, []);

  // Menu click
  const handleMenuClick = (index) => {
    setSelectedMenu(index);
    setIsProfileOpen(false);
  };

  // Profile click
  const handleProfileClick = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  // Logout
  const handleLogout = async () => {
    try {
      const response = await axios.post(
        "https://zerodha-ezwn.onrender.com/logout",
        {},
        {
          withCredentials: true,
        }
      );

      console.log("Logout successful:", response.data);

      setIsProfileOpen(false);

      // Login application is running on port 3000
      window.location.href = "http://localhost:3000/signup";
    } catch (err) {
      console.log(
        "Logout error:",
        err.response?.data || err.message
      );
    }
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  // Username
  const username = user?.name || "User";

  // First two letters for avatar
  const avatar = username
    .substring(0, 2)
    .toUpperCase();

  return (
    <div className="menu-container">

      {/* Logo */}
      <img
        src="logo.png"
        alt="Zerodha"
        style={{ width: "50px" }}
      />

      <div className="menus">

        {/* Main Menu */}
        <ul>

          {/* Dashboard */}
          <li>
            <Link
              to="/dashboard"
              onClick={() => handleMenuClick(0)}
              style={{ textDecoration: "none" }}
            >
              <p
                className={
                  selectedMenu === 0
                    ? activeMenuClass
                    : menuClass
                }
              >
                Dashboard
              </p>
            </Link>
          </li>

          {/* Orders */}
          <li>
            <Link
              to="/dashboard/orders"
              onClick={() => handleMenuClick(1)}
              style={{ textDecoration: "none" }}
            >
              <p
                className={
                  selectedMenu === 1
                    ? activeMenuClass
                    : menuClass
                }
              >
                Orders
              </p>
            </Link>
          </li>

          {/* Holdings */}
          <li>
            <Link
              to="/dashboard/holdings"
              onClick={() => handleMenuClick(2)}
              style={{ textDecoration: "none" }}
            >
              <p
                className={
                  selectedMenu === 2
                    ? activeMenuClass
                    : menuClass
                }
              >
                Holdings
              </p>
            </Link>
          </li>

          {/* Positions */}
          <li>
            <Link
              to="/dashboard/positions"
              onClick={() => handleMenuClick(3)}
              style={{ textDecoration: "none" }}
            >
              <p
                className={
                  selectedMenu === 3
                    ? activeMenuClass
                    : menuClass
                }
              >
                Positions
              </p>
            </Link>
          </li>

          {/* Funds */}
          <li>
            <Link
              to="/dashboard/funds"
              onClick={() => handleMenuClick(4)}
              style={{ textDecoration: "none" }}
            >
              <p
                className={
                  selectedMenu === 4
                    ? activeMenuClass
                    : menuClass
                }
              >
                Funds
              </p>
            </Link>
          </li>

          {/* Apps */}
          <li>
            <Link
              to="/dashboard/apps"
              onClick={() => handleMenuClick(5)}
              style={{ textDecoration: "none" }}
            >
              <p
                className={
                  selectedMenu === 5
                    ? activeMenuClass
                    : menuClass
                }
              >
                Apps
              </p>
            </Link>
          </li>

        </ul>

        <hr />

        {/* Profile */}
        <div
          className="profile"
          onClick={handleProfileClick}
        >
          <div className="avatar">
            {avatar}
          </div>

          <p className="username">
            {username}
          </p>
        </div>

        {/* Profile Dropdown */}
        {isProfileOpen && (
          <div className="profile-menu">

            <ul>

              <li>
                <Link
                  to="/dashboard/profile"
                  style={{ textDecoration: "none" }}
                  onClick={() => setIsProfileOpen(false)}
                >
                  Profile
                </Link>
              </li>

              <li>
                <Link
                  to="/dashboard/settings"
                  style={{ textDecoration: "none" }}
                  onClick={() => setIsProfileOpen(false)}
                >
                  Settings
                </Link>
              </li>

              <li>
                <button
                  type="button"
                  onClick={handleLogout}
                  className="logout-btn"
                >
                  Logout
                </button>
              </li>

            </ul>

          </div>
        )}

      </div>
    </div>
  );
};

export default Menu;