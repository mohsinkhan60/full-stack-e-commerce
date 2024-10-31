import { signOut } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";
import { ChevronDown, Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeUser } from "../store/slices/Auth";
import { auth, db } from "../../../firebasse";

export const HeaderNavbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const user = useSelector((state) => state.auth.user);
  console.log(user)
  const dispatch = useDispatch();
  const [category, setCategory] = useState([]);
  const [categoryChange, setCategoryChange] = useState("");

  const getAllProducts = async () => {
    const querySnapshot = await getDocs(collection(db, "Products"));
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const allProducts = await getAllProducts();
      setCategory(allProducts);
    };
    fetchProducts();
  }, []);

  const logout = async () => {
    try {
      await signOut(auth);
      dispatch(removeUser());
      navigate("/login");
    } catch (error) {
      console.log("Error during sign out...");
    }
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container xl:px-5 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex items-center">
              <select
                className="appearance-none bg-transparent pl-4 pr-8 py-2 text-gray-700 focus:outline-none"
                value={categoryChange}
                onChange={(e) => setCategoryChange(e.target.value)}
              >
                <option>All Categories</option>
                {category.map((cata, ind) => (
                  <option key={ind} value={cata.name}>
                    {cata.name}
                  </option>
                ))}
              </select>
              <ChevronDown className="h-4 w-4 text-gray-400 ml-1" />
            </div>
          </div>

          <div className="md:flex hidden items-center">
            <a
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Home
            </a>
            <a
              href="/shop"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Shop
            </a>
            <a
              href="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              About
            </a>
            <a
              href="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Contact Us
            </a>
          </div>

          <div className="flex items-center">
            <div className="hidden md:flex items-center space-x-4">
              {user && (
                <div className="relative">
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center mx-0 sm:mx-3"
                    aria-label="Profile menu"
                    aria-expanded={isOpen}
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
                    <div className="absolute flex-col border flex gap-2 right-0 mt-2 w-48 bg-white shadow-lg rounded-lg p-4 z-50">
                      {user.isAdmin && (
                        <button
                          onClick={() => navigate("/dashboard")}
                          className="bg-gray-800 hover:bg-gray-700 px-2 py-1 rounded-xl text-white"
                          aria-label="Dashboard"
                        >
                          Dashboard
                        </button>
                      )}
                      <button
                        onClick={logout}
                        className=" bg-gray-800 hover:bg-gray-700 px-2 py-1 rounded-xl text-white"
                        aria-label="Logout"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              )}

              {!user && (
                <>
                  <button
                    onClick={() => navigate("/login")}
                    className="border mx-1 px-4 rounded-full border-black py-2"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => navigate("/login")}
                    className="border px-4 mx-1 rounded-full border-black py-2"
                  >
                    Register
                  </button>
                </>
              )}
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="ml-4 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
              aria-label="Open mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Home
            </a>
            <a
              href="/shop"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Shop
            </a>
            <a
              href="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              About
            </a>
            <a
              href="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default HeaderNavbar;
