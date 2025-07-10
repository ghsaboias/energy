#!/usr/bin/env node

const { Command } = require('commander');
const chalk = require('chalk');
const fs = require('fs');
const path = require('path');

const STATE_FILE = path.join(__dirname, '..', '.time-state.json');
const DOCS_DIR = path.join(__dirname, '..', 'docs');

class DevTimeTracker {
	constructor() {
		this.state = this.loadState();
	}

	loadState() {
		try {
			if (fs.existsSync(STATE_FILE)) {
				return JSON.parse(fs.readFileSync(STATE_FILE, 'utf8'));
			}
		} catch (error) {
			console.warn(chalk.yellow('Warning: Could not load time state, using defaults'));
		}
		return {
			currentPhase: null,
			phases: {},
			dailyStart: null,
			taskCount: 0,
			featureCount: 0,
		};
	}

	saveState() {
		try {
			fs.writeFileSync(STATE_FILE, JSON.stringify(this.state, null, 2));
		} catch (error) {
			console.error(chalk.red('Error saving time state:', error.message));
		}
	}

	formatDuration(startTime, endTime = Date.now()) {
		const duration = Math.floor((endTime - startTime) / 1000);
		const hours = Math.floor(duration / 3600);
		const minutes = Math.floor((duration % 3600) / 60);
		const seconds = duration % 60;

		if (hours > 0) {
			return `${hours}h ${minutes}m ${seconds}s`;
		} else if (minutes > 0) {
			return `${minutes}m ${seconds}s`;
		} else {
			return `${seconds}s`;
		}
	}

	startPhase(type, description) {
		const now = Date.now();
		const phaseId = `${type}-${Date.now()}`;

		// End current phase if exists
		if (this.state.currentPhase) {
			this.endCurrentPhase();
		}

		this.state.currentPhase = {
			id: phaseId,
			type,
			description,
			startTime: now,
			blocks: [],
		};

		// Initialize daily tracking if starting daily phase
		if (type === 'daily') {
			this.state.dailyStart = now;
			this.state.taskCount = 0;
			this.state.featureCount = 0;
		}

		// Increment counters
		if (type === 'task') this.state.taskCount = (this.state.taskCount || 0) + 1;
		if (type === 'feature') this.state.featureCount = (this.state.featureCount || 0) + 1;

		this.saveState();

		console.log(chalk.green(`\n🕐 Started ${type} phase: ${description}`));
		console.log(chalk.gray(`Time: ${new Date(now).toLocaleTimeString()}`));

		if (type === 'task') {
			console.log(chalk.blue(`📊 Task session #${this.state.taskCount || 1}`));
		} else if (type === 'feature') {
			console.log(chalk.blue(`🔄 Feature sprint #${this.state.featureCount || 1}`));
		}
	}

	endCurrentPhase() {
		if (!this.state.currentPhase) {
			console.log(chalk.yellow('No active phase to end'));
			return;
		}

		const phase = this.state.currentPhase;
		const now = Date.now();
		const duration = now - phase.startTime;

		// Save completed phase
		if (!this.state.phases[phase.type]) {
			this.state.phases[phase.type] = [];
		}

		this.state.phases[phase.type].push({
			...phase,
			endTime: now,
			duration,
		});

		console.log(chalk.green(`\n✅ Completed ${phase.type} phase: ${phase.description}`));
		console.log(chalk.gray(`Duration: ${this.formatDuration(phase.startTime, now)}`));

		// Update task log if it's a task phase
		if (phase.type === 'task') {
			this.updateTaskLog(phase, now, duration);
		}

		this.state.currentPhase = null;
		this.saveState();
	}

