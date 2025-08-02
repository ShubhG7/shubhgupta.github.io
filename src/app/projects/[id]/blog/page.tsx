"use client";

import React, { useState } from 'react';
import projects from '@/data/projects.json';
import { notFound } from 'next/navigation';

interface BlogPageProps {
  params: Promise<{ id: string }>;
}

const blogContent = {
  sections: [
    {
      id: 'introduction',
      title: 'Introduction',
      content: `Airline delays ripple across operations, customer satisfaction, and logistics. This project leverages big data analytics with PySpark to predict flight departure delays over a decade of U.S. flight data (2009–2018), uncover the dominant drivers, and deliver a production-ready pipeline on cloud infrastructure.`
    },
    {
      id: 'project-objective',
      title: 'Project Objective & Scope',
      content: `The primary goal was to ingest massive flight records, conduct deep exploratory analysis, engineer meaningful predictive features, train a robust model, and deploy it using cloud compute to provide delay estimates with quantified accuracy. Scope included large-scale data handling, machine learning within PySpark, and deployment on Google Cloud.`
    },
    {
      id: 'dataset-description',
      title: 'Dataset Description',
      content: `The dataset contains extensive operational flight records from the U.S. Department of Transportation covering 2009–2018. Each row includes fields like scheduled and actual times, carrier, origin/destination, various delay breakdowns, cancellation/diversion flags, and more—allowing rich feature construction.

Key fields used:
- FL_DATE, CRS_DEP_TIME, DEP_TIME, DEP_DELAY, origin/destination, carrier, taxi times, arrival metrics, cancellation/diversion flags, and breakdowns like carrier/weather/NAS delays.`
    },
    {
      id: 'pyspark-setup',
      title: 'PySpark & Big Data Processing Setup',
      content: `The environment was built on PySpark with careful configuration for large-scale execution. A SparkSession was initialized with resource-conscious parameters for dynamic allocation and memory management to avoid spillover.

Cloud infrastructure:
- Google Cloud Storage (GCS) for durable input/output storage.
- Compute Engine cluster (one master + two worker nodes) enabling parallelism and efficiency.
- Integration choices were made to balance scalability and cost.`
    },
    {
      id: 'exploratory-analysis',
      title: 'Exploratory Data Analysis (EDA)',
      content: `EDA was performed to identify data quality issues and shape preprocessing decisions. Major steps: null-value quantification, data type verification, and transformation of misformatted time fields. The FL_DATE and CRS_DEP_TIME required conversion from numeric encodings to usable datetime formats to enable temporal feature derivation.

Findings included critical data quality challenges around time fields, which informed strategy for imputation vs dropping and type correction to ensure accuracy downstream.`
    },
    {
      id: 'data-preprocessing',
      title: 'Data Preprocessing',
      content: `### Cleaning & Type Corrections
Nulls were identified and handled; time columns like CRS_DEP_TIME required formatting to strings and conversion to timestamps, ensuring accurate time-based analysis.

### Feature Engineering
Derived temporal features: day_of_week, hour_of_day, month. Categorical variables (OP_CARRIER, ORIGIN, DEST) were encoded and all inputs were assembled into a feature vector.

### Imputation & Split
DEP_DELAY nulls were filled with zeros, and the data was split 80/20 for training/testing to ensure robust evaluation.`
    },
    {
      id: 'model-building',
      title: 'Model Building & Hyperparameter Tuning',
      content: `A RandomForestRegressor was selected for its robustness to overfitting and ability to model non-linear relationships without heavy manual transformations. Hyperparameters were chosen to balance expressiveness and compute cost: 100 trees, max depth of 10, and 400 bins to accommodate high-cardinality categorical features. These choices were informed by statistical considerations and available cloud resources.

Evaluation metric: RMSE used to capture average prediction error in minutes.`
    },
    {
      id: 'deployment-architecture',
      title: 'Deployment Architecture',
      content: `The pipeline ran on Google Cloud: data and diagnostics stored in GCS; compute orchestrated on a master-worker cluster enabling parallel data processing and scaling.`
    },
    {
      id: 'results-analysis',
      title: 'Results & Analysis',
      content: `### Performance Metrics
The model achieved an RMSE of 36.1102 on the test set, indicating predictions were on average within ~36 minutes of actual delays—a solid baseline given real-world variability.

### Feature Importance Deep Dive
Analysis revealed hour of the day as the most influential predictor, encapsulating patterns like peak traffic and scheduling dynamics. Secondary features like carrier and route contributed contextually.`
    },
    {
      id: 'challenges',
      title: 'Challenges Encountered',
      content: `- Non-standard time representations required careful transformation and validation.
- Handling missing values without biasing predictions needed conservative imputation.
- Tuning hyperparameters under constrained compute to balance generalization and performance.`
    },
    {
      id: 'lessons-learned',
      title: 'Lessons Learned',
      content: `- Early EDA prevents cascading failures from datatype issues.
- Cloud parameter choices must reflect dataset scale for efficiency.
- Thoughtfully tuned ensemble methods can yield strong performance on noisy data.`
    },
    {
      id: 'future-work',
      title: 'Future Work',
      content: `- Integrate real-time flight data to transition toward streaming predictions.
- Experiment with deeper temporal models and compare performance trade-offs.
- Build a consumer-facing dashboard or API for broader utility.`
    },
    {
      id: 'reproducibility',
      title: 'Reproducibility & How to Run',
      content: `- Clone the repository, configure cloud credentials, ensure the dataset is present in storage.
- Initialize the Spark cluster, run preprocessing, train the model, and evaluate using RMSE.
- Persist outputs and logs for traceability.`
    },
    {
      id: 'references',
      title: 'References',
      content: `All internal notes, architecture decisions, and code derivations are drawn from the original project report and implementation analytics.`
    }
  ]
};

