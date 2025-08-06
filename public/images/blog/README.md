# Blog Images Directory

This directory contains images for blog posts organized by project. Each project has its own subdirectory to keep images organized and easily accessible.

## Directory Structure

```
public/images/blog/
├── README.md                           # This file
├── cart-classifier/                    # C(ART) - Fullstack Ecommerce Website
├── asl-interpreter/                    # American Sign Language Interpreter
├── llm-inference-optimization/         # LLM Inference Workload Optimization
├── car-price-prediction/               # Automobile Price Prediction
├── stroke-prediction/                  # Stroke Prediction
├── house-price-prediction/             # Mumbai House Price Prediction
├── stock-price-prediction/             # Stock Price Prediction
├── ant-colony-optimization/            # Ant Colony Optimization (ACO)
├── etl-pipeline-airflow/              # ETL using Apache Airflow
├── research-paper-abstract-essence/    # Research Paper - Comparative Analysis
├── orion/                              # Orion - Virtual Assistant
├── all-in-casino/                     # All-In Casino
├── flight-delay-prediction/            # Flight Delay Prediction
└── budget-tracker/                     # Budget Tracker
```

## Image Guidelines

### Supported Formats
- **PNG**: For screenshots, diagrams, and images with transparency
- **JPG/JPEG**: For photographs and complex images
- **SVG**: For scalable graphics, charts, and icons
- **WebP**: For optimized web images (recommended for better performance)

### Naming Convention
Use descriptive, lowercase names with hyphens:
- `performance-comparison-chart.png`
- `model-architecture-diagram.svg`
- `data-flow-visualization.jpg`
- `results-dashboard-screenshot.png`

### Image Types by Project

#### Machine Learning Projects
- Model performance charts
- Data distribution plots
- Feature importance graphs
- Confusion matrices
- ROC curves
- Training/validation loss plots

#### Web Development Projects
- Application screenshots
- Architecture diagrams
- User interface mockups
- Database schemas
- API documentation diagrams

#### Data Science Projects
- Data preprocessing flowcharts
- ETL pipeline diagrams
- Visualization examples
- Statistical analysis charts

#### Research Projects
- Methodology diagrams
- Results comparison charts
- Publication figures
- Experimental setup images

## Usage in Blog Posts

### Markdown Syntax
```markdown
![Description of the image](/images/blog/project-name/image-name.png)
```

### React Component (if needed)
```jsx
<Image 
  src="/images/blog/project-name/image-name.png"
  alt="Description of the image"
  width={800}
  height={600}
/>
```

## Image Optimization

### Recommended Sizes
- **Blog headers**: 1200x400px
- **Content images**: 800x600px
- **Thumbnails**: 300x200px
- **Icons**: 64x64px or 128x128px

### File Size Guidelines
- **PNG/JPG**: Keep under 500KB for content images
- **SVG**: Usually under 50KB
- **WebP**: Aim for 200-300KB for content images

## Adding New Images

1. **Choose the correct project directory**
2. **Use descriptive filenames**
3. **Optimize images before uploading**
4. **Update this README if adding new project directories**

## Example Image Structure

```
cart-classifier/
├── architecture-diagram.svg
├── user-interface-screenshots/
│   ├── homepage.png
│   ├── product-page.png
│   └── checkout-process.png
├── database-schema.png
└── performance-metrics.png

stroke-prediction/
├── data-distribution-plots/
│   ├── age-distribution.png
│   ├── bmi-distribution.png
│   └── glucose-levels.png
├── model-performance/
│   ├── confusion-matrix.png
│   ├── roc-curve.png
│   └── feature-importance.png
└── preprocessing-flowchart.svg
```

## Performance Tips

1. **Use WebP format** when possible for better compression
2. **Optimize images** before uploading using tools like TinyPNG
3. **Use appropriate sizes** - don't upload 4K images for small thumbnails
4. **Consider lazy loading** for images below the fold
5. **Provide alt text** for accessibility

## Maintenance

- **Regular cleanup**: Remove unused images
- **Version control**: Keep track of image changes
- **Backup**: Ensure images are backed up with the project
- **Documentation**: Update this README when adding new image types or projects 