import React, { useState } from "react";

const AskQuestion = () => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [question, setQuestion] = useState("");

  const handleQuestionSubmit = async () => {
    setLoading(true);
    setResponse(null); // Clear previous response on new submission
    try {
      const res = await fetch(
        `https://bf31jhdm60.execute-api.eu-west-2.amazonaws.com/dev/ask/${encodeURIComponent(question)}?question=${encodeURIComponent(question)}`,
        {
          method: "GET",
          headers: {
            "Sec-Ch-Ua-Platform": "Windows",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
            Accept: "application/json, text/plain, */*",
            "Sec-Ch-Ua": '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
            Dnt: "1",
            "Sec-Ch-Ua-Mobile": "?0",
            Origin: "https://www.askmuslim.app",
            "Sec-Fetch-Site": "cross-site",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Dest": "empty",
            Referer: "https://www.askmuslim.app/",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8,bn;q=0.7",
            "Sec-Gpc": "1",
            Connection: "keep-alive",
          },
        }
      );

      const data = await res.json();
      const content = data?.choices?.[0]?.message?.content;

      if (content) {
        // Format Quranic references correctly: "( : 103)" -> "Surah 30:38"
        const formattedContent = content.replace(
          /\(\s*(\d+):(\d+)\s*\)/g,
          (match, surah, ayah) => `Surah ${surah}:${ayah}`
        );

        // Remove any unnecessary extra symbols or colons
        const cleanedContent = formattedContent.replace(/[:]+/g, ":").trim();

        // Split content into Arabic and English
        const arabicContent = cleanedContent.match(/[\u0600-\u06FF]+/g); // Match Arabic text
        const englishContent = cleanedContent.replace(/[\u0600-\u06FF]+/g, ""); // Remove Arabic text for English

        // Prepare formatted response for display
        setResponse({
          arabic: arabicContent ? arabicContent.join("\n") : "", // Join Arabic content with line breaks
          english: englishContent.trim() || "", // Trim English content
        });
      }
    } catch (error) {
      console.error("Error fetching question response:", error);
      setResponse("An error occurred. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="p-6 sm:p-8 md:p-10 lg:p-12 font-sans bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 rounded-3xl mx-auto shadow-lg text-white sm:max-w-full md:max-w-2xl lg:max-w-4xl mt-16 overflow-x-hidden">
      <h1 className="text-center text-3xl mb-8">Ask Your Question</h1>
      <h2 className="text-xl text-center mb-6">Get answers to your everyday questions backed by the Qu'ran</h2>

      {/* Input field for the question */}
      <input
        type="text"
        placeholder="Type here"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        className="input input-bordered input-secondary w-full mb-5 dark:bg-gray-900 dark:text-white"
      />

      {/* Submit button */}
      <button onClick={handleQuestionSubmit} className="btn btn-primary w-full mb-5 dark:btn-secondary">
        Submit Question
      </button>

      {/* Loading Animation */}
      {loading && (
        <div className="text-center">
          <span className="loading loading-infinity loading-lg"></span>
        </div>
      )}

      {/* Skeleton Loader based on response size */}
      {loading && (
        <div className="animate-pulse">
          <div className="skeleton w-full h-16 bg-gray-300 rounded-md mb-4"></div>
          <div className="skeleton w-full h-16 bg-gray-300 rounded-md mb-4"></div>
          <div className="skeleton w-full h-16 bg-gray-300 rounded-md mb-4"></div>
        </div>
      )}

      {/* Display the response content */}
      {response && (
        <div className="mt-8 p-5 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-xl shadow-md">
          <h2 className="text-2xl text-blue-500 dark:text-yellow-400 mb-5">Response:</h2>

          {/* Display Arabic content */}
          {response.arabic && <p className="text-right text-xl">{response.arabic}</p>}

          {/* Display English content */}
          {response.english && <p className="text-lg">{response.english}</p>}
        </div>
      )}
    </div>
  );
};

export default AskQuestion;
