import React from 'react'
import { AboutUsCards } from '../../data/AboutUsCards'

const AboutUsCards = () => {
  return (
    <section className='container-fluid'>
        <div className='container'>
            <h2 className="fw-bold ms-5 mb-4">Desert Adventures in Dubai</h2>
            <div className='d-flex flex-wrap justify-content-center gap-4 mb-5'>
            {AboutUsCards.map((item) => (
          <div key={item.id} className="card shadow-sm border-0" style={{ width: '22rem' }}>
            <img
              src={item.Image}
              alt={item.title}
              className="card-img-top"
              style={{ height: '200px', objectFit: 'cover' }}
            />
            <div className="card-body text-center">
              <h5 className="card-title fw-semibold">{item.title}</h5>
              
              <button className="btn btn-danger mt-2 border rounded-pill" style={{border:'1%', borderRadius:'1%'}}>{item.button}</button>
            </div>
          </div>
        ))}   
                
            </div>
        </div>
    </section>
  )
}

export default AboutUsCards