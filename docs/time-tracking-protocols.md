# Time Tracking Protocols & Triggers

## Overview

The time tracking CLI now includes advanced timing features for elapsed time queries and automated trigger protocols. These tools help enforce temporal discipline and provide automated interventions for common development scenarios.

## Elapsed Time Commands

### Basic Elapsed Time Query

```bash
npm run time elapsed          # Shows elapsed time in minutes (default)
npm run time elapsed seconds  # Shows elapsed time in seconds
npm run time elapsed hours    # Shows elapsed time in hours
```

### Threshold Checking

```bash
npm run time check 5          # Exit code 1 if ≥5 minutes, code 0 if <5 minutes
npm run time check 30 seconds # Exit code 1 if ≥30 seconds
npm run time check 2 hours    # Exit code 1 if ≥2 hours
```

**Use cases for threshold checking:**

- Script automation that stops work after specific durations
- Cron job integration for time-based alerts
- Development workflow automation

## Trigger Protocols

### Available Protocols

**5min-check**: Quick progress review at 5-minute mark

- Prompts progress review question
- Ensures alignment with task objective

**failure-sequence**: Intervention protocol for extended debugging (15+ minutes)

- Documents current blocker
- Suggests help-seeking or alternative approaches
- Recommends task breakdown
- Forces task end at 25 minutes if still blocked

**task-limit**: Hard limit enforcement for task phases (60+ minutes)

- Mandates task completion
- Suggests break or context switch

**feature-limit**: Hard limit enforcement for feature phases (240+ minutes)

- Mandates feature sprint completion
- Suggests extended break

### Trigger Commands

```bash
# Run all applicable protocols
npm run time trigger

# Run specific protocols
npm run time trigger 5min-check
npm run time trigger failure-sequence,task-limit
```

## Integration Examples

### Automated 5-Minute Check

```bash
#!/bin/bash
# check-progress.sh
if npm run time check 5; then
  echo "Still within 5-minute window"
else
  npm run time trigger 5min-check
fi
```

### Failure Sequence Automation

```bash
#!/bin/bash
# failure-protocol.sh
while true; do
  sleep 300  # Check every 5 minutes
  if ! npm run time check 15; then
    npm run time trigger failure-sequence
    break
  fi
done
```

### Development Session Guard

```bash
#!/bin/bash
# session-guard.sh
while true; do
  sleep 600  # Check every 10 minutes
  npm run time trigger
  sleep 600
done
```

## Exit Codes

- **0**: Within threshold / no triggers activated
- **1**: Threshold exceeded / triggers activated

This enables shell scripting and automation based on time tracking state.

## Protocol Customization

Protocols are built into the CLI with these time thresholds:

- 5-minute checkpoint: Quick review
- 15-minute failure sequence: Debugging intervention
- 25-minute forced task end: Hard stop for blocked work
- 60-minute task limit: Task phase completion
- 240-minute feature limit: Feature phase completion

These thresholds enforce temporal discipline while providing escape mechanisms for common development pitfalls.

## Best Practices

1. **Start sessions with trigger monitoring**:

   ```bash
   npm run time start task "Your task"
   # Set up background trigger monitoring if needed
   ```

2. **Use threshold checks in scripts**:

   ```bash
   if npm run time check 10; then
     continue_work
   else
     trigger_break_protocol
   fi
   ```

3. **Regular trigger evaluation**:

   ```bash
   npm run time trigger  # Check all protocols periodically
   ```

4. **Combine with existing workflow**:
   ```bash
   npm run time start task "Debug API issue"
   # Work on task...
   npm run time trigger failure-sequence  # If stuck
   npm run time end
   ```

These timing features integrate seamlessly with the existing 3-tier development methodology while adding temporal awareness and automated intervention capabilities.
