import { axiosClient } from "@/utils/endpoints";
import type React from "react";

import { useState } from "react";

export default function UrlShortener() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!url) {
      setError("Please enter a URL");
      return;
    }

    // Basic URL validation
    try {
      new URL(url);
    } catch (err) {
      setError("Please enter a valid URL including http:// or https://");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await axiosClient.post("/api/url", {
        // method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ destination: url }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to create short URL");
      }

      // Construct the full short URL
      const baseUrl = window.location.origin;
      setShortUrl(`${baseUrl}/${data.shortId}`);
      setUrl("");
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unknown error occurred"
      );
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shortUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      setError("Failed to copy to clipboard");
    }
  };

  return (
    <div className="flex flex-col space-y-4 max-w-lg">
      <form
        onSubmit={handleSubmit}
        className="flex items-center bg-white rounded-full p-2 pl-4 shadow-md"
      >
        <div className="flex-grow">
          <input
            type="text"
            placeholder="Paste a link to shorten it"
            className="w-full focus:outline-none text-sm"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            disabled={isLoading}
          />
        </div>
        <button
          type="submit"
          className={`${
            isLoading
              ? "bg-blue-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          } text-white rounded-full py-2 px-6 text-sm font-medium transition-colors`}
          disabled={isLoading}
        >
          {isLoading ? "Shortening..." : "Shorten"}
        </button>
      </form>

      {shortUrl && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <p className="text-sm text-gray-700 mb-2">Your shortened URL:</p>
          <div className="flex items-center">
            <input
              type="text"
              readOnly
              value={shortUrl}
              className="flex-grow bg-white border rounded-l-md py-2 px-3 text-sm focus:outline-none"
            />
            <button
              onClick={copyToClipboard}
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-r-md border-y border-r py-2 px-4 text-sm font-medium transition-colors"
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>
      )}

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-sm text-red-600">{error}</p>
        </div>
      )}
    </div>
  );
}
