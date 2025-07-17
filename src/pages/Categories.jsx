import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { getDownloadURL, ref } from "firebase/storage";
import { ChevronDownIcon, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import { db, storage } from "../../firebasse";
import { DasshboardCategories } from "../Data";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const getAllProducts = async () => {
  const querySnapshot = await getDocs(collection(db, "Products"));
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

const Categories = () => {
  const user = useSelector((state) => state.auth.user);

  const [selectedItems, setSelectedItems] = useState([]);
  const [isDisabled, setIsDisabled] = useState(false);
  const [categories, setCategories] = useState([]);
  const DEMO_EMAIL = import.meta.env.VITE_DEMO_EMAIL;
  const isDemoUser = user?.email === DEMO_EMAIL;

  const deleteUserData = async (uid) => {
    try {
      await deleteDoc(doc(db, "Products", uid));
      console.log(`Successfully deleted product with id: ${uid}`);
    } catch (error) {
      console.error("Error deleting user data from Firestore:", error);
      throw error;
    }
  };

  const handleDelete = async (productId) => {
    setIsDisabled(true);

    try {
      await deleteUserData(productId);
      setCategories((prev) =>
        prev.filter((product) => product.id !== productId)
      );
    } catch (error) {
      console.error("Error deleting user data:", error);
    } finally {
      setIsDisabled(false);
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
      setCategories(productsWithImageURLs);
    };
    fetchProducts();
  }, []);

  const toggleSelectAll = () => {
    if (selectedItems.length === DasshboardCategories.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(DasshboardCategories.map((category) => category.id));
    }
  };

  const toggleSelectItem = (id) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter((item) => item !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold text-gray-800">
            All Categories List
          </h2>
          <div className="flex items-center space-x-2">
            <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition-colors">
              Add Product
            </button>
            <div className="relative">
              <select className="appearance-none bg-white border rounded px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-orange-500">
                <option>This Month</option>
              </select>
              <ChevronDownIcon
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
            </div>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-orange-600 shadow-sm focus:border-orange-300 focus:ring focus:ring-orange-200 focus:ring-opacity-50"
                    checked={
                      selectedItems.length === DasshboardCategories.length
                    }
                    onChange={toggleSelectAll}
                  />
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Categories
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Starting Price
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {" "}
                  Product Stock
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {" "}
                  Product ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {categories.map((category) => (
                <tr key={category.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-orange-600 shadow-sm focus:border-orange-300 focus:ring focus:ring-orange-200 focus:ring-opacity-50"
                      checked={selectedItems.includes(category.id)}
                      onChange={() => toggleSelectItem(category.id)}
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img
                          className="w-full h-full rounded-lg"
                          src={category.image}
                          alt=""
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {category.name}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {category.price}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {category.length > 1 ? category.length : 1} Product
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {category.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <NavLink to={`/dashboard/edit-product/${category.id}`}>
                        <button className="flex text-green-800 h-4 w-6">
                          <CiEdit className="h-5 w-5" />
                        </button>
                      </NavLink>
                      <button
                        onClick={() => {
                          if (isDemoUser) {
                            toast.info("Demo account cannot delete products.");
                          } else {
                            handleDelete(category.id);
                          }
                        }}
                        disabled={isDisabled}
                        className="text-red-600 hover:text-red-900"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default Categories;
