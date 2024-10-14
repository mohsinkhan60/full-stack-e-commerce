/* eslint-disable react/prop-types */
import { IoIosArrowRoundForward } from "react-icons/io";

const categories = [
  {
    name: "Vegetables",
    image: "/Home/feature-img7.png",
    products: "125+ Products",
  },
  {
    name: "Fish & Meats",
    image: "/Home/feature-img2.png",
    products: "125+ Products",
  },
  {
    name: "Desserts",
    image: "/Home/feature-img4.png",
    products: "125+ Products",
  },
  {
    name: "Drinks & Juice",
    image: "/Home/feature-img3.png",
    products: "125+ Products",
  },
  {
    name: "Animals Food",
    image: "/Home/feature-img5.png",
    products: "125+ Products",
  },
  {
    name: "Fresh Fruits",
    image: "/Home/feature-img6.png",
    products: "125+ Products",
  },
];

const cards = [
  { title: "Everyday Fresh Meat", image: "/Home/featureBanner-img1.png", color: "bg-yellow-50" },
  { title: "Daily Fresh Vegetables", image: "/Home/featureBanner-img2.png", color: "bg-green-50" },
  { title: "Everyday Fresh Milk", image: "/Home/featureBanner-img3.png", color: "bg-pink-50" },
  { title: "Everyday Fresh Fruits", image: "/Home/featureBanner-img4.png", color: "bg-yellow-50" },
];

const Card = ({ title, image }) => {
  return (
    <div className="relative">
      <img src={image} alt={title} className={`w-full h-full mx-2 object-cover rounded`} />
      <p className="absolute top-10 left-10 font-bold text-2xl w-40">{title}</p>
      <button className="absolute flex items-center gap-2 bottom-10 left-10 bg-green-600 hover:bg-green-500  px-4 py-2 rounded-full">
        Shop Now
        <IoIosArrowRoundForward className="text-2xl font-bold" />
      </button>
    </div>
  );
};

export const FreshProducts = () => {
  return (
    <div className="container mx-auto max-w-full my-10 px-2 lg:px-4 xl:px-5">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {categories.map((category, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="relative mb-2 w-40 h-40 flex justify-center items-center">
              <div className="absolute inset-0 bg-[#E8F9E9] rounded-full"></div>
              <img
                src={category.image}
                alt={category.name}
                className="absolute w-24 h-24 object-contain"
              />
            </div>
            <h3 className="text-sm font-semibold text-center">{category.name}</h3>
            <p className="text-xs text-gray-500 text-center">{category.products}</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 my-10">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default FreshProducts;
