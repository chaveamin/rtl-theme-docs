import React, { useState, useEffect } from "react";
import { Lock, Eye, EyeOff } from "lucide-react";

const parentRoutePasswords = {
  "/appkit": "appkit123",
};

const ProtectedRoute = ({ children, currentPath }) => {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isChecking, setIsChecking] = useState(true);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [parentRoute, setParentRoute] = useState("");

  const getParentRoute = (path) => {
    const match = path.match(/^\/([^\/]+)/);
    return match ? `/${match[1]}` : "";
  };

  const isSessionValid = (timestamp) => {
    if (!timestamp) return false;
    const threeDays = 3 * 24 * 60 * 60 * 1000;
    return Date.now() - timestamp < threeDays;
  };

  useEffect(() => {
    setIsChecking(true);

    const parent = getParentRoute(currentPath);
    setParentRoute(parent);

    if (!parentRoutePasswords[parent]) {
      setIsAuthenticated(true);
      setIsChecking(false);
      return;
    }

    const authData = sessionStorage.getItem(`auth_${parent}`);
    if (authData) {
      try {
        const { timestamp } = JSON.parse(authData);
        if (isSessionValid(timestamp)) {
          setIsAuthenticated(true);
        } else {
          sessionStorage.removeItem(`auth_${parent}`);
          setIsAuthenticated(false);
        }
      } catch (e) {
        sessionStorage.removeItem(`auth_${parent}`);
        setIsAuthenticated(false);
      }
    } else {
      setIsAuthenticated(false);
    }

    setPassword("");
    setError("");
    setIsChecking(false);
  }, [currentPath]);

  const handleSubmit = () => {
    setError("");

    const correctPassword = parentRoutePasswords[parentRoute];

    if (password === correctPassword) {
      const authData = {
        timestamp: Date.now(),
      };
      setIsAuthenticated(true);
      sessionStorage.setItem(`auth_${parentRoute}`, JSON.stringify(authData));
      setPassword("");
    } else {
      setError("رمز عبور اشتباه است");
      setPassword("");
    }
  };

  if (isChecking) {
    return null;
  }

  if (isAuthenticated) {
    return children;
  }

  return (
    <div className="auth-wrapper">
      <div className="auth-container">
        <div className="auth-icon">
          <Lock color="#4f46e5" strokeWidth={1.5} />
        </div>
        <p className="auth-title">
          برای دسترسی به مستندات رمز عبور را وارد کنید. رمز عبور بعد از خرید در
          پکیج محصول موجود است.
        </p>

        <div className="auth-form">
          <input
            className="auth-input"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyUp={(e) => e.key === "Enter" && handleSubmit()}
            placeholder="رمز عبور را وارد کنید"
            autoFocus
          />
          <button
            className="auth-pass-reveal"
            onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? (
              <EyeOff strokeWidth={1.5} size={20} />
            ) : (
              <Eye strokeWidth={1.5} size={20} />
            )}
          </button>
        </div>

        {error && <p className="auth-error">{error}</p>}

        <button className="auth-submit" onClick={handleSubmit}>
          دسترسی به محتوا
        </button>
      </div>
    </div>
  );
};

export default ProtectedRoute;
