import { useCartContext } from "../Context/cartContext";
import CartComponent from "../Components/CartCard";
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export default function Cart() {

  const { cart, total_item, total_amount, isEmpty } = useCartContext();
  const navigate = useNavigate();

  if (isEmpty) {
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
      <>

        <div className="table-container">

          <Button onClick={() => navigate('/')} variant="contained" sx={{ margin: "10px 0px" }}>Back</Button>

          <table>
            <thead>
              <tr>
                <td>Item</td>
                <td>Price</td>
                <td>Quantity</td>
                <td>Subtotal</td>
              </tr>
            </thead>

            <tbody>
              {cart.map((data) => (
                (< CartComponent
                  key={data.id}
                  item={data}
                  id={data.id}
                />)
              ))}
            </tbody>
            <thead>
              <tr>
                <td></td>
                <td></td>
                <td>Total Items</td>
                <td>Total Amount</td>
              </tr>

              <tr className="finalTr">
                <td></td>
                <td></td>
                <td>{total_item}</td>
                <td>{total_amount}৳</td>
              </tr>
            </thead>
          </table>

        </div >
      </>
    );
  }

}
