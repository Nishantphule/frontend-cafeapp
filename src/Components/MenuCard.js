import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import "../App.css";
import { Counter } from "./Counter";
import { useEffect, useState } from "react";
import { useCartContext } from "../Context/cartContext";
import { useAppContext } from "../Context/productsContext";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { toast } from 'react-toastify';

// Displays the products in the backend in a Card format
export default function MediaCard({ item, id }) {

  const { addToCart } = useCartContext();
  const { toggleAmount } = useAppContext();

  // keeps the track of quantity of each item
  const [noOfItems, setNoOfItems] = useState(item.quantity);

  // style condition for add to cart button
  const styles = {
    justifyContent: noOfItems > 0 ? "space-between" : "center"
  }

  // useEffect to load page on every change in no of items
  useEffect(() => {
    toggleAmount(id, noOfItems)
    addToCart(item, noOfItems, noOfItems * item.price)
    // eslint-disable-next-line
  }, [noOfItems])


  function handleIncrease() {
    setNoOfItems(noOfItems + 1)
  }

  const handleDecrease = () => {
    if (noOfItems - 1 === 0) {
      toast.info(`${item.productName} Removed from Cart `)
    }
    setNoOfItems(noOfItems - 1)
  }

  const handleDelete = () => {
    setNoOfItems(noOfItems - noOfItems)
    toast.info(`${item.productName} Removed from Cart`)
  }

  return (
    <Card className="card" key={id}>

      <img
        src={item.imgUrl}
        alt={item.productName}
        className="card-image"
      />

      <h3 className="card-title">
        {item.productName}
      </h3>

      <h3 className="card-price">
        {item.price} ৳
      </h3>

      <CardActions style={styles}>


        <Counter item={item} id={id} handleDecrease={handleDecrease} handleIncrease={handleIncrease} noOfItems={noOfItems} name={item.productName} />

        {noOfItems > 0 ?
          <>
            <IconButton variant='contained' title="delete" onClick={() => handleDelete()} color="primary" aria-label="subtract">{<DeleteIcon />}</IconButton>
          </>
          :
          <></>
        }

      </CardActions>

    </Card>
  );
}
