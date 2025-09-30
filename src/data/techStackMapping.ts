// Tech Stack Mapping for Intelligent Filtering
// This file defines relationships between different technology names and versions
// to create a more forgiving and useful filtering system

export interface TechStackMapping {
  canonicalName: string;
  aliases: string[];
  category: string;
  description: string;
}

export const techStackMappings: TechStackMapping[] = [
  // React Ecosystem
  {
    canonicalName: "React",
    aliases: ["React.js", "React 18", "React 17", "React 16"],
    category: "Frontend Framework",
    description: "JavaScript library for building user interfaces"
  },
  {
    canonicalName: "Redux",
    aliases: ["Redux Toolkit", "Redux.js"],
    category: "State Management",
    description: "Predictable state container for JavaScript apps"
  },
  {
    canonicalName: "Node.js",
    aliases: ["Node", "NodeJS"],
    category: "Runtime Environment",
    description: "JavaScript runtime built on Chrome's V8 engine"
  },
  {
    canonicalName: "TypeScript",
    aliases: ["TS", "TSX"],
    category: "Programming Language",
    description: "Typed superset of JavaScript"
  },

  // Python Ecosystem
  {
    canonicalName: "Python",
    aliases: ["Python 3", "Python 3.8", "Python 3.9", "Python 3.10", "Python 3.11"],
    category: "Programming Language",
    description: "High-level programming language"
  },
  {
    canonicalName: "NumPy",
    aliases: ["numpy", "np"],
    category: "Data Science",
    description: "Fundamental package for scientific computing"
  },
  {
    canonicalName: "pandas",
    aliases: ["Pandas", "pd"],
    category: "Data Science",
    description: "Data manipulation and analysis library"
  },
  {
    canonicalName: "scikit-learn",
    aliases: ["sklearn", "scikit"],
    category: "Machine Learning",
    description: "Machine learning library for Python"
  },
  {
    canonicalName: "TensorFlow",
    aliases: ["tf", "TensorFlow 2", "TensorFlow 1"],
    category: "Machine Learning",
    description: "Open-source machine learning framework"
  },
  {
    canonicalName: "PyTorch",
    aliases: ["torch", "PyTorch 1", "PyTorch 2"],
    category: "Machine Learning",
    description: "Machine learning framework for Python"
  },
  {
    canonicalName: "matplotlib",
    aliases: ["Matplotlib", "plt", "mpl"],
    category: "Data Visualization",
    description: "Plotting library for Python"
  },
  {
    canonicalName: "seaborn",
    aliases: ["Seaborn", "sns"],
    category: "Data Visualization",
    description: "Statistical data visualization library"
  },

  // Machine Learning & AI
  {
    canonicalName: "Machine Learning",
    aliases: ["ML", "Machine Learning", "ML/AI"],
    category: "AI/ML",
    description: "Machine learning algorithms and techniques"
  },
  {
    canonicalName: "AI",
    aliases: ["Artificial Intelligence", "AI/ML"],
    category: "AI/ML",
    description: "Artificial intelligence technologies"
  },
  {
    canonicalName: "NLP",
    aliases: ["Natural Language Processing", "Text Processing"],
    category: "AI/ML",
    description: "Natural language processing techniques"
  },

  // Database Technologies
  {
    canonicalName: "PostgreSQL",
    aliases: ["Postgres", "PostgreSQL 13", "PostgreSQL 14"],
    category: "Database",
    description: "Advanced open-source relational database"
  },
  {
    canonicalName: "MongoDB",
    aliases: ["Mongo", "MongoDB 4", "MongoDB 5"],
    category: "Database",
    description: "Document-oriented NoSQL database"
  },
  {
    canonicalName: "MySQL",
    aliases: ["MySQL 8", "MySQL 5"],
    category: "Database",
    description: "Open-source relational database"
  },
  {
    canonicalName: "SQLite",
    aliases: ["SQLite3"],
    category: "Database",
    description: "Lightweight, serverless database"
  },
  {
    canonicalName: "Redis",
    aliases: ["Redis Cache", "Redis 6", "Redis 7"],
    category: "Cache/Database",
    description: "In-memory data structure store"
  },

  // Cloud & Infrastructure
  {
    canonicalName: "Docker",
    aliases: ["Docker Desktop", "Docker Engine", "Docker Compose"],
    category: "Containerization",
    description: "Containerization platform"
  },
  {
    canonicalName: "Kubernetes",
    aliases: ["K8s", "Kubernetes 1.21", "Kubernetes 1.22"],
    category: "Container Orchestration",
    description: "Container orchestration platform"
  },
  {
    canonicalName: "AWS",
    aliases: ["Amazon Web Services", "AWS S3", "AWS EC2"],
    category: "Cloud Platform",
    description: "Amazon Web Services cloud platform"
  },
  {
    canonicalName: "Google Cloud",
    aliases: ["GCP", "Google Cloud Platform", "Cloud Storage", "Compute Engine"],
    category: "Cloud Platform",
    description: "Google Cloud Platform services"
  },

  // Web Development
  {
    canonicalName: "Express.js",
    aliases: ["Express", "ExpressJS"],
    category: "Web Framework",
    description: "Minimal and flexible Node.js web framework"
  },
  {
    canonicalName: "Flask",
    aliases: ["Flask 2", "Flask 3"],
    category: "Web Framework",
    description: "Lightweight Python web framework"
  },
  {
    canonicalName: "JWT",
    aliases: ["JSON Web Token", "JWT Token"],
    category: "Authentication",
    description: "JSON Web Token for authentication"
  },
  {
    canonicalName: "Bootstrap",
    aliases: ["Bootstrap 4", "Bootstrap 5"],
    category: "CSS Framework",
    description: "CSS framework for responsive design"
  },

  // Data Processing
  {
    canonicalName: "Apache Airflow",
    aliases: ["Airflow", "Airflow 2.7", "Airflow 2.8"],
    category: "Data Orchestration",
    description: "Platform to programmatically author, schedule, and monitor workflows"
  },
  {
    canonicalName: "PySpark",
    aliases: ["Spark", "Apache Spark", "Spark 3.4"],
    category: "Big Data",
    description: "Unified analytics engine for large-scale data processing"
  },
  {
    canonicalName: "Big Data",
    aliases: ["Large-scale Data", "Distributed Computing"],
    category: "Data Processing",
    description: "Technologies for processing large datasets"
  }
];

