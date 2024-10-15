/* eslint-disable react/prop-types */

import { ShoppingCart, Star } from "lucide-react";

const ProductCard = ({
  image,
  title,
  rating,
  reviews,
  seller,
  sold,
  total,
}) => (
  <div className="bg-transparent hover:border-green-500 p-4 rounded-lg h-72 flex items-center justify-center border overflow-hidden">
    <div className="relative">
      <img src={image} alt={title} className="w-full h-full object-cover" />
      <span className="absolute -top-20 -left-2 bg-red-500 text-white px-2 py-1 text-xs font-bold rounded">
        Sale 50%
      </span>
    </div>
    <div className="p-4 w-full">
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-500 line-through">$28.99</span>
        <span className="text-lg font-bold">$14.99 /Qty</span>
      </div>
      <div className="flex items-center mb-2">
        <span className="text-lg font-bold mr-2">{rating}</span>
        <Star className="w-5 h-5 text-yellow-400 mr-1" fill="currentColor" />
        <span className="text-sm text-gray-600">({reviews}k)</span>
      </div>
      <h3 className="font-semibold hover:text-green-600 cursor-pointer mb-2">
        {title}
      </h3>
      <div className="flex items-center mb-2">
        <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full mr-2">
          <ShoppingCart className="w-4 h-4 inline mr-1" />
        </span>
        <span className="text-sm text-gray-600">By {seller}</span>
      </div>
      <p className="text-sm text-gray-600 mb-4">
        Sold: {sold}/{total}
      </p>
      <button className="w-ful flex sm:hidden lg:hidden xl:flex bg-green-100 text-green-600 hover:text-white hover:bg-green-600 py-2 px-3 rounded-md transition duration-300 items-center justify-center">
        <ShoppingCart className="w-5 h-5 mr-2" />
        Add To Cart
      </button>
    </div>
  </div>
);

const SpecialOffer = () => (
  <div className="bg-pink-100 h-full flex flex-col items-center justify-center rounded-lg shadow-md overflow-hidden p-6">
    <img
      src="/Home/special-snacks-img.png"
      alt="Special Snacks"
      className="w-full object-cover rounded-lg mb-4"
    />
    <h2 className="text-2xl font-bold mb-4">Special Snacks</h2>
    <button className="w-full bg-orange-500 text-white py-2 rounded-full hover:bg-orange-600 transition duration-300">
      Shop Now
    </button>
  </div>
);

export const BestSells = () => {
  const products = [
    {
      image: "/Home/best-sell1.png",
      title: "Taylor Farms Broccoli Florets Vegetables",
      rating: 4.8,
      reviews: 17,
      seller: "Lucky Supermarket",
      sold: 18,
      total: 35,
    },
    {
      image: "/Home/best-sell2.png",
      title: "Taylor Farms Broccoli Florets Vegetables",
      rating: 4.8,
      reviews: 17,
      seller: "Lucky Supermarket",
      sold: 18,
      total: 35,
    },
    {
      image: "/Home/best-sell3.png",
      title: "Taylor Farms Broccoli Florets Vegetables",
      rating: 4.8,
      reviews: 17,
      seller: "Lucky Supermarket",
      sold: 18,
      total: 35,
    },
    {
      image: "/Home/best-sell4.png",
      title: "Taylor Farms Broccoli Florets Vegetables",
      rating: 4.8,
      reviews: 17,
      seller: "Lucky Supermarket",
      sold: 18,
      total: 35,
    },
  ];

  return (
    <div className="container mx-auto max-w-full my-10 px-2 lg:px-4 xl:px-5">
      <h1 className="text-4xl font-semibold my-6">Daily Best Sells</h1>
      <div className="flex gap-6 flex-col md:flex-row">
        <div className="flex-[1] w-full grid grid-cols-1 md:grid-cols-2 gap-5">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>

        <div className="flex-[.7] w-full">
          <SpecialOffer />
        </div>
      </div>
    </div>
  );
};
export default BestSells;
