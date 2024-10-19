import { useState } from "react";
import { ShopSidebarColorOptions } from "../../Data";

const FilterbyColor = () => {
  const [selectedColor, setSelectedColor] = useState("");

  const handleColorChange = (colorName) => {
    setSelectedColor(colorName);
  };
  return (
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
  );
};
export default FilterbyColor;
