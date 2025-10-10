import React from 'react';
import AdventureCards from '../data/AdventureCards';

const DesertAdventuresCards = () => {
  return (
    <section className="container-fluid my-5 bg-light py-5">
        <div className='container mt-3'>
            <h2 className="fw-bold ms-5 mb-4">Desert Adventures in Dubai</h2>
      <p className="mb-4 ms-5">
        Royal Adventure offers desert adventures with thrilling rides and authentic activities.
        Guests can enjoy camel riding, sandboarding, and stunning sunset views.
      </p>

      <div className="d-flex flex-wrap justify-content-center gap-4">
        {AdventureCards.map((item) => (
          <div key={item.id} className="card shadow-sm border-0" style={{ width: '22rem' }}>
            <img
              src={item.Image}
              alt={item.title}
              className="card-img-top"
              style={{ height: '200px', objectFit: 'cover' }}
            />
            <div className="card-body text-center">
              <h5 className="card-title fw-semibold">{item.title}</h5>
              <button className="btn btn-danger mt-2 border rounded" style={{border:'2%', borderRadius:'2%'}}>{item.button}</button>
            </div>
          </div>
        ))}
      </div>
        </div>
      
    </section>
  );
};

export default DesertAdventuresCards;

