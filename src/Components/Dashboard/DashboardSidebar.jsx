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

const MenuItem = ({ icon: Icon, text, isActive, isOpen, onClick }) => (
  <li
    className={`flex items-center p-2 cursor-pointer ${
      isActive ? "rounded-lg" : "hover:bg-gray-700 rounded-lg"
    }`}
    onClick={onClick}
  >
    <Icon className="w-5 h-5 mr-2" />
    <span className="flex-grow">{text}</span>
  </li>
);

const DashboardSidebar = ({ isOpen, toggleSidebar }) => {
  const [activeItem, setActiveItem] = useState("Dashboard");
  const [openSubmenu, setOpenSubmenu] = useState(null);
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
          <img
            onClick={() => navigate("/")}
            src="/Navbar/logo.png"
            alt="Logo"
            className="h-10 cursor-pointer"
          />
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
              onClick={() => {
                navigate("/dashboard");
                setActiveItem("Dashboard");
              }}
            />
            <MenuItem
              icon={ShoppingBag}
              text="Products"
              isActive={activeItem === "Products"}
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
              isOpen={openSubmenu === "Category"}
              onClick={() => {
                navigate("/dashboard/categories");
                setActiveItem("Category");
              }}
            />
            <MenuItem
              icon={Package}
              text="Inventory"
              isActive={activeItem === "Inventory"}
              isOpen={openSubmenu === "Inventory"}
              onClick={() => {
                setActiveItem("Inventory");
              }}
            />
            <MenuItem
              icon={ShoppingCart}
              text="Orders"
              isActive={activeItem === "Orders"}
              isOpen={openSubmenu === "Orders"}
              onClick={() => {
                setActiveItem("Orders");
              }}
            />
            <MenuItem
              icon={CreditCard}
              text="Purchases"
              isActive={activeItem === "Purchases"}
              isOpen={openSubmenu === "Purchases"}
              onClick={() => {
                setActiveItem("Purchases");
              }}
            />
            <MenuItem
              icon={Sliders}
              text="Attributes"
              isActive={activeItem === "Attributes"}
              isOpen={openSubmenu === "Attributes"}
              onClick={() => {
                setActiveItem("Attributes");
              }}
            />
            <MenuItem
              icon={FileSpreadsheet}
              text="Invoices"
              isActive={activeItem === "Invoices"}
              isOpen={openSubmenu === "Invoices"}
              onClick={() => {
                setActiveItem("Invoices");
              }}
            />
            <MenuItem
              icon={Settings}
              text="Settings"
              isActive={activeItem === "Settings"}
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
              onClick={() => {
                setActiveItem("Profile");
              }}
            />
            <MenuItem
              icon={Users}
              text="Roles"
              isActive={activeItem === "Roles"}
              isOpen={openSubmenu === "Roles"}
              onClick={() => {
                setActiveItem("Roles");
              }}
            />
            <MenuItem
              icon={Lock}
              text="Permissions"
              isActive={activeItem === "Permissions"}
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
