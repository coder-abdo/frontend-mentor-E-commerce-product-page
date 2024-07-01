import React from 'react'

export const Thumbnail = ({
  handleClick,
  thumbnail,
  isActive
}) => {
  return (
    <div className={`w-full h-full transition-colors border-4 border-transparent rounded-md hover:border-orange-400 hover:cursor-pointer  ${isActive ? "border-orange-600" : ""}`}>
      <img
        onClick={handleClick}
        src={thumbnail} alt="thumbnial image"
        className={`w-full h-full object-cover transition-colors rounded-md  hover:opacity-65 ${isActive ? "opacity-45" : ""}`} />
    </div>
  )
}

