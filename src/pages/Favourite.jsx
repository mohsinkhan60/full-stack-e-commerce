
import { Star, XCircle } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Taylor Farms Broccoli Florets Vegetables",
    price: 125.0,
    image: "/Shop/product-two-img1.png",
    rating: 4.8,
    reviews: 128,
  },
  {
    id: 2,
    name: "Taylor Farms Broccoli Florets Vegetables",
    price: 125.0,
    image: "/Shop/product-two-img2.png",
    rating: 4.8,
    reviews: 128,
  },
  {
    id: 3,
    name: "Taylor Farms Broccoli Florets Vegetables",
    price: 125.0,
    image: "/Shop/product-two-img3.png",
    rating: 4.8,
    reviews: 128,
  },
];

const Favourite = () => {

  return (
    <div className="container mx-auto items-center justify-center max-w-full my-20 lg:px-4 xl:px-5">
      <div className="flex flex-col gap-8">
        <div className="lg:w-full">
          <div className="overflow-x-auto">
            <table className="min-w-full border">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Product Name
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Price
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {products.map((product) => (
                  <tr key={product.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0 h-20 w-20">
                          <img
                            className="h-20 w-20 rounded-lg p-1 border object-contain"
                            src={product.image}
                            alt={product.name}
                          />
                        </div>
                        <div className="flex-1 hidden md:table-cell">
                          <div className="text-lg font-medium text-gray-900 truncate">
                            {product.name}
                          </div>
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-yellow-400" aria-hidden="true" />
                            <span className="ml-1 text-sm text-gray-500">
                              {product.rating}
                            </span>
                            <span className="ml-1 text-sm text-gray-500">
                              ({product.reviews} Reviews)
                            </span>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm text-gray-500">
                      ${product.price.toFixed(2)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button className="text-black hover:text-red-500">
                        <XCircle className="h-5 w-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favourite