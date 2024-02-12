import '../App.css';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { toast } from 'react-toastify';

// Counter for menu item card , to add item to cart and handle the quantity 
function Counter({ handleDecrease, handleIncrease, noOfItems, name }) {

  return (
    <div className='cart-counter'>
      {noOfItems > 0

        ? <>

          <IconButton variant='contained' title="subtract" onClick={() => handleDecrease()} color="error" aria-label="subtract"><RemoveIcon /></IconButton>

          <Button size='small' variant='outlined'>{noOfItems}</Button>

          <IconButton variant='outlined' title="add" onClick={() => handleIncrease()} color="success" aria-label="add"><AddIcon /></IconButton>

        </>

        : <>
          <Button variant='contained' title="Add to cart"
            onClick={() => {
              handleIncrease()
              toast.success(`${name} added to Cart`)
            }}
            color="primary" aria-label="add To Cart">
            Add to Cart
          </Button>
        </>

      }
    </div>
  );
}

export { Counter }