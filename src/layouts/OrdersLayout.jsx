import { Dialog, Transition } from "@headlessui/react";
import { useAppContext } from "../contexts/AppContext";
import React, { Fragment } from "react";
import { useOrdersContext } from "../contexts/OrdersContext";

export default function OrdersLayout() {
  const { showOrder, setShowOrder } = useAppContext();
  const {
    ordersList,
    setOrdersList,
    removeFromCart,
    changeProductQuantity,
    sendOrder,
  } = useOrdersContext();

  return (
    <div>
      <Transition appear show={showOrder} as={Fragment}>
        <Dialog
          as="div"
          onClose={() => setShowOrder(false)}
          className="relative z-50"
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed h-screen top-0 right-0 overflow-y-auto">
            <div className="flex min-h-full">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-x-95"
                enterTo="opacity-100 scale-x-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-x-100"
                leaveTo="opacity-0 scale-x-95"
              >
                <Dialog.Panel className="w-full relative max-w-sm bg-white">
                  {/* <pre>{JSON.stringify(ordersList, null, 2)}</pre> */}
                  {ordersList.map((product, key) => (
                    <div
                      key={product.id}
                      className="group relative grid grid-cols-3 gap-3 my-4 px-2 "
                    >
                      <div className="col-span-1 overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75">
                        <img
                          src={product.imageSrc}
                          alt={product.imageAlt}
                          className="object-cover object-center"
                        />
                      </div>
                      <div className="mt-4 col-span-2 ">
                        <div className="flex justify-between">
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
                            <p className="text-sm font-medium text-gray-900">
                              {product.price}
                            </p>
                          </div>
                          <div>
                            <p>{product.price * product.quantity}</p>
                          </div>
                        </div>
                        <div className="text-center my-2">
                          <div className="my-2 flex justify-center items-center">
                            <button
                              onClick={() => {
                                changeProductQuantity(
                                  product,
                                  parseInt(product.quantity) - 1
                                );
                              }}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1}
                                stroke="currentColor"
                                className="w-6 h-6"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                            </button>
                            <input
                              type="number"
                              min={1}
                              max={20}
                              className="w-8 text-center mx-4"
                              value={product.quantity}
                              onChange={(e) => {
                                if (e.target.value > 0) {
                                  changeProductQuantity(
                                    product,
                                    parseInt(e.target.value)
                                  );
                                }
                              }}
                            />
                            <button
                              onClick={() => {
                                changeProductQuantity(
                                  product,
                                  parseInt(product.quantity) + 1
                                );
                              }}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1}
                                stroke="currentColor"
                                className="w-6 h-6"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                            </button>
                          </div>

                          <button
                            className="text-sm text-gray-500 rounded-full border-gray-500 border px-6 py-1"
                            onClick={() => {
                              removeFromCart(product);
                            }}
                          >
                            Remove From Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}

                  <div className="sticky p-2 bottom-0">
                    <button
                      className="w-full bg-gray-700 py-4 text-white text-center uppercase"
                      onClick={() => {
                        sendOrder();
                      }}
                    >
                      Send Order
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
