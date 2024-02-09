import { useCartContext } from "../Context/cartContext";
import CartComponent from "../Components/CartCard";

export default function Cart() {

  const { cart } = useCartContext();
  console.log(cart)
  return (
    <div className="container-cart">
      {cart.map((data) => (
        (< CartComponent
          key={data.id}
          item={data}
          id={data.id}
        />)
      ))}
    </div>
  );
}
