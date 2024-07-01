import { useLightBoxStore } from "../../../store"
import { Thumbnail } from "./thumbnail"

export const Thumnails = ({ thumbnials = [] }) => {
  const showImage = useLightBoxStore(state => state.changeImage)
  const selectedImage = useLightBoxStore(state => state.selectedImage)
  return (
    <div className="hidden md:grid md:gap-2 md:grid-cols-4 px-4">
      {thumbnials.map((thumbnail, idx) => <Thumbnail
        isActive={selectedImage === idx}
        handleClick={() => showImage(idx)} thumbnail={thumbnail} key={idx} />)}
    </div>
  )
}
