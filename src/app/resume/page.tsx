import React from 'react';

const ResumePage = () => (
  <div className="py-8 flex flex-col items-center">
    <h1 className="text-3xl font-bold mb-6">Resume</h1>
    <a href="/resume.pdf" download className="mb-4 px-4 py-2 bg-blue-600 text-white rounded">Download PDF</a>
    <iframe src="/resume.pdf" className="w-full h-[80vh] border rounded" title="Resume PDF" />
  </div>
);

export default ResumePage;
