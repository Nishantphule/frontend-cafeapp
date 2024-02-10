import { useEffect, useState } from "react";
import '../App.css';
import Button from '@mui/material/Button';
import { useCartContext } from "../Context/cartContext";
import { useAppContext } from "../Context/productsContext";

function Counter({ item, id }) {
  const { addToCart } = useCartContext();
  const { toggleAmount } = useAppContext();
  const [noOfItems, setNoOfItems] = useState(item.quantity);

  useEffect(() => {
    toggleAmount(id, noOfItems)
    addToCart(item, noOfItems, noOfItems * item.price)
    // eslint-disable-next-line
  }, [noOfItems])


  function handleIncrease() {
    setNoOfItems(noOfItems + 1)
  }

  const handleDecrease = () => {
    setNoOfItems(noOfItems - 1)
  }


  return (
    <div className='cart-counter'>
      {noOfItems > 0

        ? <>

          <Button variant='contained' size='small' title="subtract" onClick={() => handleDecrease()} color="error" aria-label="subtract">-</Button>

          <Button>{noOfItems}</Button>


          <Button variant='contained' size='small' title="add" onClick={() => handleIncrease()} color="success" aria-label="add">+</Button>
        </>

        : <>
          <Button variant='contained' size='medium' title="addToCart" onClick={() => handleIncrease()} color="primary" aria-label="add To Cart">
            Add to Cart
          </Button>
        </>

      }
    </div>
  );
}

export { Counter }