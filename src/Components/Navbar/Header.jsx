import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { IoSearchSharp } from "react-icons/io5";

export const Header = () => {
  const [category, setCategory] = useState("All Categories");
  return (
    <header className="bg-[#F3FAF2] flex items-center justify-center shadow-sm sticky top-0 left-0 z-[50000] w-full h-32">
      <div className="container mx-auto max-w-full px-2 lg:px-4 xl:px-5">
        <div className="flex justify-between items-center h-full">
          <div className="flex items-center">
            <img src="/Navbar/logo.png" alt="Logo" className="h-10" />
          </div>

          <div className="flex items-center flex-1 mx-3">
            <div className="flex sm:hidden border mx-1 px-4 rounded-full border-black py-2 items-center">
              <button>Login</button>
            </div>
            <div className="flex sm:hidden border px-4 mx-1 rounded-full border-black py-2 items-center">
              <button>Register</button>
            </div>

            <div className="relative hidden lg:flex items-center flex-1 mx-3">
              <div className="relative">
                <select
                  className="appearance-none bg-transparent pl-4 pr-8 py-2 text-gray-700 focus:outline-none"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option>All Categories</option>
                  <option>Grocery</option>
                  <option>Brakefast & Dairy</option>
                  <option>Milk & Dairies</option>
                  <option>Pet Food & Toys</option>
                </select>
                <ChevronDown
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
                  size={16}
                />
              </div>
              <input
                className="border-2 bg-transparent border-black rounded-full px-4 py-2 w-full"
                placeholder="Search for a Product ..."
                type="text"
              />
              <IoSearchSharp className="absolute right-3 h-6 w-6 text-gray-500 cursor-pointer" />
            </div>
          </div>

          <div className="hidden md:flex items-center mx-0 sm:mx-3">
            <FaRegHeart
              className="h-6 w-6 text-gray-700 cursor-pointer"
              aria-label="Wishlist"
            />
            <span className="mx-0 sm:mx-1 text-gray-500">Wishlist</span>
          </div>

          <div className="hidden md:flex items-center mx-0 sm:mx-3">
            <FiShoppingCart
              className="h-6 w-6 text-gray-700 cursor-pointer"
              aria-label="Cart"
            />
            <span className="mx-0 sm:mx-1 text-gray-500">Cart</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