	updateTaskLog(phase, endTime, duration) {
		try {
			const today = new Date().toISOString().split('T')[0];
			const logFile = path.join(DOCS_DIR, `task-log-${today}.md`);

			const taskNumber = this.state.taskCount || 1;
			const startTime = new Date(phase.startTime);
			const formattedDuration = this.formatDuration(phase.startTime, endTime);

			const logEntry = `
## Task ${taskNumber} - ${today} ${startTime.toLocaleTimeString()}-${new Date(endTime).toLocaleTimeString()}

**Objective**: ${phase.description}
**Duration**: ${formattedDuration}

**Progress**:
- [ ] [Update with specific action items]
- [ ] [Update with specific action items]

**Technical Decisions**:
- [Update with implementation choices made]

**Code Changes**:
- [Update with files modified]

**Testing**:
- [Update with verification steps]

**Blockers**:
- [Update with any issues encountered]

**Next Task**: [Update with next action]

---
`;

			// Append to or create task log
			if (fs.existsSync(logFile)) {
				fs.appendFileSync(logFile, logEntry);
			} else {
				const header = `# Task Development Log - ${today}\n\n`;
				fs.writeFileSync(logFile, header + logEntry);
			}

			console.log(chalk.blue(`📝 Updated task log: ${path.basename(logFile)}`));
		} catch (error) {
			console.warn(chalk.yellow(`Warning: Could not update task log: ${error.message}`));
		}
	}

	status() {
		const now = Date.now();

		console.log(chalk.cyan('\n📊 Development Time Status\n'));

		if (this.state.currentPhase) {
			const phase = this.state.currentPhase;
			const elapsed = this.formatDuration(phase.startTime, now);

			console.log(chalk.green(`🏃 Active Phase: ${phase.type}`));
			console.log(chalk.white(`   Description: ${phase.description}`));
			console.log(chalk.gray(`   Started: ${new Date(phase.startTime).toLocaleTimeString()}`));
			console.log(chalk.gray(`   Elapsed: ${elapsed}`));

			// Show phase duration warnings
			const elapsedMinutes = Math.floor((now - phase.startTime) / (1000 * 60));
			if (phase.type === 'task' && elapsedMinutes > 60) {
				console.log(chalk.yellow(`   ⚠️  Task exceeded by ${elapsedMinutes - 60} minutes`));
			} else if (phase.type === 'feature' && elapsedMinutes > 240) {
				console.log(chalk.yellow(`   ⚠️  Feature exceeded by ${elapsedMinutes - 240} minutes`));
			}
		} else {
			console.log(chalk.gray('No active phase'));
		}

		// Daily summary
		if (this.state.dailyStart) {
			const dailyElapsed = this.formatDuration(this.state.dailyStart, now);
			console.log(chalk.blue(`\n📅 Today's Session`));
			console.log(chalk.white(`   Started: ${new Date(this.state.dailyStart).toLocaleTimeString()}`));
			console.log(chalk.white(`   Total time: ${dailyElapsed}`));
			console.log(chalk.white(`   Tasks completed: ${this.state.taskCount || 0}`));
			console.log(chalk.white(`   Features completed: ${this.state.featureCount || 0}`));
		}

		// Phase recommendations
		this.showRecommendations();
	}

	showRecommendations() {
		const now = Date.now();

		if (!this.state.currentPhase) {
			console.log(chalk.cyan('\n💡 Recommendations:'));
			console.log(chalk.white('   • Start with: npm run time start task "Your task description"'));
			return;
		}

		const phase = this.state.currentPhase;
		const elapsedMinutes = Math.floor((now - phase.startTime) / (1000 * 60));

		console.log(chalk.cyan('\n💡 Recommendations:'));

		if (phase.type === 'task') {
			if (elapsedMinutes >= 60) {
				console.log(chalk.yellow('   • Consider wrapping up current task (60+ minutes elapsed)'));
				console.log(chalk.white('   • Use: npm run time end'));
			} else if (elapsedMinutes >= 30) {
				console.log(chalk.blue('   • Halfway through task - check progress against objective'));
			}
		} else if (phase.type === 'feature') {
			if (elapsedMinutes >= 240) {
				console.log(chalk.yellow('   • Consider ending feature sprint (4+ hours elapsed)'));
			} else if (elapsedMinutes >= 120) {
				console.log(chalk.blue('   • Halfway through feature - review progress'));
			}
		}
	}

