import React from 'react'
import DuneBuggyDubaiSafariCards from '../components/DuneBuggyDubai/DuneBuggyDubaiSafariCards'
import Intro from '../components/DuneBuggyDubai/Intro'


const DuneBuggyDubaiSafari = () => {

  return (

    <section className='container-fluid'>
        <div className='container'>
            <Intro/>
            <DuneBuggyDubaiSafariCards />
          </div>
    </section>
  
  )
}

export default DuneBuggyDubaiSafari