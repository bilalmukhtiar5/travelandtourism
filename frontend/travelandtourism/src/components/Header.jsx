import React from 'react'


const Header = () => {
  return (
    <section className="position-relative text-white text-center header-section" style={{ height: "90vh" }}>
  {/* 🔹 Background Video */}
  <div className="position-absolute top-0 start-0 w-100 h-100 overflow-hidden">
    <iframe
      src="https://www.youtube.com/embed/qQBcKuvoJEE?autoplay=1&mute=1&loop=1&playlist=qQBcKuvoJEE"
      title="Dubai Adventure Background"
      frameBorder="100"
      allow="autoplay; encrypted-media"
      allowFullScreen
      className="w-100 h-100 object-fit-cover">
    </iframe>
  </div>

  {/* 🔹 Overlay (optional) */}
  <div className="position-absolute top-0 start-0 w-100 h-100" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}></div>

  {/* 🔹 Content */}
  <div className="row position-relative container py-5 d-flex justify-content-center align-items-center">
    <div className="col-lg-6 header" style={{marginTop: "12%"}}>
      <h1 className="fw-bold">
        Your Trusted Partner for Every Adventure in Dubai
      </h1>
      <h5 className="px-5 fw-light">
        Royal Adventure delivers the perfect adventure in Dubai with expert planning and trusted service.
        We provide exciting desert adventures, guided Dubai city tours, and memorable cultural activities.
        Every trip is designed for your enjoyment. Choose Royal Adventure Travel to make your Dubai journey unforgettable.
      </h5>
      <p className='bg-light text-dark rounded-pill px-1 py-1 d-inline-block mt-2 fw-bold'>
        ⭐⭐⭐⭐⭐ 4.9/5 Excellent Based on 500+ reviews on Google</p>
    </div>

   
  </div>
</section>

  )
}

export default Header