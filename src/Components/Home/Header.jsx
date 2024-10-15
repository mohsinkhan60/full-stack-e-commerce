import { ShoppingCart } from "lucide-react";

const Header = () => {
  return (
    <div className="relative w-full mt-10 mb-10 overflow-hidden rounded-3xl bg-[#D3EBC0]">
      <img
        src="/Home/banner-bg.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div
        className="flex transition-transform duration-300 ease-in-out z-10"
        style={{ transform: `translateX(-${0 * 100}%)` }}
      >
        <div className="w-full flex-shrink-0">
          <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="w-full md:w-1/2 h-60 mb-8 md:mb-0">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 mb-4 leading-tight">
                  Daily Grocery Order and Get Express Delivery
                </h2>
                <button className="bg-green-500 lg:mt-20 mt-0 text-white px-6 py-3 rounded-full font-semibold flex items-center hover:bg-green-600 transition-colors">
                  <ShoppingCart className="mr-2" size={20} />
                  Explore Shop
                </button>
              </div>
              <div className="w-full md:w-1/2">
                <img
                  src={"/Home/banner-img1.png"}
                  alt="Grocery items"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
