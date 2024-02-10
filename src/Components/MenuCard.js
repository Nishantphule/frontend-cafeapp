import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
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
        <Typography sx={{ textAlign: "center", color: "royalblue" }} className="card-title" gutterBottom variant="h6" component="div">
          {item.productName}
        </Typography>
      </CardContent>

      <CardActions className="card-actions">
        <Typography sx={{ color: "green" }} variant="h6" component="div" className="card-price">{item.price} ৳</Typography>
        <div className='cart-counter'>
          <Counter item={item} id={id} handleDecrease={handleDecrease} handleIncrease={handleIncrease} noOfItems={noOfItems} />
        </div>
      </CardActions>

    </Card>
  );
}
