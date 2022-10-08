import React from "react";
import { OrderConextProvider } from "../contexts/OrdersContext";
import OrdersLayout from "../layouts/OrdersLayout";
import ProductsLayout from "../layouts/ProductsLayout";

export default function Index() {
  return (
    <div>
      <OrderConextProvider>
        <ProductsLayout />
        <OrdersLayout />
      </OrderConextProvider>
    </div>
  );
}
