# Development Workflow Integration

## 🎯 **Task-Based Development Methodology**

### Development Phases

- **Task (Tactical)**: Focused work on specific functionality
- **Feature (Strategic)**: Complete feature development sprint
- **Daily (Planning)**: Session planning and architectural decisions

### Time Tracking CLI Commands

**Check current status:**

```bash
npm run time status
```

**Start development phases:**

```bash
# Start daily planning session
npm run time start daily "Dashboard export functionality"

# Start feature development
npm run time start feature "CSV export implementation"

# Start focused task work
npm run time start task "Create export button UI"
```

**End current phase:**

```bash
npm run time end
```

**Timing and trigger commands:**

```bash
# Check elapsed time
npm run time elapsed          # Minutes (default)
npm run time elapsed seconds  # Seconds
npm run time elapsed hours    # Hours

# Threshold checking (returns exit codes)
npm run time check 5          # Exit 1 if ≥5 minutes
npm run time check 30 seconds # Exit 1 if ≥30 seconds

# Trigger protocols
npm run time trigger          # Run all applicable protocols
npm run time trigger 5min-check,failure-sequence  # Specific protocols
```

---

## 🔄 **LLM Integration Commands**

### Phase Management

```bash
# Start development phases
npm run time start daily "Feature implementation"
npm run time start feature "Component development"
npm run time start task "Specific implementation"

# Check status during development
npm run time status

# End phases
npm run time end
```

### Cursor Integration Points

**1. Session Start**

- LLM runs `npm run time start daily "Description"` before beginning work
- Auto-creates today's task log file

**2. Task Boundaries**

- `npm run time start task "Task name"` before each focused work block
- `npm run time end` when task completes
- Auto-populates task log template

**3. Progress Checks**

- `npm run time status` shows elapsed time and warnings
- `npm run time elapsed` provides exact timing for decision-making
- `npm run time trigger` evaluates time-based protocols
- LLM uses timing data for phase transition decisions

**4. Documentation**

- Task logs auto-created in `docs/task-log-YYYY-MM-DD.md`
- LLM updates progress sections after `npm run time end`

### LLM Workflow Pattern

```bash
# Start session
npm run time start daily "Energy dashboard enhancements"

# Begin feature development
npm run time start feature "Add export functionality"

# Work on specific tasks
npm run time start task "Create export UI components"
# [LLM performs development work]
npm run time end

# Next task
npm run time start task "Implement CSV generation logic"
# [LLM performs work]
npm run time end

# End feature
npm run time end

# End session
npm run time end
```

---

## 📋 **Development Cycle Templates**

### Task Cycle (Tactical Focus)

```
## Task [X] - [Date] [Time]
**Objective**: [Specific implementation goal]
**Duration**: [Actual time spent]

**Progress**:
- [ ] [Implementation step]
- [ ] [Testing step]
- [ ] [Documentation step]

**Technical Decisions**:
- [Code structure choices]
- [Implementation approach]

**Next Task**: [Immediate follow-up]
```

### Feature Cycle (Strategic Focus)

```
## Feature Sprint - [Date]
**Goal**: [Complete feature description]
**Tasks Planned**: [Number]
**Tasks Completed**: [Number]

**Technical Approach**:
- [Architecture decisions]
- [Integration strategy]
- [Testing approach]

**Outcome**: [What was delivered]
```

### Daily Cycle (Planning Focus)

```
## Daily Session - [Date]
**Mission**: [Day's primary objective]
**Features Planned**: [1-3 features]
**Features Completed**: [Actual completion]

**Architectural Decisions**:
- [Structural choices made]

**Tomorrow's Priority**:
- [Next session preparation]
```

---

## ⏰ **Time Management**

### Phase Duration Guidelines

- **Task**: 15-90 minutes (focused implementation)
- **Feature**: 2-6 hours (complete feature development)
- **Daily**: No time limit (strategic planning)

### Warning Thresholds

- **Task**: Warning at 60+ minutes
- **Feature**: Warning at 4+ hours
- **Daily**: Tracks total time, no warnings

### Automatic Documentation

- Task logs auto-created in `docs/task-log-YYYY-MM-DD.md`
- Templates pre-populated with timing data
- Progress sections updated by CLI

---

## 🔄 **Integration Benefits**

### For LLM Development

- **Temporal Awareness**: LLM knows task duration and constraints
- **Auto-Documentation**: Task logs pre-populated with metadata
- **Phase Discipline**: Natural work boundaries and transitions
- **Progress Tracking**: Historical velocity and completion data

### For Development Process

- **Task Granularity**: Focused work blocks with clear objectives
- **Feature Coherence**: Logical grouping of related tasks
- **Strategic Planning**: Daily sessions for architectural decisions
- **Historical Analysis**: Detailed tracking of development patterns

### For Project Management

- **Velocity Metrics**: Task completion rates and duration patterns
- **Progress Visibility**: Real-time status of features and tasks
- **Quality Tracking**: Testing and verification integrated into workflow
- **Documentation Automation**: Self-maintaining development logs

---

## 📊 **CLI Features**

### Automatic Time Tracking

- Tracks elapsed time for each development phase
- Shows warnings when phases exceed recommended duration
- Provides real-time status updates

### Phase Management

- Supports 3-tier development cycle (task, feature, daily)
- Automatically ends previous phase when starting new one
- Tracks session counters and progression

### Smart Recommendations

- Suggests when to wrap up phases based on elapsed time
- Provides contextual guidance for next actions
- Integrates with development methodology

### Persistent State

- Stores tracking data in `.time-state.json` (gitignored)
- Survives system restarts and terminal sessions
- Maintains historical data for velocity analysis
