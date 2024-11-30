import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { getDownloadURL, ref } from "firebase/storage";
import { useDispatch } from "react-redux";
import { addToCart, addToFavorite } from "../store/slices/Cart";
import { db, storage } from "../../../firebasse";

const getAllProducts = async () => {
  const querySnapshot = await getDocs(collection(db, "Products"));
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

const ShopMain = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const allProducts = await getAllProducts();
      const productsWithImageURLs = await Promise.all(
        allProducts.map(async (product) => {
          const image = await getDownloadURL(ref(storage, product.image));
          return { ...product, image };
        })
      );
      setProducts(productsWithImageURLs);
    };
    fetchProducts();
  }, []);

  const handleAddToCart = (e, product) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(addToCart(product));
  };
  const handleAddFavourite = (e, product) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(addToFavorite(product));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <p className="text-sm text-gray-600">
          Showing 1-{products.length} of {products.length} results
        </p>
        <div className="flex items-center space-x-4">
          <select className="p-2 border rounded" defaultValue="Popular">
            <option>Popular</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-transparent rounded-lg border hover:border-orange-300 overflow-hidden"
          >
            <div className="p-4">
              <div className="relative flex justify-center items-center bg-[#F1F1F1] rounded-xl w-full h-52 p-3">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-52 h-52 object-contain"
                />
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <div className="flex justify-between items-center mb-2">
                <div>
                  <span className="text-lg font-bold text-gray-900">
                    ${product.price}
                  </span>
                  {product.oldPrice && (
                    <span className="ml-2 text-sm text-gray-400 line-through">
                      ${product.oldPrice}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex flex-row gap-2">
              <button
                onClick={(e) => handleAddToCart(e, product)}
                className="w-full flex-1 flex items-center justify-center gap-3 bg-[#F1F1F1] rounded p-1 hover:text-white hover:bg-orange-500 transition-colors"
              >
                Add To Cart
                <IoCartOutline />
              </button>
              <button
              onClick={(e) => handleAddFavourite(e, product)}
                className=" flex flex-[.2] items-center justify-center bg-[#F1F1F1] rounded p-1 hover:text-white hover:bg-orange-500 transition-colors"
              >
                <CiHeart className="w-8 h-8" />
              </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopMain;
