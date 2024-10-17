import ShopMain from "../Components/Shop/ShopMain";
import ShopSidebar from "../Components/Shop/ShopSidebar";

const Shop = () => {
  return (
    <div className="flex min-h-screen">
      <div className="flex-[.3] bg-orange-200">
        <ShopSidebar />
      </div>
      <div className="flex-1 bg-gray-300">
        <ShopMain />
      </div>
    </div>
  );
};
export default Shop;
