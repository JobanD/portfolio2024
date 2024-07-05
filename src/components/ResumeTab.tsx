"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";

const PDFViewer = dynamic(() => import("./PDFViewer"), {
  loading: () => <p>Loading PDF viewer...</p>,
  ssr: false, // This ensures the component only renders client-side
});

export default function ResumeTab() {
  const [showPDF, setShowPDF] = useState(false);

  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-4xl px-4">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <p className="mt-4">
            Innovative Full Stack Engineer with over 3 years of experience in
            developing scalable web applications and reusable UX components.
            Proficient in TypeScript/JavaScript, HTML, CSS, React, Node.js, and
            modern web technologies. Skilled in designing and implementing
            customer-facing features and enhancing user experience. Committed to
            operational excellence and continuous learning.
          </p>
        </div>
        <div className="mt-4 text-center space-y-4">
          <a
            href="/resume.pdf"
            download
            className="inline-block px-6 py-2 text-white bg-blue-600 rounded-full hover:bg-blue-700"
          >
            Download Resume
          </a>
          <button
            onClick={() => setShowPDF(!showPDF)}
            className="inline-block px-6 py-2 text-white bg-green-600 rounded-full hover:bg-green-700 ml-4"
          >
            {showPDF ? "Hide Resume" : "View Resume"}
          </button>
        </div>
        {showPDF && <PDFViewer />}
      </div>
    </div>
  );
}
