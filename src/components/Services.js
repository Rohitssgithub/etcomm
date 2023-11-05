import React from 'react'

const Services = () => {
    return (
        <>

            <div className="container">
                <div className="row justify-content-center gap-3 px-5">
                    <div className="col-lg-3 col-md-5 services">
                        <div className='inner'>
                            <i className="fa-solid fa-truck icon"></i>
                            <p>Super Fast and Free Delivery</p>
                        </div>
                    </div>
                    <div className="col-lg-3  col-md-4 service2">
                        <div className='row'>
                            <div className='inner'>
                                <i className="fa-solid fa-sack-dollar icon"></i>
                                <p>Non-contact Shipping</p>
                            </div>
                            <div className='inner mt-3'>
                                <i className="fa-solid fa-money-check-dollar icon"></i>
                                <p>Money-back Guaranteed</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-9 services">
                        <div className='inner'>
                            <i className="fa-brands fa-cc-amazon-pay icon"></i>
                            <p>Super Secure Payment System</p>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Services
