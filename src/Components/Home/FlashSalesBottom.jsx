

export const FlashSalesBottom = () => {
  const banners = [
    {
      id: 1,
      image: "/Home/offer-img1.png",
      alt: "Basket of fresh produce and groceries",
      title: "$5 off your first order",
      description: "Delivery by 6:15am expired Aug 5",
    },
    {
      id: 2,
      image: "/Home/offer-img2.png",
      alt: "Fresh fish with lemon slices and herbs",
      title: "$5 off your first order",
      description: "Delivery by 6:15am expired Aug 5",
    },
  ];

  return (
    <div className="container mx-auto max-w-full my-5 lg:px-4 xl:px-5">
      <div className="grid gap-6 md:grid-cols-2">
        {banners.map((banner) => (
          <div key={banner.id} className="flex-shrink-0 ">
            <div className="relative bg-emerald-500 h-64 rounded-3xl text-white p-6 md:p-8 lg:p-10">
              <img
                src={banner.image}
                alt={banner.alt}
                className="absolute bottom-0 p-3 left-0 w-1/2 md:w-2/5 lg:w-1/3 object-contain"
              />
              <div className="ml-auto w-1/2 md:w-3/5 lg:w-2/3 text-right">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
                  {banner.title}
                </h2>
                <p className="text-sm md:text-base mb-4">
                  {banner.description}
                </p>
                <button className="text-black bg-white hover:text-white hover:bg-emerald-700  px-4 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-colors duration-300">
                  Shop Now →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlashSalesBottom;
