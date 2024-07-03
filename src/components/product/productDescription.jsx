import React from "react";
import { ProductBtn } from "./prdocutBtn";
import plusIcon from "../../assets/images/icon-plus.svg";
import minusIcon from "../../assets/images/icon-minus.svg";
import { AddToCartBtn } from "./addToCartBtn";
import { useCartStore } from "../../store";

export const ProductDescription = () => {
  const products = useCartStore((state) => state.cartproducts);
  const [productQuantity, setProductQuantity] = React.useState(
    products[0].quantity || 0,
  );
  const addProductToCart = useCartStore((state) => state.addToCart);
  const handleAddToCart = () => {
    addProductToCart({
      title: "fall limited edition sneakers",
      quantity: productQuantity,
      price: 125,
    });
  };
  return (
    <div className="px-4 py-10 flex flex-col capitalize">
      <h3 className="text-sm mb-2 font-semibold text-gray-600">
        sneakers company
      </h3>
      <h1 className="text-3xl font-bold">fall limited edition sneakers</h1>
      <p className="text-gray-600 text-sm md:my-16 my-4">
        these low-profile sneakers are your perfect casual wear companion.
        feauture a durable rubber outer sole, they'll withstand everything the
        weather can offer
      </p>
      <div className="flex flex-row md:flex-col">
        <div className="flex gap-3">
          <h5 className="text-lg font-bold">$125.00</h5>
          <div className="py-1 px-2 text-xs rounded bg-black text-white flex justify-center items-center">
            50%
          </div>
        </div>
        <h5 className="text-sm text-gray-400 line-through">$250.00</h5>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-12 md:mt-20 mt-6 gap-4">
        <div className="flex justify-between items-center my-2 px-4 md:px-0">
          <ProductBtn
            handleClick={() => {
              if (productQuantity > 0) {
                setProductQuantity(productQuantity - 1);
              }
            }}
          >
            <img src={minusIcon} alt="minus icon" />
          </ProductBtn>
          <div className="text-xl font-bold">{productQuantity}</div>
          <ProductBtn
            handleClick={() => {
              setProductQuantity(productQuantity + 1);
            }}
          >
            <img src={plusIcon} alt="plus icon" />
          </ProductBtn>
        </div>
        <AddToCartBtn handleClick={handleAddToCart} />
      </div>
    </div>
  );
};
