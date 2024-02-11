import React from 'react'
import Button from '@mui/material/Button';

export default function PaymentBtn({ cart, total_item, total_amount }) {

    const amount = total_amount;
    const currency = "INR";
    const receiptId = Math.floor(Math.random() * Date.now()).toString();

    const paymentHandler = async () => {
        const response = await fetch("http://192.168.0.102:3001/order/createOrder", {
            method: "POST",
            body: JSON.stringify({
                amount,
                currency,
                receipt: receiptId
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })

        const order = await response.json();
        console.log(order)
    }

    return (
        <>
            <Button onClick={() => paymentHandler()} variant="contained" size="large" sx={{ padding: "25px", marginTop: "15px" }}>
                Proceed to Pay
            </Button>
        </>

    )
}
