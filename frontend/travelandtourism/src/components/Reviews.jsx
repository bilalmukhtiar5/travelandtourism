import React from 'react'

const Reviews = () => {
  return (
    <section className="container-fluid">
  <div className="container py-5">
    <h4 className="text-center fw-bold mb-4">Check Out Our Reviews</h4>

    <div className="row d-flex justify-content-between align-items-center mt-5">
      {/* 🔹 Left Column (Ratings Summary) */}
      <div className="col-lg-4 col-md-6 col-sm-12 text-center text-lg-start mb-4 mb-lg-0">
        <h4 className="fw-bold text-success">EXCELLENT</h4>

        <div className="d-flex justify-content-lg-start justify-content-center gap-1 my-2">
          {[...Array(5)].map((_, i) => (
            <img
              key={i}
              src="https://cdn.trustindex.io/assets/platform/Tripadvisor/star/f.svg"
              alt="star"
              width={25}
              height={25}
            />
          ))}
        </div>

        <h6 className="mt-1">
          Based on <span className="fw-bold">500+ reviews on Google</span>
        </h6>

        <img
          src="https://cdn.trustindex.io/assets/platform/Tripadvisor/logo.svg"
          alt="Tripadvisor"
          width={125}
          height={25}
        />
      </div>

      {/* 🔹 Right Column (Swiper for Comments) */}
      <div className="col-lg-8 col-md-6 col-sm-12">
        {/* 👇 Swiper Component will go here */}
        <div className="border rounded shadow-sm p-3 bg-white">
          {/* Example Placeholder */}
          <p className="text-muted text-center">
            Swiper with reviews will appear here...
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default Reviews