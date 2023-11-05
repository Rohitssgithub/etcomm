import React from "react";
import Footer from './components/Footer'
import ProductList from "./components/ProductList";
import FilterSection from "./components/FilterSection";
import SortSection from "./components/SortSection";
const Products = () => {
  return (
    <>
      <div className="container-fluid Products-list">

        <div className="row justify-content-center border border-dark">
          <div className="col-2 border border-dark">
            <FilterSection></FilterSection>
          </div>
          <div className="col-9 border border-dark">
            <SortSection></SortSection>
            <ProductList></ProductList>
          </div>
        </div>

      </div>

      <Footer></Footer>
    </>
  )
};


export default Products;
