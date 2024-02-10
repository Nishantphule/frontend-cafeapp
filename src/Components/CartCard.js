import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
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
        <Card className="cartCard" key={item.id} sx={{ background: "#f0f0f0" }}>
            <CardContent className="cartCardContent">
                <img
                    src={item.url}
                    alt={item.name}
                />

                <h3 className="cart-title" >
                    {item.name} <br />
                    <small>Price: {item.price} ৳</small> <br />
                </h3>

            </CardContent>

            <CardContent>

                <h3 className="cart-title" >
                    <small>Quantity: {item.quantity}</small><br />
                    <small>Subtotal: {item.subTotal} ৳</small>
                </h3>

            </CardContent>


            {/* <CardActions className="card-actions">
                <Button onClick={() => handleClear()} color="error" variant="outlined">
                    Remove<DeleteIcon color="error" />
                </Button>
            </CardActions> */}

        </Card >
    )
}
