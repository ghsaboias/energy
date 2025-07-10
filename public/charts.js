// Charts Module - Chart Initialization and Update Functions

import { getAvailablePeriods, getCountryLabel, getCurrentData, getPercentages } from './data.js';
import {
	calculateMoMChange,
	calculateTotalCapacityChanges,
	calculateYoYChange,
	chartColors,
	energySources,
	formatPeriod,
	formatPeriodShort,
	formatSourceAttribution,
	getTimeSeriesPercentages,
} from './utils.js';

// Chart instances storage
export const charts = {
	energy: null,
	percentage: null,
	timeSeries: null,
	delta: null,
	totalDelta: null,
	comparison: null,
};

// Initialize Energy Chart
export function initializeEnergyChart() {
	const ctx = document.getElementById('energyChart').getContext('2d');

	charts.energy = new Chart(ctx, {
		type: 'bar',
		data: {
			labels: energySources.labels,
			datasets: [
				{
					label: 'Energy Supply (GW)',
					data: [0, 0, 0, 0, 0, 0],
					backgroundColor: chartColors.comparison.primary,
					borderColor: Object.values(chartColors.sources).map((c) => c.border),
					borderWidth: 2,
				},
			],
		},
		options: {
			responsive: true,
			maintainAspectRatio: false,
			scales: {
				y: {
					beginAtZero: true,
					title: {
						display: true,
						text: 'Capacity (GW)',
					},
				},
				x: {
					title: {
						display: true,
						text: 'Energy Source',
					},
				},
			},
			plugins: {
				title: {
					display: true,
					text: 'Global Energy Supply Capacity by Source',
				},
				legend: {
					display: false,
				},
			},
		},
	});

	return charts.energy;
}

// Initialize Percentage Chart
export function initializePercentageChart() {
	const ctx = document.getElementById('percentageChart').getContext('2d');

	charts.percentage = new Chart(ctx, {
		type: 'bar',
		data: {
			labels: energySources.labels,
			datasets: [
				{
					label: 'Percentage of Total Capacity',
					data: [0, 0, 0, 0, 0, 0],
					backgroundColor: chartColors.comparison.primary,
					borderColor: Object.values(chartColors.sources).map((c) => c.border),
					borderWidth: 2,
				},
			],
		},
		options: {
			responsive: true,
			maintainAspectRatio: false,
			scales: {
				y: {
					beginAtZero: true,
					max: 100,
					title: {
						display: true,
						text: 'Percentage (%)',
					},
					ticks: {
						callback: function (value) {
							return value + '%';
						},
					},
				},
				x: {
					title: {
						display: true,
						text: 'Energy Source',
					},
				},
			},
			plugins: {
				title: {
					display: true,
					text: 'Global Energy Supply - Percentage Distribution with Actual Values',
				},
				legend: {
					display: false,
				},
				tooltip: {
					callbacks: {
						label: function (context) {
							const currentPeriod = context.chart.currentPeriod || '2025-07';
							const currentCountry = context.chart.currentCountry || 'Global';
							const data = getCurrentData(currentPeriod, currentCountry);
							const sourceKey = energySources.keys[context.dataIndex];
							const actualValue = data[sourceKey].value;
							const percentage = context.parsed.y;
							return `${percentage.toFixed(1)}% (${actualValue} GW)`;
						},
					},
				},
			},
		},
	});

	return charts.percentage;
}

