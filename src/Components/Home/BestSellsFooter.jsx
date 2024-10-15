


export const BestSellsFooter = () => {
  return (
   <div className="container mx-auto max-w-full my-10 px-2 lg:px-4 xl:px-5">
    <div className="bg-green-500 rounded-lg overflow-hidden">
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between">
        <div className="mb-6 md:mb-0 md:mr-6">
          <img
            src="/Home/delivery-man.png"
            alt="Delivery person on scooter"
            width={200}
            height={200}
            className="w-40 h-40 md:w-48 md:h-48 object-contain"
          />
        </div>
        <div className="text-center md:text-left flex flex-col items-center mb-6 md:mb-0">
          <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
            We Delivery on Next Day from 10:00 <br />  <span className="flex justify-center">AM to 08:00 PM</span>
          </h2>
          <p className="text-white text-sm md:text-base mb-4">
            For Orders starts from $100
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full transition duration-300">
            Shop Now →
          </button>
        </div>
        <div className="hidden lg:block">
          <img
            src="/Home/special-snacks-img (1).png"
            alt="Assorted food items"
            className="w-48 h-48 object-contain"
          />
        </div>
      </div>
    </div>
    </div>
  )
}
export default BestSellsFooter