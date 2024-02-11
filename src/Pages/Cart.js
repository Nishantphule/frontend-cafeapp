import { useCartContext } from "../Context/cartContext";
import CartComponent from "../Components/CartCard";
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export default function Cart() {

  const { cart, total_item, total_amount } = useCartContext();
  const navigate = useNavigate();
  if (cart.length === 0) {
    return (
      <>
        <Typography sx={{ textAlign: "center", marginTop: "50px", color: "red", fontFamily: 'monospace' }} variant="h5" component='div'>Cart is Empty</Typography>
        <Typography sx={{ textAlign: "center", marginTop: "20px" }} variant="h5" component='div'>
          <Button onClick={() => navigate('/')} variant="contained">Add Items</Button>
        </Typography>

      </>)
  }
  else {

    return (
      <div className="cart-container">

        <Button onClick={() => navigate('/')} variant="contained" sx={{ margin: "10px 5px" }}>Back</Button>

        <Card className="cartCard posi-fixed" >
          <h3 className="total-title" >
            <small>Product</small>
          </h3>
          <h3 className="total-title" >
            <small>Subtotal</small>
          </h3>
        </Card>

        <div className="cartItemsContainer">
          <div className="cartItems">
            {cart.map((data) => (

              (< CartComponent
                key={data.id}
                item={data}
                id={data.id}
              />)

            ))}
          </div>
        </div>


        <Card className="totalCard" >
          <CardContent>
            <h3 className="total-title" >
              <small>Total Items: {total_item}</small><br />
              <small>Grand Total: {total_amount} ৳</small>
            </h3>
          </CardContent>
        </Card>

        <Card >
          <CardContent className="cartCard posi-fixed bottom">
            <h3 className="total-title" >
              <big>{total_amount} ৳</big>
            </h3>

            <Button variant="contained" size="large" sx={{ padding: "25px" }}>
              Proceed to Pay
            </Button>
          </CardContent>
        </Card>

      </div >
    );
  }

}
