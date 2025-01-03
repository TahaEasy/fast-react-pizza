import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { addItem, getCurrentQuantityById } from "../cart/cartSlice";
import DeleteItem from "../cart/DeleteItem";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";

function MenuItem({ pizza }) {
  const dispatch = useDispatch();
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  const currentQuantity = useSelector(getCurrentQuantityById(id));
  const isInCart = currentQuantity > 0;

  const handleAddToCart = (e) => {
    e.preventDefault();
    const newItem = {
      pizzaId: id,
      name: name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice,
    };
    dispatch(addItem(newItem));
  };

  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? "opacity-70 grayscale" : ""}`}
      />
      <div className="flex grow flex-col justify-between">
        <div>
          <p className="font-medium">{name}</p>
          <p className="text-sm italic text-stone-500 capitalize">
            {ingredients.join(", ")}
          </p>
        </div>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">
              {isInCart
                ? `${currentQuantity}× ${formatCurrency(unitPrice)}`
                : formatCurrency(unitPrice)}
            </p>
          ) : (
            <p className="text-sm uppercase font-medium text-red-600">
              Sold out
            </p>
          )}

          {isInCart && <DeleteItem pizzaId={id} className="bg-orange-500" />}

          {!soldOut && !isInCart ? (
            <Button type="small" onClick={handleAddToCart}>
              Add
            </Button>
          ) : null}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
