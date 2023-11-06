import React from 'react'
import Footer from './components/Footer'
const Contact = () => {
  return (
    <>
      <div className='container-fluid p-0 maps'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.134676189874!2d72.82018401470299!3d19.406586186899137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7a98fb478de03%3A0xfd5ff864e936c9b6!2sThe%20Capital%20Mall!5e0!3m2!1sen!2sin!4v1680521671639!5m2!1sen!2sin"
          width="100%" height="450" style={{ border: 0 }} loading="lazy" referrerpolicy=""></iframe>
      </div>

      <div className='container'>
        <form method='POST' action='https://formspree.io/f/mjvdapqa' className="row gy-4">

          <div className="col-12 in">
            <input
              type="text"
              placeholder="username"
              name="username"
              required
              autoComplete="off" />
          </div>
          <div className="col-12 in">
            <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required />
          </div>
          <div className="col-12 in">
            <textarea name="Message"
              cols="30"
              rows="10"
              required
              autoComplete="off"
              placeholder="Enter you message" />
          </div>
          <div className="col-12 in">
            <input type="submit" />
          </div>

        </form>
      </div>
    </>
  )
}

export default Contact
