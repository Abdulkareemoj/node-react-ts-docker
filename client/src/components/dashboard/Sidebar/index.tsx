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
import { IoMdHome, IoIosSettings } from "react-icons/io";

import { ImProfile } from "react-icons/im";
import {
  FaWpforms,
  FaCalendarAlt,
  FaChartBar,
  FaTable,
  FaLink,
} from "react-icons/fa";

import { LuLayoutDashboard } from "react-icons/lu";
import { TbAlertTriangle } from "react-icons/tb";
import { RxButton } from "react-icons/rx";
interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const paths = [
  { path: "/dashboard", label: "Home", icon: IoMdHome },
  {
    label: "Form",
    icon: FaWpforms,
    dropdown: [
      {
        path: "/dashboard/FormElements",
        label: "Form Elements",
        icon: FaWpforms,
      },
      {
        path: "/dashboard/FormLayout",
        label: "Form Layout",
        icon: LuLayoutDashboard,
      },
    ],
  },
  {
    label: "UI Elements",
    icon: TbAlertTriangle,
    dropdown: [
      {
        path: "/dashboard/uiElements/Alerts",
        label: "Alerts",
        icon: TbAlertTriangle,
      },
      {
        path: "/dashboard/uiElements/Buttons",
        label: "Buttons",
        icon: RxButton,
      },
    ],
  },
  { path: "/dashboard/Calendar", label: "Calendar", icon: FaCalendarAlt },
  { path: "/dashboard/Chart", label: "Chart", icon: FaChartBar },
  { path: "/dashboard/Profile", label: "Profile", icon: ImProfile },
  { path: "/dashboard/Settings", label: "Settings", icon: IoIosSettings },
  { path: "/dashboard/Tables", label: "Tables", icon: FaTable },
  { path: "/dashboard/linksPage", label: "Links Page", icon: FaLink },
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
      <div className="flex items-center justify-between p-4 mt-5">
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
      <nav className="flex-1 overflow-y-auto mt-5">
        <ul className="space-y-2">
          {paths.map(({ path, label, icon: Icon, dropdown }) => (
            <li key={label}>
              {path ? (
                <Link
                  to={path}
                  className="flex items-center px-4 py-2 text-white rounded-md transition-colors duration-300 ease-in-out hover:bg-gray-600"
                >
                  <Icon className="w-5 h-5 mr-3" />
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
                        <div className="flex items-center">
                          <Icon className="w-5 h-5 mr-3" />
                          {label}
                        </div>
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
                          {dropdown?.map(
                            ({ path, label, icon: DropdownIcon }) => (
                              <MenuItem key={path} as="div">
                                {({ active }) => (
                                  <Link
                                    to={path}
                                    className={`flex items-center px-4 py-2 text-gray-700 ${
                                      active ? "bg-gray-100" : ""
                                    }`}
                                  >
                                    <DropdownIcon className="w-5 h-5 mr-3" />
                                    {label}
                                  </Link>
                                )}
                              </MenuItem>
                            )
                          )}
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
