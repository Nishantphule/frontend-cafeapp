import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import "../App.css";
import { Counter } from "./Counter";
import { useEffect, useState } from "react";
import { useCartContext } from "../Context/cartContext";
import { useAppContext } from "../Context/productsContext";

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

  return (
    <Card className="card" key={id}>

      <img
        src={item.imgUrl}
        alt={item.productName}
        className="card-image"
      />

      <CardContent >
        <h3 className="card-title">
          {item.productName}
        </h3>
      </CardContent>

      <CardActions className="card-actions">

        <h3 className="card-price">{item.price} ৳</h3>

        <Counter item={item} id={id} handleDecrease={handleDecrease} handleIncrease={handleIncrease} noOfItems={noOfItems} />
      </CardActions>

    </Card>
  );
}
