import React from 'react'
import Product from './Product'
import { useProductContext } from '../Context/Productcontext';

const FeatureProduct = () => {
    const { isLoading, featureProducts } = useProductContext();
    if (isLoading) {
        return <div> ......Loading </div>;
    }
    return (
        <>
            <div className='container-fluid Feature-product-section py-4'>
                <div className='feature-products p-3'>
                    <h3>Check Now</h3>
                    <h5>Our feature Services</h5>
                </div>
                <div className="row  gx-4 mt-2" style={{width:'75%'}}>
                    {
                        featureProducts.map((ele) => {
                            return <Product key={ele.id} {...ele}></Product>
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default FeatureProduct
