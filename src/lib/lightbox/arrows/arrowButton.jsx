
export const ArrowButton = ({
  children,
  handleClick,
  dir
}) => {
  return (
    <button className={`bg-white w-10 h-10 flex justify-center items-center group rounded-full border-none outline-none absolute top-1/3 ${dir === "left" ? "-left-5" : "-right-5"}`} onClick={handleClick}>
      {children}
    </button>
  )
}

