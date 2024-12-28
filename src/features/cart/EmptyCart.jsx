import LinkButton from "../../ui/LinkButton";
import pizza from "../../assets/pizza.svg";

function EmptyCart() {
  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>
      <p className="mt-7 text-center font-semibold">
        Your cart is empty now. Start adding some pizzas :)
      </p>
      <div className="flex justify-center md:mt-12 sm:8 mt-4">
        <img src={pizza} alt="Pizza" className="h-72 w-72" />
      </div>
    </div>
  );
}

export default EmptyCart;
