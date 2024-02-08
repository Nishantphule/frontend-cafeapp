import { useEffect, useState } from "react";
import '../App.css';
import Button from '@mui/material/Button';


function Counter() {

  const [noOfItems, setNoOfItems] = useState(0);

  useEffect(() => {

    console.log("Itemis updated:", noOfItems)
  }, [noOfItems])

  return (
    <div className='cart-counter'>
      {noOfItems > 0

        ? <>

          <Button variant='outlined' size='large' title="subtract" onClick={() => setNoOfItems(noOfItems - 1)} color="error" aria-label="subtract">-</Button>

          <Button>{noOfItems}</Button>


          <Button variant='outlined' size='large' title="add" onClick={() => setNoOfItems(noOfItems + 1)} color="success" aria-label="add">+</Button>
        </>

        : <>
          <Button variant='outlined' size='large' title="addToCart" onClick={() => setNoOfItems(noOfItems + 1)} color="primary" aria-label="add To Cart">
            Add to Cart
          </Button>
        </>

      }
    </div>
  );
}

export { Counter }