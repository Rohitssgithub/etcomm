import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import React from "react";
import { useEffect } from "react";
import { useProductContext } from "./Context/Productcontext";
import { useParams } from "react-router-dom";
import PageNavigation from "./components/Pagenavigation"
import Myimage from "./components/Myimage";
import FormatPrice from "./components/FormatPrice";
import Star from "./components/Star"
import AddToCart from "./components/AddToCart";

const API = "https://api.pujakaitem.com/api/products";

const SingleProduct = () => {
  const { getSingleProduct, isSingleLoading, singleProduct } = useProductContext();
  const { id } = useParams()

  const {
    id: alias,
    name,
    company,
    price,
    description,
    category,
    stock,
    stars,
    reviews,
    image
  } = singleProduct;

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`)
  }, [])

  if (isSingleLoading) {
    return <div>Loading.....</div>;
  }


  return (
    <>

      <PageNavigation title={name}></PageNavigation>

      <div className="container Single-product">
        <div className="row border border-dark justify-content-center">
          {/* Product image  */}
          <div className="col-5 Single-product-images">
            <Myimage img={image}></Myimage>
          </div>
          {/* product data */}
          <div className="col-5 product-data">
            <h3>{name}</h3>
            <Star stars={stars} reviews={reviews}></Star>
            <p className="product-data-price">
              MRP:
              <del>
                <FormatPrice price={price + 250000} />
              </del>
            </p>
            <p className="product-data-price product-data-real-price">
              Deal of the Day: <FormatPrice price={price} />
            </p>
            <p>{description}</p>

            <div className="product-data-warranty">
              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Free Delivery</p>
              </div>

              <div className="product-warranty-data">
                <TbReplace className="warranty-icon" />
                <p>30 Days Replacement</p>
              </div>

              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Thapa Delivered </p>
              </div>

              <div className="product-warranty-data">
                <MdSecurity className="warranty-icon" />
                <p>2 Year Warranty </p>
              </div>
            </div>

            <div className="product-data-info">
              <p>
                Available:
                <span> {stock > 0 ? "In Stock" : "Not Available"}</span>
              </p>
              <p>
                ID : <span> {id} </span>
              </p>
              <p>
                Brand :<span> {company} </span>
              </p>
            </div>
            <hr />
            {stock > 0 && <AddToCart product={singleProduct} />}
          </div>
        </div>
      </div>
    </>
  )
}



export default SingleProduct;
