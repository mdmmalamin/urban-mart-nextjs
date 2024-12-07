"use client";

import CartSolid from "@/src/assets/icons/CartSolid";
import React from "react";

const AddToCart = ({ id }: { id: string }) => {
  return (
    <button
      className="border-2 p-1 rounded-lg bg-warning-500 shadow-lg hover:shadow-default-200 duration-300 absolute bottom-3 right-3"
      onClick={() => console.log(id)}
    >
      <CartSolid size="size-5" />
    </button>
  );
};

export default AddToCart;