// Initialize Time Series Chart
export function initializeTimeSeriesChart() {
	const ctx = document.getElementById('timeSeriesChart').getContext('2d');

	charts.timeSeries = new Chart(ctx, {
		type: 'bar',
		data: {
			labels: [],
			datasets: [
				{
					label: 'Coal',
					data: [],
					backgroundColor: chartColors.sources.coal.bg,
					borderColor: chartColors.sources.coal.border,
					borderWidth: 1,
				},
				{
					label: 'Natural Gas',
					data: [],
					backgroundColor: chartColors.sources.gas.bg,
					borderColor: chartColors.sources.gas.border,
					borderWidth: 1,
				},
				{
					label: 'Nuclear',
					data: [],
					backgroundColor: chartColors.sources.nuclear.bg,
					borderColor: chartColors.sources.nuclear.border,
					borderWidth: 1,
				},
				{
					label: 'Hydroelectric',
					data: [],
					backgroundColor: chartColors.sources.hydro.bg,
					borderColor: chartColors.sources.hydro.border,
					borderWidth: 1,
				},
				{
					label: 'Wind',
					data: [],
					backgroundColor: chartColors.sources.wind.bg,
					borderColor: chartColors.sources.wind.border,
					borderWidth: 1,
				},
				{
					label: 'Solar',
					data: [],
					backgroundColor: chartColors.sources.solar.bg,
					borderColor: chartColors.sources.solar.border,
					borderWidth: 1,
				},
			],
		},
		options: {
			responsive: true,
			maintainAspectRatio: false,
			scales: {
				x: {
					stacked: true,
					title: {
						display: true,
						text: 'Time Period',
					},
				},
				y: {
					stacked: true,
					beginAtZero: true,
					max: 100,
					title: {
						display: true,
						text: 'Percentage (%)',
					},
					ticks: {
						callback: function (value) {
							return value + '%';
						},
					},
				},
			},
			plugins: {
				title: {
					display: true,
					text: 'Global Energy Mix Evolution - Stacked Percentage Over Time',
				},
				legend: {
					display: true,
					position: 'top',
				},
				tooltip: {
					callbacks: {
						label: function (context) {
							const period = context.chart.periods[context.dataIndex];
							const source = context.dataset.label;
							const percentage = context.parsed.y;
							const data = getCurrentData(period, context.chart.currentCountry || 'Global');

							if (data) {
								const sourceKey = energySources.mapping[source];
								const actualValue = data[sourceKey]?.value || 0;
								return `${source}: ${percentage.toFixed(1)}% (${actualValue} GW)`;
							}
							return `${source}: ${percentage.toFixed(1)}%`;
						},
					},
				},
			},
		},
	});

	return charts.timeSeries;
}

// Initialize Delta Chart
export function initializeDeltaChart() {
	const ctx = document.getElementById('deltaChart').getContext('2d');

	charts.delta = new Chart(ctx, {
		type: 'bar',
		data: {
			labels: energySources.labels,
			datasets: [
				{
					label: 'Month-over-Month (MoM) %',
					data: [0, 0, 0, 0, 0, 0],
					backgroundColor: chartColors.changes.mom.bg,
					borderColor: chartColors.changes.mom.border,
					borderWidth: 2,
					yAxisID: 'y',
				},
				{
					label: 'Year-over-Year (YoY) %',
					data: [0, 0, 0, 0, 0, 0],
					backgroundColor: chartColors.changes.yoy.bg,
					borderColor: chartColors.changes.yoy.border,
					borderWidth: 2,
					yAxisID: 'y',
				},
			],
		},
		options: {
			responsive: true,
			maintainAspectRatio: false,
			interaction: {
				mode: 'index',
				intersect: false,
			},
			scales: {
				x: {
					title: {
						display: true,
						text: 'Energy Source',
					},
				},
				y: {
					type: 'linear',
					display: true,
					position: 'left',
					title: {
						display: true,
						text: 'Percentage Change (%)',
					},
					grid: {
						drawOnChartArea: true,
					},
					ticks: {
						callback: function (value) {
							return value + '%';
						},
					},
				},
			},
			plugins: {
				title: {
					display: true,
					text: 'Energy Capacity Growth - Month-over-Month & Year-over-Year Changes',
				},
				legend: {
					display: true,
					position: 'top',
				},
				tooltip: {
					callbacks: {
						label: function (context) {
							const value = context.parsed.y;
							const sign = value >= 0 ? '+' : '';
							return `${context.dataset.label}: ${sign}${value.toFixed(2)}%`;
						},
					},
				},
			},
		},
	});

	return charts.delta;
}

