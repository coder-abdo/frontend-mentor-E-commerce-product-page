import closeMenuImage from "../../assets/images/icon-close.svg";
import { useToggleMenuStore } from "../../store";
import { ListItems } from "./listItems";
export const Drawer = () => {
  const closeMenu = useToggleMenuStore((state) => state.closeMenu);
  const listItemNames = ["collections", "men", "women", "about", "contact"];
  return (
    <div className="w-80 h-screen bg-white fixed top-0 left-0 bottom-0 z-20">
      <button
        aria-label="Close Menu"
        className="absolute top-4 left-4 border-none outline-none w-8 h-8 bg-transparent"
        onClick={() => closeMenu()}
      >
        <img src={closeMenuImage} alt="close menu" />
      </button>
      <ListItems listItems={listItemNames} />
    </div>
  );
};
