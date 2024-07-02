import React from "react";
import { ProductImage } from "./productImage";
import { ProductDescription } from "./productDescription";

export const Product = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 py-4">
      <ProductImage />
      <ProductDescription />
    </div>
  );
};
