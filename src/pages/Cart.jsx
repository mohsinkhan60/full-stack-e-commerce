import { Minus, Plus, Star, XCircle } from "lucide-react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../Components/store/slices/Cart";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.products);
  const [quantities, setQuantities] = useState(cart.map(() => 1));

  const updateQuantity = (index, delta) => {
    setQuantities(
      quantities.map((q, i) => (i === index ? Math.max(1, q + delta) : q))
    );
  };

  const subtotal = cart.reduce(
    (sum, product, index) => sum + product.price * quantities[index],
    0
  );

  const handleDelete = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="container mx-auto items-center justify-center max-w-full my-20 lg:px-4 xl:px-5">
      <div className="flex flex-col gap-8">
        <div className="lg:w-full">
          <div className="overflow-x-auto">
            {cart.length > 0 ? (
              <table className="min-w-full border">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Product Name
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Price
                    </th>
                    <th className="hidden lg:table-cell px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Quantity
                    </th>
                    <th className="hidden lg:table-cell px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Subtotal
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Delete
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {cart.map((product, index) => (
                    <tr key={product.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center space-x-4">
                          <div className="flex-shrink-0 h-20 w-20">
                            <img
                              className="h-20 w-20 rounded-lg p-1 border object-contain"
                              src={product.image}
                              alt={product.name}
                            />
                          </div>
                          <div className="flex-1 hidden md:table-cell">
                            <div className="text-lg font-medium text-gray-900 truncate">
                              {product.name}
                            </div>
                            <div className="flex items-center">
                              <Star className="h-4 w-4 text-yellow-400" aria-hidden="true" />
                              <span className="ml-1 text-sm text-gray-500">
                                {product.rating}
                              </span>
                              <span className="ml-1 text-sm text-gray-500">
                                ({product.reviews} Reviews)
                              </span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm text-gray-500">
                        ${product.price}
                      </td>
                      <td className="hidden lg:table-cell px-6 py-4 whitespace-nowrap text-right text-sm text-gray-500">
                        <div className="flex items-center justify-end space-x-2">
                          <button
                            onClick={() => updateQuantity(index, -1)}
                            className="p-1 border rounded hover:bg-gray-100"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="w-8 text-center">{quantities[index]}</span>
                          <button
                            onClick={() => updateQuantity(index, 1)}
                            className="p-1 border rounded hover:bg-gray-100"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                      <td className="hidden lg:table-cell px-6 py-4 whitespace-nowrap text-right text-sm text-gray-500">
                        ${(product.price * quantities[index])}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <button onClick={() => handleDelete(product.id)} className="text-black hover:text-red-500">
                          <XCircle className="h-5 w-5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="text-center py-4 text-gray-500">Your cart is empty.</div>
            )}
          </div>
        </div>
        <div className="w-full flex items-center justify-center p-4">
          <div className="max-w-md w-full p-6 rounded-lg border bg-white shadow-md">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Cart Totals</h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">${subtotal.toFixed(2)}</span>
              </div>
              <div className="border-t pt-4">
                <div className="flex justify-between">
                  <span className="font-medium text-gray-900">Total</span>
                  <span className="font-medium text-gray-900">${subtotal.toFixed(2)}</span>
                </div>
              </div>
            </div>
            <button className="mt-6 px-10 bg-orange-500 border border-transparent rounded-md py-3 flex items-center justify-center text-base font-medium text-white hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
              Proceed to checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
