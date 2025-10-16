import React from 'react';
import DuneBuggyDubaiSafari from '../../data/DuneBuggyDubaiSafari';

const DuneBuggyDubaiSafariCards = () => {
  return (
    <section className="container-fluid py-5">
      <div className="container">
        

        <div className="d-flex flex-wrap justify-content-start gap-4">
          {DuneBuggyDubaiSafari.map((item) => (
            <div
              key={item.id}
              className="card shadow-lg border-0 rounded-4 overflow-hidden"
              style={{ width: '25rem', transition: 'transform 0.3s ease' }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="card-img-top"
                style={{
                  height: '200px',
                  objectFit: 'cover',
                }}
              />

              <div className="card-body p-4">
                <h5 className="card-title fw-bold mb-2">{item.title}</h5>
                <p className="text-muted small mb-3">{item.description}</p>
                <p className="fw-semibold text-danger mb-3">{item.price}</p>
                <button className="btn btn-danger rounded-pill px-4 py-2 fw-semibold">
                  {item.Button}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DuneBuggyDubaiSafariCards;
