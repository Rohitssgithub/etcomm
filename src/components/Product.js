import React from 'react'
import { Link } from 'react-router-dom'
import FormatPrice from './FormatPrice';

const Product = (ele) => {
  const { id, name, image, price, category } = ele;

  return (
    <>
      <Link className='col-4  text-center' to={`/singleproduct/${id}`} style={{ textDecoration: 'none' }}>
        <div className='feature-product-show'>
          <figure>
            <img src={image} alt={name} className='proimage' />
            <figcaption className="caption">{category}</figcaption>
          </figure>

          <div className="card-data">
            <div className="card-data-flex">
              <h3>{name}</h3>
              <p className="card-data--price"><FormatPrice price={price} /></p>
            </div>
          </div>
        </div>
      </Link>
    </>
  )
}
export default Product
