import React from 'react';

const ResumePage = () => (
  <div className="py-8 flex flex-col items-center max-w-2xl mx-auto">
    <div className="w-full flex items-center justify-between mb-4">
      <h1 className="font-bold" style={{ fontSize: '2.6rem' }}>Resume</h1>
      <a
        href="/resume.pdf"
        download="Shubh_Gupta_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
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
        <h3 className="font-bold">BNY Mellon <span className="font-normal italic">– Software Developer</span></h3>
        <div className="text-sm mb-1">Remote, USA | February 2024 – Present</div>
        <ul className="list-disc ml-6">
          <li>Building scalable backend services and platform features for financial applications serving millions of users in a heavily regulated environment</li>
          <li>Collaborating with cross-functional teams including DevOps, QA, and Product to ship production services with <b>99.9%+ uptime</b></li>
          <li>Implementing robust API designs and microservices architecture using modern technologies and best practices</li>
          <li>Contributing to compliance and security initiatives while maintaining high development velocity</li>
        </ul>
      </div>
      <div className="mb-4">
        <h3 className="font-bold">Ernst & Young LLP <span className="font-normal italic">– AI/ML & Software Engineer</span></h3>
        <div className="text-sm mb-1">Mumbai, India | July 2021 – July 2023</div>
        <ul className="list-disc ml-6">
          <li>Optimized fraud detection models using <b>PySpark MLlib</b>, improving model accuracy by <b>25%</b> and reducing false positives</li>
          <li>Automated AWS-based ML model deployments with <b>SageMaker</b>, reducing infrastructure costs by <b>40%</b> and deployment time by <b>60%</b></li>
          <li>Built end-to-end ML pipelines processing large-scale financial datasets with <b>Apache Spark</b> and <b>Apache Airflow</b></li>
          <li>Developed real-time inference APIs serving fraud detection models with sub-100ms latency using <b>Redis caching</b></li>
          <li>Collaborated with data scientists and business analysts to translate requirements into production ML systems</li>
        </ul>
      </div>
      <div className="mb-4">
        <h3 className="font-bold">Kings Expomedia Ltd <span className="font-normal italic">– Software Engineer</span></h3>
        <div className="text-sm mb-1">Mumbai, India | December 2019 – April 2021</div>
        <ul className="list-disc ml-6">
          <li>Led migration of flagship magazine website from legacy PHP to modern stack (<b>Next.js, Node.js, React</b>), improving page load times by <b>40%</b></li>
          <li>Built automated proofreading and fact-checking pipelines using <b>NLP libraries</b>, reducing editorial review time by <b>50%</b></li>
          <li>Implemented <b>CI/CD pipelines</b> and deployment automation, enabling rapid feature releases during high-traffic expo seasons</li>
          <li>Developed <b>WebGL-based</b> interactive content features, increasing user session time by <b>30%</b></li>
          <li>Optimized database queries and implemented caching strategies, improving overall application performance</li>
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
        Boston, MA | August 2023 – January 2025
      </div>
      <div className="mb-2">
        <b>University of Mumbai</b> – <span className="italic">BE in Information Technology</span><br />
        Mumbai, India | August 2019 – July 2023
      </div>
    </div>
  </div>
);

export default ResumePage;
