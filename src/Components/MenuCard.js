import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "../App.css";
import { Counter } from "./Counter";

export default function MediaCard({ item, id }) {

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
          <Counter item={item} id={id} />
        </div>
      </CardActions>

    </Card>
  );
}
