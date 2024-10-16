/* eslint-disable react/prop-types */

import { Star } from "lucide-react";
import { productItems, productSections } from "../../../Data";

const ProductItem = ({ product }) => {
  return (
    <div className="flex items-center space-x-4 rounded-xl px-2 py-2">
      <img
        src={product.image}
        alt={product.name}
        className="w-20 h-20 border cursor-pointer object-cover rounded-xl"
      />
      <div className="flex-grow">
        <div className="flex items-center">
          <Star className="w-4 h-4 text-yellow-400 mr-1" />
          <span className="text-sm text-gray-500">(17k)</span>
        </div>
        <h3 className="text-lg hover:text-green-500 cursor-pointer font-medium">{product.name}</h3>
        <div className="flex items-center space-x-2">
          <span className="font-bold">${(product.price / 100).toFixed(2)}</span>
          <span className="text-sm text-gray-500 line-through">
            ${(product.price / 100).toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};

const ProductSection = ({ title }) => {
  return (
    <div className="bg-white rounded-xl border hover:border-green-500 p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl bg-green-100 w-full p-3 rounded-xl font-semibold">
          {title}
        </h2>
      </div>
      <div className="space-y-4">
        {productItems.map((product, index) => (
          <ProductItem key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

const OrganicFoodBottom = () => {
  return (
    <div className="container mx-auto max-w-full my-10 px-2 lg:px-4 xl:px-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {productSections.map((section, index) => (
          <ProductSection key={index} title={section.title} />
        ))}
      </div>
    </div>
  );
};

export default OrganicFoodBottom;
