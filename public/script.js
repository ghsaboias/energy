// Global Energy Dashboard - Main Script

// Global state
let currentYear = 2024;
let chartData = [];

// Initialize the dashboard when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  loadEnergyData();
  setupYearControls();
});

// Load energy data and create chart
async function loadEnergyData() {
  try {
    // For local development, embed data directly to avoid CORS issues
    chartData = getEmbeddedData();
    updateChart(currentYear);
  } catch (error) {
    console.error("Error loading data:", error);
    showError("Failed to load energy data");
  }
}

// Setup year selection controls
function setupYearControls() {
  const yearSelector = document.getElementById("yearSelector");
  const prevYearBtn = document.getElementById("prevYear");
  const nextYearBtn = document.getElementById("nextYear");

  // Year selector change handler
  yearSelector.addEventListener("change", (e) => {
    currentYear = parseInt(e.target.value);
    updateChart(currentYear);
    updateNavigationButtons();
  });

  // Previous year button handler
  prevYearBtn.addEventListener("click", () => {
    if (currentYear > 2020) {
      currentYear--;
      yearSelector.value = currentYear;
      updateChart(currentYear);
      updateNavigationButtons();
    }
  });

  // Next year button handler
  nextYearBtn.addEventListener("click", () => {
    if (currentYear < 2024) {
      currentYear++;
      yearSelector.value = currentYear;
      updateChart(currentYear);
      updateNavigationButtons();
    }
  });

  // Initial button state
  updateNavigationButtons();
}

// Update navigation button states
function updateNavigationButtons() {
  const prevYearBtn = document.getElementById("prevYear");
  const nextYearBtn = document.getElementById("nextYear");

  prevYearBtn.disabled = currentYear <= 2020;
  nextYearBtn.disabled = currentYear >= 2024;
}

// Calculate year-over-year change
function calculateYearOverYearChange(currentValue, previousValue) {
  if (!previousValue) return null;
  const change = ((currentValue - previousValue) / previousValue) * 100;
  return change.toFixed(1);
}

// Embedded data for local development (avoids CORS issues)
function getEmbeddedData() {
  return [
    {
      year: 2020,
      coal: 2100,
      gas: 1600,
      solar: 700,
      wind: 730,
      hydro: 1330,
      nuclear: 390,
    },
    {
      year: 2021,
      coal: 2080,
      gas: 1650,
      solar: 850,
      wind: 820,
      hydro: 1340,
      nuclear: 385,
    },
    {
      year: 2022,
      coal: 2060,
      gas: 1700,
      solar: 1000,
      wind: 900,
      hydro: 1350,
      nuclear: 380,
    },
    {
      year: 2023,
      coal: 2040,
      gas: 1750,
      solar: 1200,
      wind: 980,
      hydro: 1360,
      nuclear: 375,
    },
    {
      year: 2024,
      coal: 2020,
      gas: 1800,
      solar: 1419,
      wind: 1017,
      hydro: 1370,
      nuclear: 382,
    },
  ];
}

// Update chart for selected year
function updateChart(year) {
  const data = chartData.find((d) => d.year === year);
  const previousYearData = chartData.find((d) => d.year === year - 1);
  createEnergyChart(data, previousYearData);
}

