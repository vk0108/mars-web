# Mars Explorer 

A comprehensive web application for exploring Mars weather data, planetary comparisons, and fascinating facts about the Red Planet. Built with modern web technologies to provide an immersive and educational experience about Mars exploration.

## Features

### Interactive Homepage

- Stunning Mars-themed design with gradient effects
- Interactive fact cards with detailed modal information
- Responsive layout optimized for all devices
- Smooth animations and hover effects


### Weather Dashboard

- Real-time Mars weather simulation
- Temperature, wind, pressure, and atmospheric data
- Solar radiation and UV index monitoring
- Dust storm alerts and atmospheric conditions
- Sol (Martian day) tracking system


### Weather Charts

- Interactive data visualizations using Recharts
- Historical weather pattern analysis
- Temperature and pressure trend graphs
- Comparative weather data displays


### Mars vs Earth Comparison

- Side-by-side planetary comparisons
- Interactive bar charts showing key differences
- Temperature, pressure, gravity, and radiation data
- Detailed explanations of planetary conditions


### Mars Day Explorer

- Detailed Martian day (Sol) information
- Daily weather pattern analysis
- Interactive timeline features


### About Mars Weather

- Comprehensive information about Mars missions
- NASA mission data and achievements
- Mars weather terminology explained
- Scientific facts and exploration history


## ️ Tech Stack

### Frontend Technologies

- **React.js** - Component-based UI framework
- **Next.js** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **HTML5 & CSS3** - Core web technologies
- **JavaScript (ES6+)** - Modern JavaScript features


### Data Visualization

- **Recharts** - React-based charting library
- **Custom Charts** - Interactive data visualizations


### UI/UX Libraries

- **shadcn/ui** - Modern React component library
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library


### Fonts & Typography

- **Google Fonts** - SUSE font family
- **Custom CSS** - Gradient text effects and space-themed styling


### Architecture

- **Component-Based Architecture** - Modular React components
- **Responsive Design** - Mobile-first approach
- **Client-Side Routing** - SPA with dynamic navigation
- **Hybrid Architecture** - React SPA + static HTML pages


## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager


### Installation

1. **Clone the repository**

```shellscript
git clone https://github.com/yourusername/mars-explorer.git
cd mars-explorer
```


2. **Install dependencies**

```shellscript
npm install
# or
yarn install
```


3. **Start the development server**

```shellscript
npm run dev
# or
yarn dev
```


4. **Open your browser**
Navigate to `http://localhost:3000` to view the application


### Build for Production

```shellscript
npm run build
npm start
```

## Project Structure

```plaintext
mars-explorer/
├── app/                          # Next.js App Router pages
│   ├── layout.tsx               # Root layout component
│   ├── page.tsx                 # Homepage component
│   └── compare/
│       └── page.tsx             # Mars vs Earth comparison
├── components/
│   └── ui/                      # shadcn/ui components
├── public/
│   ├── mars-image.png          # Mars hero image
│   └── mars-homepage.html      # Static HTML homepage
├── src/
│   ├── App.js                  # Main React application
│   ├── App.css                 # Global styles
│   ├── Dashboard.js            # Weather dashboard
│   ├── WeatherCharts.js        # Charts and visualizations
│   ├── MarsDay.js              # Mars day explorer
│   ├── CompareEarth.js         # Planetary comparison
│   ├── AboutMarsWeather.js     # Educational content
│   └── HomePage.js             # Interactive homepage
├── styles/
│   └── globals.css             # Global CSS styles
└── README.md
```

## Key Components

### Navigation System

- **Hybrid Navigation**: Seamless switching between React SPA and static HTML
- **Responsive Design**: Mobile-friendly navigation with collapsible menu
- **Active State Indicators**: Visual feedback for current page


### Weather Dashboard

- **Real-time Simulation**: Mock Mars weather data with realistic variations
- **Interactive Cards**: Hover effects and detailed information displays
- **Status Indicators**: Visual alerts for dust storms and atmospheric conditions


### Data Visualization

- **Recharts Integration**: Professional charts and graphs
- **Custom Styling**: Mars-themed color schemes and animations
- **Responsive Charts**: Adaptive sizing for all screen sizes


### Educational Content

- **Modal System**: Detailed information overlays
- **Rich Content**: HTML-formatted educational material
- **Interactive Elements**: Clickable fact cards and information panels


## Design Features

### Visual Design

- **Mars Color Palette**: Authentic reds, oranges, and earth tones
- **Gradient Effects**: Modern CSS gradients for visual appeal
- **Space Theme**: Dark backgrounds with stellar accents
- **Typography**: SUSE font family for modern, clean text


### User Experience

- **Smooth Animations**: CSS transitions and hover effects
- **Loading States**: Professional loading screens and indicators
- **Responsive Layout**: Optimized for desktop, tablet, and mobile
- **Accessibility**: Semantic HTML and ARIA labels


## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)


## Responsive Design

The application is fully responsive and optimized for:

- **Desktop**: Full-featured experience with side-by-side layouts
- **Tablet**: Adapted grid layouts and touch-friendly interactions
- **Mobile**: Single-column layouts with optimized navigation
