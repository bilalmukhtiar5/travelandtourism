import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="container-fluid bg-light p-5">
      <div className="container text-center text-md-start">
        <div className="row d-flex justify-content-center text-center">

          {/* Logo & About */}
          <div className="col-lg-3 col-md-6 mb-4">
            <img
              src="https://royaladventure.com/wp-content/uploads/2024/05/Royal-Adventure-Travel-Toursim-Logo.webp"
              alt="Royal Adventure Logo"
              width={190}
              height={100}
              className="mb-3"
            />
            <p className="text-center ms-5">
              Royal Adventure Travel & Tourism is a licensed company registered with the Dubai Economic Department.
            </p>
            <div className='gx-3 d-flex justify-content-center gap-3 fs-4'>
              <FaFacebook />
            <FaInstagram />
            <FaTiktok />
            <FaYoutube />
            </div>
          </div>

          {/* Browse */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="fw-bold mb-3">Browse</h5>
            <a className="mb-1" href="/contact-us">Contact Us</a> <br/>
            <a className="mb-1" href="/dubai-desert-safari">Dubai Desert Safari</a> <br />
            <a className="mb-1" href="/about-us">About Us</a>
            
            <p className="mb-1">Services</p>
          </div>

          {/* Services */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="fw-bold mb-3">Services</h5>
            <p className="mb-1">Dubai City Tours</p>
            <p className="mb-1">Dhow Cruises</p>
            <p className="mb-1">Water Sports</p>
          </div>

          {/* Contact */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="fw-bold mb-3">Contact Us</h5>
            <p className="mb-1">+971 50 123 4567</p>
            <p className="mb-0 text-muted">info@royaladventure.com</p>
          </div>

        </div>
      </div>
    </section>

  )
}

export default Footer