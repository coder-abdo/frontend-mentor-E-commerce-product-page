import { useLightBoxStore } from "../../store"
import { LightBoxGallery } from "./lightBoxGallery"
import { Thumnail } from "./thumbnail"

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
  return (
    <>
      {isClicked && !isMobile ? <LightBoxGallery images={images} thumbnials={thumbnials} /> : (<div className="flex flex-col max-w-md w-full">
        <img
          onClick={handleOpenLightBox}
          src={images[0]} alt="image of product" className="cursor-pointer max-w-md w-full" />
        {!isMobile && thumbnials && <Thumnail thumbnials={thumbnials} />}
      </div>)}
    </>
  )
}

