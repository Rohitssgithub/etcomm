import React from 'react'
import { useCartContext } from './Context/cartcontext'
import CartItem from './components/CartItem'

const Cart = () => {
  const { cart } = useCartContext()
  if (cart.length === 0) {
    return (
      <div>
        <h3>No item in cart </h3>
        <img src='https://img.freepik.com/premium-vector/young-man-standing-with-shopping-cart-he-holding-paper-list-mall-supermarket_1150-51048.jpg?w=996'></img>
      </div>
    );
  }
  return (
    <>
      <div className='cart-item-header'>
        <p>Item</p>
        <p className="cart-hide">Price</p>
        <p>Quantity</p>
        <p className="cart-hide">Subtotal</p>
        <p>Remove</p>
      </div>
      <hr />
      <div>
        {
          cart.map((curElem) => {
            return (
              <CartItem key={curElem.id} product={curElem} />
            )
          })
        }
      </div>
      <hr />

    </>
  )
}

export default Cart
