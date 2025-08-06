import { BlogContent } from '../blogContent';

export const strokePredictionBlog: BlogContent = {
  sections: [
    {
      id: 'introduction',
      title: 'Introduction',
      content: `Stroke is the second leading cause of death globally, making early identification of high-risk patients vital for timely intervention and improved outcomes. This project applies classical machine learning techniques to predict stroke risk from simple patient attributes.`
    },
    {
      id: 'dataset-problem-definition',
      title: 'Dataset & Problem Definition',
      content: `- **Records:** 5,110 patients
- **Features:**
  - **Demographics:** age, gender, ever_married, work_type, Residence_type
  - **Health indicators:** hypertension, heart_disease, avg_glucose_level, BMI
  - **Behavioral:** smoking_status
  - **Target:** stroke (0 = no, 1 = yes)

The goal: build a classifier that flags individuals at risk of stroke, prioritizing **recall** to minimize missed cases.`
    },
    {
      id: 'tech-stack',
      title: 'Tech Stack',
      content: `- **Data Processing & Analysis:** Python, Pandas, NumPy
- **Visualization:** Matplotlib, Seaborn
- **Modeling:** scikit-learn (SVM, ensemble methods), imbalanced-learn (oversampling)
- **Environment:** Jupyter Notebook, Anaconda
- **Version Control & Collaboration:** Git, GitHub`
    },
    {
      id: 'data-cleaning-imputation',
      title: 'Data Cleaning & Imputation',
      content: `- **Missing BMI (201 entries):** Imputed by median BMI stratified by age group and gender.
  - Age groups: Toddler (<2), Teen (2–19), Adult (19–60), Senior (>60)
  - Example medians: Adult Male = 30.2, Adult Female = 28.8, Senior Male = 29.0, Senior Female = 28.9.
- **Data consistency:** Removed the single "Other" gender row for modeling simplicity.`
    },
    {
      id: 'feature-engineering-encoding',
      title: 'Feature Engineering & Encoding',
      content: `- **Derived feature:** age_group (Toddler/Teen/Adult/Senior) to support BMI imputation logic.
- **One-hot encoding:** Converted categorical fields (gender, ever_married, work_type, Residence_type, smoking_status) into binary indicator columns.
- **Scaling:** Continuous features (age, avg_glucose_level, BMI) were standardized (zero mean, unit variance).`
    },
    {
      id: 'handling-class-imbalance',
      title: 'Handling Class Imbalance',
      content: `- **Challenge:** Stroke cases comprised only ~4.9% of the data.
- **Solution:** Used random oversampling of the minority class on the training split to achieve a balanced distribution, preventing bias toward the majority (non-stroke) class.`
    },
    {
      id: 'model-training-evaluation',
      title: 'Model Training & Evaluation',
      content: `Performed a stratified train/test split and assessed multiple classifiers, focusing on recall for the stroke class:

- **K-Nearest Neighbors:** ~97% overall accuracy, balanced precision/recall.
- **Support Vector Machine:** ~99% accuracy with **100% recall** on stroke cases (no false negatives).
- **Logistic Regression:** ~77% accuracy, lower recall on stroke.
- **Random Forest:** ~99% accuracy, strong recall.
- **Gradient Boosting & LightGBM:** ~95–97% accuracy.
- **Voting Ensemble:** ~98% accuracy.

**Winner:** SVM's margin-based decision boundary excelled at capturing all stroke cases without misclassification.`
    },
    {
      id: 'key-findings',
      title: 'Key Findings',
      content: `- Tailored imputation strategies (median by subgroup) preserve data fidelity.
- One-hot encoding and feature scaling ensure model inputs are comparable.
- Balancing the dataset is essential to avoid majority-class dominance.
- Emphasizing recall when selecting models is critical in healthcare applications to avoid missed diagnoses.`
    },
    {
      id: 'conclusion-future-directions',
      title: 'Conclusion & Future Directions',
      content: `This pipeline demonstrates that well-tuned classical ML models can achieve near-perfect recall in stroke risk prediction when paired with careful preprocessing and imbalance handling.

**Next steps:** incorporate richer clinical data (lab results, imaging), explore deep learning architectures, and deploy the model within a clinical decision-support system for real-time risk alerts.`
    }
  ]
}; 