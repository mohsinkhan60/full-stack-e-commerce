import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { IoSearchSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { auth } from "../../../firebasse";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";

export const Header = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState("All Categories");
  const [isOpen, setIsOpen] = useState(false);

  const logout = async (e) => {
    e.preventDefault(); // Fixed this line
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.log("Error during sign out...");
    }
  };

  const user = useSelector((state) => state.auth.user);


  return (
    <header className="bg-[#F3FAF2] flex items-center justify-center shadow-sm sticky top-0 left-0 z-[50000] w-full h-32">
      <div className="container mx-auto max-w-full px-2 lg:px-4 xl:px-5">
        <div className="flex justify-between items-center h-full">
          <div className="flex items-center">
            <img src="/Navbar/logo.png" alt="Logo" className="h-10" />
          </div>

          <div className="flex items-center flex-1 mx-3">
            {!user && (
              <>
                <div className="flex sm:hidden border mx-1 px-4 rounded-full border-black py-2 items-center">
                  <button onClick={() => navigate("/login")}>Login</button>
                </div>
                <div className="flex sm:hidden border px-4 mx-1 rounded-full border-black py-2 items-center">
                  <button onClick={() => navigate("/login")}>Register</button>
                </div>
              </>
            )}

            <div className="relative hidden lg:flex items-center flex-1 mx-3">
              <div className="relative">
                <select
                  className="appearance-none bg-transparent pl-4 pr-8 py-2 text-gray-700 focus:outline-none"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option>All Categories</option>
                  <option>Grocery</option>
                  <option>Breakfast & Dairy</option>
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
                name="search"
              />
              <IoSearchSharp className="absolute right-3 h-6 w-6 text-gray-500 cursor-pointer" />
            </div>
          </div>

          {user && (
            <div className="relative">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center mx-0 sm:mx-3"
                aria-label="Profile menu"
              >
                <CgProfile
                  className="h-6 w-6 text-gray-700 cursor-pointer"
                  aria-label="Profile"
                />
                <span className="mx-0 sm:mx-1 hidden md:flex text-gray-500">
                  Profile
                </span>
              </button>

              {isOpen && (
                <div className="absolute flex-col flex gap-2 right-0 mt-2 w-48 bg-white shadow-lg rounded-lg p-4 z-50">
                  <button
                    onClick={logout}
                    className="text-blue-500 hover:underline"
                    aria-label="Logout"
                  >
                    Logout
                  </button>
                  <button
                    onClick={() => navigate("/addToCart")}
                    className="text-blue-500 hover:underline"
                    aria-label="Logout"
                  >
                    Add To Cart
                  </button>
                </div>
              )}
            </div>
          )}

          <div
            onClick={() => navigate("/favourite")}
            className="hidden md:flex items-center cursor-pointer mx-0 sm:mx-3"
          >
            <FaRegHeart
              className="h-6 w-6 text-gray-700 cursor-pointer"
              aria-label="Wishlist"
            />
            <span className="mx-0 sm:mx-1 text-gray-500">Wishlist</span>
          </div>

          <div
            onClick={() => navigate("/cart")}
            className="hidden cursor-pointer md:flex items-center mx-0 sm:mx-3"
          >
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
