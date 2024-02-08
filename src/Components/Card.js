import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "../App.css";
import { useEffect, useState } from "react";
import '../App.css';
import Button from '@mui/material/Button';
import { useCartContext } from "../Context/cartContext";

export default function MediaCard({ item, id }) {

  const { addToCart } = useCartContext();

  const [noOfItems, setNoOfItems] = useState(0);
  // const [amount, setAmount] = useState(item.price)


  useEffect(() => { }, [noOfItems])


  return (
    <Card className="card" key={id}>

      <img
        src={item.imgUrl}
        alt={item.productName}
        className="card-image"
      />

      <CardContent >
        <Typography sx={{ textAlign: "center", color: "royalblue" }} className="card-title" gutterBottom variant="h5" component="div">
          {item.productName}
        </Typography>
      </CardContent>

      <CardActions sx={{ justifyContent: "space-between" }}>
        <Typography sx={{ color: "green" }} variant="h5" component="div">{item.price} ৳</Typography>
        <div className='cart-counter'>
          {noOfItems > 0

            ? <>

              <Button variant='outlined' size='large' title="subtract" onClick={() => {
                addToCart(item, noOfItems - 1, (noOfItems - 1) * item.price)
                setNoOfItems(noOfItems - 1)
                // setAmount(noOfItems * item.price)
              }} color="error" aria-label="subtract">-</Button>

              <Button>{noOfItems}</Button>


              <Button variant='outlined' size='large' title="add"
                onClick={() => {
                  addToCart(item, noOfItems + 1, (noOfItems + 1) * item.price)
                  setNoOfItems(noOfItems + 1)
                  // setAmount(noOfItems * item.price)
                }} color="success" aria-label="add">+</Button>
            </>

            : <>
              <Button variant='outlined' size='large' title="addToCart"
                onClick={() => {
                  addToCart(item, noOfItems + 1, (noOfItems + 1) * item.price)
                  setNoOfItems(noOfItems + 1)
                  // noOfItems === 0 ? setAmount(item.price) : setAmount(noOfItems * item.price)
                }} color="primary" aria-label="add To Cart">
                Add to Cart
              </Button>
            </>

          }
        </div>
      </CardActions>

    </Card>
  );
}
