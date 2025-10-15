import React from 'react'
import DubaiDesertSafari from '../data/DubaiDesertSafari'

const DubaiDesertSafariCards = () => {
    return (
        <section className='container-fluid'>
            <div className='container'>
                <div className='row mt-5 d-flex align-items-center mb-5'>
                    <div className='col-lg-6'>
                        <h4 className='px-5'>Royal Desert Safari Tour in Dubai for Families and Groups</h4>
                        <p className='px-5'>
                            Experience the desert safari tour in Dubai that blends adventure and family bonding seamlessly.
                            We invite families and groups to enjoy dune bashing, camel rides, and a shared BBQ under the stars.
                            Our safari adventure caters to all ages with kid-friendly activities like henna painting by the campfire.
                            Trust Royal Adventure for a memorable experience at a competitive desert safari Dubai cost per person.
                        </p>
                    </div>

                    <div className='col-lg-6 d-flex justify-content-center'>
                        <div className='ratio ratio-16x9 w-100 px-5'>
                            <iframe
                                src="https://royaladventure.com/wp-content/uploads/2024/05/Royal-Adventure-Travel-Tourism.mp4"
                                title="Royal Adventure Video"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>

                <div className='d-flex flex-wrap justify-content-center gap-4 mb-5'>
                    {DubaiDesertSafari.map((item) => (
                        <div key={item.id} className="card shadow-sm border-0" style={{ width: '22rem' }}>
                            <img
                                src={item.image}
                                alt={item.title}
                                className="card-img-top"
                                style={{ height: '200px', objectFit: 'cover' }} />
                            <div className="card-body text-center">
                                <h5 className="card-title fw-semibold">{item.title}</h5>
                                <p className="text-muted small">{item.description}</p>
                                <button className="btn btn-danger mt-2 rounded-pill">
                                    {item.Button}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='container'>
                        <h1>Family-Friendly Safari Adventure</h1>
                        <p>Royal Adventure offers a desert safari tour in Dubai designed for families, featuring camel rides and henna painting that delight children.
                            Our guides ensure a family-friendly safari adventure and safety at every moment.
                            You’ll get a balanced mix of excitement and cultural immersion.</p>
                            <h1>Family-Friendly Safari Adventure</h1>
                            <p>Groups large or small will find our packages tailored to their needs with stress-free logistics.
                            Enjoy dune bashing together and capture desert safari Dubai photos that last a lifetime. Our transparent pricing ensures a clear desert safari Dubai cost per person without surprises.</p>
                            <h1>Traditions and Heritage Feel</h1>
                            <p>Dive into heritage desert safari experiences with cultural activities like Arabic coffee under the stars. Our heritage safari Dubai sessions highlight authentic local traditions. 
                                It’s not just an adventure—it’s a cultural journey.</p>
                                <h1>Royal Adventure’s Signature Service</h1>
                                <p>When you choose Royal Adventure for your royal desert safari in Dubai, you enjoy top-rated service backed by thousands of positive reviews. 
                                Our licensed team delivers safe, reliable tours for families and groups alike. That 5-star feedback reflects our commitment to quality.</p>
                                <h1>Captivating Desert Photo Ops</h1>
                                <p>Our desert safari tour in Dubai gives you the perfect backdrop for desert safari Dubai pictures. From golden dunes at sunset to lively camp scenes, you’ll return home with stunning photos. Our guides even help position the best frames for group shots.</p>
                                <h1>Value and Affordability</h1>
                                <p>We offer full desert safari adventure packages without hidden fees, so you know the desert safari Dubai cost per person up front. Families and groups get excellent value with inclusive activities.
                                    It’s an unforgettable experience that’s budget-smart.</p>
                                <button className='btn btn-primary'>Enquire Now</button>

                </div>
                <div className='mb-5'>
                        <div className="accordion container" id="accordionPanelsStayOpenExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                Accordion Item #1
              </button>
            </h2>
            <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
              <div class="accordion-body">
                <strong>This is the first item’s accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                Accordion Item #2
              </button>
            </h2>
            <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
              <div class="accordion-body">
                <strong>This is the second item’s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                Accordion Item #3
              </button>
            </h2>
            <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
              <div className="accordion-body">
                <strong>This is the third item’s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
        </div>
                </div>
            </div>

        </section>
    )
}

export default DubaiDesertSafariCards