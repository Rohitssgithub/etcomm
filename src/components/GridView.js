import React from "react";
import Product from "./Product";

const GridView = ({ products }) => {
    return (
        <div className="container">
            <div className="row grid-section-row gx-2" >
                {products.map((curElem) => {
                    return <Product key={curElem.id} {...curElem} />;
                })}
            </div>
        </div>
    );
};
export default GridView
