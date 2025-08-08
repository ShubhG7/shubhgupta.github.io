# ACO Project Visualizations

This directory contains 8 high-quality visualizations for the Ant Colony Optimization (ACO) project solving the Traveling Salesman Problem (TSP).

## Visualization Files

### 1. `01_us_cities_map.png`
**Description**: Map showing the geographic locations of all 10 US cities used in the TSP problem.
- **Purpose**: Provides geographic context for the problem
- **Features**: City locations plotted on longitude/latitude coordinates with city labels
- **Use Case**: Understanding the spatial distribution of cities

### 2. `02_tour_comparison.png`
**Description**: Side-by-side comparison of tours found by both algorithms.
- **Left Panel**: Cheapest Link Algorithm tour (blue arrows)
- **Right Panel**: ACO Algorithm tour (green arrows)
- **Purpose**: Visual comparison of tour quality and routing differences
- **Features**: Shows actual tour paths with directional arrows

### 3. `03_performance_comparison.png`
**Description**: Bar chart comparing the performance of both algorithms.
- **Data**: Tour costs in kilometers
- **Features**: 
  - Cheapest Link: 9,869.77 km
  - ACO: 9,594.91 km
  - Improvement annotation showing 275 km (2.8%) reduction
- **Purpose**: Clear quantitative comparison of algorithm performance

### 4. `04_distance_matrix_heatmap.png`
**Description**: Heatmap visualization of the distance matrix between all cities.
- **Features**: 
  - Color-coded distances (warmer colors = longer distances)
  - Numerical distance values in each cell
  - Symmetric matrix showing all city-to-city distances
- **Purpose**: Understanding the problem complexity and distance relationships

### 5. `05_aco_flow_diagram.png`
**Description**: Flow diagram explaining how the ACO algorithm works.
- **Components**:
  - Initialize pheromone levels
  - Ant construction phase
  - Probability calculation
  - Pheromone update (evaporation + deposition)
  - Iteration loop
- **Purpose**: Educational tool for understanding ACO mechanics

### 6. `06_parameter_sensitivity.png`
**Description**: 2x2 grid showing how ACO performance varies with different parameters.
- **Subplots**:
  - α (alpha): Pheromone importance
  - β (beta): Distance importance  
  - ρ (rho): Evaporation rate
  - Q: Pheromone deposit factor
- **Purpose**: Understanding parameter tuning effects on algorithm performance

### 7. `07_algorithm_summary.png`
**Description**: Heatmap comparing algorithms across multiple metrics.
- **Metrics**: Tour Cost, Computation Time, Solution Quality, Parameter Sensitivity
- **Purpose**: Comprehensive algorithm comparison across different performance dimensions

### 8. `08_convergence_plot.png`
**Description**: Line plot showing how solution quality improves over iterations.
- **Features**:
  - Cheapest Link: Constant performance (greedy algorithm)
  - ACO: Improving performance over iterations
  - Best ACO solution line
- **Purpose**: Demonstrating the iterative improvement nature of ACO

## Technical Specifications

- **Format**: PNG files
- **Resolution**: 300 DPI (high quality for presentations/publications)
- **Color Scheme**: Consistent color coding across visualizations
- **Font**: Clear, readable fonts with proper sizing

## Usage Recommendations

### For Presentations:
- Use `03_performance_comparison.png` for executive summaries
- Use `02_tour_comparison.png` for technical audiences
- Use `05_aco_flow_diagram.png` for educational purposes

### For Reports:
- Include `01_us_cities_map.png` for geographic context
- Use `04_distance_matrix_heatmap.png` for problem complexity discussion
- Reference `06_parameter_sensitivity.png` for parameter tuning sections

### For Academic Papers:
- `08_convergence_plot.png` for algorithm analysis
- `07_algorithm_summary.png` for comprehensive comparison
- `02_tour_comparison.png` for visual results

## Data Sources

- **City Coordinates**: Real geographic coordinates for 10 major US cities
- **Distance Calculations**: Haversine formula for accurate great-circle distances
- **Algorithm Results**: Actual outputs from the implemented algorithms
- **Parameter Data**: Simulated sensitivity analysis based on typical ACO behavior

## File Sizes

- Total directory size: ~4MB
- Individual files range from 116KB to 478KB
- All files optimized for web viewing and printing

---

*Generated for CS566 Project: Ant Colony Optimization for Traveling Salesman Problem* 