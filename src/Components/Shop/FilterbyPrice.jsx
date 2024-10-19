import { useState } from "react";

const FilterbyPrice = () => {
  const [price, setPrice] = useState(0);
  const handleFilter = () => {
    console.log(`Filtering at price: ${price}`);
  };
  return (
    <div className="bg-white p-6 rounded-lg my-6 border w-80">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Filter by Price
      </h2>
      <div className="mb-4">
        <input
          type="range"
          min="0"
          max="100"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full h-2 bg-orange-500  rounded-lg appearance-none cursor-pointer"
        />
        <div className="flex justify-between  text-sm text-gray-600 mt-2">
          <span className="text-orange-500">{price}</span>
          <span className="text-orange-500">100</span>
        </div>
      </div>
      <button
        onClick={handleFilter}
        className="bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition duration-300 ease-in-out"
      >
        Filter
      </button>
    </div>
  );
};
export default FilterbyPrice;
