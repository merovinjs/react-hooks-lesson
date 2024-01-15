"use client";

import { createContext, useState } from "react";

export type CartContextType = {
  productCartQty: number;
};
const CartContext = createContext<CartContextType | null>(null);
interface Props {}

export const CartContextProvider = (props: Props) => {
  const [productCartQty, setProductCartQty] = useState(0);

  let value = {
    productCartQty,
  };
  return <CartContext.Provider value={value} {...props} />;
};
