import React from "react";

export default function ResumeTab() {
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
        <div className="mt-4 text-center">
          <a
            href="/resume.pdf"
            download
            className="inline-block px-6 py-2 text-white bg-blue-600 rounded-full hover:bg-blue-700"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}
