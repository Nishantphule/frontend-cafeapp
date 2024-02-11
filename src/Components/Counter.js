import '../App.css';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';


function Counter({ handleDecrease, handleIncrease, noOfItems }) {

  return (
    <div className='cart-counter'>
      {noOfItems > 0

        ? <>

          <IconButton variant='contained' title="subtract" onClick={() => handleDecrease()} color="error" aria-label="subtract"><RemoveIcon /></IconButton>

          <Button size='small' variant='outlined'>{noOfItems}</Button>

          <IconButton variant='outlined' title="add" onClick={() => handleIncrease()} color="success" aria-label="add"><AddIcon /></IconButton>

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