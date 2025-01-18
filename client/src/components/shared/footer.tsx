export default function Footer() {
  const footerNavs = [
    {
      href: "#",
      name: "Terms",
    },
    {
      href: "#",
      name: "License",
    },
    {
      href: "#",
      name: "Privacy",
    },
    {
      href: "#",
      name: "About us",
    },
  ];
  return (
    <footer className="">
      <div className="max-w-screen-xl mx-auto px-4 text-slate-600 md:px-8">
        {/* <div className="space-y-6 sm:max-w-md sm:mx-auto sm:text-center">
          <img
            src="https://www.floatui.com/logo.svg"
            className="w-32 sm:mx-auto"
          />
          <p>
            Nulla auctor metus vitae lectus iaculis, vel euismod massa
            efficitur.
          </p>
          <div className="items-center gap-x-3 space-y-3 sm:flex sm:justify-center sm:space-y-0">
            <a
              href="#"
              className="block py-2 px-4 text-center text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none"
            >
              Let's get started
            </a>
            <a
              href="#"
              className="flex items-center justify-center gap-x-2 py-2 px-4 text-slate-700 hover:text-slate-500 font-medium duration-150 active:bg-slate-100 border rounded-lg md:inline-flex"
            >
              Get access
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div> */}
        <div className=" py-10  items-center justify-between sm:flex">
          <p>© 2022 Float UI Inc. All rights reserved.</p>
          <ul className="flex flex-wrap items-center gap-4 mt-6 sm:text-sm sm:mt-0">
            {footerNavs.map((item, idx) => (
              <li className="text-slate-800 hover:text-slate-500 duration-150">
                <a key={idx} href={item.href}>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
