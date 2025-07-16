import { getDownloadURL, ref } from "firebase/storage";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { IoSearchSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth, db, storage } from "../../../firebasse";
import { collection, getDocs } from "firebase/firestore";
import { CgProfile } from "react-icons/cg";
import { signOut } from "firebase/auth";
import { removeUser } from "../store/slices/Auth";

export const Header = () => {
  const navigate = useNavigate();
  // const [category, setCategory] = useState("All Categories");
  // const [isOpen, setIsOpen] = useState(false);

  const user = useSelector((state) => state.auth.user);
  const products = useSelector((state) => state.cart.products);
  const favourites = useSelector((state) => state.cart.favorites);

  const [category, setCategory] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();
  const [categoryChange, setCategoryChange] = useState("");

  const getAllProducts = async () => {
    const querySnapshot = await getDocs(collection(db, "Products"));
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  };

  const logout = async () => {
    try {
      await signOut(auth);
      dispatch(removeUser());
      navigate("/login");
    } catch (error) {
      console.log("Error during sign out...");
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const allProducts = await getAllProducts();
      const productsWithImageURLs = await Promise.all(
        allProducts.map(async (product) => {
          const image = await getDownloadURL(ref(storage, product.image));
          return { ...product, image };
        })
      );
      setCategory(productsWithImageURLs);
    };
    fetchProducts();
  }, []);



  return (
    <header className="bg-[#F3FAF2] flex items-center justify-center shadow-sm sticky top-0 left-0 z-[50000] w-full h-24 lg:h-32">
      <div className="container mx-auto max-w-full px-2 lg:px-4 xl:px-5">
        <div className="flex justify-between items-center h-full">
          <div className="flex items-center cursor-pointer">
            <img onClick={() => navigate("/")} src="/Navbar/logo.png" alt="Logo" className="h-8 lg:h-10" />
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
          <div className="flex sm:hidden">
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
          </div>

          <div
            onClick={() => navigate("/favourite")}
            className="hidden md:flex items-center cursor-pointer mx-0 sm:mx-3"
          >
            <span
              className={`absolute top-9 right-44 bg-pritext-primary ${
                favourites?.length > 0 ? " bg-red-500 text-white" : <></>
              } text-xs w-4 h-4 rounded-full flex items-center justify-center`}
            >
              {favourites?.length > 0 ? favourites?.length : <></>}
            </span>
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
            <span
              className={`absolute top-9 right-20 bg-pritext-primary ${
                products?.length > 0 ? " bg-red-500 text-white" : <></>
              } text-xs w-4 h-4 rounded-full flex items-center justify-center`}
            >
              {products?.length > 0 ? products?.length : <></>}
            </span>
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
