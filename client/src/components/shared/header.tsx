import { Link } from "@tanstack/react-router";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { FaBell } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";

export default function Header() {
  return (
    <Disclosure as="nav" className="bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex">
            <div className="mr-2 -ml-2 flex items-center md:hidden">
              {/* Mobile menu button */}
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:outline-hidden focus:ring-inset">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <GiHamburgerMenu
                  aria-hidden="true"
                  className="block size-6 group-data-open:hidden"
                />
                <RxCross1
                  aria-hidden="true"
                  className="hidden size-6 group-data-open:block"
                />
              </DisclosureButton>
            </div>
            <div className="flex shrink-0 items-center">
              <Link to="/">
                <svg
                  width="67"
                  height="41"
                  viewBox="0 0 67 41"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M45.0353 4.66312C45.8331 3.77669 46.7195 3.04539 47.6281 2.46921C49.2236 1.47198 50.9079 0.940125 52.6364 0.940125V15.411C51.3732 11.0232 48.6475 7.25591 45.0353 4.66312ZM66.5533 40.9401H15.2957C6.87461 40.9401 0.0712891 34.1146 0.0712891 25.7157C0.0712891 17.6714 6.3206 11.0675 14.232 10.5135V0.940125C16.0048 0.940125 17.7555 1.44982 19.3954 2.46921C20.304 3.02323 21.1904 3.75453 21.9882 4.59663C25.2458 2.31409 29.1904 0.984446 33.4674 0.984446C33.4674 10.2254 30.1433 20.9734 19.3289 20.9955H33.3566C32.9577 19.2005 31.3178 17.8709 29.3677 17.8487H37.5228C35.5727 17.8487 33.9328 19.2005 33.5339 21.0177H46.6087C49.2236 21.0177 51.8164 21.5274 54.2541 22.5468C56.6696 23.544 58.8857 25.0288 60.725 26.8681C62.5865 28.7296 64.0491 30.9235 65.0464 33.339C66.0436 35.7324 66.5533 38.3252 66.5533 40.9401ZM22.8525 10.7795C23.1849 11.6437 24.0713 12.6188 25.3123 13.3279C26.5533 14.0371 27.8386 14.3252 28.7472 14.1922C28.4148 13.3279 27.5284 12.3529 26.2874 11.6437C25.0464 10.9346 23.761 10.6465 22.8525 10.7795ZM41.5117 13.3279C40.2707 14.0371 38.9854 14.3252 38.0768 14.1922C38.4092 13.3279 39.2957 12.3529 40.5367 11.6437C41.7777 10.9346 43.063 10.6465 43.9716 10.7795C43.6613 11.6437 42.7527 12.6188 41.5117 13.3279Z"
                    fill="#283841"
                  ></path>
                </svg>
              </Link>
            </div>

            <div className="hidden md:ml-6 md:flex md:space-x-8">
              {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
              <Link
                to="/blog"
                className="inline-flex items-center border-b-2 border-indigo-500 px-1 pt-1 text-sm font-medium text-gray-900"
              >
                Blog
              </Link>
              <Link
                to="/product"
                className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
              >
                Products
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
              >
                Contact
              </Link>
              <Link
                to="/shortener"
                className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
              >
                Shortener
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <div className="shrink-0">
              <button
                type="button"
                className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                <Link to="/auth/signin">Sign In</Link>
              </button>
            </div>
            <div className="hidden md:ml-4 md:flex md:shrink-0 md:items-center">
              {/* <button
                type="button"
                className="relative rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden"
              >
                <span className="absolute -inset-1.5" />
                <span className="sr-only">View notifications</span>
                <FaBell aria-hidden="true" className="size-6" />
              </button> */}

              {/* Profile dropdown */}
              {/* <Menu as="div" className="relative ml-3">
                <div>
                  <MenuButton className="relative flex rounded-full bg-white text-sm focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden">
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Open user menu</span>
                    <img
                      alt=""
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      className="size-8 rounded-full"
                    />
                  </MenuButton>
                </div>
                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                >
                  <MenuItem>
                    <Link
                      to="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                    >
                      Your Profile
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link
                      to="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                    >
                      Settings
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link
                      to="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                    >
                      Sign out
                    </Link>
                  </MenuItem>
                </MenuItems>
              </Menu> */}
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel className="md:hidden">
        <div className="space-y-1 pt-2 pb-3">
          {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
          <DisclosureButton
            as="a"
            className="block border-l-4 border-indigo-500 bg-indigo-50 py-2 pr-4 pl-3 text-base font-medium text-indigo-700 sm:pr-6 sm:pl-5"
          >
            <Link to="/blog"> Blog </Link>
          </DisclosureButton>
          <DisclosureButton
            as="a"
            className="block border-l-4 border-transparent py-2 pr-4 pl-3 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pr-6 sm:pl-5"
          >
            <Link to="/product"> Products </Link>
          </DisclosureButton>
          <DisclosureButton
            as="a"
            className="block border-l-4 border-transparent py-2 pr-4 pl-3 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pr-6 sm:pl-5"
          >
            <Link to="/about"> About </Link>
          </DisclosureButton>
          <DisclosureButton
            as="a"
            className="block border-l-4 border-transparent py-2 pr-4 pl-3 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pr-6 sm:pl-5"
          >
            <Link to="/contact"> Contact </Link>
          </DisclosureButton>
          <DisclosureButton
            as="a"
            className="block border-l-4 border-transparent py-2 pr-4 pl-3 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pr-6 sm:pl-5"
          >
            <Link to="/shortener"> Shortener </Link>
          </DisclosureButton>
        </div>
        {/* <div className="border-t border-gray-200 pt-4 pb-3">
          <div className="flex items-center px-4 sm:px-6">
            <div className="shrink-0">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                className="size-10 rounded-full"
              />
            </div>
            <div className="ml-3">
              <div className="text-base font-medium text-gray-800">
                Tom Cook
              </div>
              <div className="text-sm font-medium text-gray-500">
                tom@example.com
              </div>
            </div>
            <button
              type="button"
              className="relative ml-auto shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden"
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View notifications</span>
              <FaBell aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-3 space-y-1">
            <DisclosureButton
              as="a"
              to="#"
              className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800 sm:px-6"
            >
              Your Profile
            </DisclosureButton>
            <DisclosureButton
              as="a"
              to="#"
              className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800 sm:px-6"
            >
              Settings
            </DisclosureButton>
            <DisclosureButton
              as="a"
              to="#"
              className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800 sm:px-6"
            >
              Sign out
            </DisclosureButton>
          </div>
        </div> */}
      </DisclosurePanel>
    </Disclosure>
  );
}
