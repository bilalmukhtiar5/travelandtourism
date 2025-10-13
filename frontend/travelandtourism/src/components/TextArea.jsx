import React from 'react'
import backgroundImage from '../assets/images/background-image.webp';
const TextArea = () => {
  return (
    <>
    <section className='container-fluid'
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        opacity: 1.8,
      }}>
      <div className='container p-5'>
        <div className='text-white'>
          <h1 className='fw-bold mt-5'>Quad Bike and Dune Buggy Adventures</h1>
          <p className=''>Royal Adventure Travel provides quad biking and dune buggy tours for adventure seekers.
            These desert adventures in Dubai combine excitement with scenic views.
            Professional guides ensure safety and fun at every step.</p>
          <button className='btn btn-danger rounded'>Start your Advanture</button>
        </div>
        
      </div>
      
    </section>
    
    </>
  )
}

export default TextArea