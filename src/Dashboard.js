import { Thermometer, Wind, Compass, BarChart3, Sun, AlertTriangle, TrendingUp, TrendingDown } from "lucide-react"
// Remove this line since we're now using App.css
// import "./Dashboard.css"

const Dashboard = () => {
  // Mock data for Mars weather conditions
  const weatherData = {
    temperature: -63,
    windSpeed: 12.4,
    windDirection: "NE",
    pressure: 610,
    solarRadiation: 342,
    uvIndex: 8.2,
    dustStormAlert: true,
  }

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Mars Weather Dashboard</h1>
        <p className="dashboard-subtitle">Current conditions on the Red Planet</p>
        <div className="last-updated">Last updated: Sol 4,127 (Earth: {new Date().toLocaleDateString()})</div>
      </div>

      <div className="dashboard-grid">
        {/* Temperature Card */}
        <div className="weather-card temperature-card">
          <div className="card-header">
            <Thermometer className="card-icon temperature-icon" />
            <h3 className="card-title">Temperature</h3>
          </div>
          <div className="card-content">
            <div className="main-value">{weatherData.temperature}°C</div>
            <div className="sub-value">-81°F</div>
            <div className="trend">
              <TrendingUp className="trend-icon up" />
              <span>+2°C from yesterday</span>
            </div>
          </div>
        </div>

        {/* Wind Speed Card */}
        <div className="weather-card wind-card">
          <div className="card-header">
            <Wind className="card-icon wind-icon" />
            <h3 className="card-title">Wind Speed</h3>
          </div>
          <div className="card-content">
            <div className="main-value">{weatherData.windSpeed} m/s</div>
            <div className="sub-value">27.7 mph</div>
            <div className="trend">
              <TrendingDown className="trend-icon down" />
              <span>Light breeze</span>
            </div>
          </div>
        </div>

        {/* Wind Direction Card */}
        <div className="weather-card direction-card">
          <div className="card-header">
            <Compass className="card-icon direction-icon" />
            <h3 className="card-title">Wind Direction</h3>
          </div>
          <div className="card-content">
            <div className="main-value">{weatherData.windDirection}</div>
            <div className="sub-value">45° Northeast</div>
            <div className="compass-indicator">
              <div className="compass-needle" style={{ transform: "rotate(45deg)" }}></div>
            </div>
          </div>
        </div>

        {/* Pressure Card */}
        <div className="weather-card pressure-card">
          <div className="card-header">
            <BarChart3 className="card-icon pressure-icon" />
            <h3 className="card-title">Atmospheric Pressure</h3>
          </div>
          <div className="card-content">
            <div className="main-value">{weatherData.pressure} Pa</div>
            <div className="sub-value">0.6% of Earth</div>
            <div className="trend">
              <TrendingUp className="trend-icon up" />
              <span>Stable</span>
            </div>
          </div>
        </div>

        {/* Solar Radiation Card */}
        <div className="weather-card solar-card">
          <div className="card-header">
            <Sun className="card-icon solar-icon" />
            <h3 className="card-title">Solar Radiation</h3>
          </div>
          <div className="card-content">
            <div className="main-value">{weatherData.solarRadiation} W/m²</div>
            <div className="sub-value">UV Index: {weatherData.uvIndex}</div>
            <div className="trend">
              <span className="uv-level high">High exposure</span>
            </div>
          </div>
        </div>

        {/* Dust Storm Alert Card */}
        <div className={`weather-card alert-card ${weatherData.dustStormAlert ? "alert-active" : ""}`}>
          <div className="card-header">
            <AlertTriangle className="card-icon alert-icon" />
            <h3 className="card-title">Dust Storm Alert</h3>
          </div>
          <div className="card-content">
            {weatherData.dustStormAlert ? (
              <div>
                <div className="main-value alert-status">ACTIVE</div>
                <div className="sub-value">Regional dust storm detected</div>
                <div className="alert-details">
                  <span>Visibility: 2.1 km</span>
                  <span>Duration: 3 sols</span>
                </div>
              </div>
            ) : (
              <div>
                <div className="main-value">CLEAR</div>
                <div className="sub-value">No dust storms detected</div>
                <div className="trend">
                  <span>Visibility: Excellent</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Additional Info Section */}
      <div className="dashboard-footer">
        <div className="info-card">
          <h4>About Mars Weather</h4>
          <p>
            Mars has a thin atmosphere composed mostly of carbon dioxide. Weather patterns are influenced by dust
            storms, seasonal changes, and the planet's elliptical orbit around the Sun.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
