// Main application imports
import { initializeAllCharts, updateAllCharts } from './charts.js';
import { getAppState, setupControls } from './controls.js';

// Energy Dashboard - Simplified Classic View Only
class EnergyDashboard {
	constructor() {
		this.initialized = false;
		console.log('🌟 Energy Dashboard - Classic View Initialized');
	}

	async init() {
		try {
			console.log('🚀 Initializing Energy Dashboard...');

			// Wait for DOM if needed
			if (document.readyState === 'loading') {
				await new Promise((resolve) => {
					document.addEventListener('DOMContentLoaded', resolve);
				});
			}

			// Initialize core functionality
			this.initializeCharts();
			this.initializeControls();
			this.initializeInteractions();
			this.performInitialUpdate();

			this.initialized = true;
			console.log('✅ Energy Dashboard initialized successfully');
		} catch (error) {
			console.error('❌ Failed to initialize Energy Dashboard:', error);
			this.showErrorMessage('Failed to initialize dashboard. Please refresh the page.');
		}
	}

	// Initialize all charts
	initializeCharts() {
		console.log('📊 Initializing charts...');
		initializeAllCharts();
	}

	// Initialize controls
	initializeControls() {
		console.log('🎛️ Initializing controls...');
		setupControls(this.updateCharts.bind(this));
	}

	// Initialize interactions and keyboard shortcuts
	initializeInteractions() {
		console.log('⌨️ Setting up interactions...');

		// Keyboard shortcuts for navigation
		document.addEventListener('keydown', (event) => {
			if (event.ctrlKey || event.metaKey) {
				switch (event.key) {
					case 'ArrowLeft':
						event.preventDefault();
						this.navigatePrevious();
						break;
					case 'ArrowRight':
						event.preventDefault();
						this.navigateNext();
						break;
				}
			}
		});

		// Add smooth scroll behavior for navigation
		document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
			anchor.addEventListener('click', function (e) {
				e.preventDefault();
				const target = document.querySelector(this.getAttribute('href'));
				target?.scrollIntoView({ behavior: 'smooth' });
			});
		});
	}

	// Navigate to previous period
	navigatePrevious() {
		const prevPeriod = getPreviousPeriod(appState.currentPeriod, appState.currentCountry);
		if (prevPeriod) {
			appState.currentPeriod = prevPeriod;
			const periodSelector = document.getElementById('yearSelector');
			if (periodSelector) periodSelector.value = appState.currentPeriod;
			this.updateCharts();
			updateNavigationButtons();
		}
	}

	// Navigate to next period
	navigateNext() {
		const nextPeriod = getNextPeriod(appState.currentPeriod, appState.currentCountry);
		if (nextPeriod) {
			appState.currentPeriod = nextPeriod;
			const periodSelector = document.getElementById('yearSelector');
			if (periodSelector) periodSelector.value = appState.currentPeriod;
			this.updateCharts();
			updateNavigationButtons();
		}
	}

	// Perform initial data update
	performInitialUpdate() {
		console.log('🔄 Performing initial data update...');
		const state = getAppState();
		this.updateCharts();
	}

	// Update all charts with current state
	updateCharts() {
		const state = getAppState();
		console.log(`📊 Updating charts for ${state.currentCountry} - ${state.currentPeriod}`);
		updateAllCharts(state.currentPeriod, state.currentCountry);
	}

	// Show error message to user
	showErrorMessage(message) {
		// Remove any existing error messages first
		const existingError = document.querySelector('.error-message');
		if (existingError) {
			existingError.remove();
		}

		const errorDiv = document.createElement('div');
		errorDiv.className = 'error-message';
		errorDiv.textContent = message;

		document.body.appendChild(errorDiv);

		// Auto-remove after 5 seconds
		setTimeout(() => {
			if (errorDiv.parentNode) {
				errorDiv.style.transform = 'translateX(100%)';
				errorDiv.style.opacity = '0';
				setTimeout(() => errorDiv.remove(), 300);
			}
		}, 5000);
	}
}

// Initialize dashboard when DOM is ready
const dashboard = new EnergyDashboard();
dashboard.init().catch(console.error);

// Export for external access
window.dashboard = dashboard;
