import React from 'react';
import aboutUsCardsData from '../data/AboutUsCards';

const AboutUsCards = () => {
  return (
    <section className='container-fluid'>
      <div className='container'>
        <h2 className="fw-bold ms-3 mb-4">Latest Adventures</h2>
        <div className='d-flex flex-wrap justify-content-center gap-4 mb-5'>
          {aboutUsCardsData.map((item) => (
            <div key={item.id} className="card shadow-sm border-0" style={{ width: '22rem' }}>
              <img
                src={item.image}
                alt={item.title}
                className="card-img-top"
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body text-center">
                <h5 className="card-title fw-semibold">{item.title}</h5>
                <p className="text-muted small">{item.description}</p>
                <button className="btn btn-danger mt-2 rounded-pill">
                  {item.button}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUsCards;
