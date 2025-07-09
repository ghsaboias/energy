# Global Energy Capacity Dashboard

A data-driven, interactive dashboard for monitoring global energy capacity with focus on renewable energy trends.

## Overview

This dashboard visualizes global electricity generation capacity by energy source, providing insights into the current energy landscape and renewable energy adoption trends from 2020-2024.

## Features

- **Interactive Time Series** - Explore capacity trends from 2020-2024
- **Year Navigation** - Intuitive controls for year selection
- **Enhanced Tooltips** - Shows capacity values and year-over-year changes
- **Real-time Data** - Based on IRENA, IEA, and Energy Institute statistics
- **Responsive Design** - Clean, modern interface that works across devices
- **Color-coded Sources** - Each energy source has distinct visual representation

## Energy Sources Tracked

1. **Coal** - 2,020 GW (Traditional fossil fuel baseload)
2. **Natural Gas** - 1,800 GW (Flexible fossil fuel generation)
3. **Solar PV** - 1,419 GW (Fastest growing renewable source)
4. **Wind** - 1,017 GW (Second fastest growing renewable)
5. **Hydroelectric** - 1,370 GW (Largest renewable capacity)
6. **Nuclear** - 382 GW (Stable low-carbon baseload)

## Current Implementation

- **Status**: Working MVP deployed
- **Data Period**: 2020-2024 (5 years of historical data)
- **Chart Type**: Interactive bar chart with year selection
- **Interactivity**:
  - Year selector dropdown (2020-2024)
  - Previous/Next year navigation
  - Hover tooltips with year-over-year changes
  - Dynamic chart updates

## Technology Stack

- **Frontend**: Vanilla HTML/CSS/JavaScript
- **Charts**: D3.js v7 (CDN)
- **Data**: Embedded JSON data (avoids CORS issues)
- **Styling**: Custom CSS with modern design
- **Deployment**: Ready for Cloudflare Pages

## Getting Started

1. Open `index.html` in a web browser
2. Use the year selector or navigation buttons to explore different years
3. Hover over bars to see:
   - Exact capacity values
   - Year-over-year changes (percentage)
   - Growth/decline indicators

## File Structure

```
energy/
├── index.html          # Main dashboard page
├── script.js           # D3.js chart implementation
├── style.css          # Dashboard styling
├── README.md          # This file
└── docs/              # Technical documentation
```

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
