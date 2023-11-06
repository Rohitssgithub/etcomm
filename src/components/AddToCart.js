import React, { useState } from 'react'
import { FaCheck } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import CartAmoutToggle from './CartAmoutToggle';
import { useCartContext } from "../Context/cartcontext";


const AddToCart = ({ product }) => {
    console.log('product', product)
    let { addProductToCart } = useCartContext()

    const { id, colors, stock } = product;

    const [color, setColor] = useState(colors[0])
    const [amount, setAmout] = useState(1)


    console.log('color', color)

    const setincrease = () => {
        amount < stock ? setAmout(amount + 1) : setAmout(stock)
    }
    const setDecrese = () => {
        amount > 1 ? setAmout(amount - 1) : setAmout(1)
    }
    return (
        <>
            <div className='colors'>
                <p>Colors:
                    {
                        colors.map((curColor, index) => {
                            return (<button
                                key={index}
                                style={{ backgroundColor: curColor }}
                                className={color === curColor ? "btnStyle active" : "btnStyle"}
                                onClick={() => setColor(curColor)}>
                                {color === curColor ? <FaCheck className="checkStyle" /> : null}
                            </button>)
                        })
                    }
                </p>
            </div>

            <div>
                <CartAmoutToggle amount={amount} setDecrese={setDecrese} setincrease={setincrease}></CartAmoutToggle>
            </div>

            <NavLink to="/cart" onClick={() => addProductToCart(id, color, amount, product)}>
                <button>Add To Cart</button>
            </NavLink>
        </>
    )
}

export default AddToCart
