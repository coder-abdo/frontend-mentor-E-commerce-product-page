import cartImage from "../../../assets/images/icon-cart.svg";
import { useToggleCartMenu } from "../../../hooks/useToggleCart";
import { useCartStore } from "../../../store";
import { CartMenu } from "./cartMenu";
export const Cart = () => {
  const cartProducts = useCartStore((state) => state.cartproducts);
  const { isCartMenuOpen, toggleCartMenu } = useToggleCartMenu();
  return (
    <div
      onClick={toggleCartMenu}
      className="w-12 h-12 relative flex justify-center items-center hover:cursor-pointer"
    >
      <span className="text-white bg-orange-400 w-6 h-4 rounded-full absolute top-0 right-0 flex justify-center items-center text-sm">
        {cartProducts.length > 0 ? cartProducts[0]?.quantity : 0}
      </span>
      <img src={cartImage} alt="cart icon" className="relative" />
      {isCartMenuOpen && <CartMenu />}
    </div>
  );
};
