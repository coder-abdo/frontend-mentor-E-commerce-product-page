import { useLightBoxStore } from "../../store"
import { LightBoxGallery } from "./lightBoxGallery"
import { Thumnails } from "./thumbnails"

export const LightBox = ({
  images,
  thumbnials,
  isMobile,
}) => {
  const openLightBox = useLightBoxStore(state => state.openLightBox)
  const isClicked = useLightBoxStore(state => state.isClicked)
  const handleOpenLightBox = () => {
    if (!isMobile) {
      openLightBox()
    }
  }
  const selectedImage = useLightBoxStore(state => state.selectedImage)
  return (
    <>
      {isClicked && !isMobile ? <LightBoxGallery images={images} thumbnials={thumbnials} /> : (<div className="flex flex-col max-w-md w-full gap-4 pl-4">
        <img
          onClick={handleOpenLightBox}
          src={images[selectedImage]} alt="image of product" className="cursor-pointer rounded-lg w-full" />
        {!isMobile && thumbnials && <Thumnails thumbnials={thumbnials} />}
      </div>)}
    </>
  )
}

