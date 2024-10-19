import { useState } from "react";
import { ShopSidebarColorOptions } from "../../Data";


const ShopSidebar = () => {
  const [price, setPrice] = useState(0);
  const [selectedColor, setSelectedColor] = useState("");

  const handleColorChange = (colorName) => {
    setSelectedColor(colorName);
  };

  const handleFilter = () => {
    console.log(`Filtering at price: ${price}`);
  };
  return (
    <div className="container mx-auto max-w-full my-10 px-2 lg:px-4 xl:px-5">

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

      <div className="w-80 max-w-md bg-white p-6 rounded-lg my-6 border">
        <h2 className="text-lg font-semibold mb-4">Filter by Color</h2>
        <div className="space-y-8">
          {ShopSidebarColorOptions.map((color) => (
            <label
              key={color.name}
              className="flex items-center space-x-3 cursor-pointer"
            >
              <input
                type="radio"
                name="color"
                className="hidden"
                checked={selectedColor === color.name}
                onChange={() => handleColorChange(color.name)}
              />
              <span
                className={`w-4 h-4 rounded-full inline-block border border-gray-300 ${
                  selectedColor === color.name ? color.class : color.color
                }`}
              ></span>
              <span className="text-sm text-gray-700">
                {color.name} ({color.count})
              </span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ShopSidebar;
