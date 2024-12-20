/* eslint-disable react/prop-types */

import { ShoppingCart } from "lucide-react";
import { organicFoods } from "../../Data";


const StarIcon = () => (
  <svg
    className="w-4 h-4 text-yellow-300 mr-1"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 22 20"
  >
    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
  </svg>
);

const ProductCard = ({ product }) => (
  <div className="bg-transparent p-4 flex flex-col items-center  rounded-lg border hover:border-green-500 my-10 relative">
    <img
      src={product.image}
      alt={product.name}
      className="object-contain mb-4"
    />
    <h3 className="text-lg font-semibold mb-2 line-clamp-2">{product.name}</h3>
    <p className="text-sm text-gray-600 mb-2">{product.seller}</p>
    <div className="flex items-center mb-2">
      <span className="text-lg font-bold mr-2">
        ${product.discountedPrice.toFixed(2)}
      </span>
      <span className="text-sm text-gray-500 line-through">
        ${product.originalPrice.toFixed(2)}
      </span>
    </div>
    <div className="flex items-center mb-4">
      <StarIcon />
      <span className="text-sm font-medium text-gray-900 mr-2">
        {product.rating}
      </span>
      <span className="text-sm text-gray-500">({product.reviews}k)</span>
    </div>
    <button className="flex bg-green-100 text-green-600 hover:text-white hover:bg-green-600 py-2 px-3 rounded-full transition duration-300 items-center justify-center w-full">
      Add To Cart
      <ShoppingCart className="w-5 h-5 ml-2" />
    </button>
  </div>
);

const OrganicFood = () => {
  return (
    <div className="container mx-auto max-w-full my-10 px-2 lg:px-4 xl:px-5">
      <h1 className="text-4xl font-semibold">Organic Food</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
        {organicFoods.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default OrganicFood;
