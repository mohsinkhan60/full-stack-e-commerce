import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { brands } from '../../Data';




const Brands = () => {
  const scrollRef = useRef(null);

  const scroll = (scrollOffset) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        top: 0,
        left: scrollOffset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className='container mx-auto flex items-center justify-center max-w-full my-10 px-2 lg:px-4 xl:px-5'>
    <div className="bg-green-50 p-6 rounded-2xl container max-w-full my-10 px-2 lg:px-4 xl:px-5">
      <div className="flex justify-between mx-0 sm:mx-7 items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800">Shop by Brands</h2>
        <div className="flex items-center space-x-3">
          <span className="text-sm text-gray-600">View All Deals</span>
          <button 
            className="p-1 rounded-full bg-transparent border hover:bg-gray-100 transition-colors"
            onClick={() => scroll(-200)}
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button 
            className="p-1 rounded-full bg-transparent border hover:bg-gray-100 transition-colors"
            onClick={() => scroll(200)}
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
      <div className="overflow-x-auto hide-scrollbar" ref={scrollRef}>
        <div className="flex space-x-6 items-center justify-evenly snap-x snap-mandatory">
          {brands.map((brand, index) => (
            <div key={index} className="flex-shrink-0 w-40 snap-start">
              <img
                src={brand.image}
                alt={brand.name}
                className="object-cover w-full h-36 md:h-36 lg:h-40"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Brands;
