/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const CartItem = (props) => {
  return (
    <>
    <div>
        <p>Name: {props.name}</p>
        <p>Price: {props.price}</p>
        <p>Qty: {props.qty}</p>
    </div>
    <hr />
    </>
  )
}

export default CartItem