	summary() {
		console.log(chalk.cyan('\n📈 Development Summary\n'));

		['daily', 'feature', 'task'].forEach((type) => {
			if (this.state.phases[type] && this.state.phases[type].length > 0) {
				const phases = this.state.phases[type];
				const totalDuration = phases.reduce((sum, p) => sum + p.duration, 0);
				const avgDuration = totalDuration / phases.length;

				console.log(chalk.green(`${type.toUpperCase()} Phases:`));
				console.log(chalk.white(`   Count: ${phases.length}`));
				console.log(chalk.white(`   Total time: ${this.formatDuration(0, totalDuration)}`));
				console.log(chalk.white(`   Average: ${this.formatDuration(0, avgDuration)}`));
				console.log('');
			}
		});
	}

	reset() {
		if (this.state.currentPhase) {
			console.log(chalk.yellow('Ending current phase before reset...'));
			this.endCurrentPhase();
		}

		this.state = {
			currentPhase: null,
			phases: {},
			dailyStart: null,
			taskCount: 0,
			featureCount: 0,
		};

		this.saveState();
		console.log(chalk.green('\n🔄 Time tracking state reset'));
	}

	elapsed(unit = 'minutes') {
		if (!this.state.currentPhase) {
			console.log(chalk.yellow('No active phase to check elapsed time'));
			return 0;
		}

		const now = Date.now();
		const elapsedMs = now - this.state.currentPhase.startTime;

		let elapsed;
		switch (unit.toLowerCase()) {
			case 'seconds':
			case 's':
				elapsed = Math.floor(elapsedMs / 1000);
				break;
			case 'minutes':
			case 'm':
				elapsed = Math.floor(elapsedMs / (1000 * 60));
				break;
			case 'hours':
			case 'h':
				elapsed = Math.floor(elapsedMs / (1000 * 60 * 60));
				break;
			default:
				elapsed = Math.floor(elapsedMs / (1000 * 60)); // default to minutes
		}

		console.log(chalk.cyan(`⏱️  Elapsed: ${elapsed} ${unit}`));
		return elapsed;
	}

	check(threshold, unit = 'minutes') {
		if (!this.state.currentPhase) {
			console.log(chalk.red('❌ No active phase'));
			process.exit(1);
		}

		const elapsed = this.getElapsedValue(unit);
		const thresholdNum = parseInt(threshold);

		if (elapsed >= thresholdNum) {
			console.log(chalk.red(`🚨 THRESHOLD EXCEEDED: ${elapsed} ${unit} >= ${thresholdNum} ${unit}`));
			console.log(chalk.yellow(`   Current phase: ${this.state.currentPhase.type} - ${this.state.currentPhase.description}`));
			process.exit(1); // Exit with error code for triggering protocols
		} else {
			console.log(chalk.green(`✅ Within threshold: ${elapsed}/${thresholdNum} ${unit}`));
			process.exit(0);
		}
	}

	getElapsedValue(unit) {
		if (!this.state.currentPhase) return 0;

		const now = Date.now();
		const elapsedMs = now - this.state.currentPhase.startTime;

		switch (unit.toLowerCase()) {
			case 'seconds':
			case 's':
				return Math.floor(elapsedMs / 1000);
			case 'minutes':
			case 'm':
				return Math.floor(elapsedMs / (1000 * 60));
			case 'hours':
			case 'h':
				return Math.floor(elapsedMs / (1000 * 60 * 60));
			default:
				return Math.floor(elapsedMs / (1000 * 60));
		}
	}

