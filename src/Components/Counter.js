import '../App.css';
import Button from '@mui/material/Button';


function Counter({ handleDecrease, handleIncrease, noOfItems }) {

  return (
    <div className='cart-counter'>
      {noOfItems > 0

        ? <>

          <Button variant='contained' title="subtract" onClick={() => handleDecrease()} color="error" aria-label="subtract">-</Button>

          <Button size='small' variant='text'>{noOfItems}</Button>

          <Button variant='contained' title="add" onClick={() => handleIncrease()} color="success" aria-label="add">+</Button>

        </>

        : <>
          <Button variant='contained' title="addToCart" onClick={() => handleIncrease()} color="primary" aria-label="add To Cart">
            Add to Cart
          </Button>
        </>

      }
    </div>
  );
}

export { Counter }