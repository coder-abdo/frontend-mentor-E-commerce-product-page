import userImage from "../../assets/images/image-avatar.png";
export const User = () => {
  return (
    <div className="h-12 w-12 rounded-full border-2 border-transparent transition-colors hover:cursor-pointer hover:border-orange-400">
      <img src={userImage} alt="user avatar" className="h-full w-full" />
    </div>
  );
};
