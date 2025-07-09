# Global Energy Capacity Dashboard

A data-driven, interactive dashboard for monitoring global energy capacity with focus on renewable energy trends. Deployed as a Cloudflare Worker for optimal performance and global edge distribution.

## 🚀 Live Dashboard

**Production URL**: https://energy.gsaboia.workers.dev

**API Endpoints**:

- Health Check: https://energy.gsaboia.workers.dev/health
- Dashboard Info: https://energy.gsaboia.workers.dev/api/info

## Overview

This dashboard visualizes global electricity generation capacity by energy source, providing insights into the current energy landscape and renewable energy adoption trends from 2020-2024.

## Features

- **Interactive Time Series** - Explore capacity trends from 2020-2024
- **Year Navigation** - Intuitive controls for year selection
- **Enhanced Tooltips** - Shows capacity values and year-over-year changes
- **Real-time Data** - Based on IRENA, IEA, and Energy Institute statistics
- **Responsive Design** - Clean, modern interface that works across devices
- **Color-coded Sources** - Each energy source has distinct visual representation
- **Edge Performance** - Deployed on Cloudflare Workers for global speed

## Energy Sources Tracked

1. **Coal** - 2,020 GW (Traditional fossil fuel baseload)
2. **Natural Gas** - 1,800 GW (Flexible fossil fuel generation)
3. **Solar PV** - 1,419 GW (Fastest growing renewable source)
4. **Wind** - 1,017 GW (Second fastest growing renewable)
5. **Hydroelectric** - 1,370 GW (Largest renewable capacity)
6. **Nuclear** - 382 GW (Stable low-carbon baseload)

## Current Implementation

- **Status**: ✅ Production deployed on Cloudflare Workers
- **Data Period**: 2020-2024 (5 years of historical data)
- **Chart Type**: Interactive bar chart with year selection
- **Interactivity**:
  - Year selector dropdown (2020-2024)
  - Previous/Next year navigation
  - Hover tooltips with year-over-year changes
  - Dynamic chart updates

## Technology Stack

- **Runtime**: Cloudflare Workers (Edge computing)
- **Frontend**: Vanilla HTML/CSS/JavaScript
- **Charts**: D3.js v7 (CDN)
- **Data**: Embedded JSON data (avoids CORS issues)
- **Styling**: Custom CSS with modern design
- **Static Assets**: Served via Workers Static Assets

## Development

### Prerequisites

- Node.js 18+
- npm
- Wrangler CLI (Cloudflare Workers CLI)

### Local Development

1. **Clone the repository**:

   ```bash
   git clone https://github.com/ghsaboias/energy.git
   cd energy
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start development server**:

   ```bash
   npm run dev
   ```

4. **Open in browser**:
   ```
   http://localhost:8787
   ```

### Deployment

Deploy to Cloudflare Workers:

```bash
npm run deploy
```

## File Structure

```
energy/
├── src/
│   └── index.ts           # Worker entry point
├── public/                # Static assets
│   ├── index.html         # Main dashboard page
│   ├── script.js          # D3.js chart implementation
│   ├── style.css          # Dashboard styling
│   ├── README.md          # Documentation
│   └── ENERGY_DASHBOARD_DECISIONS.md
├── wrangler.jsonc         # Worker configuration
├── package.json           # Dependencies
├── tsconfig.json          # TypeScript config
└── test/                  # Test files
```

## API Endpoints

The Worker provides several endpoints:

- `GET /` - Main dashboard
- `GET /health` - Health check
- `GET /api/info` - Dashboard metadata
- `GET /style.css` - Stylesheet
- `GET /script.js` - JavaScript functionality

## Usage

1. Visit the live dashboard at https://energy.gsaboia.workers.dev
2. Use the year selector or navigation buttons to explore different years
3. Hover over bars to see:
   - Exact capacity values
   - Year-over-year changes (percentage)
   - Growth/decline indicators

## Future Enhancements

- Country-specific data breakdown
- AI energy consumption integration
- Real-time data API integration
- Additional chart types (line charts, pie charts)
- Trend analysis and projections

## Data Sources

- **IRENA** - Renewable Energy Statistics 2024
- **IEA** - World Energy Outlook 2024
- **Energy Institute** - Statistical Review of World Energy 2024

## License

MIT License - see LICENSE file for details
