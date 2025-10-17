import React from 'react'
import DuneBuggyDubaiSafariCards from '../components/DuneBuggyDubai/DuneBuggyDubaiSafariCards'
import Intro from '../components/DuneBuggyDubai/Intro'
import TextAreaDuneBuggy from '../components/DuneBuggyDubai/TextAreaDuneBuggy'
import AccordianDuneBuggy from '../components/DuneBuggyDubai/AccordianDuneBuggy'


const DuneBuggyDubaiSafari = () => {

  return (

    <section className='container-fluid'>
        <div className='container'>
            <Intro/>
            <DuneBuggyDubaiSafariCards />
            <TextAreaDuneBuggy/>
            <AccordianDuneBuggy/>
          </div>
    </section>
  
  )
}

export default DuneBuggyDubaiSafari