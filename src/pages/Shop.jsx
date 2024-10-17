import ShopMain from "../Components/Shop/ShopMain";
import ShopSidebar from "../Components/Shop/ShopSidebar";

const Shop = () => {
  return (
    <div className="flex min-h-screen container mx-auto max-w-full my-10 px-2 lg:px-4 xl:px-5">
      <div className="flex-[.4] bg-orange-200">
        <ShopSidebar />
      </div>
      <div className="flex-1">
        <ShopMain />
      </div>
    </div>
  );
};
export default Shop;
