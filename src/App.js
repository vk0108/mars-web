"use client"

import { useState, useEffect } from "react"
import { Rocket } from "lucide-react"
import "./App.css"
import Dashboard from "./Dashboard"
import WeatherCharts from "./WeatherCharts"
import MarsDay from "./MarsDay"
import CompareEarth from "./CompareEarth"
import AboutMarsWeather from "./AboutMarsWeather"

function App() {
  // Check URL parameters to determine initial page
  const getInitialPage = () => {
    const urlParams = new URLSearchParams(window.location.search)
    const page = urlParams.get("page")
    return page || "home"
  }

  const [currentPage, setCurrentPage] = useState(getInitialPage())

  const handleNavigation = (page) => {
    if (page === "home") {
      // Redirect to HTML homepage
      window.location.href = "/mars-homepage.html"
    } else {
      setCurrentPage(page)
      // Update URL without page refresh
      window.history.pushState({}, "", page === "home" ? "/" : `/?page=${page}`)
    }
  }

  // Redirect to HTML homepage on initial load if no specific page requested
  useEffect(() => {
    if (currentPage === "home") {
      window.location.href = "/mars-homepage.html"
    }
  }, [])

  // Don't render anything while redirecting to home
  if (currentPage === "home") {
    return (
      <div
        style={{
          background: "#0f172a",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        }}
      >
        <div>Loading Mars Interface...</div>
      </div>
    )
  }

  return (
    <div className="app">
      {/* Navigation Header */}
      <nav className="nav">
        <div className="nav-left">
          <Rocket className="nav-icon" />
          <span className="nav-title" onClick={() => handleNavigation("home")} style={{ cursor: "pointer" }}>
            Mars Explorer
          </span>
        </div>

        <div className="nav-center">
          <a
            href="#"
            className={`nav-link ${currentPage === "dashboard" ? "active" : ""}`}
            onClick={(e) => {
              e.preventDefault()
              handleNavigation("dashboard")
            }}
          >
            Dashboard
          </a>
          <a
            href="#"
            className={`nav-link ${currentPage === "weather-charts" ? "active" : ""}`}
            onClick={(e) => {
              e.preventDefault()
              handleNavigation("weather-charts")
            }}
          >
            Weather Charts
          </a>
          <a
            href="#"
            className={`nav-link ${currentPage === "mars-day" ? "active" : ""}`}
            onClick={(e) => {
              e.preventDefault()
              handleNavigation("mars-day")
            }}
          >
            Mars Day Explorer
          </a>
          <a
            href="#"
            className={`nav-link ${currentPage === "compare-earth" ? "active" : ""}`}
            onClick={(e) => {
              e.preventDefault()
              handleNavigation("compare-earth")
            }}
          >
            Compare with Earth
          </a>
          <a
            href="#"
            className={`nav-link ${currentPage === "about-mars-weather" ? "active" : ""}`}
            onClick={(e) => {
              e.preventDefault()
              handleNavigation("about-mars-weather")
            }}
          >
            About Mars Weather
          </a>
        </div>
      </nav>

      {/* Page Content */}
      {currentPage === "dashboard" && <Dashboard />}
      {currentPage === "weather-charts" && <WeatherCharts />}
      {currentPage === "mars-day" && <MarsDay />}
      {currentPage === "compare-earth" && <CompareEarth />}
      {currentPage === "about-mars-weather" && <AboutMarsWeather />}
    </div>
  )
}

export default App
