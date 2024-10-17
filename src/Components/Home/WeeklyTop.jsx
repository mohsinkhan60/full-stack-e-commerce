import { weeklyTops } from "../../Data";

const products = [
  "/Home/feature-img2.png",
  "/Home/feature-img3.png",
  "/Home/feature-img4.png",
  "/Home/feature-img2.png",
  "/Home/feature-img6.png",
];

const WeeklyTop = () => {
  return (
    <div className="container mx-auto max-w-full my-16 px-2 lg:px-4 xl:px-5">
      <h1 className="text-4xl font-semibold my-6">Weekly Top Vendors</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {weeklyTops.map((store, index) => (
          <div
            key={index}
            style={{ backgroundColor: store.color }} // Use inline styles for background color
            className="rounded-3xl p-6 flex flex-col items-center"
          >
            <div className="bg-white rounded-full p-2">
              <img
                src={store.image}
                alt={store.name}
                className="w-14 h-14 rounded-full object-cover"
              />
            </div>
            <h2 className="text-xl font-bold">{store.name}</h2>
            <p className="text-sm mb-2">Delivery by 6:15am</p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-4 py-1 text-sm mb-2">
              $5 off Snack & Candy
            </button>
            <div className="flex flex-wrap justify-center p-2 mb-4 gap-2">
              {products.map((product, idx) => (
                <img
                  key={idx}
                  src={product}
                  alt={`Product ${idx + 1}`}
                  className="w-14 h-14 rounded-full bg-white object-cover"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default WeeklyTop;
