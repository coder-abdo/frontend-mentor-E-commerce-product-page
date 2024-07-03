import { Thumnails } from "./thumbnails";
import { ArrowButton } from "./arrows/arrowButton";
import { useLightBoxHook } from "../../hooks/useLightBoxHook";
import { CloseButton } from "./closeButton";

export const LightBoxGallery = ({ images = [], thumbnials = [] }) => {
  const { closeLightBox, selectedImage, handleNextImage, handlePrevImage } =
    useLightBoxHook(images);
  return (
    <div className="flex justify-center pb-4 items-center relative z-20 flex-col max-w-md w-full gap-4 mx-auto">
      <img
        src={images[selectedImage]}
        alt="image of product"
        className="w-full h-full object-cover"
      />
      <Thumnails thumbnials={thumbnials} />
      <ArrowButton dir={"left"} handleClick={handlePrevImage}>
        <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
          <path
            className="group-hover:stroke-orange-500 transition-colors"
            d="M11 1 3 9l8 8"
            stroke="#1D2026"
            strokeWidth="3"
            fill="none"
            fillRule="evenodd"
          />
        </svg>
      </ArrowButton>
      <ArrowButton dir={"right"} handleClick={handleNextImage}>
        <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
          <path
            className="group-hover:stroke-orange-500 transition-colors"
            d="m2 1 8 8-8 8"
            stroke="#1D2026"
            strokeWidth="3"
            fill="none"
            fillRule="evenodd"
          />
        </svg>
      </ArrowButton>
      <CloseButton handleClick={closeLightBox} />
    </div>
  );
};
