import { useSelector } from "react-redux";

const Username = () => {
  const username = useSelector((store) => store.user.username);

  if (!username) return null;

  return (
    <div className="hidden md:block text-sm font-semibold">{username}</div>
  );
};

export default Username;
