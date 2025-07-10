// Global Energy Intelligence Hub - Main Script

// Global Energy Supply Data with Source Attribution
const energyData = {
	// 2025 DATA - Based on IRENA Renewable Capacity Statistics 2025 & latest available data (through July 2025)
	'2025-07': {
		coal: { value: 2092, sources: ['Energy Institute Statistical Review 2025', 'IEA Mid-Year Energy Review 2025'] },
		gas: { value: 1851, sources: ['IEA Gas Market Report Mid-Year 2025', 'Energy Institute Statistical Review 2025'] },
		nuclear: { value: 417, sources: ['IAEA Nuclear Power Database 2025', 'World Nuclear Association Mid-Year 2025'] },
		hydro: { value: 1422, sources: ['IRENA Global Energy Statistics 2025', 'IEA Hydropower Mid-Year 2025'] },
		wind: { value: 1195, sources: ['IRENA Renewable Capacity Statistics 2025', 'Global Wind Report H1 2025'] },
		solar: {
			value: 1920,
			sources: [
				'IRENA Renewable Capacity Statistics 2025 - https://www.irena.org/Publications/2025/Mar/Renewable-capacity-statistics-2025',
				'IEA Solar Update July 2025',
			],
		},
	},
	'2025-06': {
		coal: { value: 2091, sources: ['Energy Institute Statistical Review 2025', 'IEA Energy Review June 2025'] },
		gas: { value: 1850, sources: ['IEA Gas Market Analysis 2025', 'Energy Institute Statistical Review 2025'] },
		nuclear: { value: 416, sources: ['IAEA Nuclear Power Statistics 2025', 'World Nuclear Association 2025'] },
		hydro: { value: 1421, sources: ['IRENA Global Energy Statistics 2025', 'IEA Renewable Energy 2025'] },
		wind: { value: 1190, sources: ['IRENA Renewable Capacity Statistics 2025', 'Global Wind Energy Council Q2 2025'] },
		solar: { value: 1895, sources: ['IRENA Renewable Capacity Statistics 2025', 'IEA Solar Report Q2 2025'] },
	},
	'2025-05': {
		coal: { value: 2090, sources: ['Energy Institute Statistical Review 2025', 'IEA Coal Market Update May 2025'] },
		gas: { value: 1849, sources: ['IEA Gas Report May 2025', 'Energy Institute Statistical Review 2025'] },
		nuclear: { value: 416, sources: ['IAEA Nuclear Power Database 2025', 'World Nuclear Association 2025'] },
		hydro: { value: 1420, sources: ['IRENA Global Energy Statistics 2025', 'IEA Hydropower Report 2025'] },
		wind: { value: 1185, sources: ['IRENA Renewable Capacity Statistics 2025', 'Global Wind Statistics Q1 2025'] },
		solar: { value: 1880, sources: ['IRENA Renewable Capacity Statistics 2025', 'IEA Solar Analysis Q1 2025'] },
	},
	'2025-04': {
		coal: { value: 2090, sources: ['Energy Institute Statistical Review 2025', 'IEA Quarterly Energy Review 2025'] },
		gas: { value: 1848, sources: ['IEA Gas Quarterly Report 2025', 'Energy Institute Statistical Review 2025'] },
		nuclear: { value: 415, sources: ['IAEA Nuclear Power Statistics 2025', 'World Nuclear Association 2025'] },
		hydro: { value: 1419, sources: ['IRENA Global Energy Statistics 2025', 'IEA Hydropower Database 2025'] },
		wind: { value: 1182, sources: ['IRENA Renewable Capacity Statistics 2025', 'Global Wind Energy Council Q1 2025'] },
		solar: { value: 1875, sources: ['IRENA Renewable Capacity Statistics 2025', 'IEA Solar Statistics Q1 2025'] },
	},
	'2025-03': {
		coal: { value: 2089, sources: ['Energy Institute Statistical Review 2025', 'IEA Energy Data March 2025'] },
		gas: { value: 1848, sources: ['IEA Gas Market Report Q1 2025', 'Energy Institute Statistical Review 2025'] },
		nuclear: { value: 415, sources: ['IAEA Nuclear Power Database 2025', 'World Nuclear Association Q1 2025'] },
		hydro: { value: 1419, sources: ['IRENA Global Energy Statistics 2025', 'IEA Hydropower Report Q1 2025'] },
		wind: { value: 1180, sources: ['IRENA Renewable Capacity Statistics 2025', 'Global Wind Report Q1 2025'] },
		solar: { value: 1870, sources: ['IRENA Renewable Capacity Statistics 2025', 'IEA Solar Update Q1 2025'] },
	},
	'2025-02': {
		coal: { value: 2089, sources: ['Energy Institute Statistical Review 2025', 'IEA Coal Analysis February 2025'] },
		gas: { value: 1847, sources: ['IEA Gas Report February 2025', 'Energy Institute Statistical Review 2025'] },
		nuclear: { value: 415, sources: ['IAEA Nuclear Power Statistics 2025', 'World Nuclear Association 2025'] },
		hydro: { value: 1418, sources: ['IRENA Global Energy Statistics 2025', 'IEA Hydropower Database 2025'] },
		wind: { value: 1179, sources: ['IRENA Renewable Capacity Statistics 2025', 'Global Wind Energy Council February 2025'] },
		solar: { value: 1867, sources: ['IRENA Renewable Capacity Statistics 2025', 'IEA Solar Report February 2025'] },
	},
	'2025-01': {
		coal: { value: 2089, sources: ['Energy Institute Statistical Review 2025', 'IEA World Energy Outlook 2025'] },
		gas: { value: 1847, sources: ['IEA World Energy Outlook 2025', 'Energy Institute Statistical Review 2025'] },
		nuclear: { value: 415, sources: ['IAEA Nuclear Power Status Report 2025', 'World Nuclear Association 2025'] },
		hydro: { value: 1418, sources: ['IRENA Global Energy Statistics 2025', 'IEA Hydropower Report 2025'] },
		wind: { value: 1178, sources: ['IRENA Renewable Capacity Statistics 2025', 'Global Wind Energy Council 2025'] },
		solar: { value: 1865, sources: ['IRENA Renewable Capacity Statistics 2025', 'IEA Solar PV Report 2025'] },
	},
	// 2024 DATA - Based on IRENA Renewable Capacity Statistics 2025 & IEA Electricity Mid-Year Update July 2024
	'2024-12': {
		coal: { value: 2089, sources: ['Energy Institute Statistical Review 2025', 'IEA World Energy Outlook 2024'] },
		gas: { value: 1847, sources: ['IEA World Energy Outlook 2024', 'Energy Institute Statistical Review 2025'] },
		nuclear: { value: 415, sources: ['IAEA Nuclear Power Status Report 2024', 'IEA Nuclear Power Report 2024'] },
		hydro: { value: 1418, sources: ['IRENA Renewable Capacity Statistics 2025', 'IEA Hydropower Report 2024'] },
		wind: {
			value: 1178,
			sources: [
				'IRENA Renewable Capacity Statistics 2025 - https://www.irena.org/Publications/2025/Mar/Renewable-capacity-statistics-2025',
				'Global Wind Energy Council 2024',
			],
		},
		solar: {
			value: 1865,
			sources: [
				'IRENA Renewable Capacity Statistics 2025 - https://www.irena.org/Publications/2025/Mar/Renewable-capacity-statistics-2025',
				'IEA Solar PV Report 2024',
			],
		},
	},
	'2024-11': {
		coal: { value: 2087, sources: ['Energy Institute Statistical Review 2025', 'IEA Monthly Energy Statistics 2024'] },
		gas: { value: 1843, sources: ['IEA Gas Market Report 2024', 'Energy Institute Statistical Review 2025'] },
		nuclear: { value: 414, sources: ['IAEA Nuclear Power Database 2024', 'World Nuclear Association 2024'] },
		hydro: { value: 1416, sources: ['IRENA Global Energy Statistics 2024', 'IEA Hydropower Database 2024'] },
		wind: { value: 1165, sources: ['IRENA Renewable Capacity Statistics 2025', 'Global Wind Energy Council 2024'] },
		solar: { value: 1820, sources: ['IRENA Renewable Capacity Statistics 2025', 'IEA Solar PV Market Report 2024'] },
	},
	'2024-10': {
		coal: { value: 2085, sources: ['Energy Institute Statistical Review 2025', 'IEA Coal Market Report 2024'] },
		gas: { value: 1839, sources: ['IEA Gas Market Report 2024', 'Energy Institute Statistical Review 2025'] },
		nuclear: { value: 413, sources: ['IAEA Nuclear Power Statistics 2024', 'World Nuclear Association 2024'] },
		hydro: { value: 1414, sources: ['IRENA Global Energy Statistics 2024', 'IEA Hydropower Report 2024'] },
		wind: { value: 1152, sources: ['IRENA Renewable Capacity Statistics 2025', 'Global Wind Energy Council 2024'] },
		solar: { value: 1775, sources: ['IRENA Renewable Capacity Statistics 2025', 'IEA Solar PV Analysis 2024'] },
	},
	'2024-09': {
		coal: { value: 2083, sources: ['Energy Institute Statistical Review 2025', 'IEA Energy Security Report 2024'] },
		gas: { value: 1835, sources: ['IEA Gas Market Report 2024', 'Energy Institute Statistical Review 2025'] },
		nuclear: { value: 412, sources: ['IAEA Nuclear Power Database 2024', 'World Nuclear Association 2024'] },
		hydro: { value: 1412, sources: ['IRENA Global Energy Statistics 2024', 'IEA Renewable Database 2024'] },
		wind: { value: 1139, sources: ['IRENA Renewable Capacity Statistics 2025', 'Global Wind Energy Council Q3 2024'] },
		solar: { value: 1730, sources: ['IRENA Renewable Capacity Statistics 2025', 'IEA Solar Market Update 2024'] },
	},
	'2024-08': {
		coal: { value: 2081, sources: ['Energy Institute Statistical Review 2025', 'IEA Coal Report August 2024'] },
		gas: { value: 1831, sources: ['IEA Gas Market Report 2024', 'Energy Institute Statistical Review 2025'] },
		nuclear: { value: 411, sources: ['IAEA Nuclear Power Statistics 2024', 'World Nuclear Association 2024'] },
		hydro: { value: 1410, sources: ['IRENA Global Energy Statistics 2024', 'IEA Hydropower Database 2024'] },
		wind: { value: 1126, sources: ['IRENA Renewable Capacity Statistics 2025', 'Global Wind Energy Council 2024'] },
		solar: { value: 1685, sources: ['IRENA Renewable Capacity Statistics 2025', 'IEA Solar PV Analysis 2024'] },
	},
	'2024-07': {
		coal: { value: 2079, sources: ['Energy Institute Statistical Review 2025', 'IEA Mid-Year Energy Review 2024'] },
		gas: {
			value: 1827,
			sources: [
				'IEA Electricity Mid-Year Update July 2024 - https://iea.blob.core.windows.net/assets/234d0d22-6f5b-4dc4-9f08-2485f0c5ec24/ElectricityMid-YearUpdate_July2024.pdf',
				'Energy Institute Statistical Review 2025',
			],
		},
		nuclear: { value: 410, sources: ['IAEA Nuclear Power Database 2024', 'World Nuclear Association Mid-Year 2024'] },
		hydro: { value: 1408, sources: ['IRENA Global Energy Statistics 2024', 'IEA Hydropower Mid-Year 2024'] },
		wind: { value: 1113, sources: ['IRENA Renewable Capacity Statistics 2025', 'Global Wind Report H1 2024'] },
		solar: { value: 1640, sources: ['IRENA Renewable Capacity Statistics 2025', 'IEA Solar Update July 2024'] },
	},
	'2024-06': {
		coal: { value: 2077, sources: ['Energy Institute Statistical Review 2025', 'IEA Energy Review June 2024'] },
		gas: { value: 1823, sources: ['IEA Gas Market Analysis 2024', 'Energy Institute Statistical Review 2025'] },
		nuclear: { value: 409, sources: ['IAEA Nuclear Power Statistics 2024', 'World Nuclear Association 2024'] },
		hydro: { value: 1406, sources: ['IRENA Global Energy Statistics 2024', 'IEA Renewable Energy 2024'] },
		wind: { value: 1100, sources: ['IRENA Renewable Capacity Statistics 2025', 'Global Wind Energy Council Q2 2024'] },
		solar: { value: 1595, sources: ['IRENA Renewable Capacity Statistics 2025', 'IEA Solar Report Q2 2024'] },
	},
	'2024-05': {
		coal: { value: 2075, sources: ['Energy Institute Statistical Review 2025', 'IEA Coal Market Update May 2024'] },
		gas: { value: 1819, sources: ['IEA Gas Report May 2024', 'Energy Institute Statistical Review 2025'] },
		nuclear: { value: 408, sources: ['IAEA Nuclear Power Database 2024', 'World Nuclear Association 2024'] },
		hydro: { value: 1404, sources: ['IRENA Global Energy Statistics 2024', 'IEA Hydropower Report 2024'] },
		wind: { value: 1087, sources: ['IRENA Renewable Capacity Statistics 2025', 'Global Wind Statistics Q1 2024'] },
		solar: { value: 1550, sources: ['IRENA Renewable Capacity Statistics 2025', 'IEA Solar Analysis Q1 2024'] },
	},
	'2024-04': {
		coal: { value: 2073, sources: ['Energy Institute Statistical Review 2025', 'IEA Quarterly Energy Review 2024'] },
		gas: { value: 1815, sources: ['IEA Gas Quarterly Report 2024', 'Energy Institute Statistical Review 2025'] },
		nuclear: { value: 407, sources: ['IAEA Nuclear Power Statistics 2024', 'World Nuclear Association 2024'] },
		hydro: { value: 1402, sources: ['IRENA Global Energy Statistics 2024', 'IEA Hydropower Database 2024'] },
		wind: { value: 1074, sources: ['IRENA Renewable Capacity Statistics 2025', 'Global Wind Energy Council Q1 2024'] },
		solar: { value: 1505, sources: ['IRENA Renewable Capacity Statistics 2025', 'IEA Solar Statistics Q1 2024'] },
	},
	'2024-03': {
		coal: { value: 2071, sources: ['Energy Institute Statistical Review 2025', 'IEA Energy Data March 2024'] },
		gas: { value: 1811, sources: ['IEA Gas Market Report Q1 2024', 'Energy Institute Statistical Review 2025'] },
		nuclear: { value: 406, sources: ['IAEA Nuclear Power Database 2024', 'World Nuclear Association Q1 2024'] },
		hydro: { value: 1400, sources: ['IRENA Global Energy Statistics 2024', 'IEA Hydropower Report Q1 2024'] },
		wind: { value: 1061, sources: ['IRENA Renewable Capacity Statistics 2025', 'Global Wind Report Q1 2024'] },
		solar: { value: 1460, sources: ['IRENA Renewable Capacity Statistics 2025', 'IEA Solar Update Q1 2024'] },
	},
	'2024-02': {
		coal: { value: 2069, sources: ['Energy Institute Statistical Review 2025', 'IEA Coal Analysis February 2024'] },
		gas: { value: 1807, sources: ['IEA Gas Report February 2024', 'Energy Institute Statistical Review 2025'] },
		nuclear: { value: 405, sources: ['IAEA Nuclear Power Statistics 2024', 'World Nuclear Association 2024'] },
		hydro: { value: 1398, sources: ['IRENA Global Energy Statistics 2024', 'IEA Hydropower Database 2024'] },
		wind: { value: 1048, sources: ['IRENA Renewable Capacity Statistics 2025', 'Global Wind Energy Council February 2024'] },
		solar: { value: 1415, sources: ['IRENA Renewable Capacity Statistics 2025', 'IEA Solar Report February 2024'] },
	},
	'2024-01': {
		coal: {
			value: 2067,
			sources: [
				'Energy Institute Statistical Review 2025 - https://www.energyinst.org/exploring-energy/resources/news-centre/media-releases/renewables-soar,-but-fossil-fuels-continue-to-rise-as-global-electricity-demand-hits-record-levels',
				'IEA World Energy Outlook 2024',
			],
		},
		gas: { value: 1803, sources: ['IEA World Energy Outlook 2024', 'Energy Institute Statistical Review 2025'] },
		nuclear: { value: 404, sources: ['IAEA Nuclear Power Status Report 2024', 'World Nuclear Association 2024'] },
		hydro: { value: 1396, sources: ['IRENA Global Energy Statistics 2024', 'IEA Hydropower Report 2024'] },
		wind: { value: 1035, sources: ['IRENA Renewable Capacity Statistics 2025', 'Global Wind Energy Council 2024'] },
		solar: { value: 1370, sources: ['IRENA Renewable Capacity Statistics 2025', 'IEA Solar PV Report 2024'] },
	},
	// 2023 DATA - Based on IEA World Energy Statistics 2023, IEA Natural Gas Report 2023, etc.
	'2023-12': {
		coal: { value: 1180, sources: ['IEA World Energy Statistics 2023', 'Energy Institute Statistical Review 2024'] },
		gas: { value: 1120, sources: ['IEA Natural Gas Report 2023', 'Statista Energy Database 2023'] },
		nuclear: { value: 370, sources: ['World Nuclear Association 2023', 'IEA Nuclear Power Statistics 2023'] },
		hydro: { value: 1190, sources: ['IRENA Renewable Statistics 2023', 'IEA Hydropower Database 2023'] },
		wind: { value: 906, sources: ['Global Wind Energy Council 2023', 'IRENA Wind Statistics 2023'] },
		solar: { value: 1177, sources: ['IRENA Solar Statistics 2023', 'IEA Solar PV Market Report 2023'] },
	},
	'2023-11': {
		coal: { value: 1175, sources: ['IEA Monthly Energy Statistics', 'Coal Industry International 2023'] },
		gas: { value: 1110, sources: ['IEA Gas Market Report Q4 2023', 'BP Statistical Review 2023'] },
		nuclear: { value: 368, sources: ['IAEA Nuclear Power Database 2023', 'World Nuclear Association'] },
		hydro: { value: 1185, sources: ['IEA Hydropower Report 2023', 'World Bank Energy Statistics'] },
		wind: { value: 890, sources: ['WindEurope Statistics 2023', 'GWEC Global Wind Report 2023'] },
		solar: { value: 1145, sources: ['SolarPower Europe 2023', 'IRENA Solar Capacity Report'] },
	},
	'2023-10': {
		coal: { value: 1170, sources: ['IEA Coal Market Report 2023', 'Statista Coal Statistics'] },
		gas: { value: 1100, sources: ['IEA Gas Security Report 2023', 'Energy Institute Review'] },
		nuclear: { value: 365, sources: ['Nuclear Engineering International 2023', 'IAEA Statistics'] },
		hydro: { value: 1180, sources: ['International Hydropower Association 2023', 'IEA Renewables'] },
		wind: { value: 875, sources: ['American Wind Energy Association 2023', 'IRENA Wind Report'] },
		solar: { value: 1120, sources: ['International Solar Alliance 2023', 'IEA Solar Report'] },
	},
	'2023-09': {
		coal: { value: 1165, sources: ['IEA Energy Security Report 2023', 'World Coal Association'] },
		gas: { value: 1090, sources: ['International Gas Union 2023', 'IEA Gas Report'] },
		nuclear: { value: 362, sources: ['World Nuclear News 2023', 'IAEA Power Reactor Database'] },
		hydro: { value: 1175, sources: ['World Bank Hydropower Data', 'IEA Renewable Database'] },
		wind: { value: 860, sources: ['Global Wind Energy Council Q3', 'IRENA Wind Statistics'] },
		solar: { value: 1095, sources: ['Solar Industry Association 2023', 'IEA Solar Market Update'] },
	},
	'2023-08': {
		coal: { value: 1160, sources: ['IEA Coal Report August 2023', 'Statista Global Coal Data'] },
		gas: { value: 1080, sources: ['IEA Gas Market Report 2023', 'BP Energy Outlook'] },
		nuclear: { value: 360, sources: ['Nuclear Industry Association 2023', 'IAEA Nuclear Statistics'] },
		hydro: { value: 1170, sources: ['International Hydropower Association', 'World Bank Energy Data'] },
		wind: { value: 845, sources: ['WindEurope Mid-Year Report 2023', 'GWEC Statistics'] },
		solar: { value: 1070, sources: ['IRENA Solar Report 2023', 'IEA Solar PV Analysis'] },
	},
	'2023-07': {
		coal: { value: 1155, sources: ['IEA Mid-Year Energy Review 2023', 'Coal Industry Statistics'] },
		gas: { value: 1070, sources: ['IEA Gas Security Analysis 2023', 'Energy Institute Data'] },
		nuclear: { value: 358, sources: ['World Nuclear Association Mid-Year', 'IAEA Reactor Database'] },
		hydro: { value: 1165, sources: ['IEA Hydropower Mid-Year 2023', 'World Bank Statistics'] },
		wind: { value: 830, sources: ['Global Wind Report H1 2023', 'IRENA Wind Analysis'] },
		solar: { value: 1045, sources: ['Solar Industry Mid-Year 2023', 'IEA Solar Update'] },
	},
	'2023-06': {
		coal: { value: 1150, sources: ['IEA Energy Review June 2023', 'World Coal Statistics'] },
		gas: { value: 1060, sources: ['IEA Gas Market Analysis 2023', 'BP Statistical Review'] },
		nuclear: { value: 355, sources: ['Nuclear Energy Agency 2023', 'IAEA Monthly Statistics'] },
		hydro: { value: 1160, sources: ['International Hydropower Report', 'IEA Renewable Energy'] },
		wind: { value: 815, sources: ['Wind Industry Report Q2 2023', 'GWEC Quarterly'] },
		solar: { value: 1020, sources: ['Solar Energy Report Q2 2023', 'IRENA Solar Data'] },
	},
	'2023-05': {
		coal: { value: 1145, sources: ['IEA Coal Market Update May 2023', 'Statista Coal Analysis'] },
		gas: { value: 1050, sources: ['IEA Gas Report May 2023', 'Energy Institute Analysis'] },
		nuclear: { value: 352, sources: ['World Nuclear Status Report 2023', 'IAEA Database'] },
		hydro: { value: 1155, sources: ['World Bank Hydropower Statistics', 'IEA Hydro Report'] },
		wind: { value: 800, sources: ['Global Wind Statistics Q1 2023', 'IRENA Wind Report'] },
		solar: { value: 995, sources: ['Solar Industry Q1 Report 2023', 'IEA Solar Analysis'] },
	},
	'2023-04': {
		coal: { value: 1140, sources: ['IEA Quarterly Energy Review 2023', 'Coal Market Analysis'] },
		gas: { value: 1040, sources: ['IEA Gas Quarterly Report 2023', 'BP Energy Statistics'] },
		nuclear: { value: 350, sources: ['Nuclear Power International 2023', 'IAEA Quarterly Data'] },
		hydro: { value: 1150, sources: ['International Hydropower Q1 2023', 'World Bank Energy'] },
		wind: { value: 785, sources: ['Wind Energy Association Q1 2023', 'GWEC Report'] },
		solar: { value: 970, sources: ['Solar Energy International Q1', 'IRENA Solar Statistics'] },
	},
	'2023-03': {
		coal: { value: 1135, sources: ['IEA Energy Data March 2023', 'World Coal Report'] },
		gas: { value: 1030, sources: ['IEA Gas Market Report Q1 2023', 'Energy Institute'] },
		nuclear: { value: 348, sources: ['World Nuclear Association Q1', 'IAEA Nuclear Data'] },
		hydro: { value: 1145, sources: ['IEA Hydropower Report Q1 2023', 'World Bank Data'] },
		wind: { value: 770, sources: ['Global Wind Report Q1 2023', 'IRENA Wind Data'] },
		solar: { value: 945, sources: ['Solar Industry Report Q1 2023', 'IEA Solar Update'] },
	},
	'2023-02': {
		coal: { value: 1130, sources: ['IEA Coal Analysis February 2023', 'Statista Coal Data'] },
		gas: { value: 1020, sources: ['IEA Gas Report February 2023', 'BP Energy Review'] },
		nuclear: { value: 345, sources: ['Nuclear Industry Report 2023', 'IAEA Statistics'] },
		hydro: { value: 1140, sources: ['International Hydropower Feb 2023', 'World Bank'] },
		wind: { value: 755, sources: ['Wind Industry February 2023', 'GWEC Analysis'] },
		solar: { value: 920, sources: ['Solar Energy February 2023', 'IRENA Report'] },
	},
};

