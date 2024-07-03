import { useLightBoxHook } from "../../hooks/useLightBoxHook";
import { useLightBoxStore } from "../../store";
import { ArrowButton } from "./arrows/arrowButton";
import { LightBoxGallery } from "./lightBoxGallery";
import { Thumnails } from "./thumbnails";

export const LightBox = ({ images, thumbnials, isMobile }) => {
  const { handleNextImage, handlePrevImage } = useLightBoxHook(images);
  const openLightBox = useLightBoxStore((state) => state.openLightBox);
  const isClicked = useLightBoxStore((state) => state.isClicked);
  const handleOpenLightBox = () => {
    if (!isMobile) {
      openLightBox();
    }
  };
  const selectedImage = useLightBoxStore((state) => state.selectedImage);
  return (
    <>
      {isClicked && !isMobile ? (
        <LightBoxGallery images={images} thumbnials={thumbnials} />
      ) : (
        <div className="flex flex-col max-w-md w-full gap-4 md:pl-4 relative">
          <img
            onClick={handleOpenLightBox}
            src={images[selectedImage]}
            alt="image of product"
            className="cursor-pointer w-full"
          />
          {isMobile && (
            <>
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
            </>
          )}

          {!isMobile && thumbnials && <Thumnails thumbnials={thumbnials} />}
        </div>
      )}
    </>
  );
};
