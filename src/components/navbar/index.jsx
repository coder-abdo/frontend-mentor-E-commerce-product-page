import { Cart } from "./cart/cart";
import { Links } from "./links";
import { Logo } from "./logo";
import { User } from "./user";
import menuBar from "../../assets/images/icon-menu.svg";
import { useToggleMenuStore } from "../../store";

export const Navbar = () => {
  const openMenu = useToggleMenuStore((state) => state.openMenu);
  return (
    <nav className="flex justify-around items-center border-b border-gray-300 px-4 h-16">
      <button
        className="flex justify-center items-center border-none outline-none md:hidden bg-transparent"
        aria-label="Open menu"
        onClick={openMenu}
      >
        <img src={menuBar} alt="menubar icon" />
      </button>
      <div className="flex items-center gap-4">
        <Logo />
        <Links />
      </div>
      <div className="flex items-center gap-4">
        <Cart />
        <User />
      </div>
    </nav>
  );
};