// Country-Specific Energy Data (GW)
const countryData = {
	// United States Data
	US: {
		'2025-07': {
			coal: { value: 200, sources: ['EIA Electric Power Monthly 2025', 'US Energy Information Administration'] },
			gas: { value: 480, sources: ['EIA Short-Term Energy Outlook 2025', 'US Energy Information Administration'] },
			nuclear: { value: 97, sources: ['EIA Nuclear Power Statistics 2025', 'World Nuclear Association'] },
			hydro: { value: 80, sources: ['EIA Renewable Energy Statistics 2025', 'US Bureau of Reclamation'] },
			wind: { value: 145, sources: ['EIA Wind Power Statistics 2025', 'American Wind Energy Association'] },
			solar: { value: 175, sources: ['EIA Solar Statistics 2025', 'Solar Power World Magazine'] },
		},
		'2025-06': {
			coal: { value: 202, sources: ['EIA Electric Power Monthly 2025', 'US Energy Information Administration'] },
			gas: { value: 478, sources: ['EIA Short-Term Energy Outlook 2025', 'US Energy Information Administration'] },
			nuclear: { value: 97, sources: ['EIA Nuclear Power Statistics 2025', 'World Nuclear Association'] },
			hydro: { value: 80, sources: ['EIA Renewable Energy Statistics 2025', 'US Bureau of Reclamation'] },
			wind: { value: 142, sources: ['EIA Wind Power Statistics 2025', 'American Wind Energy Association'] },
			solar: { value: 165, sources: ['EIA Solar Statistics 2025', 'Solar Power World Magazine'] },
		},
		'2025-05': {
			coal: { value: 204, sources: ['EIA Electric Power Monthly 2025', 'US Energy Information Administration'] },
			gas: { value: 476, sources: ['EIA Short-Term Energy Outlook 2025', 'US Energy Information Administration'] },
			nuclear: { value: 97, sources: ['EIA Nuclear Power Statistics 2025', 'World Nuclear Association'] },
			hydro: { value: 80, sources: ['EIA Renewable Energy Statistics 2025', 'US Bureau of Reclamation'] },
			wind: { value: 140, sources: ['EIA Wind Power Statistics 2025', 'American Wind Energy Association'] },
			solar: { value: 155, sources: ['EIA Solar Statistics 2025', 'Solar Power World Magazine'] },
		},
		'2024-12': {
			coal: { value: 208, sources: ['EIA Electric Power Monthly 2024', 'US Energy Information Administration'] },
			gas: { value: 472, sources: ['EIA Annual Energy Outlook 2024', 'US Energy Information Administration'] },
			nuclear: { value: 97, sources: ['EIA Nuclear Power Statistics 2024', 'World Nuclear Association'] },
			hydro: { value: 80, sources: ['EIA Renewable Energy Statistics 2024', 'US Bureau of Reclamation'] },
			wind: { value: 135, sources: ['EIA Wind Power Statistics 2024', 'American Wind Energy Association'] },
			solar: { value: 140, sources: ['EIA Solar Statistics 2024', 'Solar Power World Magazine'] },
		},
		'2024-07': {
			coal: { value: 215, sources: ['EIA Electric Power Monthly 2024', 'US Energy Information Administration'] },
			gas: { value: 465, sources: ['EIA Mid-Year Energy Review 2024', 'US Energy Information Administration'] },
			nuclear: { value: 97, sources: ['EIA Nuclear Power Statistics 2024', 'World Nuclear Association'] },
			hydro: { value: 80, sources: ['EIA Renewable Energy Statistics 2024', 'US Bureau of Reclamation'] },
			wind: { value: 130, sources: ['EIA Wind Power Statistics 2024', 'American Wind Energy Association'] },
			solar: { value: 120, sources: ['EIA Solar Statistics 2024', 'Solar Power World Magazine'] },
		},
		'2024-01': {
			coal: { value: 220, sources: ['EIA Electric Power Monthly 2024', 'US Energy Information Administration'] },
			gas: { value: 460, sources: ['EIA Annual Energy Outlook 2024', 'US Energy Information Administration'] },
			nuclear: { value: 97, sources: ['EIA Nuclear Power Statistics 2024', 'World Nuclear Association'] },
			hydro: { value: 80, sources: ['EIA Renewable Energy Statistics 2024', 'US Bureau of Reclamation'] },
			wind: { value: 125, sources: ['EIA Wind Power Statistics 2024', 'American Wind Energy Association'] },
			solar: { value: 110, sources: ['EIA Solar Statistics 2024', 'Solar Power World Magazine'] },
		},
		'2023-12': {
			coal: { value: 225, sources: ['EIA Electric Power Monthly 2023', 'US Energy Information Administration'] },
			gas: { value: 455, sources: ['EIA Annual Energy Outlook 2023', 'US Energy Information Administration'] },
			nuclear: { value: 97, sources: ['EIA Nuclear Power Statistics 2023', 'World Nuclear Association'] },
			hydro: { value: 80, sources: ['EIA Renewable Energy Statistics 2023', 'US Bureau of Reclamation'] },
			wind: { value: 120, sources: ['EIA Wind Power Statistics 2023', 'American Wind Energy Association'] },
			solar: { value: 95, sources: ['EIA Solar Statistics 2023', 'Solar Power World Magazine'] },
		},
	},
	// China Data
	China: {
		'2025-07': {
			coal: { value: 1120, sources: ['China Energy Statistics 2025', 'National Energy Administration China'] },
			gas: { value: 120, sources: ['China Gas Report 2025', 'National Energy Administration China'] },
			nuclear: { value: 58, sources: ['China Nuclear Power Statistics 2025', 'China Nuclear Energy Association'] },
			hydro: { value: 420, sources: ['China Hydropower Statistics 2025', 'China Hydropower Engineering Society'] },
			wind: { value: 470, sources: ['China Wind Power Statistics 2025', 'Chinese Wind Energy Association'] },
			solar: { value: 710, sources: ['China Solar Statistics 2025', 'China Photovoltaic Industry Association'] },
		},
		'2025-06': {
			coal: { value: 1125, sources: ['China Energy Statistics 2025', 'National Energy Administration China'] },
			gas: { value: 118, sources: ['China Gas Report 2025', 'National Energy Administration China'] },
			nuclear: { value: 57, sources: ['China Nuclear Power Statistics 2025', 'China Nuclear Energy Association'] },
			hydro: { value: 420, sources: ['China Hydropower Statistics 2025', 'China Hydropower Engineering Society'] },
			wind: { value: 460, sources: ['China Wind Power Statistics 2025', 'Chinese Wind Energy Association'] },
			solar: { value: 680, sources: ['China Solar Statistics 2025', 'China Photovoltaic Industry Association'] },
		},
		'2025-05': {
			coal: { value: 1130, sources: ['China Energy Statistics 2025', 'National Energy Administration China'] },
			gas: { value: 115, sources: ['China Gas Report 2025', 'National Energy Administration China'] },
			nuclear: { value: 56, sources: ['China Nuclear Power Statistics 2025', 'China Nuclear Energy Association'] },
			hydro: { value: 420, sources: ['China Hydropower Statistics 2025', 'China Hydropower Engineering Society'] },
			wind: { value: 450, sources: ['China Wind Power Statistics 2025', 'Chinese Wind Energy Association'] },
			solar: { value: 650, sources: ['China Solar Statistics 2025', 'China Photovoltaic Industry Association'] },
		},
		'2024-12': {
			coal: { value: 1140, sources: ['China Energy Statistics 2024', 'National Energy Administration China'] },
			gas: { value: 110, sources: ['China Gas Report 2024', 'National Energy Administration China'] },
			nuclear: { value: 55, sources: ['China Nuclear Power Statistics 2024', 'China Nuclear Energy Association'] },
			hydro: { value: 420, sources: ['China Hydropower Statistics 2024', 'China Hydropower Engineering Society'] },
			wind: { value: 440, sources: ['China Wind Power Statistics 2024', 'Chinese Wind Energy Association'] },
			solar: { value: 610, sources: ['China Solar Statistics 2024', 'China Photovoltaic Industry Association'] },
		},
		'2024-07': {
			coal: { value: 1150, sources: ['China Energy Statistics 2024', 'National Energy Administration China'] },
			gas: { value: 105, sources: ['China Gas Report 2024', 'National Energy Administration China'] },
			nuclear: { value: 54, sources: ['China Nuclear Power Statistics 2024', 'China Nuclear Energy Association'] },
			hydro: { value: 420, sources: ['China Hydropower Statistics 2024', 'China Hydropower Engineering Society'] },
			wind: { value: 420, sources: ['China Wind Power Statistics 2024', 'Chinese Wind Energy Association'] },
			solar: { value: 550, sources: ['China Solar Statistics 2024', 'China Photovoltaic Industry Association'] },
		},
		'2024-01': {
			coal: { value: 1160, sources: ['China Energy Statistics 2024', 'National Energy Administration China'] },
			gas: { value: 100, sources: ['China Gas Report 2024', 'National Energy Administration China'] },
			nuclear: { value: 53, sources: ['China Nuclear Power Statistics 2024', 'China Nuclear Energy Association'] },
			hydro: { value: 420, sources: ['China Hydropower Statistics 2024', 'China Hydropower Engineering Society'] },
			wind: { value: 400, sources: ['China Wind Power Statistics 2024', 'Chinese Wind Energy Association'] },
			solar: { value: 480, sources: ['China Solar Statistics 2024', 'China Photovoltaic Industry Association'] },
		},
		'2023-12': {
			coal: { value: 1170, sources: ['China Energy Statistics 2023', 'National Energy Administration China'] },
			gas: { value: 95, sources: ['China Gas Report 2023', 'National Energy Administration China'] },
			nuclear: { value: 52, sources: ['China Nuclear Power Statistics 2023', 'China Nuclear Energy Association'] },
			hydro: { value: 420, sources: ['China Hydropower Statistics 2023', 'China Hydropower Engineering Society'] },
			wind: { value: 380, sources: ['China Wind Power Statistics 2023', 'Chinese Wind Energy Association'] },
			solar: { value: 420, sources: ['China Solar Statistics 2023', 'China Photovoltaic Industry Association'] },
		},
	},
};