	trigger(conditions) {
		if (!this.state.currentPhase) {
			console.log(chalk.red('❌ No active phase for trigger evaluation'));
			return;
		}

		const now = Date.now();
		const phase = this.state.currentPhase;
		const elapsedMinutes = Math.floor((now - phase.startTime) / (1000 * 60));

		console.log(chalk.cyan(`\n🎯 Evaluating triggers for ${phase.type} phase`));
		console.log(chalk.gray(`   Elapsed: ${elapsedMinutes} minutes`));

		// Built-in trigger protocols
		const protocols = {
			'5min-check': () => {
				if (elapsedMinutes >= 5) {
					console.log(chalk.yellow(`⚠️  5-minute checkpoint reached`));
					console.log(chalk.white(`   • Quick progress review recommended`));
					console.log(chalk.white(`   • Are you on track with: "${phase.description}"?`));
					return true;
				}
				return false;
			},
			'failure-sequence': () => {
				if (elapsedMinutes >= 15) {
					console.log(chalk.red(`🚨 FAILURE SEQUENCE TRIGGERED (15+ minutes)`));
					console.log(chalk.white(`   Protocol steps:`));
					console.log(chalk.white(`   1. Document current blocker`));
					console.log(chalk.white(`   2. Ask for help or research alternative approach`));
					console.log(chalk.white(`   3. Consider breaking task into smaller parts`));
					console.log(chalk.white(`   4. End current task if still blocked at 25 minutes`));
					return true;
				}
				return false;
			},
			'task-limit': () => {
				if (phase.type === 'task' && elapsedMinutes >= 60) {
					console.log(chalk.red(`⏰ TASK TIME LIMIT EXCEEDED (60+ minutes)`));
					console.log(chalk.white(`   • End current task: npm run time end`));
					console.log(chalk.white(`   • Break or start new task`));
					return true;
				}
				return false;
			},
			'feature-limit': () => {
				if (phase.type === 'feature' && elapsedMinutes >= 240) {
					console.log(chalk.red(`⏰ FEATURE TIME LIMIT EXCEEDED (4+ hours)`));
					console.log(chalk.white(`   • End feature sprint: npm run time end`));
					console.log(chalk.white(`   • Take extended break or switch context`));
					return true;
				}
				return false;
			},
		};

		let triggered = false;
		if (conditions) {
			const conditionList = conditions.split(',').map((c) => c.trim());
			conditionList.forEach((condition) => {
				if (protocols[condition] && protocols[condition]()) {
					triggered = true;
				}
			});
		} else {
			// Run all protocols if no specific conditions given
			Object.keys(protocols).forEach((protocol) => {
				if (protocols[protocol]()) {
					triggered = true;
				}
			});
		}

		if (!triggered) {
			console.log(chalk.green(`✅ No triggers activated`));
		}
	}
}

// CLI Setup
const program = new Command();
const tracker = new DevTimeTracker();

program.name('time-tracker').description('Development phase time tracking for your energy project').version('1.0.0');

program
	.command('start <type> [description]')
	.description('Start a development phase (daily, feature, task)')
	.action((type, description = 'Development work') => {
		if (!['daily', 'feature', 'task'].includes(type)) {
			console.error(chalk.red('Error: Phase type must be daily, feature, or task'));
			process.exit(1);
		}
		tracker.startPhase(type, description);
	});

program
	.command('end')
	.description('End the current development phase')
	.action(() => {
		tracker.endCurrentPhase();
	});

program
	.command('status')
	.description('Show current development phase status')
	.action(() => {
		tracker.status();
	});

program
	.command('summary')
	.description('Show development time summary')
	.action(() => {
		tracker.summary();
	});

program
	.command('reset')
	.description('Reset all time tracking data')
	.action(() => {
		tracker.reset();
	});

program
	.command('elapsed [unit]')
	.description('Show elapsed time for current phase (units: seconds, minutes, hours)')
	.action((unit = 'minutes') => {
		tracker.elapsed(unit);
	});

program
	.command('check <threshold> [unit]')
	.description('Check if elapsed time exceeds threshold (exits with code 1 if exceeded)')
	.action((threshold, unit = 'minutes') => {
		tracker.check(threshold, unit);
	});

program
	.command('trigger [conditions]')
	.description('Evaluate time-based triggers and protocols (5min-check, failure-sequence, task-limit, feature-limit)')
	.action((conditions) => {
		tracker.trigger(conditions);
	});

// Default to status if no command provided
if (process.argv.length === 2) {
	tracker.status();
} else {
	program.parse();
}
