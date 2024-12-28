import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-4 py-3 bg-yellow-400 uppercase border-b border-stone-200 sm:px-6">
      <Link to="/" className="tracking-widest hover:underline">
        Fast React Pizza
      </Link>

      <SearchOrder />

      <Username />
    </header>
  );
};

export default Header;
