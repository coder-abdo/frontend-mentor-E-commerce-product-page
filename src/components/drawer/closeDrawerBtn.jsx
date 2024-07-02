import closeMenuImage from "../../assets/images/icon-close.svg";
import { useToggleMenuStore } from "../../store";
export const CloseDrawerBtn = () => {
  const closeMenu = useToggleMenuStore((state) => state.closeMenu);
  return (
    <button
      aria-label="Close Menu"
      className="absolute top-4 left-4 border-none outline-none w-8 h-8 bg-transparent"
      onClick={() => closeMenu()}
    >
      <img src={closeMenuImage} alt="close menu" />
    </button>
  );
};
