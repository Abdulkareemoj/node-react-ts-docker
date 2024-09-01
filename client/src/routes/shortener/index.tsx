import { createFileRoute, Link } from "@tanstack/react-router";

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

  const handleReset = () => {};

  return (
    <main>
      <div className="flex flex-col items-center justify-center pt-20 bg-slate-100 ">
        <div>
          <div className="text-slate-900 text-4xl font-bold p-4">
            Try our Link Shortener
          </div>
        </div>
        <div>
          <div className="flex flex-col w-fit items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <label
                className="text-slate-800 text-2xl flex justify-center font-semibold"
                htmlFor="long-url"
              >
                Enter URL
              </label>
              <div className="flex items-center space-x-2">
                <input
                  className="border p-2 rounded"
                  type="text"
                  id="long-url"
                  placeholder="https://example.com/very/long/url"
                />
                <button className="bg-blue-500 text-white p-2 rounded">
                  Generate
                </button>
              </div>
            </div>
            <div className="container mx-auto">
              <div className="flex flex-col space-y-4">
                <div className="flex flex-col space-y-1.5">
                  <div className="text-slate-900 text-xl font-bold">
                    Shortened URL
                  </div>
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
                <div>
                  <button onClick={handleReset}>Reset</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-5">
          <Link
            className="text-slate-800 hover:underline"
            to="/shortener/SignIn"
          >
            Sign in
          </Link>{" "}
          to Manage Shortened Links
        </div>
      </div>
    </main>
  );
}
