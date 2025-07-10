# New Chat Onboarding Guide

## 🎯 **CRITICAL: Alignment Protocol**

### **Step 1: Establish Ground Truth Sync**

Before any development work, the AI must:

1. **Verify Live State**: Check https://energy.gsaboia.workers.dev is working
2. **Confirm Current Code**: Review actual file contents vs documentation
3. **Validate Architecture**: Ensure understanding matches reality
4. **Sync on Priorities**: Align on what matters most RIGHT NOW

### **Step 2: Decision Alignment Questions**

AI should ask these alignment questions:

```
## Alignment Check
1. **Current Priority**: What's the most important thing to improve today?
2. **Success Definition**: How will we know this session was successful?
3. **Constraints**: Any technical limitations or requirements I should know?
4. **Risk Tolerance**: Should I be conservative or can I make bold changes?
5. **Time Horizon**: Are we optimizing for immediate wins or long-term architecture?
```

### **Step 3: Ground Truth Verification**

AI must verify these before proceeding:

- [ ] **Dashboard loads and functions correctly**
- [ ] **Current year selector works (2020-2024)**
- [ ] **Tooltips show year-over-year changes**
- [ ] **All 6 energy sources display properly**
- [ ] **Worker health endpoint responds**

### **Step 4: Sync Confirmation**

AI should confirm alignment:

```
## Alignment Confirmation
Based on my analysis:
- Current state: [What I see working]
- Your priority: [What you want improved]
- My understanding: [How I'll approach it]
- Success criteria: [How we'll measure progress]

Does this align with your expectations? Any corrections needed?
```

---

## 🎯 **Quick Start for New AI Sessions**

### **Files to Add to Context (in order)**

1. **`README.md`** - Project overview, current status, tech stack
2. **`docs/development-cycles.md`** - Development methodology
3. **`docs/daily-planning.md`** - Current priorities and feature pipeline
4. **`public/index.html`** - Dashboard structure (if discussing UI)
5. **Modular JavaScript files** (if discussing functionality):
   - **`public/script.js`** - Application orchestration
   - **`public/data.js`** - Energy data and access functions
   - **`public/charts.js`** - Chart.js functionality
   - **`public/controls.js`** - UI controls and event handlers
   - **`public/utils.js`** - Helper functions and calculations

### **Standard Context Prompt**

```
# Energy Dashboard Development Context

## Project Status
This is a live Cloudflare Worker dashboard at https://energy.gsaboia.workers.dev
Current state: ✅ ENHANCED with monthly sources chart and country data (2023-2025)

## Development Approach
I use 3-level development cycles: hourly (tactical), 4-hour (feature), daily (strategic)
See docs/development-cycles.md for methodology

## CRITICAL: Alignment Required
Before any development work:
1. Verify the live dashboard is working
2. Confirm current code matches documentation
3. Ask alignment questions about priorities and success criteria
4. Get explicit confirmation we're aligned on approach

## Current Priority
[Check docs/daily-planning.md for current features in pipeline]

## Request
Continue implementing the most logical next enhancement based on:
1. Current feature pipeline
2. User experience improvements
3. Technical architecture evolution
4. Data expansion opportunities

Prioritize features that build on existing functionality and provide immediate value.
```

---

## 🔄 **Alignment Maintenance During Session**

### **Every Major Decision**

AI should confirm:

- "I'm about to [ACTION]. Does this align with your goals?"
- "I see [ISSUE]. Should I fix this now or continue with main task?"
- "This approach will [IMPACT]. Is this the right tradeoff?"

### **Ground Truth Checkpoints**

Regular verification points:

- After each code change: "Let me verify this works as expected"
- Before deployment: "Testing locally confirms [BEHAVIOR]"
- After deployment: "Live site now shows [IMPROVEMENT]"

### **Sync Recovery**

If alignment breaks:

1. **Stop immediately**
2. **Identify the disconnect**
3. **Re-establish ground truth**
4. **Confirm new alignment**
5. **Resume with caution**

---

## 📋 **Feature Priority Matrix**

### **Tier 1: Immediate Value (Next 1-2 sessions)**

- [ ] **Additional Countries** - EU, India, Japan regional data
- [ ] **Data Export** - CSV/JSON download functionality
- [ ] **Enhanced Mobile** - Touch-friendly controls, responsive layout
- [ ] **Chart Sharing** - Generate shareable chart URLs

