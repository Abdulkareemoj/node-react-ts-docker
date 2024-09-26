import { useState, Fragment } from "react";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { Link } from "@tanstack/react-router";
import Logo from "../../../assets/images/logo/logo.svg";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const paths = [
  { path: "/dashboard", label: "Home" },
  {
    label: "Form",
    dropdown: [
      { path: "/dashboard/FormElements", label: "Form Elements" },
      { path: "/dashboard/FormLayout", label: "Form Layout" },
    ],
  },
  {
    label: "UI Elements",
    dropdown: [
      { path: "/dashboard/uiElements/Alerts", label: "Alerts" },
      { path: "/dashboard/uiElements/Buttons", label: "Buttons" },
    ],
  },
  { path: "/dashboard/Calendar", label: "Calendar" },
  { path: "/dashboard/Chart", label: "Chart" },
  { path: "/dashboard/Profile", label: "Profile" },
  { path: "/dashboard/Settings", label: "Settings" },
  { path: "/dashboard/Tables", label: "Tables" },
  { path: "/dashboard/linksPage", label: "Links Page" },
];

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleDropdownClick = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <aside
      className={`fixed inset-y-0 left-0 z-50 flex w-64 flex-col bg-black transition-transform duration-300 ease-in-out ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      } lg:static lg:translate-x-0`}
    >
      <div className="flex items-center justify-between p-4">
        <Link to="/">
          <img src={Logo} alt="Logo" className="h-8 w-auto" />
        </Link>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="lg:hidden"
        >
          <svg
            className="h-6 w-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
      <nav className="flex-1 overflow-y-auto">
        <ul className="space-y-2">
          {paths.map(({ path, label, dropdown }) => (
            <li key={label}>
              {path ? (
                <Link
                  to={path}
                  className="block px-4 py-2 text-white rounded-md transition-colors duration-300 ease-in-out hover:bg-gray-600"
                >
                  {label}
                </Link>
              ) : (
                <Menu as="div" className="relative">
                  {({ open }) => (
                    <>
                      <MenuButton
                        className="flex items-center justify-between w-full px-4 py-2 text-left text-white rounded-md transition-colors duration-300 ease-in-out hover:bg-gray-600"
                        onClick={() => handleDropdownClick(label)}
                      >
                        {label}
                        <svg
                          className={`w-5 h-5 transition-transform ${
                            openDropdown === label ? "rotate-180" : "rotate-0"
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          ></path>
                        </svg>
                      </MenuButton>
                      <Transition
                        as={Fragment}
                        show={openDropdown === label}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <MenuItems className="mt-2 space-y-2">
                          {dropdown?.map(({ path, label }) => (
                            <MenuItem key={path} as="div">
                              {({ active }) => (
                                <Link
                                  to={path}
                                  className={`block px-4 py-2 text-gray-700 ${
                                    active ? "bg-gray-100" : ""
                                  }`}
                                >
                                  {label}
                                </Link>
                              )}
                            </MenuItem>
                          ))}
                        </MenuItems>
                      </Transition>
                    </>
                  )}
                </Menu>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
