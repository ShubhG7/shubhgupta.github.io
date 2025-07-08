import { Suspense } from "react";

export default function ResumePage() {
  return (
    <section className="max-w-3xl mx-auto flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">Résumé</h1>
      <div className="w-full h-[80vh] border rounded-lg overflow-hidden mb-4 bg-white dark:bg-gray-900 flex items-center justify-center">
        <Suspense fallback={<div>Loading PDF…</div>}>
          <object
            data="/resume.pdf"
            type="application/pdf"
            width="100%"
            height="100%"
            aria-label="Shubh Gupta Resume PDF"
          >
            <p className="p-8 text-center">PDF not found. <a href="/resume.pdf" className="underline">Download here</a>.</p>
          </object>
        </Suspense>
      </div>
      <a
        href="/resume.pdf"
        download
        className="px-6 py-2 rounded-full bg-black text-white dark:bg-white dark:text-black font-semibold shadow hover:scale-105 transition-transform"
      >
        Download PDF
      </a>
    </section>
  );
} 