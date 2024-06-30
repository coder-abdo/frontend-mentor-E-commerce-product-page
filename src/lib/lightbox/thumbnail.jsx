
export const Thumnail = ({ thumbnials = [], handleClick }) => {
  return (
    <div className="hidden md:flex md:gap-2 max-w-md w-full">
      {thumbnials.map((thumbnail, idx) => <img key={idx}
        onClick={handleClick}
        src={thumbnail} alt="thumbnial image"
        className="object-cover transition-all rounded hover:border-2 hover:border-orange-500 active:opacity-75 hover:cursor-pointer active:cursor-pointer hover:opacity-45" />)}
    </div>
  )
}

