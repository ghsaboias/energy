// Utils Module - Helper Functions and Calculations

import { getAvailablePeriods, getCurrentData, getTotalCapacity } from './data.js';

// Format period for display
export function formatPeriod(period) {
	const [year, month] = period.split('-');
	const monthNames = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];
	return `${monthNames[parseInt(month) - 1]} ${year}`;
}

// Format period for short display
export function formatPeriodShort(period) {
	const [year, month] = period.split('-');
	const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	return `${monthNames[parseInt(month) - 1]} ${year}`;
}

// Calculate month-over-month change
export function calculateMoMChange(currentPeriod, country) {
	const periods = getAvailablePeriods(country).sort();
	const currentIndex = periods.indexOf(currentPeriod);

	if (currentIndex <= 0) return null;

	const currentData = getCurrentData(currentPeriod, country);
	const prevData = getCurrentData(periods[currentIndex - 1], country);

	if (!currentData || !prevData) return null;

	const sources = ['coal', 'gas', 'nuclear', 'hydro', 'wind', 'solar'];
	const changes = {};

	sources.forEach((source) => {
		const currentValue = currentData[source].value;
		const prevValue = prevData[source].value;
		changes[source] = ((currentValue - prevValue) / prevValue) * 100;
	});

	return changes;
}

// Calculate year-over-year change
export function calculateYoYChange(currentPeriod, country) {
	const currentData = getCurrentData(currentPeriod, country);
	if (!currentData) return null;

	const currentYear = parseInt(currentPeriod.split('-')[0]);
	const currentMonth = parseInt(currentPeriod.split('-')[1]);
	const prevYearPeriod = `${currentYear - 1}-${currentMonth.toString().padStart(2, '0')}`;
	const prevYearData = getCurrentData(prevYearPeriod, country);

	if (!prevYearData) return null;

	const sources = ['coal', 'gas', 'nuclear', 'hydro', 'wind', 'solar'];
	const changes = {};

	sources.forEach((source) => {
		const currentValue = currentData[source].value;
		const prevYearValue = prevYearData[source].value;
		changes[source] = ((currentValue - prevYearValue) / prevYearValue) * 100;
	});

	return changes;
}

// Calculate total capacity changes over time
export function calculateTotalCapacityChanges(country) {
	const periods = getAvailablePeriods(country).sort();
	const totalCapacityData = [];
	const momChangeData = [];
	const yoyChangeData = [];

	periods.forEach((period, index) => {
		const data = getCurrentData(period, country);
		if (data) {
			const totalCapacity = getTotalCapacity(data);
			totalCapacityData.push(totalCapacity);

			// Calculate MoM change (absolute GW change)
			if (index > 0) {
				const prevData = getCurrentData(periods[index - 1], country);
				if (prevData) {
					const prevTotal = getTotalCapacity(prevData);
					momChangeData.push(totalCapacity - prevTotal);
				} else {
					momChangeData.push(0);
				}
			} else {
				momChangeData.push(0);
			}

			// Calculate YoY change (absolute GW change)
			const currentYear = parseInt(period.split('-')[0]);
			const currentMonth = parseInt(period.split('-')[1]);
			const prevYearPeriod = `${currentYear - 1}-${currentMonth.toString().padStart(2, '0')}`;

			const prevYearData = getCurrentData(prevYearPeriod, country);
			if (prevYearData) {
				const prevYearTotal = getTotalCapacity(prevYearData);
				yoyChangeData.push(totalCapacity - prevYearTotal);
			} else {
				yoyChangeData.push(0);
			}
		}
	});

	return { totalCapacityData, momChangeData, yoyChangeData };
}

// Get time series percentage data for all energy sources
export function getTimeSeriesPercentages(country) {
	const periods = getAvailablePeriods(country).sort();
	const coalData = [];
	const gasData = [];
	const nuclearData = [];
	const hydroData = [];
	const windData = [];
	const solarData = [];

	periods.forEach((period) => {
		const data = getCurrentData(period, country);
		if (data) {
			const totalCapacity = getTotalCapacity(data);

			coalData.push((data.coal.value / totalCapacity) * 100);
			gasData.push((data.gas.value / totalCapacity) * 100);
			nuclearData.push((data.nuclear.value / totalCapacity) * 100);
			hydroData.push((data.hydro.value / totalCapacity) * 100);
			windData.push((data.wind.value / totalCapacity) * 100);
			solarData.push((data.solar.value / totalCapacity) * 100);
		}
	});

	return { coalData, gasData, nuclearData, hydroData, windData, solarData };
}

// Chart color schemes
export const chartColors = {
	sources: {
		coal: { bg: '#2c3e50', border: '#34495e' },
		gas: { bg: '#3498db', border: '#2980b9' },
		nuclear: { bg: '#e74c3c', border: '#c0392b' },
		hydro: { bg: '#1abc9c', border: '#16a085' },
		wind: { bg: '#9b59b6', border: '#8e44ad' },
		solar: { bg: '#f39c12', border: '#e67e22' },
	},
	comparison: {
		primary: ['#2c3e50', '#3498db', '#e74c3c', '#1abc9c', '#9b59b6', '#f39c12'],
		secondary: ['#34495e99', '#2980b999', '#c0392b99', '#16a08599', '#8e44ad99', '#e67e2299'],
	},
	changes: {
		mom: { bg: '#3498db', border: '#2980b9' },
		yoy: { bg: '#e74c3c', border: '#c0392b' },
		total: { bg: 'rgba(44, 62, 80, 0.1)', border: '#2c3e50' },
	},
};

// Energy source labels and keys
export const energySources = {
	labels: ['Coal', 'Natural Gas', 'Nuclear', 'Hydroelectric', 'Wind', 'Solar'],
	keys: ['coal', 'gas', 'nuclear', 'hydro', 'wind', 'solar'],
	mapping: {
		Coal: 'coal',
		'Natural Gas': 'gas',
		Nuclear: 'nuclear',
		Hydroelectric: 'hydro',
		Wind: 'wind',
		Solar: 'solar',
	},
};

// Navigation helpers
export function canNavigatePrevious(currentPeriod, country) {
	const periods = getAvailablePeriods(country).sort().reverse();
	const currentIndex = periods.indexOf(currentPeriod);
	return currentIndex < periods.length - 1;
}

export function canNavigateNext(currentPeriod, country) {
	const periods = getAvailablePeriods(country).sort().reverse();
	const currentIndex = periods.indexOf(currentPeriod);
	return currentIndex > 0;
}

export function getPreviousPeriod(currentPeriod, country) {
	const periods = getAvailablePeriods(country).sort().reverse();
	const currentIndex = periods.indexOf(currentPeriod);
	if (currentIndex < periods.length - 1) {
		return periods[currentIndex + 1];
	}
	return null;
}

export function getNextPeriod(currentPeriod, country) {
	const periods = getAvailablePeriods(country).sort().reverse();
	const currentIndex = periods.indexOf(currentPeriod);
	if (currentIndex > 0) {
		return periods[currentIndex - 1];
	}
	return null;
}

// Source attribution formatter
export function formatSourceAttribution(data) {
	if (!data) return '';

	let attributionHTML = '<h3>Data Sources</h3>';

	energySources.keys.forEach((source, index) => {
		const sourceData = data[source];
		if (sourceData) {
			attributionHTML += `
				<div class="source-item">
					<strong>${energySources.labels[index]}: ${sourceData.value} GW</strong>
					<div class="source-list">
						${sourceData.sources.map((src) => `<span class="source-tag">${src}</span>`).join('')}
					</div>
				</div>
			`;
		}
	});

	return attributionHTML;
}
