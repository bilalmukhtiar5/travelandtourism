import React from 'react'

const Faq = () => {
  return (
    <section className='container-fluid p-5 ms-5'>
      <div className='container'>
        <h3>Royal Adventure City Tours</h3>
        <p>Our Dubai city tours showcase both modern attractions and cultural landmarks.
          Guests visit iconic spots such as the Burj Khalifa, heritage souks, and historic districts.
          With Royal Adventure Tours, every stop is well planned and meaningful.</p>
        <h3>Signature Dhow Cruises</h3>
        <p>Royal Adventure Dubai offers traditional dhow cruises across Dubai Creek and Dubai Marina. Guests enjoy international buffets, live entertainment, and skyline views.
          These Dubai adventure tours provide a relaxing evening on the water.</p>
        <h3>Water Sports and Coastal Adventures</h3>
        <p>Royal Adventure Travel also offers exciting water adventures in Dubai. Guests can choose jet skiing, parasailing, and banana boat rides. Every activity is supervised to ensure both safety and fun.

        </p>
        <h3>Tailor-Made Royal Adventure Travel</h3>
        <p>Royal Adventure Dubai creates packages to suit couples, families, and groups. We combine desert adventures and city tours into custom experiences.
          With Royal Adventure Tours, your adventure in Dubai is always unique.</p>

      </div>
      <div>
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
    </section>
  )
}

export default Faq