"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

import { useGetAllProducts } from "../hooks/product.hook";

type TProductContext = {
  maxPrice: number | null;
  setMaxPrice: (price: number) => void;
  queryPriceRange: number[];
  setQueryPriceRange: (price: number[]) => void;
};

const ProductContext = createContext<TProductContext | undefined>(undefined);

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [maxPrice, setMaxPrice] = useState<number | null>(null);
  const [queryPriceRange, setQueryPriceRange] = useState<number[]>([]);

  const { data: products } = useGetAllProducts();

  useEffect(() => {
    setMaxPrice(products?.meta?.maxPrice);
  }, [products]);

  return (
    <ProductContext.Provider
      value={{ maxPrice, setMaxPrice, queryPriceRange, setQueryPriceRange }}
    >
      {children}
    </ProductContext.Provider>
  );
};

//? Custom Hook for Using Context
export const useProduct = (): TProductContext => {
  const context = useContext(ProductContext);

  if (!context) {
    throw new Error("useProduct must be used within a ProductProvider");
  }

  return context;
};
