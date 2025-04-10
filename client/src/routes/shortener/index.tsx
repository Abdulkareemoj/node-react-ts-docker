import UrlShortener from "@/components/shared/url-shortener";
import RootLayout from "@/layouts/RootLayout";
import { createFileRoute, Link } from "@tanstack/react-router";

// import { useCopyToClipboard } from "usehooks-ts";

// import { CopyIcon } from "@/components/icons"

export const Route = createFileRoute("/shortener/")({
  component: ShortenerPage,
});
function ShortenerPage() {
  // const [copiedText, copy] = useCopyToClipboard();

  // const handleCopy = (text: string) => () => {
  //   copy(text)
  //     .then(() => {
  //       console.log("Copied!", { text });
  //     })
  //     .catch((error) => {
  //       console.error("Failed to copy!", error);
  //     });
  // };

  // const handleReset = () => {};

  return (
    <RootLayout>
      {/* <main className="p-10">
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
                    className="border p-2 rounded-sm"
                    type="text"
                    id="long-url"
                    placeholder="https://example.com/very/long/url"
                  />
                  <button className="bg-blue-500 text-white p-2 rounded-sm">
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
                        className="border p-2 rounded-sm"
                      />
                      <button
                        onClick={handleCopy(
                          copiedText ?? "https://short.ly/abc123"
                        )}
                        className="bg-blue-500 text-white p-2 rounded-sm"
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
            <Link className="text-slate-800 hover:underline" to="/auth/signin">
              Sign in
            </Link>{" "}
            to Manage Shortened Links
          </div>
        </div>
      </main>
       */}
      <main className="min-h-screen font-sans">
        {/* Hero Section */}
        <section className="bg-blue-50 py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <p className="text-red-500 text-sm font-medium mb-3">
                  Short link marketing
                </p>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                  RX short URL & QR code generator
                </h1>
                <p className="text-gray-600 mb-8 md:max-w-md">
                  A smart link service easy to track and reach more about your
                  customers & their behaviors.
                </p>
                <div className="flex flex-col space-y-4 max-w-lg">
                  <UrlShortener />

                  <div id="result-container" className="hidden">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <p className="text-sm text-gray-700 mb-2">
                        Your shortened URL:
                      </p>
                      <div className="flex items-center">
                        <input
                          type="text"
                          readOnly
                          id="shortened-url"
                          className="flex-grow bg-white border rounded-l-md py-2 px-3 text-sm focus:outline-none"
                        />
                        <button
                          id="copy-button"
                          className="bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-r-md border-y border-r py-2 px-4 text-sm font-medium transition-colors"
                        >
                          Copy
                        </button>
                      </div>
                    </div>
                  </div>

                  <div id="error-container" className="hidden">
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <p
                        className="text-sm text-red-600"
                        id="error-message"
                      ></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">
                <img
                  src="/placeholder.svg?height=400&width=500"
                  alt="URL Shortener illustration"
                  width={500}
                  height={400}
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-white py-8 border-b">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-6">
              <p className="text-gray-700 font-medium">
                We have great achievement to share
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-6 md:gap-12">
              <div className="flex items-center gap-2">
                <div className="bg-purple-100 p-2 rounded-md">
                  <span className="text-purple-700 font-semibold">87M+</span>
                </div>
                <div className="text-xs text-gray-500">Links</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-green-100 p-2 rounded-md">
                  <span className="text-green-700 font-semibold">277M+</span>
                </div>
                <div className="text-xs text-gray-500">Clicks</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-yellow-100 p-2 rounded-md">
                  <span className="text-yellow-700 font-semibold">520+</span>
                </div>
                <div className="text-xs text-gray-500">Clients</div>
              </div>
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                One short link, infinite possibilities
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                A short link is a powerful marketing tool when you use it
                smartly. It's not just a link but a solution between your
                customer and their destination.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Smart Targeting */}
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-6 h-6 bg-blue-600 rounded-full"></div>
                </div>
                <h3 className="text-xl font-semibold mb-3">Smart Targeting</h3>
                <p className="text-gray-600 text-sm">
                  Target your customers in the most effective way. Create custom
                  targeting rules based on location, device, time to make your
                  social media campaign in specific ways.
                </p>
              </div>

              {/* In-Depth Analytics */}
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <div className="w-4 h-6 bg-purple-600 rounded-sm"></div>
                    <div className="w-4 h-4 bg-purple-600 rounded-sm ml-1"></div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  In-Depth Analytics
                </h3>
                <p className="text-gray-600 text-sm">
                  Track the links in real-time and get valuable insights about
                  your traffic sources, visitor behaviors, geographic locations
                  and more. Never be confused that the users match.
                </p>
              </div>

              {/* Digital Experience */}
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <div className="w-6 h-4 bg-red-600 rounded-sm"></div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Digital Experience
                </h3>
                <p className="text-gray-600 text-sm">
                  Use various shortcuts you're familiar with. Provide advanced
                  digital experiences to customers, enhancing their interacting
                  with your brand.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sales & Marketing Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <img
                  src="/placeholder.svg?height=400&width=400"
                  alt="Sales dashboard"
                  width={400}
                  height={400}
                  className="w-full"
                />
              </div>
              <div className="md:w-1/2">
                <p className="text-red-500 text-sm font-medium mb-3">
                  Sales & marketing
                </p>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Perfect for sales & marketing
                </h2>
                <p className="text-gray-600 mb-6">
                  Optimize letting your team stay connected and track your
                  sales. Benefit from link management tools that simplify your
                  workflow, from the creation to results, this industry first
                  choice. Get more from your links & control it.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Retargeting Tools</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Powerful Statistics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Shortened Profiles</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Powerful Tools Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row-reverse items-center gap-12">
              <div className="md:w-1/2">
                <img
                  src="/placeholder.svg?height=400&width=400"
                  alt="Tools dashboard"
                  width={400}
                  height={400}
                  className="w-full"
                />
              </div>
              <div className="md:w-1/2">
                <p className="text-red-500 text-sm font-medium mb-3">
                  Sales & marketing
                </p>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Powerful tools that work
                </h2>
                <p className="text-gray-600 mb-6">
                  Our platform lets you bridge your teams to create, understand
                  your audiences and optimize campaigns of all sizes. We provide
                  you many powerful tools to tackle them better.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Link Distribution</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Privacy Control</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Powerful Dashboard</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* QR Code Section */}
        <section className="py-16 bg-pink-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <img
                  src="/placeholder.svg?height=400&width=400"
                  alt="QR Code example"
                  width={400}
                  height={400}
                  className="w-full"
                />
              </div>
              <div className="md:w-1/2">
                <p className="text-red-500 text-sm font-medium mb-3">
                  QR Codes
                </p>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  QR Codes
                </h2>
                <p className="text-gray-600 mb-6">
                  Easy to use, dynamic and customizable QR codes for your
                  marketing campaigns. Analyze statistics and optimize your
                  marketing strategy for better engagement.
                </p>
                <Link
                  to="#"
                  className="inline-flex items-center justify-center border border-gray-300 rounded-md py-2 px-4 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  See Features
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Marketing Strategy Section */}
        <section className="py-16 md:py-24 bg-blue-600 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-10">
              <p className="text-blue-200 text-sm font-medium mb-3">
                Optimize yourself
              </p>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Optimize your marketing strategy
              </h2>
              <p className="max-w-2xl mx-auto mb-10">
                Understanding customers, their interactions, and their needs is
                key to marketing success. This is why our platform allows you to
                optimize your marketing strategy based on real user data. Try it
                for free, it's time for you to analyze it.
              </p>
              <Link
                to="#"
                className="inline-flex items-center justify-center bg-white text-blue-600 rounded-md py-2 px-4 text-sm font-medium hover:bg-blue-50"
              >
                Get Started
              </Link>
            </div>

            <div className="max-w-2xl mx-auto space-y-6">
              {/* Testimonial Items */}
              <div className="bg-blue-700 rounded-lg p-5 flex items-start gap-4">
                <div className="w-8 h-8 bg-yellow-400 rounded-full flex-shrink-0 flex items-center justify-center">
                  <span className="text-lg font-bold">?</span>
                </div>
                <div>
                  <p className="font-medium mb-1">
                    Customer needed great links
                  </p>
                  <p className="text-sm text-blue-200">
                    Solution: Custom tracking & analytics
                  </p>
                </div>
              </div>
              <div className="bg-blue-700 rounded-lg p-5 flex items-start gap-4">
                <div className="w-8 h-8 bg-yellow-400 rounded-full flex-shrink-0 flex items-center justify-center">
                  <span className="text-lg font-bold">?</span>
                </div>
                <div>
                  <p className="font-medium mb-1">
                    Customer needed great QR codes
                  </p>
                  <p className="text-sm text-blue-200">
                    Solution: Dynamic QR + Analytics
                  </p>
                </div>
              </div>
              <div className="bg-blue-700 rounded-lg p-5 flex items-start gap-4">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex-shrink-0 flex items-center justify-center">
                  <span className="text-lg font-bold">!</span>
                </div>
                <div>
                  <p className="font-medium mb-1">Customer needed great API</p>
                  <p className="text-sm text-blue-200">
                    Solution: REST API + Webhooks
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* More Features Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                More features than asked for:
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {/* Feature 1 */}
              <div className="border rounded-lg p-6">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-5 h-5 bg-gray-600"></div>
                </div>
                <h3 className="text-lg font-semibold mb-2">Custom Link Info</h3>
                <p className="text-gray-600 text-sm">
                  Create a custom landing page or preview for your links so your
                  audience can trust going to your company.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="border rounded-lg p-6">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-5 h-5 bg-gray-600"></div>
                </div>
                <h3 className="text-lg font-semibold mb-2">UTM Builder</h3>
                <p className="text-gray-600 text-sm">
                  Powerful tool to track performance data of your marketing
                  campaigns with Google Analytics. Quick and easy to use.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="border rounded-lg p-6">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-5 h-5 bg-gray-600"></div>
                </div>
                <h3 className="text-lg font-semibold mb-2">Email Tracker</h3>
                <p className="text-gray-600 text-sm">
                  Track when your emails are opened and links are clicked with
                  our powerful email tracking tool which supports all major
                  email clients.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="border rounded-lg p-6">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-5 h-5 bg-gray-600"></div>
                </div>
                <h3 className="text-lg font-semibold mb-2">Team Management</h3>
                <p className="text-gray-600 text-sm">
                  Add and invite your team members and assign them specific
                  roles with permissions and track everything in real time.
                </p>
              </div>

              {/* Feature 5 */}
              <div className="border rounded-lg p-6">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-5 h-5 bg-gray-600"></div>
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Branded Domain Names
                </h3>
                <p className="text-gray-600 text-sm">
                  Make life easy with short domains that are connected to your
                  business. Use your own domains with our service.
                </p>
              </div>

              {/* Feature 6 */}
              <div className="border rounded-lg p-6">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-5 h-5 bg-gray-600"></div>
                </div>
                <h3 className="text-lg font-semibold mb-2">Robust API</h3>
                <p className="text-gray-600 text-sm">
                  Advanced API and developer tools for your business needs.
                  Connect with existing apps and process via robust API
                  endpoints.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Integrations Section */}
        {/* <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Integrations
              </h2>
              <p className="text-gray-600">
                Connect popular apps and boost your productivity
              </p>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 mb-12">
              {Array.from({ length: 18 }).map((_, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center"
                >
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-2">
                    <div className="w-6 h-6 bg-gray-400 rounded-sm"></div>
                  </div>
                  <span className="text-xs text-gray-600">
                    Integration {index + 1}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* Call to Action Section */}
        <section className="py-16 md:py-20 bg-blue-50">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Marketing with confidence.
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Start your marketing campaign now and reach your customers
              efficiently.
            </p>
            <Link
              to="#"
              className="inline-flex items-center justify-center bg-blue-600 text-white rounded-md py-2 px-6 text-sm font-medium hover:bg-blue-700"
            >
              Get Started
            </Link>
          </div>
        </section>
      </main>
    </RootLayout>
  );
}
