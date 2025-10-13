import React from 'react'
import Header from '../components/Header'
import DesertAdventuresCards from '../components/DesertAdventuresCards'
import Reviews from '../components/Reviews'
import TextArea from '../components/TextArea'
import Faq from '../components/Faq'


const home = () => {
  return (
    <>
        <Header/>
        <DesertAdventuresCards/>
        <Reviews/>
        <TextArea/>
        <Faq/>
       
    </>
  )
}

export default home