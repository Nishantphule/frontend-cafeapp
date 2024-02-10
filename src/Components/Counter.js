import '../App.css';
import Button from '@mui/material/Button';

function Counter({ handleDecrease, handleIncrease, noOfItems }) {

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