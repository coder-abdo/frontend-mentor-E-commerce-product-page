import { useCartStore } from "../../../store";
import cartProductImage from "../../../assets/images/image-product-1-thumbnail.jpg";
import deleteProductIcon from "../../../assets/images/icon-delete.svg";

export const CartMenu = () => {
  const cartProducts = useCartStore((state) => state.cartproducts);
  const deleteProduct = useCartStore((state) => state.deleteItem);
  return (
    <div className="absolute -right-8 md:right-2 top-14 min-w-64 md:min-w-72 w-full px-4 py-2 overflow-hidden min-h-48 h-full shadow-black/30 shadow-md rounded-sm bg-white z-30">
      <h3 className="text-xl mb-2 border-b border-gray-300">cart</h3>
      {cartProducts.length > 0 ? (
        <div className="flex flex-col gap-6">
          <div className="flex gap-2 items-center">
            <img
              src={cartProductImage}
              alt="product image"
              className="w-12 h-12 rounded"
            />
            <div className="flex flex-col gap-2 md:pt-4">
              <h5 className="text-sm text-gray-600">{cartProducts[0].title}</h5>
              <p className="text-sm flex gap-2">
                <span>
                  {cartProducts[0].price}x ${cartProducts[0].quantity}
                </span>
                <span className="text-black font-bold">
                  ${cartProducts[0].price * cartProducts[0].quantity}
                </span>
              </p>
            </div>
            <button
              className="bg-transparent border-none outline-none"
              onClick={deleteProduct}
            >
              <img src={deleteProductIcon} alt="delete product icon" />
            </button>
          </div>
          <button className="py-2 px-6 bg-orange-500 text-black text-sm">
            checkout
          </button>
        </div>
      ) : (
        <div className="text-sm text-black flex justify-center items-center h-full">
          your cart is empty
        </div>
      )}
    </div>
  );
};
