import { useCartStore } from "../../../store";

export const CartMenu = () => {
  const cartProducts = useCartStore((state) => state.cartproducts);
  return (
    <div className="absolute right-2 top-14 z-20 min-w-72 w-full px-4 py-2 overflow-hidden min-h-48 h-full shadow-lg rounded-sm">
      <h3 className="text-xl mb-2 border-b border-gray-300">cart</h3>
      {cartProducts.length > 0 ? (
        <div>cart details here</div>
      ) : (
        <div className="text-sm text-black flex justify-center items-center h-full">
          your cart is empty
        </div>
      )}
    </div>
  );
};