// Function to get canonical name for a tech stack item
export function getCanonicalName(techName: string): string {
  const mapping = techStackMappings.find(mapping => 
    mapping.canonicalName.toLowerCase() === techName.toLowerCase() ||
    mapping.aliases.some(alias => alias.toLowerCase() === techName.toLowerCase())
  );
  return mapping ? mapping.canonicalName : techName;
}

// Function to get all related names for a tech stack item
export function getAllRelatedNames(techName: string): string[] {
  const mapping = techStackMappings.find(mapping => 
    mapping.canonicalName.toLowerCase() === techName.toLowerCase() ||
    mapping.aliases.some(alias => alias.toLowerCase() === techName.toLowerCase())
  );
  return mapping ? [mapping.canonicalName, ...mapping.aliases] : [techName];
}

// Function to check if two tech names are related
export function areTechNamesRelated(tech1: string, tech2: string): boolean {
  const related1 = getAllRelatedNames(tech1);
  const related2 = getAllRelatedNames(tech2);
  return related1.some(name1 => related2.some(name2 => name1.toLowerCase() === name2.toLowerCase()));
}

// Function to get all unique canonical tech stack names from projects
export function getCanonicalTechStack(projects: any[]): string[] {
  const allTech = projects.flatMap(project => project.techStack);
  const canonicalTech = allTech.map(tech => getCanonicalName(tech));
  return Array.from(new Set(canonicalTech)).sort();
}

// Function to get category for a tech stack item
export function getTechCategory(techName: string): string {
  const mapping = techStackMappings.find(mapping => 
    mapping.canonicalName.toLowerCase() === techName.toLowerCase() ||
    mapping.aliases.some(alias => alias.toLowerCase() === techName.toLowerCase())
  );
  return mapping ? mapping.category : "Other";
} 