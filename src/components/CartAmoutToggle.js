import React from 'react'

const CartAmoutToggle = ({ amount, setDecrese, setincrease }) => {
    return (
        <>
            <button className='decrease-product add-product-btn' onClick={setDecrese}>-</button>
            <button className="amount-style add-product-btn">{amount}</button>
            <button className='increase-product add-product-btn' onClick={setincrease}>+</button>
        </>
    )
}

export default CartAmoutToggle
