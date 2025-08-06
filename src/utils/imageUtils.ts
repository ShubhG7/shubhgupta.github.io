/**
 * Image utilities for blog posts
 * Provides helper functions for managing and displaying images in blog content
 */

export interface BlogImage {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  caption?: string;
}

/**
 * Get the full path for a blog image
 * @param projectId - The project identifier (e.g., 'stroke-prediction')
 * @param imageName - The image filename (e.g., 'confusion-matrix.png')
 * @returns The full path to the image
 */
export function getBlogImagePath(projectId: string, imageName: string): string {
  return `/images/blog/${projectId}/${imageName}`;
}

/**
 * Create a blog image object with proper formatting
 * @param projectId - The project identifier
 * @param imageName - The image filename
 * @param alt - Alt text for accessibility
 * @param width - Optional width
 * @param height - Optional height
 * @param caption - Optional caption
 * @returns BlogImage object
 */
export function createBlogImage(
  projectId: string,
  imageName: string,
  alt: string,
  width?: number,
  height?: number,
  caption?: string
): BlogImage {
  return {
    src: getBlogImagePath(projectId, imageName),
    alt,
    width,
    height,
    caption
  };
}

/**
 * Generate markdown for an image
 * @param projectId - The project identifier
 * @param imageName - The image filename
 * @param alt - Alt text for accessibility
 * @returns Markdown string
 */
export function getImageMarkdown(projectId: string, imageName: string, alt: string): string {
  return `![${alt}](${getBlogImagePath(projectId, imageName)})`;
}

/**
 * Common image types for different project categories
 */
export const IMAGE_TYPES = {
  ML_PROJECTS: {
    PERFORMANCE_CHARTS: ['confusion-matrix.png', 'roc-curve.png', 'precision-recall.png'],
    DATA_PLOTS: ['data-distribution.png', 'feature-importance.png', 'correlation-matrix.png'],
    MODEL_VISUALIZATIONS: ['model-architecture.png', 'training-curves.png', 'prediction-results.png']
  },
  WEB_PROJECTS: {
    SCREENSHOTS: ['homepage.png', 'dashboard.png', 'user-interface.png'],
    DIAGRAMS: ['architecture-diagram.png', 'database-schema.png', 'api-flow.png'],
    MOCKUPS: ['wireframes.png', 'design-mockups.png', 'user-flow.png']
  },
  DATA_SCIENCE: {
    ANALYSIS: ['data-preprocessing.png', 'feature-engineering.png', 'statistical-analysis.png'],
    VISUALIZATIONS: ['charts.png', 'graphs.png', 'heatmaps.png'],
    PIPELINES: ['etl-flow.png', 'data-pipeline.png', 'workflow-diagram.png']
  }
};

/**
 * Example usage for different projects
 */
export const EXAMPLE_IMAGES = {
  'stroke-prediction': {
    'data-distribution': createBlogImage('stroke-prediction', 'age-distribution.png', 'Age distribution of patients'),
    'model-performance': createBlogImage('stroke-prediction', 'confusion-matrix.png', 'Confusion matrix showing model performance'),
    'feature-importance': createBlogImage('stroke-prediction', 'feature-importance.png', 'Feature importance ranking')
  },
  'house-price-prediction': {
    'price-distribution': createBlogImage('house-price-prediction', 'price-distribution.png', 'Distribution of house prices in Mumbai'),
    'location-impact': createBlogImage('house-price-prediction', 'location-prices.png', 'Price variation by location'),
    'model-comparison': createBlogImage('house-price-prediction', 'model-comparison.png', 'Performance comparison of different models')
  },
  'ant-colony-optimization': {
    'algorithm-visualization': createBlogImage('ant-colony-optimization', 'aco-visualization.png', 'Visualization of ACO algorithm'),
    'performance-comparison': createBlogImage('ant-colony-optimization', 'performance-comparison.png', 'Performance comparison of algorithms'),
    'simulation': createBlogImage('ant-colony-optimization', 'simulation-screenshot.png', 'Real-time simulation screenshot')
  }
};

/**
 * Validate image path exists (for development)
 * @param projectId - The project identifier
 * @param imageName - The image filename
 * @returns Promise<boolean>
 */
export async function validateImagePath(projectId: string, imageName: string): Promise<boolean> {
  try {
    const response = await fetch(getBlogImagePath(projectId, imageName));
    return response.ok;
  } catch {
    return false;
  }
}

/**
 * Get all available images for a project
 * @param projectId - The project identifier
 * @returns Promise<string[]> - Array of image filenames
 */
export async function getProjectImages(projectId: string): Promise<string[]> {
  // This would typically fetch from an API or file system
  // For now, return empty array - implement based on your needs
  return [];
} 