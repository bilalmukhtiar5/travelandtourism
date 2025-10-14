import React from 'react'

const ContactUs = () => {
  return (
    <section className='container-fluid mb-5'>
      <div className='container'>
        <div className='row mt-5'>
          <div className='col-lg-6'>
            <h1>Contact Us</h1>
            <p>Feel free to reach out to us for any inquiries or assistance. We're here to help you plan your perfect adventure!</p>
            <form className='mt-3'>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" placeholder="Your Name" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" placeholder=""/>
          </div>
          <button className='btn btn-danger btn-lg px-5'>Send</button>
          </form>
          
        </div>
        <div className='col-lg-6'>
              {/* map */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.1234567890123!2d55.2708!3d25.2048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f434b5c6b7a7b%3A0x123456789abcdef0!2sDubai%20Tourism%20Office!5e0!3m2!1sen!2sae!4v1616161616161"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
      </div>
      </div>
    </section>
  )
}

export default ContactUs