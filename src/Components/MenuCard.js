import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import "../App.css";
import { Counter } from "./Counter";
import { useEffect, useState } from "react";
import { useCartContext } from "../Context/cartContext";
import { useAppContext } from "../Context/productsContext";
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';

export default function MediaCard({ item, id }) {

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

  const handleDelete = () => {
    setNoOfItems(noOfItems - noOfItems)
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

      <CardActions className="card-actions">


        <Counter item={item} id={id} handleDecrease={handleDecrease} handleIncrease={handleIncrease} noOfItems={noOfItems} />

        {noOfItems > 0 ?
          <>
            <Button variant='contained' title="delete" onClick={() => handleDelete()} color="primary" aria-label="subtract">{<DeleteIcon />}</Button>
          </>
          :
          <></>
        }

      </CardActions>

    </Card>
  );
}
