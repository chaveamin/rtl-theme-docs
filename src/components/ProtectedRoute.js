import React, { useState, useEffect } from "react";
import { Lock, Eye, EyeOff } from "lucide-react";

// Password for each parent route (automatically protects all children)
const parentRoutePasswords = {
  "/appkit": "appkit123",
};

const ProtectedRoute = ({ children, currentPath }) => {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [parentRoute, setParentRoute] = useState("");

  // Get parent route from current path
  const getParentRoute = (path) => {
    // Extract first segment after initial slash (e.g., /appkit/intro -> /appkit)
    const match = path.match(/^\/([^\/]+)/);
    return match ? `/${match[1]}` : "";
  };

  // Check if session is still valid (3 days)
  const isSessionValid = (timestamp) => {
    if (!timestamp) return false;
    const threeDays = 3 * 24 * 60 * 60 * 1000;
    return Date.now() - timestamp < threeDays;
  };

  // Check authentication on mount and when path changes
  useEffect(() => {
    const parent = getParentRoute(currentPath);
    setParentRoute(parent);

    // Check if this parent route is protected
    if (!parentRoutePasswords[parent]) {
      setIsAuthenticated(true);
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

  // If route is not protected or already authenticated, show content
  if (isAuthenticated) {
    return children;
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom right, #dbeafe, #e0e7ff)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px",
      }}>
      <div
        style={{
          background: "white",
          borderRadius: "12px",
          boxShadow:
            "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
          padding: "32px",
          width: "100%",
          maxWidth: "28rem",
        }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "24px",
          }}>
          <div
            style={{
              background: "#e0e7ff",
              padding: "12px",
              borderRadius: "9999px",
            }}>
            <Lock style={{ width: "32px", height: "32px", color: "#4f46e5" }} />
          </div>
        </div>

        <h2
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            textAlign: "center",
            color: "#1f2937",
            marginBottom: "8px",
          }}>
          محتوای محافظت شده
        </h2>
        <p
          style={{
            textAlign: "center",
            color: "#4b5563",
            marginBottom: "8px",
            fontSize: "14px",
          }}>
          برای دسترسی به{" "}
          <span style={{ fontWeight: "bold", color: "#4f46e5" }}>
            {parentRoute}
          </span>{" "}
          رمز عبور را وارد کنید
        </p>
        <p
          style={{
            textAlign: "center",
            color: "#9ca3af",
            marginBottom: "24px",
            fontSize: "12px",
          }}>
          با ورود رمز، تمام صفحات زیرمجموعه نیز باز می‌شود
        </p>

        <div style={{ marginBottom: "16px" }}>
          <div style={{ position: "relative" }}>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSubmit()}
              placeholder="رمز عبور را وارد کنید"
              style={{
                width: "100%",
                padding: "12px 48px 12px 16px",
                border: "1px solid #d1d5db",
                borderRadius: "8px",
                outline: "none",
                fontSize: "16px",
                fontFamily: "inherit",
                direction: "rtl",
              }}
              onFocus={(e) => (e.target.style.borderColor = "#4f46e5")}
              onBlur={(e) => (e.target.style.borderColor = "#d1d5db")}
              autoFocus
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              style={{
                position: "absolute",
                right: "12px",
                top: "50%",
                transform: "translateY(-50%)",
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "#6b7280",
                padding: "4px",
              }}>
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {error && (
            <div
              style={{
                background: "#fef2f2",
                border: "1px solid #fecaca",
                color: "#991b1b",
                padding: "12px 16px",
                borderRadius: "8px",
                fontSize: "14px",
                marginTop: "16px",
                textAlign: "center",
              }}>
              {error}
            </div>
          )}
        </div>

        <button
          onClick={handleSubmit}
          style={{
            width: "100%",
            background: "#4f46e5",
            color: "white",
            padding: "12px",
            borderRadius: "8px",
            fontWeight: "500",
            border: "none",
            cursor: "pointer",
            fontSize: "16px",
            fontFamily: "inherit",
            transition: "background-color 0.2s",
          }}
          onMouseEnter={(e) => (e.target.style.background = "#4338ca")}
          onMouseLeave={(e) => (e.target.style.background = "#4f46e5")}>
          دسترسی به محتوا
        </button>

        <div
          style={{
            marginTop: "24px",
            padding: "16px",
            background: "#f9fafb",
            borderRadius: "8px",
          }}>
          <p
            style={{
              fontSize: "12px",
              color: "#6b7280",
              textAlign: "center",
              margin: 0,
            }}>
            نشست برای 3 روز معتبر است
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProtectedRoute;
