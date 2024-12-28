import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { deleteItem } from "./cartSlice";

const DeleteItem = ({ pizzaId, className }) => {
  const dispatch = useDispatch();

  return (
    <Button
      type="small"
      className={className}
      onClick={() => dispatch(deleteItem(pizzaId))}
    >
      Delete
    </Button>
  );
};

export default DeleteItem;
