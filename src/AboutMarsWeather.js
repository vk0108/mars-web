import React from 'react'
import { Satellite, Thermometer, Clock, Globe, Camera, Zap, Wind, BarChart3 } from 'lucide-react'
import './AboutMarsWeather.css'

const AboutMarsWeather = () => {
  return (
    <div className="about-mars-weather">
      {/* Hero Section with Mars Background */}
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">About Mars Weather</h1>
          <p className="hero-subtitle">
            Understanding the Red Planet's climate through cutting-edge space exploration
          </p>
        </div>
      </div>

      {/* NASA Missions Section */}
      <section className="missions-section">
        <div className="container">
          <h2 className="section-title">Data Sources: NASA Mars Missions</h2>
          <p className="section-intro">
            Our Mars weather data is inspired by real missions that have been studying the Martian atmosphere 
            and surface conditions for decades.
          </p>

          <div className="missions-grid">
            {/* InSight Mission */}
            <div className="mission-card insight-card">
              <div className="mission-header">
                <Satellite className="mission-icon" />
                <div className="mission-info">
                  <h3 className="mission-name">InSight Lander</h3>
                  <span className="mission-years">2018 - 2022</span>
                </div>
              </div>
              <div className="mission-content">
                <p className="mission-description">
                  NASA's Interior Exploration using Seismic Investigations, Geodesy and Heat Transport (InSight) 
                  mission provided daily weather reports from Mars, measuring temperature, wind, and pressure.
                </p>
                <div className="mission-achievements">
                  <h4>Key Contributions:</h4>
                  <ul>
                    <li>Daily temperature and pressure measurements</li>
                    <li>Wind speed and direction monitoring</li>
                    <li>Seasonal weather pattern analysis</li>
                    <li>Dust devil and dust storm detection</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Curiosity Rover */}
            <div className="mission-card curiosity-card">
              <div className="mission-header">
                <Camera className="mission-icon" />
                <div className="mission-info">
                  <h3 className="mission-name">Curiosity Rover</h3>
                  <span className="mission-years">2012 - Present</span>
                </div>
              </div>
              <div className="mission-content">
                <p className="mission-description">
                  The Mars Science Laboratory's Curiosity rover has been exploring Gale Crater while continuously 
                  monitoring environmental conditions and atmospheric phenomena.
                </p>
                <div className="mission-achievements">
                  <h4>Key Contributions:</h4>
                  <ul>
                    <li>Long-term climate monitoring</li>
                    <li>Atmospheric composition analysis</li>
                    <li>Seasonal methane variations</li>
                    <li>Dust storm impact studies</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Perseverance Rover */}
            <div className="mission-card perseverance-card">
              <div className="mission-header">
                <Zap className="mission-icon" />
                <div className="mission-info">
                  <h3 className="mission-name">Perseverance Rover</h3>
                  <span className="mission-years">2021 - Present</span>
                </div>
              </div>
              <div className="mission-content">
                <p className="mission-description">
                  NASA's most advanced Mars rover includes the MOXIE experiment and advanced environmental 
                  monitoring systems, studying Jezero Crater's ancient lake bed.
                </p>
                <div className="mission-achievements">
                  <h4>Key Contributions:</h4>
                  <ul>
                    <li>Oxygen production from CO₂</li>
                    <li>Advanced atmospheric analysis</li>
                    <li>High-resolution weather imaging</li>
                    <li>Helicopter flight weather support</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mars Weather Terms Section */}
      <section className="terms-section">
        <div className="container">
          <h2 className="section-title">Understanding Mars Weather Terms</h2>
          
          <div className="terms-grid">
            {/* Sol */}
            <div className="term-card">
              <div className="term-header">
                <Clock className="term-icon" />
                <h3 className="term-name">Sol</h3>
              </div>
              <div className="term-content">
                <p className="term-definition">
                  A <strong>sol</strong> is a Martian solar day - the time it takes for Mars to complete 
                  one rotation on its axis relative to the Sun.
                </p>
                <div className="term-details">
                  <div className="detail-item">
                    <span className="detail-label">Duration:</span>
                    <span className="detail-value">24 hours, 37 minutes, 22 seconds</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Comparison:</span>
                    <span className="detail-value">2.7% longer than Earth day</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Usage:</span>
                    <span className="detail-value">Mission timekeeping standard</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Diurnal Temperature Variation */}
            <div className="term-card">
              <div className="term-header">
                <Thermometer className="term-icon" />
                <h3 className="term-name">Diurnal Temperature Variation</h3>
              </div>
              <div className="term-content">
                <p className="term-definition">
                  The <strong>diurnal temperature variation</strong> refers to the difference between 
                  the highest and lowest temperatures during a single sol.
                </p>
                <div className="term-details">
                  <div className="detail-item">
                    <span className="detail-label">Mars Range:</span>
                    <span className="detail-value">80-100°C difference</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Earth Range:</span>
                    <span className="detail-value">10-20°C difference</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Cause:</span>
                    <span className="detail-value">Thin atmosphere, low heat capacity</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Atmospheric Pressure */}
            <div className="term-card">
              <div className="term-header">
                <BarChart3 className="term-icon" />
                <h3 className="term-name">Atmospheric Pressure</h3>
              </div>
              <div className="term-content">
                <p className="term-definition">
                  Mars has an extremely thin atmosphere, with surface pressure less than 1% of Earth's 
                  atmospheric pressure at sea level.
                </p>
                <div className="term-details">
                  <div className="detail-item">
                    <span className="detail-label">Average:</span>
                    <span className="detail-value">600 Pascals</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Earth Comparison:</span>
                    <span className="detail-value">101,325 Pa (sea level)</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Composition:</span>
                    <span className="detail-value">95% CO₂, 3% N₂, 2% Ar</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Dust Storms */}
            <div className="term-card">
              <div className="term-header">
                <Wind className="term-icon" />
                <h3 className="term-name">Dust Storms</h3>
              </div>
              <div className="term-content">
                <p className="term-definition">
                  Mars experiences dust storms ranging from local dust devils to planet-wide storms 
                  that can last for months and affect global weather patterns.
                </p>
                <div className="term-details">
                  <div className="detail-item">
                    <span className="detail-label">Local Storms:</span>
                    <span className="detail-value">Daily occurrence</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Regional Storms:</span>
                    <span className="detail-value">Several per year</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Global Storms:</span>
                    <span className="detail-value">Every 3-4 Mars years</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Seasons */}
            <div className="term-card">
              <div className="term-header">
                <Globe className="term-icon" />
                <h3 className="term-name">Martian Seasons</h3>
              </div>
              <div className="term-content">
                <p className="term-definition">
                  Mars experiences seasons similar to Earth due to its axial tilt of 25.2°, but 
                  they last nearly twice as long due to Mars' longer orbital period.
                </p>
                <div className="term-details">
                  <div className="detail-item">
                    <span className="detail-label">Mars Year:</span>
                    <span className="detail-value">687 Earth days</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Season Length:</span>
                    <span className="detail-value">~170 sols each</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Axial Tilt:</span>
                    <span className="detail-value">25.2° (Earth: 23.5°)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Opacity */}
            <div className="term-card">
              <div className="term-header">
                <Camera className="term-icon" />
                <h3 className="term-name">Atmospheric Opacity</h3>
              </div>
              <div className="term-content">
                <p className="term-definition">
                  <strong>Opacity</strong> measures how much dust is suspended in the Martian atmosphere, 
                  affecting visibility and solar panel efficiency.
                </p>
                <div className="term-details">
                  <div className="detail-item">
                    <span className="detail-label">Clear Conditions:</span>
                    <span className="detail-value">Tau {'<'} 0.5</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Dusty Conditions:</span>
                    <span className="detail-value">Tau {'>'} 1.0</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Global Storm:</span>
                    <span className="detail-value">Tau {'>'} 5.0</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mars Facts Section */}
      <section className="facts-section">
        <div className="container">
          <h2 className="section-title">Fascinating Mars Weather Facts</h2>
          
          <div className="facts-grid">
            <div className="fact-card">
              <div className="fact-number">-143°C</div>
              <div className="fact-description">Coldest temperature ever recorded on Mars (at the polar ice caps)</div>
            </div>
            
            <div className="fact-card">
              <div className="fact-number">35°C</div>
              <div className="fact-description">Warmest temperature recorded near the equator during summer</div>
            </div>
            
            <div className="fact-card">
              <div className="fact-number">180 km/h</div>
              <div className="fact-description">Maximum wind speeds during global dust storms</div>
            </div>
            
            <div className="fact-card">
              <div className="fact-number">2 Years</div>
              <div className="fact-description">Duration of the longest recorded global dust storm</div>
            </div>
            
            <div className="fact-card">
              <div className="fact-number">40km</div>
              <div className="fact-description">Height that dust can reach during major storms</div>
            </div>
            
            <div className="fact-card">
              <div className="fact-number">-78°C</div>
              <div className="fact-description">Temperature at which CO₂ freezes, forming dry ice at the poles</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Matters Section */}
      <section className="importance-section">
        <div className="container">
          <h2 className="section-title">Why Mars Weather Matters</h2>
          
          <div className="importance-grid">
            <div className="importance-card">
              <h3>Future Human Missions</h3>
              <p>
                Understanding Mars weather is crucial for planning human missions. Astronauts will need 
                to prepare for extreme temperature variations, dust storms, and low atmospheric pressure 
                that affects everything from habitat design to EVA planning.
              </p>
            </div>
            
            <div className="importance-card">
              <h3>Equipment Design</h3>
              <p>
                Mars weather data helps engineers design rovers, landers, and future habitats that can 
                withstand the harsh Martian environment, including dust accumulation on solar panels 
                and thermal cycling stress.
              </p>
            </div>
            
            <div className="importance-card">
              <h3>Climate History</h3>
              <p>
                Current weather patterns provide clues about Mars' climate history and help scientists 
                understand how the planet evolved from a potentially habitable world to its current 
                cold, dry state.
              </p>
            </div>
            
            <div className="importance-card">
              <h3>Comparative Planetology</h3>
              <p>
                Studying Mars weather helps us better understand atmospheric dynamics, climate change, 
                and planetary evolution - knowledge that also applies to understanding Earth's climate 
                and other planetary systems.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutMarsWeather
