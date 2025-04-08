import axios from "axios";
import { useEffect, useState } from "react";
import Preview from "./Preview";


const MarkDownInput = () => {
  const [markDownText, setMarkDownText] = useState("");
  const [htmlPreview, setHtmlPreview] = useState("");

  const fetchHtml = async () => {
    try {
      const html = await axios.post(
        "http://localhost:5000/markdown",
        markDownText,
        {
          headers: {
            "Content-Type": "text/plain"
          }
        }
      );
      setHtmlPreview(html?.data);
    } catch (error) {
      console.error("Failed to fetch HTML preview", error);
    }
  };

  useEffect(() => {
    fetchHtml();
  }, [markDownText]);

  return (
    <div className="flex min-h-screen ">
      {/* Left: Markdown Input */}
      <div className="w-1/2 p-4 bg-gray-100">
        <h2 className="text-xl font-semibold mb-2">Markdown Input</h2>
        <textarea
          onChange={(e) => setMarkDownText(e.target.value)}
          value={markDownText}
          className="min-w-full h-[90vh] p-4 text-black border border-gray-300 rounded resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Write your markdown here..."
        ></textarea>
      </div>

      {/* Right: Preview */}
      <div className="w-1/2 p-4  overflow-y-auto">
        <h2 className="text-xl font-semibold mb-2">Preview</h2>
        <Preview html={htmlPreview} />
      </div>
    </div>
  );
};

export default MarkDownInput;
