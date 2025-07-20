import React, { useState, useEffect } from 'react';
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar
} from 'recharts';
import { TrendingUp, Wind, Thermometer, BarChart3, Compass, RefreshCw } from 'lucide-react';
import './WeatherCharts.css';

const WeatherCharts = () => {
  const [temperatureData, setTemperatureData] = useState([]);
  const [pressureData, setPressureData] = useState([]);
  const [windData, setWindData] = useState([]);
  const [windDirectionData, setWindDirectionData] = useState([]);
  const [isLiveMode, setIsLiveMode] = useState(false);

  // Generate initial data
  useEffect(() => {
    generateInitialData();
  }, []);

  // Live data simulation
  useEffect(() => {
    let interval;
    if (isLiveMode) {
      interval = setInterval(() => {
        updateLiveData();
      }, 2000); // Update every 2 seconds
    }
    return () => clearInterval(interval);
  }, [isLiveMode]);

  const generateInitialData = () => {
    const sols = [];
    const tempData = [];
    const pressData = [];
    const windSpeedData = [];
    const windDirData = [];

    for (let i = 0; i < 30; i++) {
      const sol = 4100 + i;
      sols.push(sol);

      // Temperature data (-80 to -40°C with seasonal variation)
      const baseTemp = -60 + Math.sin(i * 0.2) * 15;
      const tempVariation = (Math.random() - 0.5) * 10;
      const temperature = baseTemp + tempVariation;

      tempData.push({
        sol: `Sol ${sol}`,
        temperature: Math.round(temperature * 10) / 10,
        high: Math.round((temperature + 5) * 10) / 10,
        low: Math.round((temperature - 5) * 10) / 10
      });

      // Pressure data (500-700 Pa)
      const basePressure = 600 + Math.sin(i * 0.15) * 50;
      const pressureVariation = (Math.random() - 0.5) * 20;
      const pressure = basePressure + pressureVariation;

      pressData.push({
        sol: `Sol ${sol}`,
        pressure: Math.round(pressure)
      });

      // Wind speed data (0-25 m/s)
      const baseWind = 8 + Math.sin(i * 0.3) * 6;
      const windVariation = Math.random() * 8;
      const windSpeed = baseWind + windVariation;

      windSpeedData.push({
        sol: `Sol ${sol}`,
        windSpeed: Math.round(windSpeed * 10) / 10,
        gusts: Math.round((windSpeed + Math.random() * 5) * 10) / 10
      });

      // Wind direction data for radar chart
      const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
      const directionData = directions.map(dir => ({
        direction: dir,
        frequency: Math.random() * 100,
        avgSpeed: 5 + Math.random() * 15
      }));

      if (i === 29) { // Only store the latest wind direction data
        setWindDirectionData(directionData);
      }
    }

    setTemperatureData(tempData);
    setPressureData(pressData);
    setWindData(windSpeedData);
  };

  const updateLiveData = () => {
    // Update temperature data
    setTemperatureData(prev => {
      const newData = [...prev];
      const lastSol = parseInt(newData[newData.length - 1].sol.split(' ')[1]);
      const newSol = lastSol + 1;
      
      const baseTemp = -60 + Math.sin(newData.length * 0.2) * 15;
      const tempVariation = (Math.random() - 0.5) * 10;
      const temperature = baseTemp + tempVariation;

      newData.push({
        sol: `Sol ${newSol}`,
        temperature: Math.round(temperature * 10) / 10,
        high: Math.round((temperature + 5) * 10) / 10,
        low: Math.round((temperature - 5) * 10) / 10
      });

      return newData.slice(-30); // Keep only last 30 data points
    });

    // Update pressure data
    setPressureData(prev => {
      const newData = [...prev];
      const lastSol = parseInt(newData[newData.length - 1].sol.split(' ')[1]);
      const newSol = lastSol + 1;
      
      const basePressure = 600 + Math.sin(newData.length * 0.15) * 50;
      const pressureVariation = (Math.random() - 0.5) * 20;
      const pressure = basePressure + pressureVariation;

      newData.push({
        sol: `Sol ${newSol}`,
        pressure: Math.round(pressure)
      });

      return newData.slice(-30);
    });

    // Update wind data
    setWindData(prev => {
      const newData = [...prev];
      const lastSol = parseInt(newData[newData.length - 1].sol.split(' ')[1]);
      const newSol = lastSol + 1;
      
      const baseWind = 8 + Math.sin(newData.length * 0.3) * 6;
      const windVariation = Math.random() * 8;
      const windSpeed = baseWind + windVariation;

      newData.push({
        sol: `Sol ${newSol}`,
        windSpeed: Math.round(windSpeed * 10) / 10,
        gusts: Math.round((windSpeed + Math.random() * 5) * 10) / 10
      });

      return newData.slice(-30);
    });

    // Update wind direction data
    const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
    const newDirectionData = directions.map(dir => ({
      direction: dir,
      frequency: Math.random() * 100,
      avgSpeed: 5 + Math.random() * 15
    }));
    setWindDirectionData(newDirectionData);
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="tooltip-label">{label}</p>
          {payload.map((entry, index) => (
            <p key={index} style={{ color: entry.color }}>
              {`${entry.dataKey}: ${entry.value}${entry.dataKey.includes('temperature') ? '°C' : entry.dataKey.includes('pressure') ? ' Pa' : entry.dataKey.includes('wind') ? ' m/s' : ''}`}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="weather-charts">
      <div className="charts-header">
        <h1 className="charts-title">Mars Weather Charts</h1>
        <p className="charts-subtitle">Historical weather trends and patterns over Martian sols</p>
        
        <div className="charts-controls">
          <button 
            className={`live-toggle ${isLiveMode ? 'active' : ''}`}
            onClick={() => setIsLiveMode(!isLiveMode)}
          >
            <RefreshCw className={`refresh-icon ${isLiveMode ? 'spinning' : ''}`} />
            {isLiveMode ? 'Live Mode ON' : 'Live Mode OFF'}
          </button>
        </div>
      </div>

      <div className="charts-grid">
        {/* Temperature Chart */}
        <div className="chart-card">
          <div className="chart-header">
            <Thermometer className="chart-icon temperature-icon" />
            <h3 className="chart-title">Temperature Over Time</h3>
          </div>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={temperatureData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis 
                  dataKey="sol" 
                  stroke="#9ca3af"
                  fontSize={12}
                  interval="preserveStartEnd"
                />
                <YAxis 
                  stroke="#9ca3af"
                  fontSize={12}
                  domain={['dataMin - 5', 'dataMax + 5']}
                />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Area
                  type="monotone"
                  dataKey="high"
                  stackId="1"
                  stroke="#ef4444"
                  fill="#ef4444"
                  fillOpacity={0.3}
                  name="High"
                />
                <Area
                  type="monotone"
                  dataKey="low"
                  stackId="1"
                  stroke="#3b82f6"
                  fill="#3b82f6"
                  fillOpacity={0.3}
                  name="Low"
                />
                <Line
                  type="monotone"
                  dataKey="temperature"
                  stroke="#f59e0b"
                  strokeWidth={2}
                  dot={false}
                  name="Average"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Pressure Chart */}
        <div className="chart-card">
          <div className="chart-header">
            <BarChart3 className="chart-icon pressure-icon" />
            <h3 className="chart-title">Atmospheric Pressure</h3>
          </div>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={pressureData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis 
                  dataKey="sol" 
                  stroke="#9ca3af"
                  fontSize={12}
                  interval="preserveStartEnd"
                />
                <YAxis 
                  stroke="#9ca3af"
                  fontSize={12}
                  domain={['dataMin - 20', 'dataMax + 20']}
                />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="pressure"
                  stroke="#10b981"
                  strokeWidth={3}
                  dot={{ fill: '#10b981', strokeWidth: 2, r: 4 }}
                  activeDot={{ r: 6, stroke: '#10b981', strokeWidth: 2 }}
                  name="Pressure (Pa)"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Wind Speed Chart */}
        <div className="chart-card">
          <div className="chart-header">
            <Wind className="chart-icon wind-icon" />
            <h3 className="chart-title">Wind Speed Variations</h3>
          </div>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={windData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis 
                  dataKey="sol" 
                  stroke="#9ca3af"
                  fontSize={12}
                  interval="preserveStartEnd"
                />
                <YAxis 
                  stroke="#9ca3af"
                  fontSize={12}
                  domain={[0, 'dataMax + 5']}
                />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Area
                  type="monotone"
                  dataKey="gusts"
                  stroke="#06b6d4"
                  fill="#06b6d4"
                  fillOpacity={0.3}
                  name="Wind Gusts"
                />
                <Line
                  type="monotone"
                  dataKey="windSpeed"
                  stroke="#0ea5e9"
                  strokeWidth={2}
                  dot={false}
                  name="Average Wind Speed"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Wind Direction Radar Chart */}
        <div className="chart-card">
          <div className="chart-header">
            <Compass className="chart-icon direction-icon" />
            <h3 className="chart-title">Wind Direction Distribution</h3>
          </div>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height={300}>
              <RadarChart data={windDirectionData}>
                <PolarGrid stroke="#374151" />
                <PolarAngleAxis 
                  dataKey="direction" 
                  tick={{ fill: '#9ca3af', fontSize: 12 }}
                />
                <PolarRadiusAxis 
                  angle={90} 
                  domain={[0, 100]}
                  tick={{ fill: '#9ca3af', fontSize: 10 }}
                />
                <Radar
                  name="Frequency (%)"
                  dataKey="frequency"
                  stroke="#8b5cf6"
                  fill="#8b5cf6"
                  fillOpacity={0.3}
                  strokeWidth={2}
                />
                <Radar
                  name="Avg Speed (m/s)"
                  dataKey="avgSpeed"
                  stroke="#f59e0b"
                  fill="#f59e0b"
                  fillOpacity={0.1}
                  strokeWidth={2}
                />
                <Legend />
                <Tooltip content={<CustomTooltip />} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Chart Info */}
      <div className="charts-footer">
        <div className="info-grid">
          <div className="info-card">
            <h4>About Mars Weather Patterns</h4>
            <p>Mars experiences dramatic temperature swings due to its thin atmosphere and distance from the Sun. Seasonal dust storms can affect global weather patterns for months.</p>
          </div>
          <div className="info-card">
            <h4>Sol vs Earth Day</h4>
            <p>A Martian sol (solar day) is approximately 24 hours and 37 minutes long. Weather data is collected and transmitted daily by various Mars missions.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCharts;