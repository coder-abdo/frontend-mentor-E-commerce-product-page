import { useState } from "react";

export const useToggleCartMenu = () => {
  const [isCartMenuOpen, setIsCartMenuOpen] = useState(false);
  const toggleCartMenu = () => setIsCartMenuOpen(!isCartMenuOpen);
  return { isCartMenuOpen, toggleCartMenu };
};
