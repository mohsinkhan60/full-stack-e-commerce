import ProductCategory from "../Components/Shop/ProductCategory";
import ShopMain from "../Components/Shop/ShopMain";
import ShopSidebar from "../Components/Shop/ShopSidebar";

const Shop = () => {
  return (
    <div className="flex min-h-screen container mx-auto max-w-full my-10 px-2 lg:px-4 xl:px-5">
      <div className="flex-[.3] hidden lg:flex ">
        <ShopSidebar />
        <ProductCategory />
      </div>
      <div className="flex-1">
        <ShopMain />
      </div>
    </div>
  );
};
export default Shop;
