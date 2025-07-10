import React from 'react';

const ResumePage = () => (
  <div className="py-8 flex flex-col items-center max-w-2xl mx-auto">
    <div className="w-full flex items-center justify-between mb-4">
      <h1 className="font-bold" style={{ fontSize: '2.6rem' }}>Resume</h1>
      <a
        href="/resume.pdf"
        download
        className="px-4 py-2 rounded-full shadow font-semibold border-2
          bg-[#2d1e13] text-white border-[#2d1e13] hover:bg-[#4b2e13] hover:border-[#4b2e13]
          dark:bg-[#f5e9da] dark:text-[#4b2e13] dark:border-[#f5e9da] dark:hover:bg-[#e2c9a0] dark:hover:border-[#e2c9a0]
          transition-colors"
      >
        Download PDF
      </a>
    </div>
    <div className="prose prose-neutral dark:prose-invert w-full">
      <hr className="my-4" />
      <h2 className="text-lg font-semibold mb-2">💼 Experience</h2>
      <div className="mb-4">
        <h3 className="font-bold">ResumeAI <span className="font-normal italic">– Software Development Engineer - Capstone</span></h3>
        <div className="text-sm mb-1">Boston, MA | August 2024 – December 2024</div>
        <ul className="list-disc ml-6">
          <li>Improved recruiter workflow speed by <b>35%</b> by building a full-stack ATS using <b>React, Fastify, PostgreSQL, and AWS SQS</b></li>
          <li>Reduced setup issues by <b>80%</b> via secure multi-role authentication with <b>Keycloak</b> and auto-provisioning</li>
          <li>Cut API latency from <b>180ms to 80ms</b> using <b>Redis caching</b>, Docker async queues</li>
          <li>Defined system architecture and roles through team-led planning and documentation</li>
        </ul>
      </div>
      <div className="mb-4">
        <h3 className="font-bold">Ernst and Young LLP <span className="font-normal italic">– Machine Learning Intern</span></h3>
        <div className="text-sm mb-1">Mumbai, India | July 2022 – September 2022</div>
        <ul className="list-disc ml-6">
          <li>Sped up model training by <b>40%</b> on large-scale financial data using <b>PySpark MLlib</b></li>
          <li>Reduced false positives by <b>25%</b> through predictive fraud detection models</li>
          <li>Enabled real-time ML inference via <b>AWS SageMaker</b> with REST API integration</li>
        </ul>
      </div>
      <div className="mb-4">
        <h3 className="font-bold">Kings Expomedia LTD <span className="font-normal italic">– Software Engineer</span></h3>
        <div className="text-sm mb-1">Mumbai, India | December 2019 – April 2021</div>
        <ul className="list-disc ml-6">
          <li>Increased session time by <b>30%</b> by building 3 production-grade websites with <b>React, Redux, WebGL</b></li>
          <li>Improved page performance by <b>40%</b> with lazy loading, asset bundling, and code splitting</li>
          <li>Cut content publishing time by <b>50%</b> via CMS automation using <b>Strapi</b></li>
          <li>Drove full SDLC from requirements to post-launch support</li>
        </ul>
      </div>
      <hr className="my-4" />
      <h2 className="text-lg font-semibold mb-2">🚀 Projects</h2>
      <div className="mb-4">
        <h3 className="font-bold">LLM Inference Optimization</h3>
        <div className="text-sm mb-1">Linux perf, PyTorch, Hugging Face, bitsandbytes, Colab, Matplotlib</div>
        <ul className="list-disc ml-6">
          <li>Reduced RAM by <b>25%</b> and increased throughput by <b>30%</b> with <b>8-bit quantization</b> and <b>KV-cache tuning</b></li>
          <li>Profiled hardware with <b>Linux perf</b> and visualized TLB/cache metrics using <b>Matplotlib</b></li>
        </ul>
      </div>
      <div className="mb-4">
        <h3 className="font-bold">Credit Risk Modeling (Lending Club Data)</h3>
        <div className="text-sm mb-1">Python, pandas, NumPy, scikit-learn, matplotlib</div>
        <ul className="list-disc ml-6">
          <li>Trained a <b>Probability of Default (PD)</b> model (ROC AUC: <b>0.702</b>)</li>
          <li>Built <b>CECL-aligned scorecard</b> to map credit risk across scores 300–850</li>
          <li>ETL’d and preprocessed <b>900k rows / 75 columns</b> spanning 2007–2015</li>
        </ul>
      </div>
      <div className="mb-4">
        <h3 className="font-bold">Flight Delay Prediction</h3>
        <div className="text-sm mb-1">PySpark, MLlib, Pandas, NumPy, Google Cloud</div>
        <ul className="list-disc ml-6">
          <li>Achieved RMSE <b>36.11</b> on 65M+ records via <b>Random Forest</b> with <b>PySpark MLlib</b></li>
          <li>Engineered 20+ temporal and categorical features</li>
          <li>Reduced preprocessing time by <b>50%</b> using optimized Spark pipelines</li>
        </ul>
      </div>
      <hr className="my-4" />
      <h2 className="text-lg font-semibold mb-2">🛠 Skills</h2>
      <ul className="list-disc ml-6">
        <li><b>Languages:</b> Python, Java, Rust, C, C++, C#, Go, JavaScript/TypeScript</li>
        <li><b>ML & Databases:</b> PyTorch, TensorFlow, RAGs, LLMs, MLOps, GANs, VAEs, MySQL, PostgreSQL</li>
        <li><b>Frameworks & Deployment:</b> React, Flask, Django, HTML/CSS, gRPC, Microservices, GraphQL</li>
        <li><b>Cloud & Infra:</b> AWS, GCP, Docker, Apache Spark, Airflow, Kafka</li>
        <li><b>Dev Tools:</b> Linux, Windows, REST APIs, Git, Agile, Scrum</li>
      </ul>
      <hr className="my-4" />
      <h2 className="text-lg font-semibold mb-2">📜 Certifications & Publications</h2>
      <ul className="list-disc ml-6">
        <li><b>Certifications:</b> Azure AI Engineer Associate</li>
        <li><b>Publications:</b> <a href="https://scholar.google.com/citations?user=gh_thNwAAAAJ" target="_blank" rel="noopener noreferrer">Google Scholar</a></li>
      </ul>
      <hr className="my-4" />
      <h2 className="text-lg font-semibold mb-2">🎓 Education</h2>
      <div className="mb-2">
        <b>Boston University</b> – <span className="italic">MS in Computer Science</span><br />
        Boston, MA | August 2023 – January 2025<br />
        <span className="text-sm"><b>Specialization:</b> AI & Big Data</span><br />
        <span className="text-sm"><b>Teaching Assistant:</b> Mentored 300+ students in Python, DSA, and ML fundamentals</span>
      </div>
      <div>
        <b>University of Mumbai</b> – <span className="italic">BE in Information Technology</span><br />
        Mumbai, India | August 2019 – July 2023<br />
        <span className="text-sm"><b>Coursework:</b> Data Mining, Business Intelligence, Image Processing, OOP, DBMS</span>
      </div>
    </div>
  </div>
);

export default ResumePage;
