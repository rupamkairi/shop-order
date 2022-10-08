import React from "react";
import { useAppContext } from "../contexts/AppContext";
import { useOrdersContext } from "../contexts/OrdersContext";

export default function ProductsLayout() {
  const { setShowOrder, products } = useAppContext();
  const { ordersList, setOrdersList, addToCart, removeFromCart } =
    useOrdersContext();

  return (
    <div className="container mx-auto">
      <p>Products</p>

      <div className="bg-white">
        <div className="mx-auto">
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <p>
                        <span aria-hidden="true" className=" inset-0" />
                        {product.name}
                      </p>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.color}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    {product.price}
                  </p>
                </div>
                <div className="text-center my-2">
                  <button
                    className="text-sm text-gray-500 rounded-full border-gray-500 border px-6 py-1"
                    onClick={() => {
                      addToCart(product);
                    }}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={() => {
          setShowOrder(true);
        }}
      >
        Orders
      </button>
    </div>
  );
}
