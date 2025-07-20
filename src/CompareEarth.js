import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import { Thermometer, Wind, BarChart3, Zap, Mountain, Globe, Rocket } from 'lucide-react';
import './CompareEarth.css';

const CompareEarth = () => {
  // Main comparison data
  const comparisonData = [
    {
      metric: 'Avg Temperature',
      mars: -60,
      earth: 15,
      unit: '°C',
      marsDisplay: '-60°C',
      earthDisplay: '15°C'
    },
    {
      metric: 'Pressure',
      mars: 600,
      earth: 101000,
      unit: 'Pa',
      marsDisplay: '600 Pa',
      earthDisplay: '101,000 Pa'
    },
    {
      metric: 'Gravity',
      mars: 3.71,
      earth: 9.81,
      unit: 'm/s²',
      marsDisplay: '3.71 m/s²',
      earthDisplay: '9.81 m/s²'
    },
    {
      metric: 'Radiation',
      mars: 100,
      earth: 0.2,
      unit: 'mSv/year',
      marsDisplay: '100 mSv/year',
      earthDisplay: '0.2 mSv/year'
    }
  ];

  // Normalized data for better visualization (some values are too different to show on same scale)
  const normalizedData = [
    {
      metric: 'Temperature',
      mars: 60, // Absolute value for visualization
      earth: 15,
      marsLabel: '-60°C',
      earthLabel: '15°C'
    },
    {
      metric: 'Pressure (scaled)',
      mars: 6, // Scaled down by 100 for visualization
      earth: 1013, // Scaled down by 100
      marsLabel: '600 Pa',
      earthLabel: '101,000 Pa'
    },
    {
      metric: 'Gravity',
      mars: 3.71,
      earth: 9.81,
      marsLabel: '3.71 m/s²',
      earthLabel: '9.81 m/s²'
    },
    {
      metric: 'Radiation (scaled)',
      mars: 10, // Scaled down by 10 for visualization
      earth: 0.2,
      marsLabel: '100 mSv/year',
      earthLabel: '0.2 mSv/year'
    }
  ];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="tooltip-label">{label}</p>
          {payload.map((entry, index) => (
            <p key={index} style={{ color: entry.color }}>
              {`${entry.dataKey === 'mars' ? 'Mars' : 'Earth'}: ${entry.payload[`${entry.dataKey}Label`]}`}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="compare-earth">
      <div className="compare-header">
        <h1 className="compare-title">Mars vs Earth Comparison</h1>
        <p className="compare-subtitle">
          Discover the dramatic differences between the Red Planet and our home world
        </p>
      </div>

      {/* Side-by-side Planet Overview */}
      <div className="planets-overview">
        <div className="planet-card mars-card">
          <div className="planet-header">
            <div className="planet-icon mars-icon">
              <Rocket className="icon" />
            </div>
            <div className="planet-info">
              <h2 className="planet-name">Mars</h2>
              <p className="planet-subtitle">The Red Planet</p>
            </div>
          </div>
          
          <div className="planet-stats">
            <div className="stat-row">
              <Thermometer className="stat-icon" />
              <div className="stat-content">
                <span className="stat-label">Average Temperature</span>
                <span className="stat-value mars-temp">-60°C</span>
              </div>
            </div>
            
            <div className="stat-row">
              <BarChart3 className="stat-icon" />
              <div className="stat-content">
                <span className="stat-label">Atmospheric Pressure</span>
                <span className="stat-value mars-pressure">600 Pa</span>
              </div>
            </div>
            
            <div className="stat-row">
              <Mountain className="stat-icon" />
              <div className="stat-content">
                <span className="stat-label">Surface Gravity</span>
                <span className="stat-value mars-gravity">3.71 m/s²</span>
              </div>
            </div>
            
            <div className="stat-row">
              <Zap className="stat-icon" />
              <div className="stat-content">
                <span className="stat-label">Radiation Level</span>
                <span className="stat-value mars-radiation">100 mSv/year</span>
              </div>
            </div>
          </div>
        </div>

        <div className="vs-separator">
          <div className="vs-circle">
            <span className="vs-text">VS</span>
          </div>
        </div>

        <div className="planet-card earth-card">
          <div className="planet-header">
            <div className="planet-icon earth-icon">
              <Globe className="icon" />
            </div>
            <div className="planet-info">
              <h2 className="planet-name">Earth</h2>
              <p className="planet-subtitle">Our Home Planet</p>
            </div>
          </div>
          
          <div className="planet-stats">
            <div className="stat-row">
              <Thermometer className="stat-icon" />
              <div className="stat-content">
                <span className="stat-label">Average Temperature</span>
                <span className="stat-value earth-temp">15°C</span>
              </div>
            </div>
            
            <div className="stat-row">
              <BarChart3 className="stat-icon" />
              <div className="stat-content">
                <span className="stat-label">Atmospheric Pressure</span>
                <span className="stat-value earth-pressure">101,000 Pa</span>
              </div>
            </div>
            
            <div className="stat-row">
              <Mountain className="stat-icon" />
              <div className="stat-content">
                <span className="stat-label">Surface Gravity</span>
                <span className="stat-value earth-gravity">9.81 m/s²</span>
              </div>
            </div>
            
            <div className="stat-row">
              <Zap className="stat-icon" />
              <div className="stat-content">
                <span className="stat-label">Radiation Level</span>
                <span className="stat-value earth-radiation">0.2 mSv/year</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bar Chart Comparison */}
      <div className="chart-section">
        <h3 className="chart-title">Environmental Conditions Comparison</h3>
        <div className="chart-container">
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={normalizedData} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis 
                dataKey="metric" 
                stroke="#9ca3af"
                fontSize={12}
                angle={-45}
                textAnchor="end"
                height={80}
              />
              <YAxis stroke="#9ca3af" fontSize={12} />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Bar 
                dataKey="mars" 
                fill="#ef4444" 
                name="Mars"
                radius={[4, 4, 0, 0]}
              />
              <Bar 
                dataKey="earth" 
                fill="#3b82f6" 
                name="Earth"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <p className="chart-note">
          * Some values are scaled for better visualization due to extreme differences
        </p>
      </div>

      {/* Key Differences Infographic */}
      <div className="differences-section">
        <h3 className="section-title">Key Differences</h3>
        <div className="differences-grid">
          <div className="difference-card temperature-card">
            <div className="difference-header">
              <Thermometer className="difference-icon" />
              <h4>Temperature</h4>
            </div>
            <div className="difference-content">
              <div className="difference-comparison">
                <div className="planet-value mars-value">
                  <span className="value">-60°C</span>
                  <span className="planet">Mars</span>
                </div>
                <div className="difference-arrow">→</div>
                <div className="planet-value earth-value">
                  <span className="value">15°C</span>
                  <span className="planet">Earth</span>
                </div>
              </div>
              <p className="difference-description">
                Mars is 75°C colder on average due to its distance from the Sun and thin atmosphere.
              </p>
            </div>
          </div>

          <div className="difference-card pressure-card">
            <div className="difference-header">
              <BarChart3 className="difference-icon" />
              <h4>Atmospheric Pressure</h4>
            </div>
            <div className="difference-content">
              <div className="difference-comparison">
                <div className="planet-value mars-value">
                  <span className="value">600 Pa</span>
                  <span className="planet">Mars</span>
                </div>
                <div className="difference-arrow">→</div>
                <div className="planet-value earth-value">
                  <span className="value">101,000 Pa</span>
                  <span className="planet">Earth</span>
                </div>
              </div>
              <p className="difference-description">
                Mars has less than 1% of Earth's atmospheric pressure, making liquid water impossible on the surface.
              </p>
            </div>
          </div>

          <div className="difference-card gravity-card">
            <div className="difference-header">
              <Mountain className="difference-icon" />
              <h4>Gravity</h4>
            </div>
            <div className="difference-content">
              <div className="difference-comparison">
                <div className="planet-value mars-value">
                  <span className="value">3.71 m/s²</span>
                  <span className="planet">Mars</span>
                </div>
                <div className="difference-arrow">→</div>
                <div className="planet-value earth-value">
                  <span className="value">9.81 m/s²</span>
                  <span className="planet">Earth</span>
                </div>
              </div>
              <p className="difference-description">
                Mars gravity is only 38% of Earth's - you would weigh much less and could jump 2.6x higher!
              </p>
            </div>
          </div>

          <div className="difference-card radiation-card">
            <div className="difference-header">
              <Zap className="difference-icon" />
              <h4>Radiation Exposure</h4>
            </div>
            <div className="difference-content">
              <div className="difference-comparison">
                <div className="planet-value mars-value">
                  <span className="value">100 mSv/year</span>
                  <span className="planet">Mars</span>
                </div>
                <div className="difference-arrow">→</div>
                <div className="planet-value earth-value">
                  <span className="value">0.2 mSv/year</span>
                  <span className="planet">Earth</span>
                </div>
              </div>
              <p className="difference-description">
                Mars receives 500x more radiation due to lack of magnetic field and thin atmosphere.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Summary Section */}
      <div className="summary-section">
        <h3 className="summary-title">Why These Differences Matter</h3>
        <div className="summary-content">
          <div className="summary-card">
            <h4>For Human Exploration</h4>
            <ul>
              <li>Extreme cold requires advanced heating systems</li>
              <li>Low pressure necessitates pressurized habitats</li>
              <li>High radiation demands protective shielding</li>
              <li>Low gravity affects human physiology over time</li>
            </ul>
          </div>
          
          <div className="summary-card">
            <h4>For Life as We Know It</h4>
            <ul>
              <li>Liquid water cannot exist on the surface</li>
              <li>No breathable atmosphere for Earth life</li>
              <li>Radiation levels are lethal to most organisms</li>
              <li>Temperature extremes prevent biological processes</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompareEarth;