import { useLightBoxStore, useToggleMenuStore } from "../store";
import { useMediaQuery } from "./useMediaQuery";

export const useAppHooks = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isOpen = useToggleMenuStore((state) => state.isOpen);
  const isClicked = useLightBoxStore((state) => state.isClicked);
  return { isMobile, isOpen, isClicked };
};