// Create the main energy capacity chart
function createEnergyChart(yearData, previousYearData) {
  console.log("Energy data loaded:", yearData);

  const energySources = [
    { name: "Coal", value: yearData.coal, color: "#34495e" },
    { name: "Natural Gas", value: yearData.gas, color: "#3498db" },
    { name: "Solar PV", value: yearData.solar, color: "#f39c12" },
    { name: "Wind", value: yearData.wind, color: "#27ae60" },
    { name: "Hydro", value: yearData.hydro, color: "#2980b9" },
    { name: "Nuclear", value: yearData.nuclear, color: "#e74c3c" },
  ];

  // Chart dimensions
  const container = d3.select("#energy-chart");
  const margin = { top: 20, right: 30, bottom: 60, left: 80 };
  const width = 800 - margin.left - margin.right;
  const height = 400 - margin.top - margin.bottom;

  // Clear any existing content
  container.selectAll("*").remove();

  // Create SVG
  const svg = container
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom);

  const g = svg
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

  // Create scales
  const xScale = d3
    .scaleBand()
    .domain(energySources.map((d) => d.name))
    .range([0, width])
    .padding(0.2);

  const yScale = d3
    .scaleLinear()
    .domain([0, d3.max(energySources, (d) => d.value)])
    .range([height, 0]);

  // Create bars with enhanced tooltips
  g.selectAll(".bar")
    .data(energySources)
    .join("rect")
    .attr("class", "bar")
    .attr("x", (d) => xScale(d.name))
    .attr("y", (d) => yScale(d.value))
    .attr("width", xScale.bandwidth())
    .attr("height", (d) => height - yScale(d.value))
    .attr("fill", (d) => d.color)
    .style("opacity", 0.8)
    .on("mouseover", function (event, d) {
      d3.select(this).style("opacity", 1);

      // Get year-over-year change
      const previousValue = previousYearData
        ? previousYearData[d.name.toLowerCase().replace(" ", "")]
        : null;
      const yoyChange = calculateYearOverYearChange(d.value, previousValue);

      // Enhanced tooltip with year-over-year change
      const tooltip = g
        .append("g")
        .attr("class", "tooltip-group")
        .attr(
          "transform",
          `translate(${xScale(d.name) + xScale.bandwidth() / 2},${
            yScale(d.value) - 10
          })`
        );

      tooltip
        .append("text")
        .attr("class", "tooltip-value")
        .attr("text-anchor", "middle")
        .attr("dy", "-1.2em")
        .style("fill", "#2c3e50")
        .text(`${d.value} GW`);

      if (yoyChange !== null) {
        const changeText = yoyChange > 0 ? `+${yoyChange}%` : `${yoyChange}%`;
        const changeColor = yoyChange > 0 ? "#2ecc71" : "#e74c3c";

        tooltip
          .append("text")
          .attr("class", "tooltip-change")
          .attr("text-anchor", "middle")
          .attr("dy", "0em")
          .style("fill", changeColor)
          .style("font-size", "11px")
          .text(`YoY: ${changeText}`);
      }
    })
    .on("mouseout", function () {
      d3.select(this).style("opacity", 0.8);
      g.selectAll(".tooltip-group").remove();
    });

  // Add X axis
  g.append("g")
    .attr("transform", `translate(0,${height})`)
    .call(d3.axisBottom(xScale))
    .selectAll("text")
    .style("text-anchor", "end")
    .attr("dx", "-.8em")
    .attr("dy", ".15em")
    .attr("transform", "rotate(-45)");

  // Add Y axis
  g.append("g").call(d3.axisLeft(yScale));

  // Add Y axis label
  g.append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 0 - margin.left)
    .attr("x", 0 - height / 2)
    .attr("dy", "1em")
    .style("text-anchor", "middle")
    .style("font-size", "14px")
    .style("fill", "#7f8c8d")
    .text("Capacity (GW)");

  // Add title with year
  g.append("text")
    .attr("x", width / 2)
    .attr("y", 0 - margin.top / 3)
    .attr("text-anchor", "middle")
    .style("font-size", "16px")
    .style("font-weight", "bold")
    .style("fill", "#2c3e50")
    .text(`Global Energy Capacity by Source (${yearData.year})`);
}

// Error handling
function showError(message) {
  const container = d3.select("#energy-chart");
  container
    .append("text")
    .attr("x", "50%")
    .attr("y", "50%")
    .attr("text-anchor", "middle")
    .attr("dominant-baseline", "middle")
    .style("font-size", "16px")
    .style("fill", "#e74c3c")
    .text(message);
}
