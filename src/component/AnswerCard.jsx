import React, { useState } from "react";
import PdfModal from "./PdfModal";

export default function AnswerCard({ response }) {
  const [open, setOpen] = useState(false);
  const { answer, citations } = response;

  const handleOpenPDF = () => setOpen(true);
  const handleClosePDF = () => setOpen(false);

  return (
    <div className="bg-gray-300 shadow-md shadow-green-300 rounded-lg  p-4">
      <h2 className="font-semibold mb-2 text-gray-800">Lexi Legal Assistant :</h2>
      <p className="mb-4 text-gray-700">{answer}</p>

      <div className="border-t pt-2 text-sm text-blue-600">
        <strong>Citation:</strong>{" "}
        <button
          onClick={handleOpenPDF}
          className="underline hover:text-blue-800 cursor-pointer"
        >
          {citations[0].text}
        </button>
      </div>

      {open && (
        <PdfModal
          link={citations[0].link}
          paraText={citations[0].text}
          onClose={handleClosePDF}
        />
      )}
    </div>
  );
}
