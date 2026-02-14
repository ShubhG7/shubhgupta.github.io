import React from 'react';

const ResumePage = () => (
  <div className="py-8 flex flex-col items-center max-w-2xl mx-auto">
    <div className="w-full flex items-center justify-between mb-4">
      <h1 className="font-bold" style={{ fontSize: '2.6rem' }}>Resume</h1>
      <a
        href="/api/resume"
        download="Shubh_Gupta_Resume.pdf"
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
        <div className="text-sm mb-1">Remote, USA | Jun 2024 – Present</div>
        <ul className="list-disc ml-6">
          <li>Engineered a <b>Kafka + Spring Boot</b> monitoring pipeline to flag unusual payments, taking detection from minutes to seconds, boosting speed by <b>40%</b>, and lowering false positives</li>
          <li>Developed event-driven settlement and reconciliation services (<b>Spring Boot, JPA/Hibernate</b>), exposing secure APIs through <b>AWS API Gateway</b> and <b>WAF</b> for high-reliability transaction flows</li>
          <li>Implemented <b>GPT-4 workflows</b> with <b>LangChain</b> and <b>Pinecone</b> to summarize emails, chats, and documents for compliance, saving hours per week and improving audit readiness by <b>50%</b></li>
          <li>Deployed services on <b>AWS EKS/Fargate</b> with <b>Docker</b> and <b>Helm</b>; added <b>CloudWatch</b>, <b>X-Ray</b>, and <b>SNS</b> alerts to shorten detection time and reduce on-call overhead</li>
        </ul>
      </div>
      <div className="mb-4">
        <h3 className="font-bold">Ernst & Young LLP <span className="font-normal italic">– Software Engineer</span></h3>
        <div className="text-sm mb-1">Mumbai, India | Jul 2021 – Jul 2023</div>
        <ul className="list-disc ml-6">
          <li>Streamlined fraud pipelines to reduce training time by <b>40%</b> and lower false positives by <b>25%</b>, speeding reviews</li>
          <li>Lowered cloud spend by <b>20%</b> with tagging, auto-shutdown, and cleanup automation, removing idle resources</li>
          <li>Automated ML deployments on <b>AWS EC2</b> with scripted rollouts, reducing release time and lowering launch by <b>30%</b></li>
          <li>Established <b>Splunk</b> dashboards and alerts to surface failures earlier, improving detection by <b>35%</b> and speeding triage</li>
        </ul>
      </div>
      <div className="mb-4">
        <h3 className="font-bold">Kings Expomedia Ltd. <span className="font-normal italic">– Software Engineer</span></h3>
        <div className="text-sm mb-1">Mumbai, India | Dec 2019 – Apr 2021</div>
        <ul className="list-disc ml-6">
          <li>Re-platformed the flagship site from <b>PHP</b> to <b>Next.js</b> with a mobile-first redesign, increasing session time by <b>30%</b></li>
          <li>Optimized <b>Core Web Vitals</b> (<b>LCP/FID</b>) by <b>40%</b> using lazy loading, bundling, and route-based code splitting</li>
          <li>Integrated <b>Strapi CMS</b> with automated publishing, reducing turnaround by <b>50%</b> and saving hours of manual edits</li>
          <li>Led releases end-to-end from design to deployment, increasing delivery speed and reducing rework for stakeholders</li>
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
