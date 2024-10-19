import { ShopSidebarCategories } from "../../Data";

const ProductCategory = () => {
  return (
    <div className="w-80  bg-white rounded-lg border">
      <div className="p-4 border-b">
        <h2 className="text-lg font-semibold">Product Category</h2>
      </div>
      <div className="p-4">
        <div className="h-[400px] overflow-y-auto pr-2">
          <ul className="space-y-6">
            {ShopSidebarCategories.map((category, index) => (
              <li
                key={index}
                className="text-sm text-gray-600 hover:text-gray-900 cursor-pointer"
              >
                {category}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default ProductCategory;
