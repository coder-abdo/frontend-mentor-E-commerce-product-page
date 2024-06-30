import { Thumnail } from './thumbnail'
import leftArrow from '../../assets/images/icon-previous.svg'
import rightArrow from '../../assets/images/icon-next.svg'
import closeButton from '../../assets/images/icon-close.svg'
import { useLightBoxStore } from '../../store'
import { useState } from 'react'

export const LightBoxGallery = ({
  images = [],
  thumbnials = [],
}) => {
  const closeLightBox = useLightBoxStore(state => state.closeLightBox);
  const [currentImage, setCurrentImage] = useState(0)
  const handlePrevImage = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length)
  }
  const handleNextImage = () => {
    setCurrentImage((currentImage + 1) % images.length)
  }
  return (
    <div className="h-full min-h-screen w-full flex flex-col justify-center items-center">
      <div className='absolute top-0 left-0 right-0 bottom-0 z-10 bg-black/70 w-full min-h-dvh h-full' />
      <div className='flex justify-center items-center relative z-20 flex-col max-w-md w-full gap-4'>
        <img src={images[currentImage]} alt="image of product" className="w-full h-full object-cover " />
        <Thumnail thumbnials={thumbnials} />
        <button className="bg-transparent border-none outline-none absolute left-0 top-1/2" onClick={handlePrevImage}>
          <img src={leftArrow} alt="left arrow button" />
        </button>
        <button className='absolute bg-transparent border-none outlien-none top-1/2 right-0' onClick={handleNextImage}>
          <img src={rightArrow} alt="right arrow button" />
        </button>
        <button className='absolute right-0 top-0 border-none outline-none bg-transparent' onClick={closeLightBox}>
          <img src={closeButton} alt="close button" />
        </button>
      </div>
    </div>
  )
}

