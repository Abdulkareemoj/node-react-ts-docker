import { createFileRoute } from "@tanstack/react-router";

import { useCopyToClipboard } from "usehooks-ts";

// import { CopyIcon } from "@/components/icons"

export const Route = createFileRoute("/shortener/")({
  component: ShortenerPage,
});
function ShortenerPage() {
  const [copiedText, copy] = useCopyToClipboard();

  const handleCopy = (text: string) => () => {
    copy(text)
      .then(() => {
        console.log("Copied!", { text });
      })
      .catch((error) => {
        console.error("Failed to copy!", error);
      });
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-[400px]">
        <div>
          <div>Link Shortener</div>
        </div>
        <div>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <label htmlFor="long-url">Enter Long URL</label>
              <div className="flex items-center space-x-2">
                <textarea
                  id="long-url"
                  placeholder="https://example.com/very/long/url"
                />
                <button>Generate</button>
              </div>
            </div>
            <div className="container mx-auto">
              <div className="flex flex-col space-y-4">
                <div className="flex flex-col space-y-1.5">
                  <div>Shortened URL</div>
                  <div className="flex items-center space-x-2">
                    <input
                      readOnly
                      value={copiedText ?? "https://short.ly/abc123"}
                      className="border p-2 rounded"
                    />
                    <button
                      onClick={handleCopy(
                        copiedText ?? "https://short.ly/abc123"
                      )}
                      className="bg-blue-500 text-white p-2 rounded"
                    >
                      Copy
                    </button>
                  </div>
                </div>
                <div className="flex justify-end"></div>
                <p>Copied value: {copiedText ?? "Nothing is copied yet!"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <button>Reset</button>
      </div>
    </main>
  );
}
