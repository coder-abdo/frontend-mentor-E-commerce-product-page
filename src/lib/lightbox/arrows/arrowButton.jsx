export const ArrowButton = ({ children, handleClick, dir }) => {
  return (
    <button
      className={`bg-white w-10 h-10 flex justify-center items-center group rounded-full border-none outline-none absolute top-1/2 -translate-y-1/2 md:top-1/3 md:translate-y-0 ${dir === "left" ? "md:-left-5 left-2" : "md:-right-5 right-3"}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};
