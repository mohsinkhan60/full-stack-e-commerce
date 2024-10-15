import { ShoppingCart, Star } from "lucide-react";

/* eslint-disable react/prop-types */
const products = [
  {
    id: 1,
    name: 'Taylor Farms Broccoli Florets Vegetables',
    image: '/Home/product-img1.png',
    originalPrice: 28.99,
    discountedPrice: 14.99,
    rating: 4.8,
    reviews: '17k',
    seller: 'Lucky Supermarket',
    sold: 18,
    total: 35,
  },
  {
    id: 2,
    name: 'Taylor Farms Broccoli Florets Vegetables',
    image: '/Home/product-img2.png',
    originalPrice: 28.99,
    discountedPrice: 14.99,
    rating: 4.8,
    reviews: '17k',
    seller: 'Lucky Supermarket',
    sold: 18,
    total: 35,
  },
  {
    id: 3,
    name: 'Taylor Farms Broccoli Florets Vegetables',
    image: '/Home/product-img3.png',
    originalPrice: 28.99,
    discountedPrice: 14.99,
    rating: 4.8,
    reviews: '17k',
    seller: 'Lucky Supermarket',
    sold: 18,
    total: 35,
  },
  {
    id: 4,
    name: 'Taylor Farms Broccoli Florets Vegetables',
    image: '/Home/product-img1.png',
    originalPrice: 28.99,
    discountedPrice: 14.99,
    rating: 4.8,
    reviews: '17k',
    seller: 'Lucky Supermarket',
    sold: 18,
    total: 35,
  },
  {
    id: 5,
    name: 'Taylor Farms Broccoli Florets Vegetables',
    image: '/Home/product-img5.png',
    originalPrice: 28.99,
    discountedPrice: 14.99,
    rating: 4.8,
    reviews: '17k',
    seller: 'Lucky Supermarket',
    sold: 18,
    total: 35,
  },
  {
    id: 6,
    name: 'Taylor Farms Broccoli Florets Vegetables',
    image: '/Home/product-img6.png',
    originalPrice: 28.99,
    discountedPrice: 14.99,
    rating: 4.8,
    reviews: '17k',
    seller: 'Lucky Supermarket',
    sold: 18,
    total: 35,
  },
]

const ProductCard = ({ title, imageSrc, bgColor }) => {
  return (
    <div className={`rounded-lg p-4 ${bgColor} bg-opacity-50 shadow-md`}>
      <h2 className="text-xl md:text-2xl font-bold mb-4">{title}</h2>
      <div className="flex flex-col md:flex-row items-center justify-between">
        <img src={imageSrc} alt={title} className="w-full h-auto object-cover mb-4 md:mb-0 md:w-1/2" />
        <div className="flex flex-col items-center md:items-end space-y-4">
          <button className="bg-green-500 text-white rounded-full px-4 py-2 hover:bg-green-600 transition-colors">
            Shop Now →
          </button>
        </div>
      </div>
    </div>
  );
};

const Product = ({ product }) => (
  <div className="bg-transparent p-4 rounded-lg border hover:border-green-500 my-10">
    <div className="relative">
      <img src={product.image} alt={product.name} className="w-full h-48 object-contain mb-4" />
      <button className="absolute -top-2 -right-2 bg-transparent border hover:bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-semibold flex items-center">
        Add <ShoppingCart className="ml-1 w-4 h-4" />
      </button>
    </div>
    <div className="mt-4">
      <div className="flex justify-between items-baseline">
        <span className="text-gray-500 line-through text-sm">${product.originalPrice.toFixed(2)}</span>
        <span className="text-lg font-bold">${product.discountedPrice.toFixed(2)}</span>
      </div>
      <div className="text-sm text-gray-500">/Qty</div>
      <div className="flex items-center mt-1">
        <Star className="w-4 h-4 text-yellow-400 fill-current" />
        <span className="ml-1 text-sm">{product.rating}</span>
        <span className="ml-1 text-sm text-gray-500">({product.reviews})</span>
      </div>
      <h3 className="text-md font-semibold mt-2">{product.name}</h3>
      <div className="flex items-center mt-1">
        <ShoppingCart className="w-4 h-4 text-green-600" />
        <span className="ml-1 text-sm text-gray-600">By {product.seller}</span>
      </div>
      <div className="text-sm text-gray-500 mt-1">
        Sold: {product.sold}/{product.total}
      </div>
    </div>
  </div>
)

export const FlashSales = () => {
  return (
    <div className="container mx-auto max-w-full my-10 px-2 lg:px-4 xl:px-5">
       <h1 className="text-4xl my-6">Flash Sales Today</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <ProductCard
          title="Daily Snacks"
          imageSrc="/Home/flash1.png"
          bgColor="bg-green-100"
        />
        <ProductCard
          title="Fresh Vegetables"
          imageSrc="/Home/flash2.png"
          bgColor="bg-red-100"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default FlashSales;
