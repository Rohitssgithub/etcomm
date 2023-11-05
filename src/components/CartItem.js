import React from 'react';
import { NavLink } from 'react-router-dom'
import { useCartContext } from '../Context/cartcontext';
import { FaTrash } from "react-icons/fa";
import CartAmoutToggle from './CartAmoutToggle';


import FormatPrice from "../components/FormatPrice"
const CartItem = ({ product }) => {
    const { removeitem, setDecrese, setincrease, total_price, shipping_fee, clearCart } = useCartContext()

    let { id, name, image, color, price, amount } = product;

    return (
        <>
            <img src={image} className='cart-image' alt="" />
            <p>{name}</p>
            <div className='btnStyle' style={{ backgroundColor: color }}></div>
            <p>
                <FormatPrice price={price}></FormatPrice>
            </p>
            <CartAmoutToggle amount={amount} setDecrese={() => setDecrese(id)} setincrease={() => setincrease(id)} />
            <p><FormatPrice price={price * amount}></FormatPrice></p>
            <div>
                <FaTrash className="remove_icon" onClick={() => removeitem(id)} />
            </div>
            <hr />
            <div className="cart-two-button">
                <NavLink to="/products">
                    <button> continue Shopping </button>
                </NavLink>
                <button className="btn btn-clear" onClick={clearCart}>
                    clear cart
                </button>
            </div>
            <div>
                <p>Subtotal:
                    <FormatPrice price={total_price}></FormatPrice>
                </p>
                <p>Shipping fee:
                    <FormatPrice price={shipping_fee}></FormatPrice>
                </p>
                <p>
                    pay:
                    <FormatPrice price={shipping_fee + total_price}></FormatPrice>
                </p>
            </div>
        </>
    )
}

export default CartItem
