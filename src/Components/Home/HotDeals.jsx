/* eslint-disable react/prop-types */

import { ShoppingCart } from "lucide-react";

const ProductCard = ({
  image,
  name,
  price,
  oldPrice,
  rating,
  reviews,
  isNew,
  isSale,
}) => (
  <div className="bg-white p-4 rounded-lg border hover:border-green-500">
    <div className="relative">
      <img src={image} alt={name} className="w-full h-40 object-contain mb-4" />
      {isNew && (
        <span className="absolute top-0 left-0 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-tl-lg rounded-br-lg">
          New
        </span>
      )}
      {isSale && (
        <span className="absolute top-0 left-0 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-tl-lg rounded-br-lg">
          Sale 50%
        </span>
      )}
    </div>
    <h3 className="font-semibold text-lg mb-2">{name}</h3>
    <p className="text-gray-600 mb-2">By Lucky Supermarket</p>
    <div className="flex justify-between items-center mb-2">
      <span className="font-bold text-lg">${price}</span>
      <span className="text-gray-500 line-through">/Qty${oldPrice}</span>
    </div>
    <div className="flex items-center mb-4">
      <span className="text-yellow-400 mr-1">{rating}</span>
      <span className="text-yellow-400 mr-2">★</span>
      <span className="text-gray-600 text-sm">({reviews}k)</span>
    </div>
    <button className="w-full py-2 rounded-full  bg-green-100 text-green-600 hover:text-white hover:bg-green-600  transition duration-300">
      Add To Cart <ShoppingCart className="inline-block ml-2" size={16} />
    </button>
  </div>
);

const HotDeals = () => {
  return (
    <div className="container mx-auto max-w-full my-10 px-2 lg:px-4 xl:px-5">
      <h1 className="text-4xl font-semibold my-6">Hot Deals Todays</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        <div className="lg:col-span-2 bg-green-500 rounded-lg p-6 flex flex-col justify-between">
          <div>
            <img
              src="/Home/hot-deals-img.png"
              alt="Fresh Vegetables"
              className="w-full h-40 object-contain mb-4"
            />
            <h2 className="text-white flex justify-center text-3xl font-bold mb-4">
              Fresh Vegetables
            </h2>
          </div>
          <button className="bg-orange-500 text-white py-2 px-4 rounded-full hover:bg-orange-600 transition duration-300">
            Shop Now →
          </button>
        </div>
        <ProductCard
          image="/Home/product-img8.png"
          name="Tropicana 100% Juice, Orange"
          price="14.99"
          oldPrice="28.99"
          rating="4.8"
          reviews="17"
          isNew={true}
        />
        <ProductCard
          image="/Home/product-img8.png"
          name="Tropicana 100% Juice, Orange"
          price="14.99"
          oldPrice="28.99"
          rating="4.8"
          reviews="17"
          isNew={true}
        />
        <ProductCard
          image="/Home/product-img9.png"
          name="O Organics Milk, Whole, Vitamin D"
          price="14.99"
          oldPrice="28.99"
          rating="4.8"
          reviews="17"
          isSale={true}
        />
        <ProductCard
          image="/Home/product-img10.png"
          name="Marcel's Modern Pantry Almond..."
          price="14.99"
          oldPrice="28.99"
          rating="4.8"
          reviews="17"
          isSale={true}
        />
      </div>
    </div>
  );
};
export default HotDeals;
