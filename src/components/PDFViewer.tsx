import React from "react";

const PDFViewer: React.FC = () => {
  return (
    <div className="mt-8 w-full h-screen max-h-[800px]">
      <embed
        src="/resume.pdf"
        type="application/pdf"
        width="100%"
        height="100%"
        className="border rounded-lg shadow-lg"
      />
    </div>
  );
};

export default PDFViewer;