// Initialize Total Delta Chart
export function initializeTotalDeltaChart() {
	const ctx = document.getElementById('totalDeltaChart').getContext('2d');

	charts.totalDelta = new Chart(ctx, {
		type: 'line',
		data: {
			labels: [],
			datasets: [
				{
					label: 'Total Capacity (GW)',
					data: [],
					borderColor: chartColors.changes.total.border,
					backgroundColor: chartColors.changes.total.bg,
					borderWidth: 3,
					fill: true,
					tension: 0.4,
					pointBackgroundColor: chartColors.changes.total.border,
					pointBorderColor: '#ffffff',
					pointBorderWidth: 2,
					pointRadius: 6,
					pointHoverRadius: 8,
				},
				{
					label: 'MoM Change (GW)',
					data: [],
					borderColor: chartColors.changes.mom.border,
					backgroundColor: 'rgba(52, 152, 219, 0.1)',
					borderWidth: 2,
					fill: false,
					tension: 0.4,
					pointBackgroundColor: chartColors.changes.mom.border,
					pointBorderColor: '#ffffff',
					pointBorderWidth: 2,
					pointRadius: 4,
					pointHoverRadius: 6,
					yAxisID: 'y1',
				},
				{
					label: 'YoY Change (GW)',
					data: [],
					borderColor: chartColors.changes.yoy.border,
					backgroundColor: 'rgba(231, 76, 60, 0.1)',
					borderWidth: 2,
					fill: false,
					tension: 0.4,
					pointBackgroundColor: chartColors.changes.yoy.border,
					pointBorderColor: '#ffffff',
					pointBorderWidth: 2,
					pointRadius: 4,
					pointHoverRadius: 6,
					yAxisID: 'y1',
				},
			],
		},
		options: {
			responsive: true,
			maintainAspectRatio: false,
			interaction: {
				mode: 'index',
				intersect: false,
			},
			scales: {
				x: {
					title: {
						display: true,
						text: 'Time Period',
					},
					grid: {
						display: true,
						color: 'rgba(0, 0, 0, 0.1)',
					},
				},
				y: {
					type: 'linear',
					display: true,
					position: 'left',
					title: {
						display: true,
						text: 'Total Capacity (GW)',
					},
					grid: {
						drawOnChartArea: true,
						color: 'rgba(0, 0, 0, 0.1)',
					},
				},
				y1: {
					type: 'linear',
					display: true,
					position: 'right',
					title: {
						display: true,
						text: 'Capacity Change (GW)',
					},
					grid: {
						drawOnChartArea: false,
					},
				},
			},
			plugins: {
				title: {
					display: true,
					text: 'Global Energy Capacity Evolution - Total Capacity & Growth Trends',
				},
				legend: {
					display: true,
					position: 'top',
				},
				tooltip: {
					callbacks: {
						label: function (context) {
							const value = context.parsed.y;
							if (context.datasetIndex === 0) {
								return `Total Capacity: ${value.toFixed(0)} GW`;
							} else {
								const sign = value >= 0 ? '+' : '';
								return `${context.dataset.label}: ${sign}${value.toFixed(1)} GW`;
							}
						},
					},
				},
			},
		},
	});

	return charts.totalDelta;
}

