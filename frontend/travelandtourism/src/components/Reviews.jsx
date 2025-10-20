import React from 'react'

const Reviews = () => {
  return (
    <section className="container-fluid">
  <div className="container py-5">
    <h4 className="text-center fw-bold">Check Out Our Reviews</h4>

    <div className="row d-flex justify-content-center align-items-center">
     
        <div className="col-lg-4 col-md-6 col-sm-12 text-center text-lg-start mb-4 mb-lg-0">
          <div className="text-center">
            <h4 className="fw-bold text-success">EXCELLENT</h4>
            {[...Array(5)].map((_, i) => (
          <img
            key={i}
            src="https://cdn.trustindex.io/assets/platform/Tripadvisor/star/f.svg"
            alt="star"
            width={25}
            height={25}
            className="mx-1"
          />
            ))}
            {/* Image moved under the EXCELLENT text and stars */}
            <img src="https://cdn.trustindex.io/assets/platform/Tripadvisor/logo.svg" alt="Tripadvisor" width={125}
          height={25}
          className="d-block mx-auto mt-3"/>
          </div>

          <h6 className="mt-2 text-center">
            Based on <span className="fw-bold">500+ reviews on Google</span>
          </h6>
        </div>

        {/* Right Column (Swiper for Comments) */}
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