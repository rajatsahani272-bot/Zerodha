import React, { useEffect, useState } from "react";
import axios from "axios";

const ProtectedRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3002/auth/me",
          {
            withCredentials: true,
          }
        );

        console.log("Authentication successful:", response.data);
        setIsAuthenticated(true);
      } catch (err) {
        console.log(
          "Authentication failed:",
          err.response?.data || err.message
        );

        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    window.location.href = "http://localhost:3001/login";
    return null;
  }

  return children;
};

export default ProtectedRoute;