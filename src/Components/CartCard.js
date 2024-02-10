import React from 'react'

export default function CartComponent({ item, id }) {

    return (
        <tr key={id}>
            <td>{item.name}</td>
            <td>{item.price}৳</td>
            <td> {item.quantity}</td>
            <td>{item.subTotal}৳</td>
        </tr>
    )
}
