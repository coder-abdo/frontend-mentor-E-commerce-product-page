import React from 'react'
import { useMediaQuery } from '../../hooks/useMediaQuery'
import firstProductImage from '../../assets/images/image-product-1.jpg';
import secondProductImage from '../../assets/images/image-product-2.jpg';
import thirdproductImage from '../../assets/images/image-product-3.jpg';
import fourthProductImage from '../../assets/images/image-product-4.jpg'
import firstProductThumbnailImage from '../../assets/images/image-product-1-thumbnail.jpg'
import secondProductThumbnailImage from '../../assets/images/image-product-2-thumbnail.jpg'
import thirdProductThumbnailImage from '../../assets/images/image-product-3-thumbnail.jpg'
import fourthProductThumbnailImage from '../../assets/images/image-product-4-thumbnail.jpg'
import { LightBox } from '../../lib/lightbox';
export const ProductImage = () => {
  const isMobile = useMediaQuery("(max-width: 768px)")
  const images = [firstProductImage, secondProductImage, thirdproductImage, fourthProductImage];
  const thumbnials = [firstProductThumbnailImage, secondProductThumbnailImage, thirdProductThumbnailImage, fourthProductThumbnailImage]
  return (
    <div className='flex flex-col gap-4'>
      <LightBox thumbnials={thumbnials} images={images} isMobile={isMobile} />
    </div>
  )
}