### **Tier 2: Core Features (Next 3-5 sessions)**

- ✅ **Multiple Chart Types** - 5 chart types operational (bar, percentage, time series, delta, total delta)
- ✅ **Regional Data** - Country breakdowns for US, China implemented
- [ ] **Data Filtering** - Filter by energy type, capacity range
- [ ] **Comparison Mode** - Side-by-side country comparisons
- [ ] **Forecasting** - Trend analysis and projections

### **Tier 3: Advanced Features (Next 5+ sessions)**

- [ ] **API Integration** - Live data from IRENA/IEA
- [ ] **AI Energy Integration** - Data center energy consumption
- [ ] **User Preferences** - Save chart configurations
- [ ] **Real-time Updates** - Live data feeds

---

## 🔄 **Development Continuation Patterns**

### **When AI Should Focus On:**

1. **Incremental Improvements** - Build on existing features
2. **User Experience** - Make interactions smoother
3. **Data Richness** - Add more insights to existing data
4. **Performance** - Optimize loading and rendering

### **When AI Should Ask First:**

1. **Major Architecture Changes** - Database, API, framework changes
2. **New Data Sources** - Adding external APIs or datasets
3. **UI Framework Migration** - Moving from vanilla to React/Vue
4. **Deployment Changes** - Moving platforms or infrastructure

---

## 📊 **Current Architecture Context**

### **Tech Stack**

- **Runtime**: Cloudflare Workers
- **Frontend**: Vanilla HTML/CSS/JavaScript
- **Charts**: Chart.js v7
- **Data**: Embedded JSON in modular data.js (2023-2025)
- **Architecture**: ES6 modules (5 focused files)
- **Deployment**: Wrangler CLI

### **File Structure**

```
energy/
├── README.md                    # Project overview
├── docs/                        # Development documentation
├── src/index.ts                 # Worker entry point
├── public/                      # Static assets
│   ├── index.html              # Dashboard UI
│   ├── script.js               # Application orchestration
│   ├── data.js                 # Energy data and access functions
│   ├── charts.js               # Chart.js initialization and updates
│   ├── controls.js             # UI controls and event handlers
│   ├── utils.js                # Helper functions and calculations
│   └── style.css               # Styling
├── wrangler.jsonc              # Worker config
└── package.json                # Dependencies
```

### **Key Functions to Know**

- `createEnergyChart()` - Main chart rendering
- `updateChart()` - Year change handler
- `setupYearControls()` - Navigation setup
- `calculateYearOverYearChange()` - Growth calculation

---

## 🎯 **Success Metrics for New Sessions**

### **Good Session Outcomes**

- [ ] Feature implemented and working
- [ ] Code committed and deployed
- [ ] Documentation updated
- [ ] Next logical step identified

### **Great Session Outcomes**

- [ ] Multiple related features completed
- [ ] User experience noticeably improved
- [ ] Technical debt reduced
- [ ] Development velocity increased

---

## 📝 **Copy-Paste Templates**

### **Quick Context Setup**

```
I'm continuing development of an energy dashboard. Please add these files:
- README.md
- docs/development-cycles.md
- docs/daily-planning.md

CRITICAL: Before any development work, follow the alignment protocol:
1. Verify https://energy.gsaboia.workers.dev is working
2. Ask alignment questions about priorities and success criteria
3. Confirm understanding matches my expectations
4. Get explicit go-ahead before proceeding

Then implement the most logical next enhancement based on the current feature pipeline.
```

### **Feature-Specific Context**

```
I'm working on [SPECIFIC FEATURE] for my energy dashboard. Please add:
- README.md (overview)
- public/index.html (current UI)
- public/script.js (current functionality)

CRITICAL: Start with alignment protocol before any changes.

Then help me implement [SPECIFIC FEATURE] following the existing modular code patterns.
```

---

## 🚀 **Development Velocity Tips**

1. **Start with smallest viable improvement**
2. **Build on existing patterns and functions**
3. **Test changes locally before deploying**
4. **Update documentation as you go**
5. **Commit frequently with clear messages**

---

## 🔄 **Handoff Checklist**

Before ending a session, ensure:

- [ ] Code is committed and pushed
- [ ] Changes are deployed and working
- [ ] Documentation is updated
- [ ] Next logical step is identified
- [ ] Any blockers are documented
