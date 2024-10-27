import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { getDownloadURL, ref } from "firebase/storage";
import { ChevronDown, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { NavLink, useNavigate } from "react-router-dom";
import { db, storage } from "../../firebasse";

const getAllProducts = async () => {
  const querySnapshot = await getDocs(collection(db, "Products"));
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

const Products = () => {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [isDisabled, setIsDisabled] = useState(false);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const toggleProductSelection = (productId) => {
    setSelectedProducts((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

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
      setProducts((prev) => prev.filter((product) => product.id !== productId));
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
          try {
            const imageUrl = await getDownloadURL(ref(storage, product.image));
            return { ...product, image: imageUrl };
          } catch (error) {
            console.error("Error fetching product image:", error);
            return { ...product, image: "" };
          }
        })
      );
      setProducts(productsWithImageURLs);
    };
    fetchProducts();
  }, []);

  return (
    <div className="px-4 sm:px-6 py-8 container mx-auto items-center justify-center max-w-full my-8 lg:px-4 xl:px-5">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4 sm:mb-0">
          All Product List
        </h1>
        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2">
          <button
            onClick={() => navigate("/dashboard/addToCart")}
            className="w-full sm:w-auto bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors"
          >
            Add Product
          </button>
          <div className="relative w-full sm:w-auto">
            <select className="w-full sm:w-auto appearance-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-8 text-gray-700 leading-tight focus:outline-none focus:border-blue-500">
              <option>This Month</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <ChevronDown className="h-4 w-4" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-blue-600"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedProducts(products.map((p) => p.id));
                      } else {
                        setSelectedProducts([]);
                      }
                    }}
                    checked={
                      selectedProducts.length === products.length &&
                      products.length > 0
                    }
                  />
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Product Name & Size
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Stock
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {products.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <input
                      type="checkbox"
                      className="form-checkbox h-4 w-4 text-blue-600"
                      checked={selectedProducts.includes(product.id)}
                      onChange={() => toggleProductSelection(product.id)}
                    />
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <img
                        className="h-16 w-16 rounded-lg"
                        src={product.image || "/fallback.jpg"}
                        alt={product.name}
                      />
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {product.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          Size: {product.size}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">${product.price}</td>
                  <td className="px-6 py-4">
                    {product.stockLeft} Item Left / {product.stockSold} Sold
                  </td>
                  <td className="px-6 py-4">{product.category}</td>
                  <td className="px-6 py-4">
                    <div className="flex space-x-2">
                    <NavLink to={`/dashboard/edit-product/${product.id}`}>
                        <button className="flex text-green-800 h-4 w-6">
                          <CiEdit className="h-5 w-5" />
                        </button>
                      </NavLink>
                      <button
                        onClick={() => handleDelete(product.id)}
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

export default Products;
