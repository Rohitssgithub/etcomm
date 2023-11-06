import React from 'react'

const Footer = () => {
    return (
        <footer className='maingot'>
            <div className='container-fluid mt-5'>
                <div className='row justify-content-center '>
                    <div className="col-lg-7 col-12 d-flex align-items-center foter justify-content-between">
                        <div>
                            <p>Ready to get Started</p>
                            <p>Talk to us today</p>
                        </div>
                        <button>Get Started</button>
                    </div>
                </div>
            </div>
            <div className="container-fluid footer p-5">
                <div className='row'>
                    <div className="col-lg-3 col-md-5 footer-colum">
                        <p>Ecommarce Website</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla quae, voluptas incidunt enim do.</p>
                    </div>
                    <div className="col-lg-3 col-md-5 footer-colum">
                        <p>Contact Information</p>
                        <div className='inputsget'>
                            <input type="email" name="email" placeholder='Email' id="" />
                            <input type="submit" name="email" value="Subscribe" className='mt-2' />
                        </div>
                    </div>
                    <div className="col-lg-3  col-md-5 footer-colum">
                        <p>Follow Us</p>
                        <div className='d-flex gap-2'>
                            <i className="fa-brands fa-instagram iconss"></i>
                            <i className="fa-brands fa-facebook iconss"></i>
                            <i className="fa-solid fa-envelope iconss"></i>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-5 footer-colum">
                        <p> Call Us</p>
                        <p>+91 123456798</p>
                    </div>
                </div>
            </div>
            <div className='container-fluid text-center border p-4 fot'>
                <p>@{new Date().getFullYear()}.All Rights Reserved</p>
            </div>


        </footer>
    )
}

export default Footer
