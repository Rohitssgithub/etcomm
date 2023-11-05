import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FiShoppingCart } from 'react-icons/fi';
import { useCartContext } from '../Context/cartcontext';


const Navbar = () => {
  const [menuIcon, setMenuIcon] = useState();
  let { total_item } = useCartContext()

  return (

    <nav className="Mainheader">
      <div className="headerimage">
        <img src="https://t3.ftcdn.net/jpg/02/45/84/16/360_F_245841615_d7QzRv937jfiC176rmKK60ckNXU9V76z.jpg" alt="" />
      </div>

      <div className={menuIcon ? "navbars active" : "navbars"}>
        <div className="navul">
          <ul className="navbar-lists">
            <li>
              <Link
                to="/"
                className="navbar-link"
                onClick={() => setMenuIcon(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="navbar-link"
                onClick={() => setMenuIcon(false)}>
                About
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="navbar-link"
                onClick={() => setMenuIcon(false)}>
                Product
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="navbar-link"
                onClick={() => setMenuIcon(false)}>
                Contact
              </Link>
            </li>
            <li>
              <Link to="/cart" className="navbar-link cart-trolley-link" onClick={() => setMenuIcon(false)}>
                <FiShoppingCart className="cart-trolley" />
                <span className="cart-total-item"> {total_item} </span>
              </Link>
            </li>
          </ul>
        </div>
        <button className="close-nav" onClick={() => setMenuIcon(false)}>
          <i className="bi bi-x-lg"></i>
        </button>

      </div>

      <div className="open-nav">
        <button onClick={() => setMenuIcon(true)}> <i className="bi bi-list"></i></button>
      </div>
    </nav>
  )
}



export default Navbar
