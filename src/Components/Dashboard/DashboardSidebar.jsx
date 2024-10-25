/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {
  ChevronRight,
  CreditCard,
  FileSpreadsheet,
  FileText,
  LayoutDashboard,
  Lock,
  Package,
  Settings,
  ShoppingBag,
  ShoppingCart,
  Sliders,
  User,
  Users,
} from "lucide-react";
import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";

const MenuItem = ({
  icon: Icon,
  text,
  isActive,
  hasSubmenu,
  isOpen,
  onClick,
}) => (
  <li
    className={`flex items-center p-2 cursor-pointer ${
      isActive ? "bg-orange-500 rounded-lg" : "hover:bg-gray-700 rounded-lg"
    }`}
    onClick={onClick}
  >
    <Icon className="w-5 h-5 mr-2" />
    <span className="flex-grow">{text}</span>
    {hasSubmenu && (
      <ChevronRight
        className={`w-4 h-4 transition-transform ${isOpen ? "rotate-90" : ""}`}
      />
    )}
  </li>
);

const DashboardSidebar = ({ isOpen, toggleSidebar }) => {
  const [activeItem, setActiveItem] = useState("Dashboard");
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const toggleSubmenu = (item) => {
    setOpenSubmenu(openSubmenu === item ? null : item);
  };

  const menuItems = [
    { icon: LayoutDashboard, text: "Dashboard" },
    { icon: ShoppingBag, text: "Products", hasSubmenu: true },
    { icon: FileText, text: "Category", hasSubmenu: true },
    { icon: Package, text: "Inventory", hasSubmenu: true },
    { icon: ShoppingCart, text: "Orders", hasSubmenu: true },
    { icon: CreditCard, text: "Purchases", hasSubmenu: true },
    { icon: Sliders, text: "Attributes", hasSubmenu: true },
    { icon: FileSpreadsheet, text: "Invoices", hasSubmenu: true },
    { icon: Settings, text: "Settings" },
    { icon: User, text: "Profile" },
    { icon: Users, text: "Roles", hasSubmenu: true },
    { icon: Lock, text: "Permissions" },
  ];

  return (
    <div
      className={`bg-[#262D34] justify-center p-2 fixed h-screen text-gray-100 transform lg:translate-x-0 -translate-x-full transition-transform ${
        isOpen ? "translate-x-0 transform transition-transform" : "-translate-x-full transform transition-transform"
      }`}
    >
      <div className="flex-shrink-0 overflow-y-auto">
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <div className="flex items-center">
            <img src="/Navbar/logo.png" alt="Logo" className="h-10" />
          </div>
          {toggleSidebar === true ? (
            <button onClick={toggleSidebar}>
              <ChevronRight className="w-5 h-5 text-white lg:text-[#262D34]" />
            </button>
          ) : (
            <button onClick={toggleSidebar}>
              <IoIosArrowBack className="w-5 h-5 text-white lg:text-[#262D34]" />
            </button>
          )}
        </div>
        <nav>
          <div className="px-4 py-2 text-xs uppercase text-gray-400">
            General
          </div>
          <ul>
            {menuItems.slice(0, 9).map((item) => (
              <MenuItem
                key={item.text}
                icon={item.icon}
                text={item.text}
                isActive={activeItem === item.text}
                hasSubmenu={item.hasSubmenu}
                isOpen={openSubmenu === item.text}
                onClick={() => {
                  setActiveItem(item.text);
                  if (item.hasSubmenu) toggleSubmenu(item.text);
                }}
              />
            ))}
          </ul>
          <div className="px-4 py-2 text-xs uppercase text-gray-400 mt-4">
            Users
          </div>
          <ul>
            {menuItems.slice(9).map((item) => (
              <MenuItem
                key={item.text}
                icon={item.icon}
                text={item.text}
                isActive={activeItem === item.text}
                hasSubmenu={item.hasSubmenu}
                isOpen={openSubmenu === item.text}
                onClick={() => {
                  setActiveItem(item.text);
                  if (item.hasSubmenu) toggleSubmenu(item.text);
                }}
              />
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default DashboardSidebar;
