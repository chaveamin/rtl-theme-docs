import React, { useState, useEffect } from "react";
import { Lock, Eye, EyeOff } from "lucide-react";

const PasswordProtection = () => {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [currentRoute, setCurrentRoute] = useState("/docs/intro");

  // Different password for each route
  const routePasswords = {
    "/appkit/intro": "123",
  };

  const routes = [
    {
      path: "/appkit/intro",
      title: "Introduction",
      content: "Welcome to the documentation!",
      password: "123",
    },
  ];

  const [selectedRoute, setSelectedRoute] = useState(routes[0]);

  // Check if session is still valid (3 days)
  const isSessionValid = (timestamp) => {
    if (!timestamp) return false;
    const threeDays = 3 * 24 * 60 * 60 * 1000; // 3 days in milliseconds
    return Date.now() - timestamp < threeDays;
  };

  // Check authentication on mount
  useEffect(() => {
    const authData = sessionStorage.getItem(`auth_${currentRoute}`);
    if (authData) {
      try {
        const { timestamp } = JSON.parse(authData);
        if (isSessionValid(timestamp)) {
          setIsAuthenticated(true);
        } else {
          sessionStorage.removeItem(`auth_${currentRoute}`);
        }
      } catch (e) {
        sessionStorage.removeItem(`auth_${currentRoute}`);
      }
    }
  }, [currentRoute]);

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    setError("");

    const correctPassword = routePasswords[currentRoute];

    if (password === correctPassword) {
      const authData = {
        timestamp: Date.now(),
      };
      setIsAuthenticated(true);
      sessionStorage.setItem(`auth_${currentRoute}`, JSON.stringify(authData));
      setPassword("");
    } else {
      setError(`Incorrect password. Try "${correctPassword}"`);
      setPassword("");
    }
  };

  const handleRouteChange = (route) => {
    setCurrentRoute(route.path);
    setSelectedRoute(route);

    const authData = sessionStorage.getItem(`auth_${route.path}`);
    if (authData) {
      try {
        const { timestamp } = JSON.parse(authData);
        if (isSessionValid(timestamp)) {
          setIsAuthenticated(true);
        } else {
          sessionStorage.removeItem(`auth_${route.path}`);
          setIsAuthenticated(false);
        }
      } catch (e) {
        setIsAuthenticated(false);
      }
    } else {
      setIsAuthenticated(false);
    }

    setError("");
    setPassword("");
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-indigo-100 p-3 rounded-full">
              <Lock className="w-8 h-8 text-indigo-600" />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
            Protected Content
          </h2>
          <p className="text-center text-gray-600 mb-6">
            Enter password to access {selectedRoute.title}
          </p>

          <div className="space-y-4">
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSubmit()}
                placeholder="Enter password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none pr-12"
                autoFocus
              />
              <button
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700">
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            <button
              onClick={handleSubmit}
              className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors">
              Access Content
            </button>
          </div>

          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600 mb-2 font-semibold">
              Demo passwords:
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              {routes.map((route) => (
                <li key={route.path}>
                  {route.title}:{" "}
                  <span className="font-mono font-semibold">
                    {route.password}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <h1 className="text-xl font-bold text-gray-800">Documentation</h1>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 py-8 flex gap-8">
        {/* Sidebar */}
        <aside className="w-64 flex-shrink-0">
          <div className="bg-white rounded-lg shadow-sm p-4 sticky top-8">
            <h3 className="font-semibold text-gray-700 mb-3">Routes</h3>
            <ul className="space-y-1">
              {routes.map((route) => {
                const authData = sessionStorage.getItem(`auth_${route.path}`);
                const isRouteAuth =
                  authData && isSessionValid(JSON.parse(authData).timestamp);

                return (
                  <li key={route.path}>
                    <button
                      onClick={() => handleRouteChange(route)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors flex items-center justify-between ${
                        currentRoute === route.path
                          ? "bg-indigo-100 text-indigo-700 font-medium"
                          : "text-gray-600 hover:bg-gray-100"
                      }`}>
                      <span>{route.title}</span>
                      {!isRouteAuth && (
                        <Lock size={14} className="text-gray-400" />
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </aside>

        {/* Content */}
        <main className="flex-1">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              {selectedRoute.title}
            </h1>
            <div className="prose max-w-none">
              <p className="text-gray-600">{selectedRoute.content}</p>
              <p className="text-sm text-gray-500 mt-4">
                Route:{" "}
                <code className="bg-gray-100 px-2 py-1 rounded">
                  {currentRoute}
                </code>
              </p>
              <p className="text-sm text-green-600 mt-2">
                ✓ Authenticated - Session valid for 3 days
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default PasswordProtection;
