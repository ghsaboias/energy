// Controls Module - UI Controls and Event Handlers

import { updateAllCharts, updateComparisonChart } from './charts.js';
import { getAvailablePeriods } from './data.js';
import { canNavigateNext, canNavigatePrevious, formatPeriod, getNextPeriod, getPreviousPeriod } from './utils.js';

// Application state
export const appState = {
	currentPeriod: '2025-07',
	currentCountry: 'Global',
	comparisonCountry: 'US',
	isComparisonMode: false,
};

// DOM Elements
const elements = {
	periodSelector: null,
	countrySelector: null,
	comparisonCountrySelector: null,
	comparisonToggle: null,
	comparisonCountrySelect: null,
	comparisonChartContainer: null,
	prevBtn: null,
	nextBtn: null,
};

// Initialize all controls
export function initializeControls() {
	// Get DOM elements
	elements.periodSelector = document.getElementById('yearSelector');
	elements.countrySelector = document.getElementById('countrySelector');
	elements.comparisonCountrySelector = document.getElementById('comparisonCountrySelector');
	elements.comparisonToggle = document.getElementById('comparisonMode');
	elements.comparisonCountrySelect = document.getElementById('countrySelector2');
	elements.comparisonChartContainer = document.getElementById('comparisonChartContainer');
	elements.prevBtn = document.getElementById('prevYear');
	elements.nextBtn = document.getElementById('nextYear');

	// Set initial values
	if (elements.periodSelector) elements.periodSelector.value = appState.currentPeriod;
	if (elements.countrySelector) elements.countrySelector.value = appState.currentCountry;
	if (elements.comparisonCountrySelect) elements.comparisonCountrySelect.value = appState.comparisonCountry;

	// Setup event listeners
	setupPeriodControls();
	setupComparisonControls();
	setupNavigationControls();

	// Initialize period selector for default country
	updatePeriodSelector();
	updateNavigationButtons();
}

// Setup period and country selection controls
function setupPeriodControls() {
	if (elements.periodSelector) {
		elements.periodSelector.addEventListener('change', (e) => {
			appState.currentPeriod = e.target.value;
			updateAllCharts(appState.currentPeriod, appState.currentCountry, appState.comparisonCountry, appState.isComparisonMode);
			updateNavigationButtons();
		});
	}

	if (elements.countrySelector) {
		elements.countrySelector.addEventListener('change', (e) => {
			appState.currentCountry = e.target.value;
			updatePeriodSelector();
			updateAllCharts(appState.currentPeriod, appState.currentCountry, appState.comparisonCountry, appState.isComparisonMode);
			updateNavigationButtons();
		});
	}
}

// Setup comparison mode controls
function setupComparisonControls() {
	if (elements.comparisonToggle) {
		elements.comparisonToggle.addEventListener('change', (e) => {
			appState.isComparisonMode = e.target.checked;

			if (appState.isComparisonMode) {
				showComparisonControls();
				updateComparisonChart(appState.currentPeriod, appState.currentCountry, appState.comparisonCountry);
			} else {
				hideComparisonControls();
			}
		});
	}

	if (elements.comparisonCountrySelect) {
		elements.comparisonCountrySelect.addEventListener('change', (e) => {
			appState.comparisonCountry = e.target.value;
			if (appState.isComparisonMode) {
				updateComparisonChart(appState.currentPeriod, appState.currentCountry, appState.comparisonCountry);
			}
		});
	}
}

// Setup navigation controls
function setupNavigationControls() {
	if (elements.prevBtn) {
		elements.prevBtn.addEventListener('click', () => {
			const prevPeriod = getPreviousPeriod(appState.currentPeriod, appState.currentCountry);
			if (prevPeriod) {
				appState.currentPeriod = prevPeriod;
				elements.periodSelector.value = appState.currentPeriod;
				updateAllCharts(appState.currentPeriod, appState.currentCountry, appState.comparisonCountry, appState.isComparisonMode);
				updateNavigationButtons();
			}
		});
	}

	if (elements.nextBtn) {
		elements.nextBtn.addEventListener('click', () => {
			const nextPeriod = getNextPeriod(appState.currentPeriod, appState.currentCountry);
			if (nextPeriod) {
				appState.currentPeriod = nextPeriod;
				elements.periodSelector.value = appState.currentPeriod;
				updateAllCharts(appState.currentPeriod, appState.currentCountry, appState.comparisonCountry, appState.isComparisonMode);
				updateNavigationButtons();
			}
		});
	}
}

