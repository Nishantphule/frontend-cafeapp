import React from 'react'
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function CartComponent({ item, id }) {
    return (
        <Card key={id}>
            <CardContent >
                <Typography sx={{ textAlign: "center", color: "royalblue" }} className="card-title" gutterBottom variant="h5" component="div">
                    {item.name} X {item.quantity}
                </Typography>
            </CardContent>
        </Card>
    )
}
