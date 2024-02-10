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
      <div className="table-container">

        <Button onClick={() => navigate('/')} variant="contained" sx={{ margin: "10px 0px" }}>Back</Button>

        {cart.map((data) => (

          (< CartComponent
            key={data.id}
            item={data}
            id={data.id}
          />)

        ))}

        <Card className="totalCard" sx={{ background: "#f0f0f0" }}>
          <CardContent>

            <h3 className="total-title" >
              <small>Total Quantity: {total_item}</small><br />
              <small>Grand Total: {total_amount} ৳</small>
            </h3>

          </CardContent>
        </Card>

      </div >
    );
  }

}
