// Main Script - Application Orchestration and Initialization

import { initializeAllCharts, updateAllCharts } from './charts.js';
import { getAppState, initializeControls, initializeKeyboardNavigation, initializeTouchNavigation } from './controls.js';

// Application Initialization
class EnergyDashboard {
	constructor() {
		this.initialized = false;
	}

	// Initialize the entire dashboard
	async init() {
		if (this.initialized) return;

		try {
			console.log('🚀 Initializing Energy Dashboard...');

			// Wait for DOM to be fully loaded
			if (document.readyState === 'loading') {
				await new Promise((resolve) => {
					document.addEventListener('DOMContentLoaded', resolve);
				});
			}

			// Initialize all modules in sequence
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

	// Initialize controls and UI
	initializeControls() {
		console.log('🎛️ Initializing controls...');
		initializeControls();
	}

	// Initialize user interactions (keyboard, touch)
	initializeInteractions() {
		console.log('⌨️ Initializing interactions...');
		initializeKeyboardNavigation();
		initializeTouchNavigation();
	}

	// Perform initial data update
	performInitialUpdate() {
		console.log('🔄 Performing initial update...');
		const state = getAppState();
		updateAllCharts(state.currentPeriod, state.currentCountry, state.comparisonCountry, state.isComparisonMode);
	}

	// Show error message to user
	showErrorMessage(message) {
		const errorDiv = document.createElement('div');
		errorDiv.style.cssText = `
			position: fixed;
			top: 20px;
			right: 20px;
			background: #e74c3c;
			color: white;
			padding: 15px 20px;
			border-radius: 5px;
			z-index: 10000;
			font-family: Arial, sans-serif;
			box-shadow: 0 4px 6px rgba(0,0,0,0.1);
		`;
		errorDiv.textContent = message;
		document.body.appendChild(errorDiv);

		// Auto-remove after 5 seconds
		setTimeout(() => {
			if (document.body.contains(errorDiv)) {
				document.body.removeChild(errorDiv);
			}
		}, 5000);
	}

	// Cleanup method (if needed for SPA scenarios)
	destroy() {
		console.log('🧹 Cleaning up Energy Dashboard...');
		// Remove event listeners, clear intervals, etc.
		this.initialized = false;
	}
}

// Create and initialize the dashboard instance
const dashboard = new EnergyDashboard();

// Auto-initialize when script loads
dashboard.init().catch((error) => {
	console.error('❌ Dashboard initialization failed:', error);
});

// Export for external access if needed
window.EnergyDashboard = dashboard;

// Development helpers (only in development)
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
	window.dashboard = dashboard;
	console.log('🔧 Development mode: dashboard instance available as window.dashboard');
}
