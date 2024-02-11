import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import "../App.css";


export default function CartComponent({ item, id }) {

    return (

        <Card className="cartCard" key={item.id} >

            <h3 className="cart-title" >
                {item.name} <small> x {item.quantity}</small><br />
                <small>Price: {item.price} ৳</small> <br />
            </h3>

            <CardContent>

                <h3 className="cart-title" >
                    <small>{item.subTotal} ৳</small>
                </h3>

            </CardContent>

        </Card >

    )
}
