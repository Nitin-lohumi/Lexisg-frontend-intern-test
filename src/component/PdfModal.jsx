import React, { useEffect, useRef } from "react";

export default function PdfModal({ onClose, link, paraText }) {
  const paraRef = useRef();
  useEffect(() => {
    paraRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  }, []);

  return (
    <div className="fixed inset-0 bg-gray-500  bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-gray-50 shadow-gray-900 rounded-2xl w-[90%] max-w-2xl h-[80%] shadow-xl p-6 overflow-y-auto relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700"
        >
          Close
        </button>

        <h2 className="text-lg font-semibold mb-4">Simulated PDF</h2>

        <div className="space-y-4 text-gray-800 leading-relaxed">
          <p>Para 1: This is the introduction to the judgment...</p>
          <p>Para 2: This paragraph discusses earlier rulings...</p>
          <p>Para 3: Details of the motor accident case...</p>
          <p>Para 4: Statements from both parties were considered...</p>
          <p>Para 5: Income and employment status of the deceased...</p>
          <p>Para 6: Application of Section 166 of the MV Act was examined...</p>

          <p
            ref={paraRef}
            className="bg-yellow-400 p-3 rounded shadow border-l-4 border-yellow-900"
          >
            <strong>Para 7:</strong> {paraText}
          </p>

          <p>Para 8: The tribunal awarded a certain amount as compensation...</p>

          <p className="text-sm text-gray-500 mt-6">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-500"
            >
              View full PDF
            </a> 
          </p>
        </div>
      </div>
    </div>
  );
}
