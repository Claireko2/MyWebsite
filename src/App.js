// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./AuthContext";
import PrivateRoute from "./PrivateRoute";
import ScrollToTop from "./ScrollToTop";

import Layout from "./components/Layout"; // new Layout wrapper

// Pages
import Home from "./pages/Home";
import ContactInfo from "./pages/ContactInfo";
import Projects from "./pages/Projects";
import Story from "./pages/Story";
import Blogs from "./pages/Blogs";
import LeaveMessage from "./pages/LeaveMessage";
import Login from "./pages/Login";

// Project Details
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
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Layout><Home /></Layout>} />
            <Route path="/projects" element={<Layout><Projects /></Layout>} />

            {/* Individual project routes */}
            <Route path="/projects/career-compass" element={<Layout><CareerCompassDetail /></Layout>} />
            <Route path="/projects/weather-predict" element={<Layout><WeatherPredictDetail /></Layout>} />
            <Route path="/projects/youtube-trending" element={<Layout><YouTubeTrendingDetail /></Layout>} />
            <Route path="/projects/world-happiness" element={<Layout><WorldHappinessDetail /></Layout>} />
            <Route path="/projects/foodoor-app" element={<Layout><FoodoorAppDetail /></Layout>} />
            <Route path="/projects/employee-management" element={<Layout><EmployeeManagementDetail /></Layout>} />

            <Route path="/story" element={<Layout><Story /></Layout>} />
            <Route path="/blogs" element={<Layout><Blogs /></Layout>} />
            <Route path="/contact" element={<Layout><ContactInfo /></Layout>} />
            <Route path="/login" element={<Layout><Login /></Layout>} />

            <Route
              path="/message"
              element={
                <PrivateRoute>
                  <Layout><LeaveMessage /></Layout>
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
