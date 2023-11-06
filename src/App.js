import React from "react";
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Products from "./Products";
import Contact from "./Contact";
import SingleProduct from "./SingleProduct";
import Cart from "./Cart";
import ErrorPage from "./ErrorPage";
import Navbar from "./components/Navbar";


const App = () => {

  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route exact path="/" element={<Home></Home>}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/products" element={<Products></Products>}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
        <Route exact path="/singleproduct/:id" element={<SingleProduct />}></Route>
        <Route exact path="/cart" element={<Cart />}></Route>
        <Route exact path="*" element={<ErrorPage />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
