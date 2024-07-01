import { useState } from "react";
import { useLightBoxStore } from "../store";


export const useLightBoxHook = (images) => {
  const closeLightBox = useLightBoxStore(state => state.closeLightBox);
  const selectedImage = useLightBoxStore(state => state.selectedImage)
  const changeImage = useLightBoxStore(state => state.changeImage)
  const [currentImage, setCurrentImage] = useState(0)
  const handlePrevImage = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length)
    changeImage(currentImage)
  }
  const handleNextImage = () => {
    setCurrentImage((currentImage + 1) % images.length)
    changeImage(currentImage)
  }
  return { closeLightBox, selectedImage, handleNextImage, handlePrevImage }
}
