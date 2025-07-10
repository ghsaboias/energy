# Development Time Tracking CLI

A command-line tool for tracking development phases in your energy project, integrated with your existing development cycle methodology.

## Installation & Setup

The CLI tool is already configured in your project. Dependencies are installed via:

```bash
npm install
```

## Commands

### Check Status

```bash
npm run time
# or
npm run time status
```

Shows current active phase, elapsed time, and recommendations.

### Start Development Phases

**Start an hourly session:**

```bash
npm run time start hourly "Implementing feature X"
```

**Start a 4-hour sprint:**

```bash
npm run time start 4hour "Adding export functionality"
```

**Start a daily session:**

```bash
npm run time start daily "Energy dashboard enhancements"
```

### End Current Phase

```bash
npm run time end
```

Ends the current active phase and logs the results.

### View Summary

```bash
npm run time summary
```

Shows historical data about completed phases.

### Reset Tracking

```bash
npm run time reset
```

Clears all tracking data (use with caution).

## Features

### ⏰ **Automatic Time Tracking**

- Tracks elapsed time for each development phase
- Shows warnings when phases exceed recommended duration
- Provides real-time status updates

### 📊 **Phase Management**

- Supports your 3-tier development cycle (hourly, 4-hour, daily)
- Automatically ends previous phase when starting a new one
- Tracks session counters (hour #, sprint #)

### 📝 **Hourly Log Integration**

- Automatically creates/updates hourly log files in `docs/`
- Follows format: `hourly-log-YYYY-MM-DD.md`
- Pre-fills hourly log template with time data

### 🔔 **Smart Recommendations**

- Suggests when to wrap up phases based on elapsed time
- Provides contextual guidance for next actions
- Integrates with your development methodology

### 💾 **Persistent State**

- Stores tracking data in `.time-state.json` (gitignored)
- Survives system restarts and terminal sessions
- Maintains historical data for analysis

## Development Workflow Integration

### Hourly Cycle (Tactical Focus)

```bash
# Start your hour
npm run time start hourly "Implementing user authentication"

# Check progress midway
npm run time status

# End when complete
npm run time end
```

### 4-Hour Sprint (Feature Focus)

```bash
# Start sprint
npm run time start 4hour "Complete dashboard export feature"

# Work through hourly sessions within the sprint
npm run time start hourly "Design export UI"
npm run time end
npm run time start hourly "Implement CSV generation"
npm run time end

# End sprint
npm run time end
```

### Daily Session (Strategic Focus)

```bash
# Start your development day
npm run time start daily "Enhanced energy dashboard with country data"

# Work through sprints and hours...

# End day
npm run time end
```

## Time Warnings

The tool provides helpful warnings:

- **Hourly**: Warning at 50+ minutes
- **4-Hour Sprint**: Warning at 3h 40m+
- **Daily**: Tracks total time but no hard limit

## File Locations

- **State File**: `.time-state.json` (auto-created, gitignored)
- **Script**: `scripts/time-tracker.js`
- **Hourly Logs**: `docs/hourly-log-YYYY-MM-DD.md`

## Example Usage Session

```bash
# Start your day
npm run time start daily "Adding export functionality to energy dashboard"

# Begin first sprint
npm run time start 4hour "Design and implement CSV export"

# Work on specific hour
npm run time start hourly "Create export button UI"
# ... do development work ...
npm run time end

# Next hour
npm run time start hourly "Implement CSV generation logic"
# ... do development work ...
npm run time end

# Check your progress
npm run time summary

# End sprint
npm run time end

# End day
npm run time end
```

## Integration Benefits

1. **Automated Documentation**: Hourly logs are pre-populated with timing data
2. **Progress Awareness**: Visual feedback on phase duration and recommendations
3. **Methodology Enforcement**: Natural integration with your 3-tier development cycle
4. **Historical Analysis**: Track your development velocity over time
5. **Context Switching**: Clear boundaries between development phases

This tool enhances your existing development methodology by providing temporal structure and automated documentation without changing your workflow.
