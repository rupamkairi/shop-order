import { createContext, useContext, useEffect, useState } from "react";
import { useAppContext } from "./AppContext";

const INITIAL_PRODUCT_QUANTITY = 1;

const ordersContext = createContext();

export function useOrdersContext() {
  return useContext(ordersContext);
}

export function OrderConextProvider({ children }) {
  const { showOrder, setShowOrder } = useAppContext();
  const [ordersList, setOrdersList] = useState([]);

  function addToCart(product) {
    const foundIndex = ordersList.findIndex((ol) => ol.id === product.id);
    const _orderList = ordersList;

    if (foundIndex !== -1) {
      _orderList[foundIndex].quantity++;
    } else {
      product.quantity = INITIAL_PRODUCT_QUANTITY;
      _orderList.push(product);
    }

    setOrdersList([..._orderList]);
    setShowOrder(true);
  }

  function removeFromCart(product) {
    const foundIndex = ordersList.findIndex((ol) => ol.id === product.id);
    const _orderList = ordersList;
    _orderList.splice(foundIndex, 1);

    setOrdersList([..._orderList]);

    if (_orderList.length === 0) {
      setShowOrder(false);
    }
  }

  function changeProductQuantity(product, newQuantity) {
    const foundIndex = ordersList.findIndex((ol) => ol.id === product.id);
    const _orderList = ordersList;
    _orderList[foundIndex].quantity = newQuantity;

    setOrdersList([..._orderList]);
  }

  function sendOrder() {
    let text = "",
      total = 0;
    ordersList.forEach((el) => {
      const subtotal = parseInt(el.quantity) * parseInt(el.price);
      text += "*" + el.name + "*" + "\n";
      text +=
        " x " +
        "Price. " +
        el.price +
        "Quantity. " +
        el.quantity +
        " = " +
        "*" +
        subtotal +
        "*" +
        "\n\n";

      total += subtotal;
    });
    text += "\n" + "*" + "Total = " + total + "*";
    text = encodeURIComponent(text);

    window.open(`https://wa.me/918513920831?text=${text}`, "_blank");
  }

  return (
    <ordersContext.Provider
      value={{
        ordersList,
        setOrdersList,
        addToCart,
        removeFromCart,
        changeProductQuantity,
        sendOrder,
      }}
    >
      {children}
    </ordersContext.Provider>
  );
}
