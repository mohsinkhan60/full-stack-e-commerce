import SidebarImage from "../Components/Shop/FilterByBrand";
import FilterbyColor from "../Components/Shop/FilterbyColor";
import FilterbyPrice from "../Components/Shop/FilterbyPrice";
import ProductCategory from "../Components/Shop/ProductCategory";
import SecuritySafty from "../Components/Shop/SecuritySafty";
import ShopMain from "../Components/Shop/ShopMain";

const Shop = () => {
  return (
    <div className="flex-col">
      <div className="flex min-h-screen container mx-auto max-w-full my-10 px-2 lg:px-4 xl:px-5">
        <div className="flex-[.3] flex-col hidden lg:flex ">
          <div className="container mx-auto max-w-full mt-10 px-2 lg:px-4 xl:px-5">
            <ProductCategory />
            <FilterbyPrice />
            <FilterbyColor />
            <SidebarImage />
          </div>
        </div>
        <div className="flex-1">
          <ShopMain />
        </div>
      </div>
      <div>
        <SecuritySafty />
      </div>
    </div>
  );
};
export default Shop;