// Initialize Comparison Chart
export function initializeComparisonChart() {
	const ctx = document.getElementById('comparisonChart').getContext('2d');

	charts.comparison = new Chart(ctx, {
		type: 'bar',
		data: {
			labels: energySources.labels,
			datasets: [
				{
					label: 'Country 1',
					data: [0, 0, 0, 0, 0, 0],
					backgroundColor: chartColors.comparison.primary,
					borderColor: Object.values(chartColors.sources).map((c) => c.border),
					borderWidth: 2,
				},
				{
					label: 'Country 2',
					data: [0, 0, 0, 0, 0, 0],
					backgroundColor: chartColors.comparison.secondary,
					borderColor: Object.values(chartColors.sources).map((c) => c.border),
					borderWidth: 2,
				},
			],
		},
		options: {
			responsive: true,
			maintainAspectRatio: false,
			scales: {
				y: {
					beginAtZero: true,
					title: {
						display: true,
						text: 'Capacity (GW)',
					},
				},
				x: {
					title: {
						display: true,
						text: 'Energy Source',
					},
				},
			},
			plugins: {
				title: {
					display: true,
					text: 'Country Comparison - Energy Supply Capacity',
				},
				legend: {
					display: true,
					position: 'top',
				},
			},
		},
	});

	return charts.comparison;
}

// Update Energy Chart
export function updateEnergyChart(currentPeriod, currentCountry) {
	if (!charts.energy) return;

	const data = getCurrentData(currentPeriod, currentCountry);
	if (!data) return;

	const countryLabel = getCountryLabel(currentCountry);

	// Update chart data
	const chartData = {
		labels: energySources.labels,
		datasets: [
			{
				label: `${countryLabel} Energy Supply (GW)`,
				data: [data.coal.value, data.gas.value, data.nuclear.value, data.hydro.value, data.wind.value, data.solar.value],
				backgroundColor: chartColors.comparison.primary,
				borderColor: Object.values(chartColors.sources).map((c) => c.border),
				borderWidth: 2,
			},
		],
	};

	charts.energy.data = chartData;
	charts.energy.update();

	// Update source attribution
	updateSourceAttribution(data);
}

// Update Percentage Chart
export function updatePercentageChart(currentPeriod, currentCountry) {
	if (!charts.percentage) return;

	const data = getCurrentData(currentPeriod, currentCountry);
	if (!data) return;

	const percentages = getPercentages(data);
	const countryLabel = getCountryLabel(currentCountry);

	// Store current state in chart for tooltip access
	charts.percentage.currentPeriod = currentPeriod;
	charts.percentage.currentCountry = currentCountry;

	// Update chart data
	const chartData = {
		labels: energySources.labels,
		datasets: [
			{
				label: `${countryLabel} - Percentage of Total Capacity`,
				data: percentages,
				backgroundColor: chartColors.comparison.primary,
				borderColor: Object.values(chartColors.sources).map((c) => c.border),
				borderWidth: 2,
			},
		],
	};

	charts.percentage.data = chartData;
	charts.percentage.update();
}

// Update Time Series Chart
export function updateTimeSeriesChart(currentCountry) {
	if (!charts.timeSeries) return;

	// Get all periods sorted chronologically for current country
	const periods = getAvailablePeriods(currentCountry).sort();

	// Prepare labels (formatted period names)
	const labels = periods.map((period) => formatPeriodShort(period));

	// Get time series percentage data
	const percentageData = getTimeSeriesPercentages(currentCountry);

	// Store periods in chart for tooltip access
	charts.timeSeries.periods = periods;
	charts.timeSeries.currentCountry = currentCountry;

	// Update chart data
	charts.timeSeries.data.labels = labels;
	charts.timeSeries.data.datasets[0].data = percentageData.coalData;
	charts.timeSeries.data.datasets[1].data = percentageData.gasData;
	charts.timeSeries.data.datasets[2].data = percentageData.nuclearData;
	charts.timeSeries.data.datasets[3].data = percentageData.hydroData;
	charts.timeSeries.data.datasets[4].data = percentageData.windData;
	charts.timeSeries.data.datasets[5].data = percentageData.solarData;

	charts.timeSeries.update();
}

