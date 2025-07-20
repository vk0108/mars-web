import React, { useState, useEffect } from 'react';
import { Thermometer, Wind, BarChart3, Compass, Sun, Moon, CloudRain, Eye, Calendar, ChevronDown, ChevronUp, Search, Filter } from 'lucide-react';
import './MarsDay.css';

const MarsDay = () => {
  const [selectedSol, setSelectedSol] = useState(4127);
  const [solData, setSolData] = useState(null);
  const [expandedCard, setExpandedCard] = useState(null);
  const [searchSol, setSearchSol] = useState('');
  const [filterType, setFilterType] = useState('all');

  // Generate historical sol data
  const generateSolData = (sol) => {
    // Use sol number as seed for consistent data
    const seed = sol * 123456789;
    const random = (seed) => {
      const x = Math.sin(seed) * 10000;
      return x - Math.floor(x);
    };

    const baseTemp = -60 + Math.sin(sol * 0.02) * 20; // Seasonal variation
    const dailyTempVariation = random(seed) * 15;
    
    return {
      sol: sol,
      earthDate: new Date(2023, 0, 1 + (sol - 4000)).toLocaleDateString(),
      season: getSeason(sol),
      weather: {
        temperature: {
          current: Math.round((baseTemp + dailyTempVariation) * 10) / 10,
          high: Math.round((baseTemp + dailyTempVariation + 8) * 10) / 10,
          low: Math.round((baseTemp + dailyTempVariation - 12) * 10) / 10
        },
        pressure: Math.round(580 + random(seed + 1) * 80),
        wind: {
          speed: Math.round((5 + random(seed + 2) * 15) * 10) / 10,
          direction: getWindDirection(random(seed + 3)),
          gusts: Math.round((8 + random(seed + 4) * 20) * 10) / 10
        },
        humidity: Math.round(random(seed + 5) * 3 * 10) / 10,
        visibility: Math.round((2 + random(seed + 6) * 8) * 10) / 10,
        uvIndex: Math.round((3 + random(seed + 7) * 6) * 10) / 10,
        dustLevel: random(seed + 8) > 0.8 ? 'High' : random(seed + 8) > 0.5 ? 'Moderate' : 'Low',
        sunrise: '06:12',
        sunset: '18:45',
        solLength: '24h 37m'
      },
      events: generateEvents(sol, random(seed + 9)),
      summary: generateSummary(baseTemp + dailyTempVariation, random(seed + 10))
    };
  };

  const getSeason = (sol) => {
    const seasonCycle = sol % 687; // Mars year is ~687 sols
    if (seasonCycle < 172) return 'Northern Spring';
    if (seasonCycle < 344) return 'Northern Summer';
    if (seasonCycle < 516) return 'Northern Autumn';
    return 'Northern Winter';
  };

  const getWindDirection = (random) => {
    const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
    return directions[Math.floor(random * directions.length)];
  };

  const generateEvents = (sol, random) => {
    const events = [];
    if (random > 0.9) events.push('Dust storm detected');
    if (random > 0.8) events.push('High wind activity');
    if (random > 0.7) events.push('Temperature anomaly');
    if (random > 0.95) events.push('Aurora activity observed');
    if (events.length === 0) events.push('Clear weather conditions');
    return events;
  };

  const generateSummary = (temp, random) => {
    if (temp < -70) return 'Extremely cold conditions with minimal atmospheric activity.';
    if (temp < -50) return 'Cold but stable weather patterns observed.';
    if (temp < -30) return 'Moderate temperatures with typical Martian conditions.';
    return 'Relatively warm conditions for Mars with increased atmospheric dynamics.';
  };

  useEffect(() => {
    setSolData(generateSolData(selectedSol));
  }, [selectedSol]);

  const handleSolChange = (e) => {
    setSelectedSol(parseInt(e.target.value));
  };

  const handleSearchSol = () => {
    if (searchSol && searchSol >= 1 && searchSol <= 5000) {
      setSelectedSol(parseInt(searchSol));
    }
  };

  const getWeatherIcon = (condition) => {
    if (condition.includes('storm')) return <CloudRain className="weather-icon storm" />;
    if (condition.includes('clear')) return <Sun className="weather-icon clear" />;
    return <Sun className="weather-icon default" />;
  };

  const getTemperatureColor = (temp) => {
    if (temp < -70) return '#3b82f6'; // Blue for very cold
    if (temp < -50) return '#06b6d4'; // Cyan for cold
    if (temp < -30) return '#10b981'; // Green for moderate
    return '#f59e0b'; // Orange for warm (relatively)
  };

  if (!solData) return <div className="loading">Loading sol data...</div>;

  return (
    <div className="mars-day">
      <div className="mars-day-header">
        <h1 className="mars-day-title">Mars Day Explorer</h1>
        <p className="mars-day-subtitle">Explore historical weather data for any Martian sol</p>
        
        <div className="sol-controls">
          <div className="sol-selector">
            <label htmlFor="sol-range">Select Sol:</label>
            <input
              id="sol-range"
              type="range"
              min="1"
              max="5000"
              value={selectedSol}
              onChange={handleSolChange}
              className="sol-slider"
            />
            <span className="sol-value">Sol {selectedSol}</span>
          </div>
          
          <div className="sol-search">
            <input
              type="number"
              placeholder="Jump to sol..."
              value={searchSol}
              onChange={(e) => setSearchSol(e.target.value)}
              className="sol-input"
              min="1"
              max="5000"
            />
            <button onClick={handleSearchSol} className="search-btn">
              <Search className="search-icon" />
            </button>
          </div>
        </div>
      </div>

      <div className="sol-overview">
        <div className="sol-header-card">
          <div className="sol-info">
            <h2 className="sol-title">Sol {solData.sol}</h2>
            <p className="earth-date">{solData.earthDate}</p>
            <p className="season">{solData.season}</p>
          </div>
          <div className="sol-summary">
            <p>{solData.summary}</p>
          </div>
        </div>
      </div>

      <div className="weather-grid">
        {/* Temperature Card */}
        <div className="weather-card temperature-card">
          <div className="card-header" onClick={() => setExpandedCard(expandedCard === 'temp' ? null : 'temp')}>
            <div className="card-title-group">
              <Thermometer className="card-icon" style={{color: getTemperatureColor(solData.weather.temperature.current)}} />
              <h3 className="card-title">Temperature</h3>
            </div>
            {expandedCard === 'temp' ? <ChevronUp className="expand-icon" /> : <ChevronDown className="expand-icon" />}
          </div>
          
          <div className="card-content">
            <div className="main-metric">
              <span className="metric-value" style={{color: getTemperatureColor(solData.weather.temperature.current)}}>
                {solData.weather.temperature.current}°C
              </span>
              <span className="metric-label">Current</span>
            </div>
            
            {expandedCard === 'temp' && (
              <div className="expanded-content">
                <div className="metric-row">
                  <span className="metric-item">
                    <span className="metric-label">High:</span>
                    <span className="metric-value">{solData.weather.temperature.high}°C</span>
                  </span>
                  <span className="metric-item">
                    <span className="metric-label">Low:</span>
                    <span className="metric-value">{solData.weather.temperature.low}°C</span>
                  </span>
                </div>
                <div className="temperature-range">
                  <div className="range-bar">
                    <div 
                      className="range-fill" 
                      style={{
                        width: `${((solData.weather.temperature.current - solData.weather.temperature.low) / (solData.weather.temperature.high - solData.weather.temperature.low)) * 100}%`,
                        backgroundColor: getTemperatureColor(solData.weather.temperature.current)
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Wind Card */}
        <div className="weather-card wind-card">
          <div className="card-header" onClick={() => setExpandedCard(expandedCard === 'wind' ? null : 'wind')}>
            <div className="card-title-group">
              <Wind className="card-icon wind-icon" />
              <h3 className="card-title">Wind</h3>
            </div>
            {expandedCard === 'wind' ? <ChevronUp className="expand-icon" /> : <ChevronDown className="expand-icon" />}
          </div>
          
          <div className="card-content">
            <div className="main-metric">
              <span className="metric-value">{solData.weather.wind.speed} m/s</span>
              <span className="metric-label">Speed</span>
            </div>
            
            {expandedCard === 'wind' && (
              <div className="expanded-content">
                <div className="metric-row">
                  <span className="metric-item">
                    <Compass className="mini-icon" />
                    <span className="metric-label">Direction:</span>
                    <span className="metric-value">{solData.weather.wind.direction}</span>
                  </span>
                  <span className="metric-item">
                    <span className="metric-label">Gusts:</span>
                    <span className="metric-value">{solData.weather.wind.gusts} m/s</span>
                  </span>
                </div>
                <div className="wind-compass">
                  <div className="compass-circle">
                    <div className="compass-needle" style={{transform: `rotate(${getCompassRotation(solData.weather.wind.direction)}deg)`}}></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Pressure Card */}
        <div className="weather-card pressure-card">
          <div className="card-header" onClick={() => setExpandedCard(expandedCard === 'pressure' ? null : 'pressure')}>
            <div className="card-title-group">
              <BarChart3 className="card-icon pressure-icon" />
              <h3 className="card-title">Pressure</h3>
            </div>
            {expandedCard === 'pressure' ? <ChevronUp className="expand-icon" /> : <ChevronDown className="expand-icon" />}
          </div>
          
          <div className="card-content">
            <div className="main-metric">
              <span className="metric-value">{solData.weather.pressure} Pa</span>
              <span className="metric-label">Atmospheric</span>
            </div>
            
            {expandedCard === 'pressure' && (
              <div className="expanded-content">
                <div className="pressure-comparison">
                  <div className="comparison-item">
                    <span className="comparison-label">Mars:</span>
                    <span className="comparison-value">{solData.weather.pressure} Pa</span>
                  </div>
                  <div className="comparison-item">
                    <span className="comparison-label">Earth:</span>
                    <span className="comparison-value">101,325 Pa</span>
                  </div>
                  <div className="pressure-ratio">
                    <span>Mars pressure is {((solData.weather.pressure / 101325) * 100).toFixed(2)}% of Earth's</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Additional Metrics Card */}
        <div className="weather-card metrics-card">
          <div className="card-header" onClick={() => setExpandedCard(expandedCard === 'metrics' ? null : 'metrics')}>
            <div className="card-title-group">
              <Eye className="card-icon metrics-icon" />
              <h3 className="card-title">Additional Metrics</h3>
            </div>
            {expandedCard === 'metrics' ? <ChevronUp className="expand-icon" /> : <ChevronDown className="expand-icon" />}
          </div>
          
          <div className="card-content">
            <div className="metrics-grid">
              <div className="metric-item">
                <span className="metric-label">Visibility:</span>
                <span className="metric-value">{solData.weather.visibility} km</span>
              </div>
              <div className="metric-item">
                <span className="metric-label">UV Index:</span>
                <span className="metric-value">{solData.weather.uvIndex}</span>
              </div>
            </div>
            
            {expandedCard === 'metrics' && (
              <div className="expanded-content">
                <div className="metrics-grid">
                  <div className="metric-item">
                    <span className="metric-label">Humidity:</span>
                    <span className="metric-value">{solData.weather.humidity}%</span>
                  </div>
                  <div className="metric-item">
                    <span className="metric-label">Dust Level:</span>
                    <span className={`metric-value dust-${solData.weather.dustLevel.toLowerCase()}`}>
                      {solData.weather.dustLevel}
                    </span>
                  </div>
                  <div className="metric-item">
                    <Sun className="mini-icon" />
                    <span className="metric-label">Sunrise:</span>
                    <span className="metric-value">{solData.weather.sunrise}</span>
                  </div>
                  <div className="metric-item">
                    <Moon className="mini-icon" />
                    <span className="metric-label">Sunset:</span>
                    <span className="metric-value">{solData.weather.sunset}</span>
                  </div>
                  <div className="metric-item">
                    <Calendar className="mini-icon" />
                    <span className="metric-label">Sol Length:</span>
                    <span className="metric-value">{solData.weather.solLength}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Events Section */}
      <div className="events-section">
        <h3 className="events-title">Sol {solData.sol} Events</h3>
        <div className="events-list">
          {solData.events.map((event, index) => (
            <div key={index} className="event-item">
              {getWeatherIcon(event)}
              <span className="event-text">{event}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Helper function for compass rotation
const getCompassRotation = (direction) => {
  const directions = {
    'N': 0, 'NE': 45, 'E': 90, 'SE': 135,
    'S': 180, 'SW': 225, 'W': 270, 'NW': 315
  };
  return directions[direction] || 0;
};

export default MarsDay;