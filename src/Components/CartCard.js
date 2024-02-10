import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "../App.css";
// import { useEffect, useState } from "react";
// import { useCartContext } from "../Context/cartContext";
// import { useAppContext } from "../Context/productsContext";
// import DeleteIcon from '@mui/icons-material/Delete';
// import Button from '@mui/material/Button';


export default function CartComponent({ item, id }) {

    // const { addToCart } = useCartContext();
    // const { toggleAmount } = useAppContext();


    // const handleClear = () => {
    //     toggleAmount(id, 0)
    //     addToCart(item, 0, 0)
    // }

    // useEffect(() => {
    //     handleClear()
    // }, [])

    return (
        <Card className="cartCard" key={item.id}>
            <CardContent className="cartCardContent">
                <img
                    src={item.url}
                    alt={item.name}
                />

                <Typography sx={{ textAlign: "left", color: "royalblue" }} className="card-title" gutterBottom variant="h6" component="div">
                    {item.name} <br />
                    <small>Price: {item.price} ৳</small> <br />
                </Typography>

            </CardContent>

            <CardContent>

                <Typography sx={{ textAlign: "left", color: "royalblue" }} className="card-title" gutterBottom variant="h6" component="div">
                    <small>Quantity: {item.quantity}</small><br />
                    <small>Subtotal: {item.subTotal} ৳</small>
                </Typography>

            </CardContent>


            {/* <CardActions className="card-actions">
                <Button onClick={() => handleClear()} color="error" variant="outlined">
                    Remove<DeleteIcon color="error" />
                </Button>
            </CardActions> */}

        </Card>
    )
}
