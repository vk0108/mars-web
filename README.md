# Mars Explorer 

A modern web application for exploring Mars weather data and planetary information.

## Features

- **Interactive Mars Homepage** - Immersive landing page with Mars facts
- **Weather Dashboard** - Real-time Mars weather simulation
- **Data Visualizations** - Interactive charts comparing Mars vs Earth
- **Educational Content** - NASA mission data and Mars exploration info
- **Responsive Design** - Works on all devices


## ️ Tech Stack

- **Frontend**: React.js, JavaScript, HTML5
- **UI/UX**: Custom CSS, Lucide React icons
- **Charts**: Recharts for data visualizations
- **Styling**: CSS3 with Mars-themed gradients


## Quick Start

```shellscript
# Clone and install
git clone https://github.com/yourusername/mars-explorer.git
cd mars-explorer
npm install

# Run development server
npm start
```

## Project Structure

```plaintext
mars-web/
├── public/
│   ├── mars-homepage.html    # Interactive landing page
│   ├── mars-image.png        # Mars hero image
│   └── index.html           # React app entry
├── src/
│   ├── App.js               # Main React component
│   ├── Dashboard.js         # Weather dashboard
│   ├── WeatherCharts.js     # Data visualizations
│   ├── CompareEarth.js      # Mars vs Earth comparison
│   ├── AboutMarsWeather.js  # Educational content
│   └── *.css               # Component styles
```

## Pages Overview

### **Homepage**(`mars-homepage.html`)

Interactive landing page featuring Mars imagery and clickable fact cards covering Olympus Mons, Valles Marineris, polar ice caps, dust storms, twin moons, and ancient oceans. Each card opens detailed modal information.

### **Dashboard**(`Dashboard.js`)

Real-time Mars weather monitoring interface displaying temperature, wind speed/direction, atmospheric pressure, solar radiation, UV index, and dust storm alerts with Sol (Martian day) tracking.

### **Weather Charts**(`WeatherCharts.js`)

Data visualization page with interactive charts showing temperature trends, pressure variations, wind patterns, and seasonal changes using Recharts library.

### **Compare with Earth**(`CompareEarth.js`)

Side-by-side planetary comparison featuring temperature, atmospheric pressure, gravity, and radiation levels with detailed explanations of the differences and their implications.

### **About Mars Weather**(`AboutMarsWeather.js`)

Educational content covering NASA missions (InSight, Curiosity, Perseverance), Mars weather terminology, fascinating facts, and the importance of Mars weather research for future exploration.
