import closeMenuImage from "../assets/images/icon-close.svg";
import { useToggleMenuStore } from "../store";
export const Drawer = () => {
  const closeMenu = useToggleMenuStore((state) => state.closeMenu);
  return (
    <div className="w-80 h-screen bg-white fixed top-0 left-0 bottom-0 z-20">
      <button
        aria-label="Close Menu"
        className="absolute top-4 left-4 border-none outline-none w-8 h-8 bg-transparent"
        onClick={() => closeMenu()}
      >
        <img src={closeMenuImage} alt="close menu" />
      </button>
      <ul className="gap-8 capitalize flex flex-col pt-20">
        <li>
          <a
            className="px-4 transition-colors text-gray-400 text-lg hover:text-gray-800"
            href="!#"
          >
            collections
          </a>
        </li>
        <li>
          <a
            className="px-4 transition-colors text-gray-400 text-lg hover:text-gray-800"
            href="!#"
          >
            men
          </a>
        </li>
        <li>
          <a
            className="px-4 transition-colors text-gray-400 text-lg hover:text-gray-800"
            href="!#"
          >
            women
          </a>
        </li>
        <li>
          <a
            className="px-4 transition-colors text-gray-400 text-lg hover:text-gray-800 "
            href="!#"
          >
            about
          </a>
        </li>
        <li>
          <a
            className="px-4 transition-colors text-gray-400 text-lg hover:text-gray-800"
            href="!#"
          >
            contact
          </a>
        </li>
      </ul>
    </div>
  );
};
