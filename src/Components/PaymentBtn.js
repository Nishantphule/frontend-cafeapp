import React from 'react'
import Button from '@mui/material/Button';
import axios from "axios"
import { API } from "../global.js"
import { useCartContext } from '../Context/cartContext.js';
import { useAppContext } from '../Context/productsContext.js';
import { useNavigate } from 'react-router-dom';

export default function PaymentBtn({ cart, total_item, total_amount }) {

    const { clearCart } = useCartContext();
    const { clearMenu } = useAppContext();

    const navigate = useNavigate();

    const handleClear = () => {
        clearCart()
        clearMenu()
        navigate('/')
    }

    const amountI = total_amount;
    const currencyI = "INR";
    const receiptId = Math.floor(Math.random() * Date.now()).toString();

    let notes = [...cart].reduce((acc, cur) => {
        acc['items'] += cur.name + "/";
        acc['quantity'] += cur.quantity.toString() + "/";
        acc['price'] += cur.price.toString() + "/";
        return acc
    }, { items: "", quantity: "", price: "" })

    console.log(amountI, currencyI, receiptId)
    function loadScript(src) {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = src;
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });
    }

    const paymentHandler = async () => {

        const res = await loadScript(
            "https://checkout.razorpay.com/v1/checkout.js"
        );

        if (!res) {
            alert("Razorpay SDK failed to load. Are you online?");
            return;
        }

        const response = await fetch(`${API}/order/createOrder`, {
            method: "POST",
            body: JSON.stringify({
                amount: amountI * 100,
                currency: currencyI,
                receipt: receiptId,
                notes: notes
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })

        const order = await response.json();
        console.log(order)

        const options = {
            key: "rzp_test_VfwuReyozf2gOX", // Enter the Key ID generated from the Dashboard
            amount: order.amount.toString(),
            currency: order.currency,
            name: "Customer",
            description: "Test Transaction",
            image: '',
            order_id: order.id,
            handler: async function (response) {
                const data = {
                    orderCreationId: order.id,
                    razorpayPaymentId: response.razorpay_payment_id,
                    razorpayOrderId: response.razorpay_order_id,
                    razorpaySignature: response.razorpay_signature,
                };

                const result = await axios.post(`${API}/order/success`, data);
                alert(result.data.msg);
                if (result.data.msg === "success") {
                    handleClear();
                }
            },
            prefill: {
                name: "Test App",
                email: "testemail.nishant@gmail.com",
                contact: "9999999999",
            },
            notes: {
                address: "Web Dev",
            },
            theme: {
                color: "#61dafb",
            },
        };
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    }

    return (
        <>
            <Button onClick={() => paymentHandler()} variant="contained" size="large" sx={{ padding: "25px", marginTop: "15px" }}>
                Proceed to Pay
            </Button>
        </>

    )
}