const ProjectBlogPage = ({ params }: BlogPageProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [resolvedParams, setResolvedParams] = useState<{ id: string } | null>(null);
  const [project, setProject] = useState<any>(null);

  React.useEffect(() => {
    const initPage = async () => {
      const resolved = await params;
      setResolvedParams(resolved);
      const foundProject = projects.find((p: any) => p.id === resolved.id);
      setProject(foundProject);
    };
    initPage();
  }, [params]);

  if (!project) return null;

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="py-8 sm:py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Title and GitHub Link */}
        <div className="flex items-center justify-between mb-6 mx-4 sm:mx-6 md:mx-8 relative z-20">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold" style={{ color: '#2d1e13', fontFamily: 'var(--font-league-spartan), Arial, Helvetica, sans-serif' }}>
            {project.title} Blog
          </h1>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full border-2 border-[#4b2e13] bg-[#4b2e13] text-white hover:bg-[#a47551] hover:border-[#a47551] active:bg-[#a47551] active:border-[#a47551] transition-all duration-200 active:scale-95 touch-manipulation"
            style={{ fontFamily: 'var(--font-league-spartan), Arial, Helvetica, sans-serif' }}
          >
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" className="mr-1">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>
            GitHub
          </a>
        </div>
        
        {/* Mobile Navigation Button */}
        <div className="md:hidden mb-4 mx-4 sm:mx-6 md:mx-8">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex items-center gap-2 px-4 py-2 rounded-full border-2 border-[#4b2e13] bg-[#4b2e13] text-white hover:bg-[#a47551] hover:border-[#a47551] active:bg-[#a47551] active:border-[#a47551] transition-all duration-200 active:scale-95 touch-manipulation"
            style={{ fontFamily: 'var(--font-league-spartan), Arial, Helvetica, sans-serif' }}
          >
            <span className="text-lg">{isMobileMenuOpen ? '✕' : '☰'}</span>
            Navigation
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mb-6 mx-4 sm:mx-6 md:mx-8 bg-[#f5e9da] rounded-lg p-4 border-2 border-[#e2c9a0] relative z-20">
            <h3 className="text-lg font-semibold mb-3" style={{ color: '#2d1e13', fontFamily: 'var(--font-league-spartan), Arial, Helvetica, sans-serif' }}>
              Table of Contents
            </h3>
            <div className="flex flex-col gap-2">
              {blogContent.sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className="text-left px-3 py-2 rounded-lg hover:bg-[#e2c9a0] transition-colors duration-200 text-sm"
                  style={{ color: '#2d1e13', fontFamily: 'var(--font-league-spartan), Arial, Helvetica, sans-serif' }}
                >
                  {section.title}
                </button>
              ))}
            </div>
          </div>
        )}
        
        {/* Desktop Layout */}
        <div className="flex gap-8">
          {/* Desktop Navigation Sidebar */}
          <div className="hidden md:block w-64 flex-shrink-0">
            <div className="bg-[#f5e9da] rounded-3xl p-6 border-2 border-[#e2c9a0] sticky top-8 relative z-20">
              <h3 className="text-lg font-semibold mb-4" style={{ color: '#2d1e13', fontFamily: 'var(--font-league-spartan), Arial, Helvetica, sans-serif' }}>
                Table of Contents
              </h3>
              <div className="flex flex-col gap-2">
                {blogContent.sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className="text-left px-3 py-2 rounded-lg hover:bg-[#e2c9a0] transition-colors duration-200 text-sm"
                    style={{ color: '#2d1e13', fontFamily: 'var(--font-league-spartan), Arial, Helvetica, sans-serif' }}
                  >
                    {section.title}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Content Block */}
          <div className="flex-1">
            <div className="bg-[#f5e9da] rounded-3xl mx-4 sm:mx-6 md:mx-8 p-8 sm:p-10 md:p-12 relative z-20">
              <p className="mb-8 text-base sm:text-lg text-[#2d1e13] leading-relaxed" style={{ fontFamily: 'var(--font-league-spartan), Arial, Helvetica, sans-serif' }}>
                {project.summary}
              </p>
              <article className="prose prose-lg max-w-none" style={{ color: '#2d1e13', fontFamily: 'var(--font-league-spartan), Arial, Helvetica, sans-serif' }}>
                <div className="space-y-8">
                  {blogContent.sections.map((section) => (
                    <section key={section.id} id={section.id}>
                      <h2 className="text-xl font-bold mb-4" style={{ color: '#2d1e13', fontFamily: 'var(--font-league-spartan), Arial, Helvetica, sans-serif' }}>
                        {section.title}
                      </h2>
                      <div className="text-base sm:text-lg leading-relaxed">
                        {section.content}
                      </div>
                    </section>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectBlogPage;
