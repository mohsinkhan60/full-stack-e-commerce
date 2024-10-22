import { StarIcon } from "lucide-react";
import { ShopMainProducts } from "../../Data";
import { IoCartOutline } from "react-icons/io5";

const ShopMain = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <p className="text-sm text-gray-600">Showing 1-20 of 85 result</p>
        <div className="flex items-center space-x-4">
          <select className="p-2 border rounded" defaultValue="Popular">
            <option>Popular</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {ShopMainProducts.map((product) => (
          <div
            key={product.id}
            className="bg-transparent rounded-lg border hover:border-orange-300 overflow-hidden"
          >
            <div className="p-4 ">
              <div className="relative  flex justify-center items-center bg-[#F1F1F1] rounded-xl w-full h-52 p-3">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-32 h-32 object-contain"
                />
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <div className="flex items-center mb-2">
                <StarIcon className="w-5 h-5 text-yellow-400" />
                <span className="ml-1 text-sm text-gray-600">
                  {product.rating}
                </span>
                <span className="ml-1 text-sm text-gray-400">
                  ({product.reviews})
                </span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <div>
                  <span className="text-lg font-bold text-gray-900">
                    ${product.salePrice.toFixed(2)}
                  </span>
                  <span className="ml-2 text-sm text-gray-400 line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                </div>
                <span className="text-sm text-gray-600">
                  Sold: {product.sold}/{product.total}
                </span>
              </div>

              <button className="w-full flex items-center justify-center gap-3 bg-[#F1F1F1] rounded p-1 hover:text-white hover:bg-orange-500 transition-colors">
                Add To Cart
                <IoCartOutline />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ShopMain;
