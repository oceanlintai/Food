import React, { useEffect, useState } from 'react'

import HeaderFooter from './container/HeaderFooter'

import HomeCarousel from '../components/main/homeMain/HomeCarousel'
import HomeCompare from '../components/main/homeMain/HomeCompare'
import HomeProduct from '../components/main/homeMain/HomeProduct'
import HomeClass from '../components/main/homeMain/HomeClass'
import HomeRecommend from '../components/main/homeMain/HomeRecommend'

const Home = props => {
  const [home, setHome] = useState('Home')

  useEffect(() => {
    return () => {}
  })

  return (
    <>
      <HeaderFooter home="home">
        <div id="homeMain" className="position-relative">
          <HomeCarousel />
          <HomeCompare />
          <HomeProduct />
          <HomeClass />
          <HomeRecommend />
        </div>
      </HeaderFooter>
    </>
  )
}

export default Home
