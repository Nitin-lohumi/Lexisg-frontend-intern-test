import React, { useState } from "react";
import QueryInput from "./component/QueryForm";
import AnswerCard from "./component/AnswerCard";

export default function App() {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const allowedQuery =
    "In a motor accident claim where the deceased was self-employed and aged 54–55 years at the time of death, is the claimant entitled to an addition towards future prospects in computing compensation under Section 166 of the Motor Vehicles Act, 1988? If so, how much?";
  const handleQuerySubmit = (query) => {
    setError("");
    setResponse(null);

    const normalizedQuery = query.toLowerCase();

    const isValid =
      normalizedQuery.includes("motor accident") &&
      normalizedQuery.includes("self-employed") &&
      normalizedQuery.includes("54") &&
      normalizedQuery.includes("section 166") &&
      normalizedQuery.includes("motor vehicles act");

    if (isValid) {
      setLoading(true);
      setTimeout(() => {
        const simulatedResponse = {
          answer:
            "Yes, under Section 166 of the Motor Vehicles Act, 1988, the claimants are entitled to an addition for future prospects even when the deceased was self-employed and aged 54–55 years at the time of the accident. In Dani Devi v. Pritam Singh, the Court held that 10% of the deceased’s annual income should be added as future prospects.",
          citations: [
            {
              text: "as the age of the deceased at the time of accident was held to be about 54–55 years by the learned Tribunal, being self-employed, as such, 10% of annual income should have been awarded on account of future prospects. (Para 7 of the document)",
              source: "Dani_Devi_v_Pritam_Singh.pdf",
              link: "https://lexisingapore-my.sharepoint.com/:b:/g/personal/harshit_lexi_sg/EdOegeiR_gdBvQxdyW4xE6oBCDgj5E4Bo5wjvhPHpqgIuQ?e=TEu4vz",
            },
          ],
        };
        setResponse(simulatedResponse);
        setLoading(false);
      }, 1500);
    } else {
      setError(
        `This demo only supports a specific legal query about a motor accident case under Section 166 of the Motor Vehicles Act .use this - (${(
          <i>
            In a motor accident claim where the deceased was self-employed and
            aged 54–55 years at the time of death, is the claimant entitled to
            an addition towards future prospects in computing compensation under
            Section 166 of the Motor Vehicles Act, 1988? If so, how much?.
          </i>
        )})`
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-400 p-6 pt-12 md:pt-3 ">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">
          Lexi Legal Assistant !
        </h1>
        <QueryInput onSubmit={handleQuerySubmit} loading={loading} />
        {error && (
          <div className="bg-red-100 shadow-sm shadow-red-500 text-red-700 p-3 mb-4 rounded-md">
            {error}
          </div>
        )}

        {response && <AnswerCard response={response} />}
      </div>
    </div>
  );
}