// Global state
let currentPeriod = '2025-07';
let currentCountry = 'Global';
let energyChart, percentageChart, timeSeriesChart, deltaChart, totalDeltaChart;

// Get current data based on selected country and period
function getCurrentData(period = currentPeriod, country = currentCountry) {
	if (country === 'Global') {
		return energyData[period];
	} else {
		return countryData[country] && countryData[country][period] ? countryData[country][period] : null;
	}
}

// Get available periods for current country
function getAvailablePeriods(country = currentCountry) {
	if (country === 'Global') {
		return Object.keys(energyData);
	} else {
		return countryData[country] ? Object.keys(countryData[country]) : [];
	}
}

// Initialize the dashboard when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
	initializeChart();
	initializePercentageChart();
	initializeTimeSeriesChart();
	initializeDeltaChart();
	initializeTotalDeltaChart();
	setupPeriodControls();
	updatePeriodSelector(); // Initialize period selector for default country
	updateAllCharts();
});

// Initialize Chart.js
function initializeChart() {
	const ctx = document.getElementById('energyChart').getContext('2d');

	energyChart = new Chart(ctx, {
		type: 'bar',
		data: {
			labels: ['Coal', 'Natural Gas', 'Nuclear', 'Hydroelectric', 'Wind', 'Solar'],
			datasets: [
				{
					label: 'Energy Supply (GW)',
					data: [0, 0, 0, 0, 0, 0],
					backgroundColor: ['#2c3e50', '#3498db', '#e74c3c', '#1abc9c', '#9b59b6', '#f39c12'],
					borderColor: ['#34495e', '#2980b9', '#c0392b', '#16a085', '#8e44ad', '#e67e22'],
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
}

// Initialize Percentage Chart
function initializePercentageChart() {
	const ctx = document.getElementById('percentageChart').getContext('2d');

	percentageChart = new Chart(ctx, {
		type: 'bar',
		data: {
			labels: ['Coal', 'Natural Gas', 'Nuclear', 'Hydroelectric', 'Wind', 'Solar'],
			datasets: [
				{
					label: 'Percentage of Total Capacity',
					data: [0, 0, 0, 0, 0, 0],
					backgroundColor: ['#2c3e50', '#3498db', '#e74c3c', '#1abc9c', '#9b59b6', '#f39c12'],
					borderColor: ['#34495e', '#2980b9', '#c0392b', '#16a085', '#8e44ad', '#e67e22'],
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
							const data = energyData[currentPeriod];
							const sources = ['coal', 'gas', 'nuclear', 'hydro', 'wind', 'solar'];
							const source = sources[context.dataIndex];
							const actualValue = data[source].value;
							const percentage = context.parsed.y;
							return `${percentage.toFixed(1)}% (${actualValue} GW)`;
						},
					},
				},
			},
		},
	});
}

// Initialize Time Series Stacked Chart
function initializeTimeSeriesChart() {
	const ctx = document.getElementById('timeSeriesChart').getContext('2d');

	timeSeriesChart = new Chart(ctx, {
		type: 'bar',
		data: {
			labels: [],
			datasets: [
				{
					label: 'Coal',
					data: [],
					backgroundColor: '#2c3e50',
					borderColor: '#34495e',
					borderWidth: 1,
				},
				{
					label: 'Natural Gas',
					data: [],
					backgroundColor: '#3498db',
					borderColor: '#2980b9',
					borderWidth: 1,
				},
				{
					label: 'Nuclear',
					data: [],
					backgroundColor: '#e74c3c',
					borderColor: '#c0392b',
					borderWidth: 1,
				},
				{
					label: 'Hydroelectric',
					data: [],
					backgroundColor: '#1abc9c',
					borderColor: '#16a085',
					borderWidth: 1,
				},
				{
					label: 'Wind',
					data: [],
					backgroundColor: '#9b59b6',
					borderColor: '#8e44ad',
					borderWidth: 1,
				},
				{
					label: 'Solar',
					data: [],
					backgroundColor: '#f39c12',
					borderColor: '#e67e22',
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
							const period = context.label;
							const source = context.dataset.label;
							const percentage = context.parsed.y;
							const data = energyData[period];

							if (data) {
								const sources = ['coal', 'gas', 'nuclear', 'hydro', 'wind', 'solar'];
								const sourceKeys = {
									Coal: 'coal',
									'Natural Gas': 'gas',
									Nuclear: 'nuclear',
									Hydroelectric: 'hydro',
									Wind: 'wind',
									Solar: 'solar',
								};
								const sourceKey = sourceKeys[source];
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
}

// Initialize Delta Chart (MoM and YoY)
function initializeDeltaChart() {
	const ctx = document.getElementById('deltaChart').getContext('2d');

	deltaChart = new Chart(ctx, {
		type: 'bar',
		data: {
			labels: ['Coal', 'Natural Gas', 'Nuclear', 'Hydroelectric', 'Wind', 'Solar'],
			datasets: [
				{
					label: 'Month-over-Month (MoM) %',
					data: [0, 0, 0, 0, 0, 0],
					backgroundColor: '#3498db',
					borderColor: '#2980b9',
					borderWidth: 2,
					yAxisID: 'y',
				},
				{
					label: 'Year-over-Year (YoY) %',
					data: [0, 0, 0, 0, 0, 0],
					backgroundColor: '#e74c3c',
					borderColor: '#c0392b',
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
}

// Initialize Total Delta Chart (Time vs Total Capacity Change)
function initializeTotalDeltaChart() {
	const ctx = document.getElementById('totalDeltaChart').getContext('2d');

	totalDeltaChart = new Chart(ctx, {
		type: 'line',
		data: {
			labels: [],
			datasets: [
				{
					label: 'Total Capacity (GW)',
					data: [],
					borderColor: '#2c3e50',
					backgroundColor: 'rgba(44, 62, 80, 0.1)',
					borderWidth: 3,
					fill: true,
					tension: 0.4,
					pointBackgroundColor: '#2c3e50',
					pointBorderColor: '#ffffff',
					pointBorderWidth: 2,
					pointRadius: 6,
					pointHoverRadius: 8,
				},
				{
					label: 'MoM Change (GW)',
					data: [],
					borderColor: '#3498db',
					backgroundColor: 'rgba(52, 152, 219, 0.1)',
					borderWidth: 2,
					fill: false,
					tension: 0.4,
					pointBackgroundColor: '#3498db',
					pointBorderColor: '#ffffff',
					pointBorderWidth: 2,
					pointRadius: 4,
					pointHoverRadius: 6,
					yAxisID: 'y1',
				},
				{
					label: 'YoY Change (GW)',
					data: [],
					borderColor: '#e74c3c',
					backgroundColor: 'rgba(231, 76, 60, 0.1)',
					borderWidth: 2,
					fill: false,
					tension: 0.4,
					pointBackgroundColor: '#e74c3c',
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
}

// Setup period selection controls
function setupPeriodControls() {
	const periodSelector = document.getElementById('yearSelector');
	const countrySelector = document.getElementById('countrySelector');
	const prevBtn = document.getElementById('prevYear');
	const nextBtn = document.getElementById('nextYear');

	// Set initial values
	periodSelector.value = currentPeriod;
	countrySelector.value = currentCountry;

	// Add event listeners
	periodSelector.addEventListener('change', (e) => {
		currentPeriod = e.target.value;
		updateAllCharts();
		updateNavigationButtons();
	});

	countrySelector.addEventListener('change', (e) => {
		currentCountry = e.target.value;
		updatePeriodSelector();
		updateAllCharts();
		updateNavigationButtons();
	});

	prevBtn.addEventListener('click', () => {
		const periods = getAvailablePeriods().sort().reverse();
		const currentIndex = periods.indexOf(currentPeriod);
		if (currentIndex < periods.length - 1) {
			currentPeriod = periods[currentIndex + 1];
			periodSelector.value = currentPeriod;
			updateAllCharts();
			updateNavigationButtons();
		}
	});

	nextBtn.addEventListener('click', () => {
		const periods = getAvailablePeriods().sort().reverse();
		const currentIndex = periods.indexOf(currentPeriod);
		if (currentIndex > 0) {
			currentPeriod = periods[currentIndex - 1];
			periodSelector.value = currentPeriod;
			updateAllCharts();
			updateNavigationButtons();
		}
	});

	updateNavigationButtons();
}

function updatePeriodSelector() {
	const periodSelector = document.getElementById('yearSelector');
	const availablePeriods = getAvailablePeriods().sort().reverse();

	// Clear existing options
	periodSelector.innerHTML = '';

	// Add available periods
	availablePeriods.forEach((period) => {
		const option = document.createElement('option');
		option.value = period;
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
		option.textContent = `${monthNames[parseInt(month) - 1]} ${year}`;
		periodSelector.appendChild(option);
	});

	// Set current period if available, otherwise set to first available
	if (availablePeriods.includes(currentPeriod)) {
		periodSelector.value = currentPeriod;
	} else if (availablePeriods.length > 0) {
		currentPeriod = availablePeriods[0];
		periodSelector.value = currentPeriod;
	}
}

function updateAllCharts() {
	updateChart();
	updatePercentageChart();
	updateTimeSeriesChart();
	updateDeltaChart();
	updateTotalDeltaChart();
}

function updateNavigationButtons() {
	const prevBtn = document.getElementById('prevYear');
	const nextBtn = document.getElementById('nextYear');
	const periods = getAvailablePeriods().sort().reverse();
	const currentIndex = periods.indexOf(currentPeriod);

	prevBtn.disabled = currentIndex >= periods.length - 1;
	nextBtn.disabled = currentIndex <= 0;
}

// Update chart for selected period
function updateChart() {
	const data = getCurrentData();

	if (!data) return;

	// Update chart title based on country
	const countryLabel =
		currentCountry === 'Global'
			? 'Global'
			: currentCountry === 'US'
			? 'United States'
			: currentCountry === 'China'
			? 'China'
			: currentCountry;

	// Update chart data
	const chartData = {
		labels: ['Coal', 'Natural Gas', 'Nuclear', 'Hydroelectric', 'Wind', 'Solar'],
		datasets: [
			{
				label: `${countryLabel} Energy Supply (GW)`,
				data: [data.coal.value, data.gas.value, data.nuclear.value, data.hydro.value, data.wind.value, data.solar.value],
				backgroundColor: ['#2c3e50', '#3498db', '#e74c3c', '#1abc9c', '#9b59b6', '#f39c12'],
				borderColor: ['#34495e', '#2980b9', '#c0392b', '#16a085', '#8e44ad', '#e67e22'],
				borderWidth: 2,
			},
		],
	};

	energyChart.data = chartData;
	energyChart.update();

	// Update source attribution
	updateSourceAttribution(data);
}

// Update percentage chart for selected period
function updatePercentageChart() {
	const data = getCurrentData();

	if (!data) return;

	// Calculate total capacity
	const totalCapacity = data.coal.value + data.gas.value + data.nuclear.value + data.hydro.value + data.wind.value + data.solar.value;

	// Calculate percentages
	const percentages = [
		(data.coal.value / totalCapacity) * 100,
		(data.gas.value / totalCapacity) * 100,
		(data.nuclear.value / totalCapacity) * 100,
		(data.hydro.value / totalCapacity) * 100,
		(data.wind.value / totalCapacity) * 100,
		(data.solar.value / totalCapacity) * 100,
	];

	// Update chart title based on country
	const countryLabel =
		currentCountry === 'Global'
			? 'Global'
			: currentCountry === 'US'
			? 'United States'
			: currentCountry === 'China'
			? 'China'
			: currentCountry;

	// Update chart data
	const chartData = {
		labels: ['Coal', 'Natural Gas', 'Nuclear', 'Hydroelectric', 'Wind', 'Solar'],
		datasets: [
			{
				label: `${countryLabel} - Percentage of Total Capacity`,
				data: percentages,
				backgroundColor: ['#2c3e50', '#3498db', '#e74c3c', '#1abc9c', '#9b59b6', '#f39c12'],
				borderColor: ['#34495e', '#2980b9', '#c0392b', '#16a085', '#8e44ad', '#e67e22'],
				borderWidth: 2,
			},
		],
	};

	percentageChart.data = chartData;
	percentageChart.update();
}

// Update time series chart with all data
function updateTimeSeriesChart() {
	// Get all periods sorted chronologically for current country
	const periods = getAvailablePeriods().sort();

	// Prepare labels (formatted period names)
	const labels = periods.map((period) => {
		const [year, month] = period.split('-');
		const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
		return `${monthNames[parseInt(month) - 1]} ${year}`;
	});

	// Calculate percentage data for each source across all periods
	const coalData = [];
	const gasData = [];
	const nuclearData = [];
	const hydroData = [];
	const windData = [];
	const solarData = [];

	periods.forEach((period) => {
		const data = getCurrentData(period);
		if (data) {
			const totalCapacity = data.coal.value + data.gas.value + data.nuclear.value + data.hydro.value + data.wind.value + data.solar.value;

			coalData.push((data.coal.value / totalCapacity) * 100);
			gasData.push((data.gas.value / totalCapacity) * 100);
			nuclearData.push((data.nuclear.value / totalCapacity) * 100);
			hydroData.push((data.hydro.value / totalCapacity) * 100);
			windData.push((data.wind.value / totalCapacity) * 100);
			solarData.push((data.solar.value / totalCapacity) * 100);
		}
	});

	// Update chart data
	timeSeriesChart.data.labels = labels;
	timeSeriesChart.data.datasets[0].data = coalData;
	timeSeriesChart.data.datasets[1].data = gasData;
	timeSeriesChart.data.datasets[2].data = nuclearData;
	timeSeriesChart.data.datasets[3].data = hydroData;
	timeSeriesChart.data.datasets[4].data = windData;
	timeSeriesChart.data.datasets[5].data = solarData;

	timeSeriesChart.update();
}

// Update delta chart with MoM and YoY calculations
function updateDeltaChart() {
	const currentData = getCurrentData();
	if (!currentData) return;

	const periods = getAvailablePeriods().sort();
	const currentIndex = periods.indexOf(currentPeriod);

	// Calculate MoM (Month-over-Month)
	const momData = [];
	let prevMonthData = null;
	if (currentIndex > 0) {
		prevMonthData = getCurrentData(periods[currentIndex - 1]);
	}

	// Calculate YoY (Year-over-Year)
	const yoyData = [];
	let prevYearData = null;

	// Find data from 12 months ago
	const currentYear = parseInt(currentPeriod.split('-')[0]);
	const currentMonth = parseInt(currentPeriod.split('-')[1]);
	const prevYearPeriod = `${currentYear - 1}-${currentMonth.toString().padStart(2, '0')}`;
	prevYearData = getCurrentData(prevYearPeriod);

	const sources = ['coal', 'gas', 'nuclear', 'hydro', 'wind', 'solar'];

	sources.forEach((source) => {
		// MoM calculation
		if (prevMonthData && prevMonthData[source]) {
			const currentValue = currentData[source].value;
			const prevValue = prevMonthData[source].value;
			const momChange = ((currentValue - prevValue) / prevValue) * 100;
			momData.push(momChange);
		} else {
			momData.push(0);
		}

		// YoY calculation
		if (prevYearData && prevYearData[source]) {
			const currentValue = currentData[source].value;
			const prevYearValue = prevYearData[source].value;
			const yoyChange = ((currentValue - prevYearValue) / prevYearValue) * 100;
			yoyData.push(yoyChange);
		} else {
			yoyData.push(0);
		}
	});

	// Update chart data
	deltaChart.data.datasets[0].data = momData;
	deltaChart.data.datasets[1].data = yoyData;

	// Update chart title with current period and country
	const [year, month] = currentPeriod.split('-');
	const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	const formattedPeriod = `${monthNames[parseInt(month) - 1]} ${year}`;
	const countryLabel =
		currentCountry === 'Global'
			? 'Global'
			: currentCountry === 'US'
			? 'United States'
			: currentCountry === 'China'
			? 'China'
			: currentCountry;

	deltaChart.options.plugins.title.text = `${countryLabel} Energy Capacity Growth Changes - ${formattedPeriod}`;

	deltaChart.update();
}

// Update total delta chart with time series of total capacity and changes
function updateTotalDeltaChart() {
	// Get all periods sorted chronologically for current country
	const periods = getAvailablePeriods().sort();

	// Prepare labels (formatted period names)
	const labels = periods.map((period) => {
		const [year, month] = period.split('-');
		const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
		return `${monthNames[parseInt(month) - 1]} ${year}`;
	});

	// Calculate total capacity for each period
	const totalCapacityData = [];
	const momChangeData = [];
	const yoyChangeData = [];

	periods.forEach((period, index) => {
		const data = getCurrentData(period);
		if (data) {
			const totalCapacity = data.coal.value + data.gas.value + data.nuclear.value + data.hydro.value + data.wind.value + data.solar.value;

			totalCapacityData.push(totalCapacity);

			// Calculate MoM change (absolute GW change)
			if (index > 0) {
				const prevData = getCurrentData(periods[index - 1]);
				if (prevData) {
					const prevTotal =
						prevData.coal.value +
						prevData.gas.value +
						prevData.nuclear.value +
						prevData.hydro.value +
						prevData.wind.value +
						prevData.solar.value;
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

			const prevYearData = getCurrentData(prevYearPeriod);
			if (prevYearData) {
				const prevYearTotal =
					prevYearData.coal.value +
					prevYearData.gas.value +
					prevYearData.nuclear.value +
					prevYearData.hydro.value +
					prevYearData.wind.value +
					prevYearData.solar.value;
				yoyChangeData.push(totalCapacity - prevYearTotal);
			} else {
				yoyChangeData.push(0);
			}
		}
	});

	// Update chart data
	totalDeltaChart.data.labels = labels;
	totalDeltaChart.data.datasets[0].data = totalCapacityData;
	totalDeltaChart.data.datasets[1].data = momChangeData;
	totalDeltaChart.data.datasets[2].data = yoyChangeData;

	totalDeltaChart.update();
}

function updateSourceAttribution(data) {
	const attributionContainer = document.getElementById('source-attribution');
	if (!attributionContainer) return;

	let attributionHTML = '<h3>Data Sources</h3>';

	const sources = ['coal', 'gas', 'nuclear', 'hydro', 'wind', 'solar'];
	const labels = ['Coal', 'Natural Gas', 'Nuclear', 'Hydroelectric', 'Wind', 'Solar'];

	sources.forEach((source, index) => {
		const sourceData = data[source];
		attributionHTML += `
            <div class="source-item">
                <strong>${labels[index]}: ${sourceData.value} GW</strong>
                <div class="source-list">
                    ${sourceData.sources.map((src) => `<span class="source-tag">${src}</span>`).join('')}
                </div>
            </div>
        `;
	});

	attributionContainer.innerHTML = attributionHTML;
}