// Show comparison controls
function showComparisonControls() {
	if (elements.comparisonCountrySelector) {
		elements.comparisonCountrySelector.style.display = 'flex';
		elements.comparisonCountrySelector.classList.add('active');
	}
	if (elements.comparisonChartContainer) {
		elements.comparisonChartContainer.style.display = 'block';
	}
}

// Hide comparison controls
function hideComparisonControls() {
	if (elements.comparisonCountrySelector) {
		elements.comparisonCountrySelector.style.display = 'none';
		elements.comparisonCountrySelector.classList.remove('active');
	}
	if (elements.comparisonChartContainer) {
		elements.comparisonChartContainer.style.display = 'none';
	}
}

// Update period selector options based on current country
export function updatePeriodSelector() {
	if (!elements.periodSelector) return;

	const availablePeriods = getAvailablePeriods(appState.currentCountry).sort().reverse();

	// Clear existing options
	elements.periodSelector.innerHTML = '';

	// Add available periods
	availablePeriods.forEach((period) => {
		const option = document.createElement('option');
		option.value = period;
		option.textContent = formatPeriod(period);
		elements.periodSelector.appendChild(option);
	});

	// Set current period if available, otherwise set to first available
	if (availablePeriods.includes(appState.currentPeriod)) {
		elements.periodSelector.value = appState.currentPeriod;
	} else if (availablePeriods.length > 0) {
		appState.currentPeriod = availablePeriods[0];
		elements.periodSelector.value = appState.currentPeriod;
	}
}

// Update navigation button states
export function updateNavigationButtons() {
	if (elements.prevBtn) {
		elements.prevBtn.disabled = !canNavigatePrevious(appState.currentPeriod, appState.currentCountry);
	}
	if (elements.nextBtn) {
		elements.nextBtn.disabled = !canNavigateNext(appState.currentPeriod, appState.currentCountry);
	}
}

// Get current application state
export function getAppState() {
	return { ...appState };
}

// Set application state (for external updates)
export function setAppState(newState) {
	Object.assign(appState, newState);

	// Update UI elements to reflect new state
	if (elements.periodSelector && newState.currentPeriod) {
		elements.periodSelector.value = newState.currentPeriod;
	}
	if (elements.countrySelector && newState.currentCountry) {
		elements.countrySelector.value = newState.currentCountry;
	}
	if (elements.comparisonCountrySelect && newState.comparisonCountry) {
		elements.comparisonCountrySelect.value = newState.comparisonCountry;
	}
	if (elements.comparisonToggle && typeof newState.isComparisonMode !== 'undefined') {
		elements.comparisonToggle.checked = newState.isComparisonMode;
		if (newState.isComparisonMode) {
			showComparisonControls();
		} else {
			hideComparisonControls();
		}
	}

	updateNavigationButtons();
}

// Keyboard navigation support
export function initializeKeyboardNavigation() {
	document.addEventListener('keydown', (e) => {
		// Only handle keyboard navigation if no input is focused
		if (
			document.activeElement.tagName === 'INPUT' ||
			document.activeElement.tagName === 'SELECT' ||
			document.activeElement.tagName === 'TEXTAREA'
		) {
			return;
		}

		switch (e.key) {
			case 'ArrowLeft':
				e.preventDefault();
				if (elements.prevBtn && !elements.prevBtn.disabled) {
					elements.prevBtn.click();
				}
				break;
			case 'ArrowRight':
				e.preventDefault();
				if (elements.nextBtn && !elements.nextBtn.disabled) {
					elements.nextBtn.click();
				}
				break;
			case 'c':
			case 'C':
				e.preventDefault();
				if (elements.comparisonToggle) {
					elements.comparisonToggle.checked = !elements.comparisonToggle.checked;
					elements.comparisonToggle.dispatchEvent(new Event('change'));
				}
				break;
		}
	});
}

// Touch/swipe support for mobile
export function initializeTouchNavigation() {
	let touchStartX = 0;
	let touchEndX = 0;
	const minSwipeDistance = 50;

	document.addEventListener('touchstart', (e) => {
		touchStartX = e.changedTouches[0].screenX;
	});

	document.addEventListener('touchend', (e) => {
		touchEndX = e.changedTouches[0].screenX;
		handleSwipe();
	});

	function handleSwipe() {
		const swipeDistance = touchEndX - touchStartX;

		if (Math.abs(swipeDistance) > minSwipeDistance) {
			if (swipeDistance > 0) {
				// Swipe right - go to previous period
				if (elements.prevBtn && !elements.prevBtn.disabled) {
					elements.prevBtn.click();
				}
			} else {
				// Swipe left - go to next period
				if (elements.nextBtn && !elements.nextBtn.disabled) {
					elements.nextBtn.click();
				}
			}
		}
	}
}
