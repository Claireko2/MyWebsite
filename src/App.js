import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./AuthContext";
import Navbar from "./components/Navbar";
import PrivateRoute from "./PrivateRoute";
import Home from "./pages/Home";

import Projects from "./pages/Projects";
import Story from "./pages/Story";
import Blogs from "./pages/Blogs";
import LeaveMessage from "./pages/LeaveMessage";
import Login from "./pages/Login";
import ScrollToTop from "./ScrollToTop";
import CareerCompassDetail from "./pages/projects/CareerCompassDetail";
import WeatherPredictDetail from "./pages/projects/WeatherPredictDetail";
import YouTubeTrendingDetail from "./pages/projects/YouTubeTrendingDetail";
import WorldHappinessDetail from "./pages/projects/WorldHappinessDetail";
import FoodoorAppDetail from "./pages/projects/FoodoorAppDetail";
import EmployeeManagementDetail from "./pages/projects/EmployeeManagementDetail";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Navbar />
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/projects" element={<Projects />} />

            {/* Individual project routes */}
            <Route path="/projects/career-compass" element={<CareerCompassDetail />} />
            <Route path="/projects/weather-predict" element={<WeatherPredictDetail />} />
            <Route path="/projects/youtube-trending" element={<YouTubeTrendingDetail />} />
            <Route path="/projects/world-happiness" element={<WorldHappinessDetail />} />
            <Route path="/projects/foodoor-app" element={<FoodoorAppDetail />} />
            <Route path="/projects/employee-management" element={<EmployeeManagementDetail />} />

            <Route path="/story" element={<Story />} />
            <Route path="/blogs" element={<Blogs />} />

            <Route path="/login" element={<Login />} />
            <Route
              path="/message"
              element={
                <PrivateRoute>
                  <LeaveMessage />
                </PrivateRoute>
              }
            />
          </Routes>
        </ScrollToTop>
      </AuthProvider>
    </Router>
  );
}

export default App;


