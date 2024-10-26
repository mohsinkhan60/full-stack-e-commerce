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
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  return (
    <div
      className={`bg-[#262D34] justify-center p-2 fixed h-screen text-gray-100 transform lg:translate-x-0 -translate-x-full transition-transform ${
        isOpen
          ? "translate-x-0 transform transition-transform"
          : "-translate-x-full transform transition-transform"
      }`}
    >
      <div className="flex-shrink-0 overflow-y-auto">
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <img src="/Navbar/logo.png" alt="Logo" className="h-10" />
          <button onClick={toggleSidebar}>
            {isOpen ? (
              <IoIosArrowBack className="w-5 h-5 text-white lg:text-[#262D34]" />
            ) : (
              <ChevronRight className="w-5 h-5 text-white lg:text-[#262D34]" />
            )}
          </button>
        </div>
        <nav>
          <div className="px-4 py-2 text-xs uppercase text-gray-400">
            General
          </div>
          <ul>
            <MenuItem
              icon={LayoutDashboard}
              text="Dashboard"
              isActive={activeItem === "Dashboard"}
              hasSubmenu={false}
              onClick={() => {
                navigate("/dashboard");
                setActiveItem("Dashboard");
              }}
            />
            <MenuItem
              icon={ShoppingBag}
              text="Products"
              isActive={activeItem === "Products"}
              hasSubmenu={true}
              isOpen={openSubmenu === "Products"}
              onClick={() => {
                navigate("/dashboard/products");
                setActiveItem("Products");
              }}
            />
            <MenuItem
              icon={FileText}
              text="Category"
              isActive={activeItem === "Category"}
              hasSubmenu={true}
              isOpen={openSubmenu === "Category"}
              onClick={() => {
                setActiveItem("Category");
                toggleSubmenu("Category");
              }}
            />
            <MenuItem
              icon={Package}
              text="Inventory"
              isActive={activeItem === "Inventory"}
              hasSubmenu={true}
              isOpen={openSubmenu === "Inventory"}
              onClick={() => {
                setActiveItem("Inventory");
                toggleSubmenu("Inventory");
              }}
            />
            <MenuItem
              icon={ShoppingCart}
              text="Orders"
              isActive={activeItem === "Orders"}
              hasSubmenu={true}
              isOpen={openSubmenu === "Orders"}
              onClick={() => {
                setActiveItem("Orders");
                toggleSubmenu("Orders");
              }}
            />
            <MenuItem
              icon={CreditCard}
              text="Purchases"
              isActive={activeItem === "Purchases"}
              hasSubmenu={true}
              isOpen={openSubmenu === "Purchases"}
              onClick={() => {
                setActiveItem("Purchases");
                toggleSubmenu("Purchases");
              }}
            />
            <MenuItem
              icon={Sliders}
              text="Attributes"
              isActive={activeItem === "Attributes"}
              hasSubmenu={true}
              isOpen={openSubmenu === "Attributes"}
              onClick={() => {
                setActiveItem("Attributes");
                toggleSubmenu("Attributes");
              }}
            />
            <MenuItem
              icon={FileSpreadsheet}
              text="Invoices"
              isActive={activeItem === "Invoices"}
              hasSubmenu={true}
              isOpen={openSubmenu === "Invoices"}
              onClick={() => {
                setActiveItem("Invoices");
                toggleSubmenu("Invoices");
              }}
            />
            <MenuItem
              icon={Settings}
              text="Settings"
              isActive={activeItem === "Settings"}
              hasSubmenu={false}
              onClick={() => {
                setActiveItem("Settings");
              }}
            />
          </ul>
          <div className="px-4 py-2 text-xs uppercase text-gray-400 mt-4">
            Users
          </div>
          <ul>
            <MenuItem
              icon={User}
              text="Profile"
              isActive={activeItem === "Profile"}
              hasSubmenu={false}
              onClick={() => {
                setActiveItem("Profile");
              }}
            />
            <MenuItem
              icon={Users}
              text="Roles"
              isActive={activeItem === "Roles"}
              hasSubmenu={true}
              isOpen={openSubmenu === "Roles"}
              onClick={() => {
                setActiveItem("Roles");
                toggleSubmenu("Roles");
              }}
            />
            <MenuItem
              icon={Lock}
              text="Permissions"
              isActive={activeItem === "Permissions"}
              hasSubmenu={false}
              onClick={() => {
                setActiveItem("Permissions");
              }}
            />
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default DashboardSidebar;
