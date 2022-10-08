import { createContext, useContext, useState } from "react";
import productsData from "../data/productsData.json";

const appContext = createContext();

export function useAppContext() {
  return useContext(appContext);
}

export function AppConextProvider({ children }) {
  const [products, setProducts] = useState(productsData);
  const [showOrder, setShowOrder] = useState(false);

  return (
    <appContext.Provider
      value={{ products, setProducts, showOrder, setShowOrder }}
    >
      {children}
    </appContext.Provider>
  );
}