// Update Delta Chart
export function updateDeltaChart(currentPeriod, currentCountry) {
	if (!charts.delta) return;

	const momChanges = calculateMoMChange(currentPeriod, currentCountry) || {};
	const yoyChanges = calculateYoYChange(currentPeriod, currentCountry) || {};

	const momData = energySources.keys.map((source) => momChanges[source] || 0);
	const yoyData = energySources.keys.map((source) => yoyChanges[source] || 0);

	// Update chart data
	charts.delta.data.datasets[0].data = momData;
	charts.delta.data.datasets[1].data = yoyData;

	// Update chart title with current period and country
	const formattedPeriod = formatPeriod(currentPeriod);
	const countryLabel = getCountryLabel(currentCountry);

	charts.delta.options.plugins.title.text = `${countryLabel} Energy Capacity Growth Changes - ${formattedPeriod}`;

	charts.delta.update();
}

// Update Total Delta Chart
export function updateTotalDeltaChart(currentCountry) {
	if (!charts.totalDelta) return;

	// Get all periods sorted chronologically for current country
	const periods = getAvailablePeriods(currentCountry).sort();

	// Prepare labels (formatted period names)
	const labels = periods.map((period) => formatPeriodShort(period));

	// Calculate total capacity changes
	const capacityChanges = calculateTotalCapacityChanges(currentCountry);

	// Update chart data
	charts.totalDelta.data.labels = labels;
	charts.totalDelta.data.datasets[0].data = capacityChanges.totalCapacityData;
	charts.totalDelta.data.datasets[1].data = capacityChanges.momChangeData;
	charts.totalDelta.data.datasets[2].data = capacityChanges.yoyChangeData;

	charts.totalDelta.update();
}

// Update Comparison Chart
export function updateComparisonChart(currentPeriod, currentCountry, comparisonCountry) {
	if (!charts.comparison) return;

	const data1 = getCurrentData(currentPeriod, currentCountry);
	const data2 = getCurrentData(currentPeriod, comparisonCountry);

	if (!data1 || !data2) return;

	// Get country labels
	const country1Label = getCountryLabel(currentCountry);
	const country2Label = getCountryLabel(comparisonCountry);

	// Update chart data
	const chartData = {
		labels: energySources.labels,
		datasets: [
			{
				label: country1Label,
				data: [data1.coal.value, data1.gas.value, data1.nuclear.value, data1.hydro.value, data1.wind.value, data1.solar.value],
				backgroundColor: chartColors.comparison.primary,
				borderColor: Object.values(chartColors.sources).map((c) => c.border),
				borderWidth: 2,
			},
			{
				label: country2Label,
				data: [data2.coal.value, data2.gas.value, data2.nuclear.value, data2.hydro.value, data2.wind.value, data2.solar.value],
				backgroundColor: chartColors.comparison.secondary,
				borderColor: Object.values(chartColors.sources).map((c) => c.border),
				borderWidth: 2,
				borderDash: [5, 5],
			},
		],
	};

	// Update chart title
	const formattedPeriod = formatPeriod(currentPeriod);
	charts.comparison.options.plugins.title.text = `Country Comparison - Energy Supply Capacity (${formattedPeriod})`;
	charts.comparison.data = chartData;
	charts.comparison.update();
}

// Update source attribution
export function updateSourceAttribution(data) {
	const attributionContainer = document.getElementById('source-attribution');
	if (!attributionContainer) return;

	attributionContainer.innerHTML = formatSourceAttribution(data);
}

// Initialize all charts
export function initializeAllCharts() {
	initializeEnergyChart();
	initializePercentageChart();
	initializeTimeSeriesChart();
	initializeDeltaChart();
	initializeTotalDeltaChart();
	initializeComparisonChart();
}

// Update all charts
export function updateAllCharts(currentPeriod, currentCountry, comparisonCountry, isComparisonMode) {
	updateEnergyChart(currentPeriod, currentCountry);
	updatePercentageChart(currentPeriod, currentCountry);
	updateTimeSeriesChart(currentCountry);
	updateDeltaChart(currentPeriod, currentCountry);
	updateTotalDeltaChart(currentCountry);

	if (isComparisonMode) {
		updateComparisonChart(currentPeriod, currentCountry, comparisonCountry);
	}
}
