import React from 'react'
import Header from '../components/Header'
import DesertAdventuresCards from '../components/DesertAdventuresCards'
import Reviews from '../components/Reviews'
import TextArea from '../components/TextArea'


const home = () => {
  return (
    <>
        <Header/>
        <DesertAdventuresCards/>
        <Reviews/>
        <TextArea/>
    </>
  )
}

export default home