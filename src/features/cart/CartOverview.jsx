import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);

  if (!totalCartQuantity) return null;

  return (
    <div className="flex items-center justify-between bg-stone-800 text-stone-200 uppercase px-4 py-4 sm:px-6 md:text-base text-sm">
      <p className="text-stone-300 font-semibold space-x-4 sm:space-x-6">
        <span>
          {totalCartQuantity ? `${totalCartQuantity} pizzas` : "No Pizza Yet"}
        </span>
        <span>{totalCartPrice ? formatCurrency(totalCartPrice) : null}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
